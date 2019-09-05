const client = require('../lib/client');

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                display_name VARCHAR(256) NOT NULL,
                email VARCHAR(256) NOT NULL UNIQUE,
                hash VARCHAR(512) NOT NULL
            );
            CREATE TABLE text (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                body VARCHAR(12800) NOT NULL
            );
            CREATE TABLE document_results (
                id SERIAL PRIMARY KEY,
                text_id INTEGER NOT NULL REFERENCES text(id),
                tone_id VARCHAR(256) NOT NULL,
                score DECIMAL(7,6) NOT NULL
            );
            CREATE TABLE sentence_results (
                id SERIAL PRIMARY KEY,
                text_id INTEGER NOT NULL REFERENCES text(id),
                sentence VARCHAR(256) NOT NULL,
                tone_id VARCHAR(256) NOT NULL,
                score DECIMAL(7,6) NOT NULL
            );
    `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });