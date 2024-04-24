export function fetchSession() {
  showLoader();
  return fetch("/api/v1/session", {
    method: "GET",
  })
  .catch((error) => {
    return Promise.reject({ error: "network-error" });
  })
  .then((response) => {
    if (!response.ok) {
      return response.json().then(err => Promise.reject(err));
    }
    return response.json();
  })
  .finally(hideLoader); 
}

export function fetchLogin(username) {
    showLoader();
    return fetch('/api/v1/session/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ username }),
    })
    .catch(error => {
        return Promise.reject({ error: 'network-error' });
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => Promise.reject(error));
        }
        return response.json();
    })
    .finally(hideLoader);
}

export function fetchLogout() {
    showLoader();
    return fetch("/api/v1/session", {
        method: "DELETE",
    })
    .catch((error) => {
        return Promise.reject({ error: "network-error" });
    })
    .then((response) => {
        if (!response.ok) {
            return response.json().then((error) => Promise.reject(error));
        }
        return response.json();
    })
    .finally(hideLoader);
}

export function fetchGetMessages() {
    showLoader();
    return fetch('/api/v1/messages')
    .catch(error => {
        return Promise.reject({ error: 'network-error' });
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => Promise.reject(error));
        }
        return response.json();
    })
    .finally(hideLoader);
}

export function fetchPostMessage(message) {
    showLoader();
    return fetch('/api/v1/message', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ message }),
    })
    .catch(error => {
        return Promise.reject({ error: 'network-error' });
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    })
    .finally(hideLoader);
}

function showLoader() {
  document.querySelector('#loader-container').classList.remove('hidden');
}

function hideLoader() {
  document.querySelector('#loader-container').classList.add('hidden');
}
