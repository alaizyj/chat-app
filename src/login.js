import state from './state';

const appEl = document.querySelector('#app');

function renderLoginPage() {
    if (state.logged) {
        appEl.innerHTML = '';
        return;
    }
    if (state.isInitialLoading) {
        appEl.innerHTML = `<div class= "fetching-div">
        <div class='spinner'></div>
      </div>`;
        return;
    }

    const spinnerHTML = state.isLoginLoading ?
        `
    <div class='fetchinglogin-div'>
    <div class='login-spinner'></div>
  </div>
    ` :
        ``;
    const errorHTML = state.error ?
        `<p class="error-message">${state.error}</p>` :
        ``;
    const loginHTML = `
    <div class="login-page">
    <img src="/img/chat.png" class="login-img" alt="login img" />
    <h1>Welcome to LetsChat!</h1>
    <form class="login-form">
    <label class="login-label" for="login-input">Username: </label>
    <input id="login-input" type="text" placeholder="Please enter your username" size="23"></input>
    <button class="login-button">LOGIN</button>
    </form>
    ${spinnerHTML}
    ${errorHTML}
    </div>
    `;

    appEl.innerHTML = loginHTML;
}

export default renderLoginPage;