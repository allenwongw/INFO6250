import {
    fetchSession,
    fetchLogin,
    fetchLogout,
    fetchGetMessages,
    fetchPostMessage,
} from './services';

import state, {
    login,
    logout,
    getMessages,
    setError,
} from './state';

import {
    render
} from './render';

const appEl = document.querySelector('#app');

export function addAbilityToLogin({ state, appEl }) {
    appEl.addEventListener('click', (e) => {
    if(e.target.classList.contains('login-cat')) {
        const username = document.querySelector('.input-cat').value;
        fetchLogin(username)
        .then( response => {
            fetchGetMessages()
            .then( response => {
                login(response);
                render({ state, appEl });
            })
        })
        .catch( error => {
            setError(error.error)
            render({ state, appEl });
        })
    }   
})}

export function addAbilityToLogout({ state, appEl }){
appEl.addEventListener('click', (e) => {
    if(e.target.classList.contains('logout')) {
        fetchLogout()
        .then(response => {
            logout()
            render({ state, appEl });
        })
        .catch( error => {
            setError(error.error);
            render({ state, appEl });
        })
    }
})
}

export function addAbilityPost({ state, appEl } ){
   appEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('chat-cat')){
        const message = document.querySelector('.message').value;
         fetchPostMessage(message)
        .then( response => {
            login(response);
            render({ state, appEl });
        })
     .catch( error => {
        setError(error.error);
        render({ state, appEl });
    })       
    } 
})
}

