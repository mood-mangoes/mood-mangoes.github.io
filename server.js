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
    console.log(req.body);
    const toneParams = {
        tone_input: { 'text': req.body.message },
        content_type: 'application/json'
    };

    toneAnalyzer.tone(toneParams)
        .then(item => {
            console.log(item);
            client.query(`
            INSERT INTO document_results (text_id, tone_id, score)
                            VALUES ($1, $2, $3)
                            RETURNING *;
                        `,
            [1, 2, 6.5]
            )
                .then(result => {
                    res.json(result, null, 2);
                })
                .catch(err => {
                    res.status(500).json({
                        error: err.message || err
                    });
                });
        });
});







app.listen(PORT, () => {
    console.log('server running on port', PORT);
});