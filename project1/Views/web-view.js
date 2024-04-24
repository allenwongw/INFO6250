const {users} = require('../Models/game-logic')


function loginPage() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Word Guessing Game</title>
            <link rel="stylesheet" href="app.css">
        </head>
        <body>
            <div class="login-container">
            <div class="login-header">
            <h2>Welcome Guess Cat words Game</h2>
            </div>
            <form action="/login" method="POST" class="login-form">
                <input type="text" name="username" placeholder="Enter your username" required>
                <button type="submit">Login</button>
            </form>
            </div>
        </body>
        </html>
    `;
}

function loginError(message) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Login Error - Word Guessing Game</title>
        </head>
        <body>
            <h2>Error: ${message}</h2>
            <p><a href="/">Try again</a></p>
        </body>
        </html>
    `;
}

function gamePage(username,user) {
    
const possibleWordsHtml = `<div class="word-list"><h3>Possible Words:</h3><ul>${
    (user.possibleWords || []).map(word => `<li>${word}</li>`).join('')
}</ul></div>`;

const guessedWordsHtml = (user.guessedWords || []).map(gw => 
    `<li>${gw.guess} (Match letters: ${gw.matchCount})</li>`
).join('');

    let feedbackMessage = '';
        if (user.isWon) {
    feedbackMessage = `<div class="feedback">Congratulations! You've guessed the word.</div>`;
} else if (user.isDuplicate) {
    feedbackMessage = `<div class="feedback">You have already guessed this word.</div>`;
}  else if (user.lastValidGuess) {
    feedbackMessage = `<div class="feedback">Your last guess "${user.lastValidGuess}" matched ${user.lastGuessMatch} letters.</div>`;
}
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Cat Guess Game</title>
            <link rel="stylesheet" href="app.css">
        </head>
        <body>
            <div class="game-container">
                <h1>Welcome, <span class="username">${username}</span></h1>
                ${possibleWordsHtml}
                ${feedbackMessage}
                <h3>Guessed Words:</h3>
                <ul>${guessedWordsHtml}</ul>
                <p>Attempts: ${user.attempts}</p>
                <form action="/guess" method="post">
                    <input type="text" name="guess" placeholder="Enter your guess" ${user.isWon ? 'disabled' : ''} required>
                    <button type="submit" ${user.isWon ? 'disabled' : ''}>Guess</button>
                </form>
                <form action="/logout" method="post">
                    <button type="submit">Logout</button>
                </form>
                <form action="/new-game" method="post">
                    <button type="submit">Start New Game</button>
                </form>
            </div>
        </body>
        </html>
    `;
}


module.exports = { loginPage, loginError, gamePage };



