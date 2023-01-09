const uuid = require('uuid').v4;
const sessions = {};
const users = {};
const currentUsers = {};

function addSession(username) {
    if (currentUsers[username]) {
        currentUsers[username].times++;
        return currentUsers[username].sid;
    }
    const sid = uuid();
    const imgID = users[username] ?
        users[username].img :
        1 + Math.floor(Math.random() * 8);
    if (!users[username]) {
        users[username] = { imgID };
    }
    const userinfo = {
        times: 1,
        sid: sid,
    };
    currentUsers[username] = userinfo;
    sessions[sid] = { username };
    return sid;
}

function checkSession(sid) {
    if (sessions[sid]) {
        return getSessionUser(sid);
    }
    return '';
}

function getSessionUser(sid) {
    return sessions[sid].username;
}

function isValidUsername(username) {
    let isValid = true;
    isValid = isValid && username.trim();
    isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
    return isValid;
}

function getImgID(sid) {
    const username = sessions[sid].username;
    const imgID = users[username].imgID;
    return imgID;
}

function getUsers() {
    const userList = [];
    const userKeys = Object.keys(currentUsers);
    userKeys.forEach((key) => {
        const userInfo = {
            username: key,
            imgID: users[key].imgID,
        };
        userList.push(userInfo);
    });
    return userList;
}

function deleteSession(sid) {
    if (!sessions[sid]) {
        return;
    }
    const username = sessions[sid].username;
    if (currentUsers[username].times === 1) {
        delete sessions[sid];
        delete currentUsers[username];
    } else {
        currentUsers[username].times--;
    }
}

const sessionData = {
    sessions,
    users,
    currentUsers,
    addSession,
    checkSession,
    deleteSession,
    getUsers,
    getImgID,
    getSessionUser,
    isValidUsername,
};

module.exports = sessionData;