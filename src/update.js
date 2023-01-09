import state from './state';
import generateMessagesList from './messagelist';
import generateUsersLists from './userList';

function update() {
    if (!state.logged) {
        return;
    }
    const userListEl = document.querySelector('.users-list');
    const messageListEl = document.querySelector('.messages-list');
    if (!userListEl || !messageListEl) {
        return;
    }
    const userListHTML = generateUsersLists();

    const messageListHTML = generateMessagesList();

    userListEl.innerHTML = userListHTML;
    messageListEl.innerHTML = messageListHTML;
}

export default update;