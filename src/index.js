import state from './state';
import render from './view';
import services from './services';
import handleError from './error';
import update from './update';

const appEl = document.querySelector('#app');

appEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('login-button')) {
        e.preventDefault();
        const loginInputEl = document.querySelector('#login-input');
        const username = loginInputEl.value;
        state.isLoginLoading = true;
        state.error = '';
        render();
        setTimeout(() => {
            services
                .fetchLogin(username)
                .then((user) => {
                    state['username'] = user.username;
                    state.logged = true;
                    state.error = '';
                })
                .then(() => {
                    state.isChatLoading = true;
                    render();
                    setTimeout(() => {
                        fetchChatPage();
                    }, 1500);
                })
                .catch((err) => {
                    state.isLoginLoading = false;
                    state.isChatLoading = false;
                    handleError(err);
                });
        }, 1500);

        return;
    }

    if (e.target.classList.contains('send-button')) {
        const chatInputEl = document.querySelector('#chat-input');
        const message = chatInputEl.value;
        e.preventDefault();
        services
            .sendMessage(message)
            .then((messageInfo) => {
                state.messages.push(messageInfo);
                render();
            })
            .catch((err) => {
                handleError(err);
            });
        return;
    }

    if (e.target.classList.contains('logout-button')) {
        services
            .logOut()
            .then(() => {
                state.logged = false;
                state.error = '';
                state.users = [];
                state.messages = [];
                render();
            })
            .catch((err) => handleError(err));
        return;
    }
});

function checkLogin() {
    state.isInitialLoading = true;
    render();
    setTimeout(() => {
        state.isInitialLoading = false;
        services
            .checkSession()
            .then((user) => {
                state['username'] = user.username;
                state.logged = true;
                state.error = '';
                fetchChatPage();
            })
            .catch(() => {
                state.logged = false;
                state.error = '';
                state.isLoginLoading = false;
                state.isChatLoading = false;
                render();
            });
    }, 2000);
}

function fetchChatPage() {
    services
        .fetchUserList()
        .then((userList) => {
            state.users = userList;
        })
        .then(() => services.fetchMessages())
        .then((messages) => {
            state.messages = messages;
            state.logged = true;
            state.error = '';
            state.isLoginLoading = false;
            state.isChatLoading = false;
            render();
        })
        .catch((err) => {
            state.isChatLoading = false;
            state.isChatLoading = false;
            handleError(err);
        });
}

function refreshChatPage() {
    if (state.logged) {
        services
            .fetchUserList()
            .then((userList) => {
                state.users = userList;
            })
            .then(() => services.fetchMessages())
            .then((messages) => {
                state.messages = messages;
                state.logged = true;
                state.error = '';
                state.isLoginLoading = false;
                state.isChatLoading = false;
                update();
            })
            .catch((err) => handleError(err));
    }
}

function pollChatPage() {
    refreshChatPage();
    setTimeout(pollChatPage, 5000);
}

checkLogin();
pollChatPage();