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

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
});


app.post('/api/tone_check', (req, res) => { 
    const documentResults = [];
    const sentenceResults = [];
    let fullResults;

    const toneParams = {
        tone_input: { 'text': req.body.message },
        content_type: 'application/json'
    };

    toneAnalyzer.tone(toneParams)
        .then(results => {
            fullResults = results;
        })
        .then(() => {
            return Promise.all(fullResults.document_tone.tones.map(item => {
                return client.query(`
                INSERT INTO document_results (text_id, tone_id, score)
                                VALUES ($1, $2, $3)
                                RETURNING *;
                            `,
                [1, item.tone_id, item.score]
                )
                    .then(res => {
                        documentResults.push(res.rows[0]);
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err.message || err
                        });
                    });
            }));
        })
        .then(() => {
            return Promise.all(fullResults.sentences_tone.map(item => {
                return Promise.all(item.tones.map(element => {
                    return client.query(`
                        INSERT INTO sentence_results (text_id, sentence, tone_id, score)
                        VALUES ($1, $2, $3, $4)
                        RETURNING *;
                    `,
                    [1, item.text, element.tone_id, element.score]
                    )
                        .then(res => {
                            sentenceResults.push(res.rows[0]);
                        })
                        .catch(err => {
                            res.status(500).json({
                                error: err.message || err
                            });
                        });
                }));
            }));
        })
        .then(() => {
            res.json({
                document: documentResults,
                sentences: sentenceResults
            });
        });
});

app.listen(PORT, () => {
    console.log('server running on port', PORT);
});