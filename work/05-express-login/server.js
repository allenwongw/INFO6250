const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const uuidv4 = require('uuid').v4;

const loginPage = require('./login-page')
const app = express()
app.use(cookieParser())
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));

const sessions = {};
const storedWords = {};

app.post('/login', (req, res) => {
    const username = req.body.username.trim();
    if (!username || username === 'dog' || !/^[A-Za-z0-9_]+$/.test(username)) {
        const status = username === 'dog' ? 403 : 400;
        const message = username === 'dog' ? "'dog' is not allowed." : "Only use letters, numbers or Cat";
        res.status(status).send(`
            <!DOCTYPE html>
            <html>
             <head>
               <title>Login Error</title>
             </head>
                 <body>
                <p>${message}</p>
                <a href="/">Back to login</a>
                </body>
            </html>
        `);
        return;
    }
    const sid = uuidv4();
    sessions[sid] = { username };
    res.cookie('sid', sid, { httpOnly: true });
    res.redirect('/');
});

app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    if (sid && sessions[sid]) {
        const username = sessions[sid].username;
        const word = storedWords[username] || ' ';
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>User</title>
                <link rel="stylesheet" href="app.css">
            </head>
            <body>
                <div class="container">
                <h1 class="welcome-title">Welcome, ${username}</h1>
                <p class="stored-word">Your stored word is: ${word}</p>
                <form action="/change" method="POST" class="word-form">
                    <input type="text" name="word" value="${word}"class="word-input">
                    <button type="submit" class="btn update-btn">Update Word</button>
                </form>
                <form action="/logout" method="POST"  class="logout-form">
                    <button type="submit"class="btn logout-btn">Logout</button>
                </form>
            </div>
            </body>
            </html>
        `);
    } else {
        res.send(loginPage.show());
    }
});

app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    delete sessions[sid];
    res.clearCookie('sid');
    res.redirect('/');
});

app.post('/change', (req, res) => {
    const sid = req.cookies.sid;
    if (sid && sessions[sid]) {
        const username = sessions[sid].username;
        storedWords[username] = req.body.word.trim();
    }
    res.redirect('/');
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));