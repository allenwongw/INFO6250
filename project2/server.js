const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const users = require('./users');
const sessions = require('./sessions');

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json());

app.get('/api/v1/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';

    if(!sid || !users.isValid(username)) {
        res.status(401).json({error: 'auth-missing'});
        return;
    }
    res.json({username});
});


app.post('/api/v1/session', (req, res) => {
    const { username } = req.body;
    if(!users.isValid(username)) {
        res.status(400).json({ error: 'required-username' });
        return;
    }
    if(username === 'dog') {
        res.status(403).json({ error: 'auth-insufficient' });
        return;
    }
    const sid = sessions.addSession(username);
    res.cookie('sid', sid);
     users.users[username] = {
        loginPending: true
    };
    res.json({ username });
});

app.delete('/api/v1/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';

    if(sid){
      res.clearCookie('sid');
    } 
    if(username) {
        sessions.deleteSession(sid);
        users.users[username].loginPending = false;
    }
    res.json({username});
});

app.get('/api/v1/users', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getUsername(sid) : '';
  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json({username});
})

app.get('/api/v1/messages', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';

    if(!sid || !users.isValid(username)) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }
    users.users[username].loginPending = true;
    res.json({ users: users.users, messages: users.messages });
});

app.post('/api/v1/message', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';

    if(!sid || !users.isValid(username)) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    const message  = req.body.message.trim();
    if(!message) {
        res.status(400).json({ error: 'required-message' });
        return;
    }
    const record = { username, message }  
    users.messages.push(record);
    res.json({ users: users.users, messages: users.messages });
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));