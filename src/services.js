function fetchLogin(username) {
    return fetch('/api/v1/session', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ username }),
        })
        .catch((err) => Promise.reject({ error: 'network-error' }))
        .then((response) => {
            if (!response.ok) {
                return response.json().then((err) => Promise.reject(err));
            }
            return response.json();
        });
}

function checkSession() {
    return fetch('/api/v1/session', {
            method: 'GET',
            credentials: 'include',
        })
        .catch((err) => Promise.reject({ error: 'network-error' }))
        .then((response) => {
            if (!response.ok) {
                return response.json().then((err) => Promise.reject(err));
            }
            return response.json();
        });
}

function logOut() {
    return fetch('/api/v1/session', { method: 'DELETE', credentials: 'include' })
        .catch((err) => Promise.reject({ error: 'network-error' }))
        .then((response) => {
            return response.json();
        });
}

function fetchUserList() {
    return fetch('/api/v1/users', {
            method: 'GET',
            credentials: 'include',
        })
        .catch((err) => Promise.reject({ error: 'network-error' }))
        .then((response) => {
            if (!response.ok) {
                return response.json().then((err) => Promise.reject(err));
            }
            return response.json();
        });
}

function fetchMessages() {
    return fetch('/api/v1/messages', {
            method: 'GET',
            credentials: 'include',
        })
        .catch((err) => Promise.reject({ error: 'network-error' }))
        .then((response) => {
            if (!response.ok) {
                return response.json().then((err) => Promise.reject(err));
            }
            return response.json();
        });
}

function sendMessage(message) {
    return fetch('/api/v1/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ message }),
        })
        .catch((err) => Promise.reject({ error: 'network-error' }))
        .then((response) => {
            if (!response.ok) {
                return response.json().then((err) => Promise.reject(err));
            }
            return response.json();
        });
}

const services = {
    fetchLogin,
    checkSession,
    fetchUserList,
    fetchMessages,
    logOut,
    sendMessage,
};

export default services;