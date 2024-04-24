import { MESSAGES } from "./constants";

const state = {
    loginPending: false,
    username: '',
    users: {},
    messages: [],
    error: '',
}

export function logout() {
    state.loginPending = false;
    state.messages = [];
    state.username = '';
    state.users = {};
    state.error = '';
}

export function getMessages( response ) {
    state.messages = response.messages;
    state.error = '';
}
export function setError( error ) {
    if(!error) {
        state.error = '';
        return;
    }
    state.error = MESSAGES[error] || MESSAGES.default;
}

export function login( response ) {
    state.username = response.username;
    state.users = response.users;
    state.loginPending = true;
    state.messages = response.messages;
    state.error = '';
}
export default state;