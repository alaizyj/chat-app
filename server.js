const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json());

const sessionData = require('./sessions');
const chat = require('./messages');

app.get('/api/v1/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sessionData.checkSession(sid);
    if (!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }
    res.json({ username });
});

app.post('/api/v1/session', (req, res) => {
    const { username } = req.body;
    if (!sessionData.isValidUsername(username)) {
        res.status(400).json({ error: 'required-username' });
        return;
    }

    if (username === 'dog') {
        res.status(403).json({ error: 'auth-insufficient' });
        return;
    }

    const sid = sessionData.addSession(username);
    res.cookie('sid', sid);
    res.json({ username });
});

app.delete('/api/v1/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sessionData.checkSession(sid);
    if (sid) {
        res.clearCookie('sid');
    }

    if (username) {
        sessionData.deleteSession(sid);
    }
    res.json({ wasLoggedIn: !!username });
});

app.get('/api/v1/users', (req, res) => {
    const sid = req.cookies.sid;
    const username = sessionData.checkSession(sid);
    if (!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    const userList = sessionData.getUsers();
    res.json(userList);
});

app.get('/api/v1/messages', (req, res) => {
    const sid = req.cookies.sid;
    const username = sessionData.checkSession(sid);
    if (!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }
    const messages = chat.messages;
    res.json(messages);
});

app.post('/api/v1/messages', (req, res) => {
    const sid = req.cookies.sid;
    const username = sessionData.checkSession(sid);
    if (!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    const { message } = req.body;

    if (!message || !chat.checkMessage(message)) {
        res.status(400).json({ error: 'required-message' });
        return;
    }

    const imgID = sessionData.getImgID(sid);
    const messageInfo = {
        user: username,
        message,
        imgID,
    };

    chat.addMessage(messageInfo);
    res.json(messageInfo);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));