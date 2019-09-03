import store from './store.js';

const URL = '/api';

const token = store.getToken();
if(!token && location.pathname !== '/auth.html') {
    const searchParams = new URLSearchParams();
    searchParams.set('redirect', location.pathname);
    location = `auth.html?${searchParams.toString()}`;
}

function fetchWithError(url, options) {
    if(token) {
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
    }
    return fetch(url, options)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                return response.json().then(json => {
                    throw json.error;
                });
            }
        });
}

export function userSignUp(user) {
    const url = `${URL}/auth/signup`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
}

export function userSignIn(credentials) {
    const url = `${URL}/auth/signin`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    });
}

// export function getToneResults(res) {
//     const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
//     const toneAnalyzer = new ToneAnalyzerV3({
//         version: '2017-09-21',
//     });

//     const text = 'I hate you! :(';

//     const toneParams = {
//         tone_input: { 'text': text },
//         content_type: 'application/json'
//     };

//     toneAnalyzer.tone(toneParams)    
//         .then(result => {
//             res.json(result, null, 2);
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err.message || err
//             });
//         });
// }

export function addMessage(messageInput) {
    const url = `${URL}/tone_check`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageInput)
    });
}
