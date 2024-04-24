const webPage = document.querySelector('#app');
export const render = (username,currentWord) => {

webPage.innerHTML = generateHtml(username, currentWord);
    return;
}

const generateHtml = (username, currentWord) => {
    if (!username && !currentWord) {
        return `
            <div class="container">
                <input class="input" placeholder="login your name"/>
                <button class="cat-login">Cat~In</button>
            </div>
            <div class="error"></div>
        `
    } else {
        return `
            <div class="container">
                <div class="user-name">
                    <div class="user-name">Your Name ${username}</div>
                    <div class="new-words" >New Words: ${currentWord || ' '}</div>
                </div>
                <input class="input" placeholder=" 'cat' your word "/>
                <button class="new-word">New Word</button>
                <button class="log-out">Log out</button>
            </div>
            <div class="error"></div>
        `
    }
}