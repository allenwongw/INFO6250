export function render({ state, appEl }) {
    const mainContentHtml = state.loginPending ? `
        ${generateErrorHtml(state)}
        ${generateChatHtml(state)}
        <div>
            <button class="chat-cat">Chat~Cat</button>
            <button class="logout">Cat~Out</button>
        </div>
    ` : `
        <h2>Welcome Cat Chat</h2>
        ${generateErrorHtml(state)}
        ${generateLoginHtml(state)}
    `;
    appEl.innerHTML = `<div class="main">${mainContentHtml}</div>`;
}

function generateErrorHtml(state) {
    return state.error ? `<div class="error">${state.error}</div>` : '';
}


function generateLoginHtml() {
    return `
        <div class="login">
            <form class="login-form">
                <input class="input-cat" placeholder="'Cat' your name" />
                <button type="button" class="login-cat">Log in</button>
            </form>
        </div>
    `;
}

function generateChatHtml( state ) {
    return `
        <div class="chat">
            <div class="container-user">
            ${usersHtml(state.users)}
            </div>
            <div class="container-message">
            ${messagesHtml(state.messages)}
            </div>
            <div class="post-message">
            ${sendMessageHtml()}
            </div>
        </div>
    `
}

export function usersHtml(users) {
    return Object.entries(users).map(([username, userStatus]) => `
        <div class="${userStatus.loginPending ? 'online-user' : 'offline-user'}">
            ${username}
        </div>
    `).join('');
}

export function messagesHtml(messages) {
    return messages.map(({ username, message }) => `
        <div class="one-message-container">
            <div class="username">${username}</div>
            <div>${message}</div>
        </div>
    `).join('');
}
function sendMessageHtml() {
    return `
        <form class="message-send-form">
            <input type="text" class="message" placeholder="Type and click join us" />
        </form>
    `;
}
