const client = require('../lib/client');
const fakeUser = require('./fake-user');
const textData = require('./text-data');
const documentResultsData = require('./document-results-data');
const sentenceResultsData = require('./sentence-results-data');

client.connect()
    .then(() => {
        return Promise.all(
            fakeUser.map(item => {
                return client.query(`
                    INSERT INTO users (email, display_name, hash)
                    VALUES ($1, $2, $3)
                    RETURNING *;
                `,
                [item.email, item.display_name, item.hash])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(() => {
        return Promise.all(
            textData.map(item => {
                return client.query(`
                    INSERT INTO text (user_id, name, category, body)
                    VALUES ($1, $2, $3, $4)
                    RETURNING *;
                `,
                [1, 'sample', 'tweet', item])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(() => {
        return Promise.all(
            documentResultsData[0].document_tone.tones.map(item => {
                return client.query(`
                    INSERT INTO document_results (text_id, tone_id, score)
                    VALUES ($1, $2, $3)
                    RETURNING *;
                `,
                [1, item.tone_id, item.score])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(() => {
        return Promise.all(
            sentenceResultsData[0].sentences_tone.map(item => {
                return Promise.all(item.tones.map(element => {
                    return client.query(`
                        INSERT INTO sentence_results (text_id, sentence, tone_id, score)
                        VALUES ($1, $2, $3, $4)
                        RETURNING *;
                    `,
                    [1, item.text, element.tone_id, element.score])
                        .then(result => result.rows[0]);
                })
                );
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });