import state from './state';
import generateUsersLists from './userList';
import generateMessagesList from './messagelist';

const appEl = document.querySelector('#app');

function renderChatPage() {
    if (!state.logged) {
        return;
    }

    const userListHTML = generateUsersLists();

    const messageListHTML = generateMessagesList();

    const messageHTML = state.isChatLoading ?
        `
    <div class= "fetchingmessage-div">
    <div class='message-spinner'></div>
  </div>
    ` :
        `
        <div class="chat-page">
    <div class="chat-container">
    <div class="users-section">
    <h2>Online Users</h2>
    <ul class="users-list">${userListHTML}</ul>
    </div>
    <div class="messages-section">
    <h2>Messages</h2>
    <ul class="messages-list">${messageListHTML}</ul>
    </div>
    </div>
    <div class="chatinput-section">
    <form class="chat-form">
    <label class="chat-label">Chat: </label>
    <input id="chat-input" type="text" placeholder="Type in here" size="30" required></input>
    <button type="submit" class="send-button">Send</button>
    </form>
    <p class="error-message">${state.error}</p>
    <button class="logout-button">Logout</button>
    </div>
    </div>
    `;

    appEl.innerHTML = messageHTML;
}

export default renderChatPage;