const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
});

const text = 'Team, I know that times are tough! Product '
  + 'sales have been disappointing for the past three '
  + 'quarters. We have a competitive product, but we '
  + 'need to do a better job of selling it!';

const toneParams = {
    tone_input: { 'text': text },
    content_type: 'application/json',
};

let results;
toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
        results = JSON.stringify(toneAnalysis, null, 2);
        console.log(results);
    })
    .catch(err => {
        results = 'error:', err;
    });
