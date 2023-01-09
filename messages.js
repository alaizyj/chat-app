const messages = [];

function addMessage({ user, message, imgID }) {
    messages.push({ user, message, imgID });
}

function checkMessage(message) {
    let isValid = true;
    isValid = isValid && message.trim();
    return isValid;
}

const chat = {
    messages,
    addMessage,
    checkMessage,
};

module.exports = chat;