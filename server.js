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


// app.post('/v3/tone', (request, response) => {
//     client.query(`
//     INSERT INTO text (user_id, name, category, body)
//                     VALUES ($1, $2, $3, $4)
//                     RETURNING *;
//                 `,
//                 [, , , ])
//     `)
// });

app.use('/api/auth', authRoutes);
app.use('/api', ensureAuth);


app.listen(PORT, () => {
    console.log('server running on port', PORT);
});