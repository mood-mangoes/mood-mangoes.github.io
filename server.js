require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const client = require('./lib/client');

client.connect();

const ensureAuth = require('./lib/auth/ensure-auth');
const createAuthRoutes = require('./lib/auth/create-auth-routes');
const authRoutes = createAuthRoutes({
    selectUser(email) {
        return client.query(`
            SELECT id, email, hash, display_name as "displayName"
            FROM users
            WHERE email = $1;
        `,
        [email]
        )
            .then(result => result.rows[0]);
    },
    insertUser(user, hash) {
        return client.query(`
            INSERT into users (email, hash, display_name)
            VALUES ($1, $2, $3)
            RETURNING id, email, display_name as "displayName";
        `,
        [user.email, hash, user.displayName]
        )
            .then(result => result.rows[0]);
    }
});

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', ensureAuth);

const toneAnalyzer = require('./lib/tone-analyzer');

app.post('/api/tone-check', (req, res) => { 
    
    // these first two action can be done in parallel:
    Promise.all([
        client.query(`
            INSERT INTO text (user_id, body)
            VALUES ($1, $2)
            RETURNING id; -- just return what you need
        `, [req.userId, req.body.message]),

        toneAnalyzer.tone({
            tone_input: { 'text': req.body.message },
            content_type: 'application/json'
        })
    ])
        .then(results => {
            const textId = results[0].rows[0].id;
            const documentTones = results[1].document_tone.tones;
            const sentencesTones = results[1].sentences_tone;

            return Promise.all([
                Promise.all(documentTones.map(item => {
                    return client.query(`
                        INSERT INTO document_results (text_id, tone_id, score)
                        VALUES ($1, $2, $3)
                        RETURNING *;
                    `, [textId, item.tone_id, item.score])
                        .then(result => result.rows[0]);
                })),

                Promise.all(sentencesTones.reduce((all, item) => {
                    return all.concat(item.map(element => {
                        return client.query(`
                            INSERT INTO sentence_results (text_id, sentence, tone_id, score)
                            VALUES ($1, $2, $3, $4)
                            RETURNING *;
                        `, [textId, item.text, element.tone_id, element.score])
                            .then(result => result.rows[0]);
                    }));
                }, []))
            ]);
        })
        .then(results => {
            res.json({
                document: results[0],
                sentences: results[1]
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/tone-check/text', (req, res) => {
    // Same information, different criteria
    // Combine routes and use a query param
    const where = req.query.all ? 'WHERE  user_id = $1' : '';

    client.query(`
        SELECT *
        FROM   text 
        ${where}
        ORDER BY id DESC; -- add a TIMESTAMP column if ordering by most recent is important
    `,
    [req.userId]
    )
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/tone-check/sentence', (req, res) => {
    // wouldn't this be per-user as well?
    // or per text?
    client.query(`
        SELECT   *
        FROM     sentence_results
        ORDER BY id DESC;
    `
    )
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/tone-check/document', (req, res) => {
    client.query(`
        SELECT *
        FROM   document_results;
    `
    )
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.listen(PORT, () => {
    console.log('server running on port', PORT);
});