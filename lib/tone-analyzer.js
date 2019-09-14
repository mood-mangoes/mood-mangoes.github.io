const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
    iam_apikey: process.env.WATSON_API_KEY,
    version: '2017-09-21',
});

module.exports = toneAnalyzer;