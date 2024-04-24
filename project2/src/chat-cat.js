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
    render,
    usersHtml,
    messagesHtml,
} from './render';

import {addAbilityToLogin, addAbilityToLogout, addAbilityPost} from './listeners';
const appEl = document.querySelector('#app');
addAbilityToLogin({ state,  appEl });
addAbilityToLogout({ state,  appEl });
addAbilityPost({ state, appEl })
loadChats();


fetchSession()
.then( response => {
    fetchGetMessages()
    .then(response => {
        login(response);
        render({ state, appEl});
    })
})
.catch( error => {
    logout();
    render({ state, appEl });
})

function pendingChat() {
    fetchGetMessages()
    .then( response => {
        login(response);

        const usersContainerEl = document.querySelector('.container-user');
        usersContainerEl.innerHTML = usersHtml(state.users);

        const messagesContainerEl = document.querySelector('.container-message');
        messagesContainerEl.innerHTML = messagesHtml(state.messages);
    })
    .catch( error => {
        setError(error.error);
    })
}

function loadChats() {
    pendingChat()
    setTimeout(loadChats, 5000)
}
