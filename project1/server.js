const express = require('express');
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;
const { registerUser, guessWord, resetGame, users, getMatchCount } = require('./Models/game-logic');
const webPage = require('./Views/web-view');
const PORT = 3000;

const app = express();
const sessions = {};

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    if (sid && sessions[sid]) {
        const username = sessions[sid].username;
        registerUser(username);
        res.send(webPage.gamePage(username, users[username]));
    } else {
        res.send(webPage.loginPage());
    }
});

app.post('/login', (req, res) => {
    const username = req.body.username.trim();
    if (username === 'dog' || !/^[A-Za-z0-9_]+$/.test(username) || !username) {
        res.status(403).send(webPage.loginError("Invalid username, use Cat or number and letter"));
        return;
    }
    const sid = uuidv4();
    sessions[sid] = { username };
    res.cookie('sid', sid);
    res.redirect('/');
});

app.post('/guess', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid || !sessions[sid]) {
        return res.status(400).send("Session not found. Please login again.");
    }
    const username = sessions[sid].username;
    const guess = req.body.guess.trim();
    const result = guessWord(username, guess);

     if (!result.isValid || result.isDuplicate) {
        return res.send(webPage.gamePage(username, result.error));   
    } else {
        return res.redirect('/');
    }
});

app.post('/new-game', (req, res) => {
    const sid = req.cookies.sid;
    if (sid && sessions[sid]) {
        const username = sessions[sid].username;
        resetGame(username);
        res.redirect('/');
    } else {
       res.redirect('/');
    }
});

app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    delete sessions[sid];
    res.clearCookie('sid');
    res.redirect('/');
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
