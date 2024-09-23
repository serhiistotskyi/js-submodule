import fetch from 'node-fetch';

export function request(url) {
    return fetch(url).then(response => response.json())
}
