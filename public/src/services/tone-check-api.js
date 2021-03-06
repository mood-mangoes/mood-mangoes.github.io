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

export function getTextResults() {
    const url = `${URL}/tone_check/text`;
    return fetchWithError(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export function getSentenceResults() {
    const url = `${URL}/tone_check/sentence`;
    return fetchWithError(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export function getDocumentResults() {
    const url = `${URL}/tone_check/document`;
    return fetchWithError(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export function getAllTextResults() {
    const url = `${URL}/tone_check/allText`;
    return fetchWithError(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}