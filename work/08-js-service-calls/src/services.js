// This is a sample file that demonstrates
// how you can write an abstraction around
// a fetch() call
// This exported function returns a promise
// that resolves with data
// or rejects with an error object
//
// The caller of this function can decide
// what to do with the data
// or what to do with the error
//
// You can add to this file and use this function
// or write your own files/functions

export function fetchSession(){
  return fetch('/api/session', {
    method: 'GET'
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    return response.json();
  })
}

export function fetchLogin(username){
  return fetch('/api/session', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify( {username} ),
  })
  // fetch() rejects on network error
  // So we convert that to a formatted error object
  // so our caller can handle all "errors" in a similar way
  .catch( err => Promise.reject({ error: 'network-error' }))
  .then( response => {
    if (!response.ok) {
      return response.json().then( err => Promise.reject(err) );
    } else {
      response.json();
    }
  })
}

export function fetchWord() {
  return fetch('/api/word',{
    method: 'GET'
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    return response.json();
  })
}

export function fetchPostWord(word){
  return fetch('/api/word', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify( { word } ),
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if (response.ok) {
      return response.json()
    } else {
      return response.json().then( err => Promise.reject(err) )
    }
  })
}

export function fetchLogout(){
  return fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if (response.ok) {
      return response.json()
    }
  })
}