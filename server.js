require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const client = require('./lib/client');

client.connect();

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

app.listen(PORT, () => {
    console.log('server running on port', PORT);
});