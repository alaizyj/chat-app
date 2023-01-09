/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chat.js":
/*!*********************!*\
  !*** ./src/chat.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _userList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userList */ "./src/userList.js");
/* harmony import */ var _messagelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messagelist */ "./src/messagelist.js");



var appEl = document.querySelector('#app');
function renderChatPage() {
  if (!_state__WEBPACK_IMPORTED_MODULE_0__["default"].logged) {
    return;
  }
  var userListHTML = (0,_userList__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var messageListHTML = (0,_messagelist__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var messageHTML = _state__WEBPACK_IMPORTED_MODULE_0__["default"].isChatLoading ? "\n    <div class= \"fetchingmessage-div\">\n    <div class='message-spinner'></div>\n  </div>\n    " : "\n        <div class=\"chat-page\">\n    <div class=\"chat-container\">\n    <div class=\"users-section\">\n    <h2>Online Users</h2>\n    <ul class=\"users-list\">".concat(userListHTML, "</ul>\n    </div>\n    <div class=\"messages-section\">\n    <h2>Messages</h2>\n    <ul class=\"messages-list\">").concat(messageListHTML, "</ul>\n    </div>\n    </div>\n    <div class=\"chatinput-section\">\n    <form class=\"chat-form\">\n    <label class=\"chat-label\">Chat: </label>\n    <input id=\"chat-input\" type=\"text\" placeholder=\"Type in here\" size=\"30\" required></input>\n    <button type=\"submit\" class=\"send-button\">Send</button>\n    </form>\n    <p class=\"error-message\">").concat(_state__WEBPACK_IMPORTED_MODULE_0__["default"].error, "</p>\n    <button class=\"logout-button\">Logout</button>\n    </div>\n    </div>\n    ");
  appEl.innerHTML = messageHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderChatPage);

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");


var messages = {
  'network-error': 'Please check your Internet connection!',
  'auth-missing': 'Your session expires, please login first!',
  'required-username': 'Username cannot be empty, and should consist of only numbers and digits!',
  'auth-insufficient': 'Sorry dogs, please try another username!',
  'required-message': 'Please input your message!',
  "default": 'Something went wrong, please try again later!'
};
function handleError(err) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].error = messages[err.error] || messages["default"];
  (0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleError);

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");

var appEl = document.querySelector('#app');
function renderLoginPage() {
  if (_state__WEBPACK_IMPORTED_MODULE_0__["default"].logged) {
    appEl.innerHTML = '';
    return;
  }
  if (_state__WEBPACK_IMPORTED_MODULE_0__["default"].isInitialLoading) {
    appEl.innerHTML = "<div class= \"fetching-div\">\n        <div class='spinner'></div>\n      </div>";
    return;
  }
  var spinnerHTML = _state__WEBPACK_IMPORTED_MODULE_0__["default"].isLoginLoading ? "\n    <div class='fetchinglogin-div'>\n    <div class='login-spinner'></div>\n  </div>\n    " : "";
  var errorHTML = _state__WEBPACK_IMPORTED_MODULE_0__["default"].error ? "<p class=\"error-message\">".concat(_state__WEBPACK_IMPORTED_MODULE_0__["default"].error, "</p>") : "";
  var loginHTML = "\n    <div class=\"login-page\">\n    <img src=\"/img/chat.png\" class=\"login-img\" alt=\"login img\" />\n    <h1>Welcome to LetsChat!</h1>\n    <form class=\"login-form\">\n    <label class=\"login-label\" for=\"login-input\">Username: </label>\n    <input id=\"login-input\" type=\"text\" placeholder=\"Please enter your username\" size=\"23\"></input>\n    <button class=\"login-button\">LOGIN</button>\n    </form>\n    ".concat(spinnerHTML, "\n    ").concat(errorHTML, "\n    </div>\n    ");
  appEl.innerHTML = loginHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLoginPage);

/***/ }),

/***/ "./src/messagelist.js":
/*!****************************!*\
  !*** ./src/messagelist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");

function generateMessagesList() {
  var messageListHTML = _state__WEBPACK_IMPORTED_MODULE_0__["default"].messages.length === 0 ? "<p class=\"empty-message\">No messages, try send one!</p>" : _state__WEBPACK_IMPORTED_MODULE_0__["default"].messages.map(function (message) {
    return "<li class=\"single-message\"> \n    <div class=\"message-info\">\n    <img src=\"/img/".concat(message.imgID, ".png\" class=\"message-avatar\" />\n    <span class=\"message-username\">").concat(message.user, "</span>\n    </div>\n    <span class=\"").concat(message.user === _state__WEBPACK_IMPORTED_MODULE_0__["default"].username ? 'user-message' : 'message-content', "\">").concat(message.message, "</span>\n    </li>");
  }).join('');
  return messageListHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMessagesList);

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function fetchLogin(username) {
  return fetch('/api/v1/session', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      username: username
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function checkSession() {
  return fetch('/api/v1/session', {
    method: 'GET',
    credentials: 'include'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function logOut() {
  return fetch('/api/v1/session', {
    method: 'DELETE',
    credentials: 'include'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
}
function fetchUserList() {
  return fetch('/api/v1/users', {
    method: 'GET',
    credentials: 'include'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchMessages() {
  return fetch('/api/v1/messages', {
    method: 'GET',
    credentials: 'include'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function sendMessage(message) {
  return fetch('/api/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      message: message
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
var services = {
  fetchLogin: fetchLogin,
  checkSession: checkSession,
  fetchUserList: fetchUserList,
  fetchMessages: fetchMessages,
  logOut: logOut,
  sendMessage: sendMessage
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services);

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var state = {
  logged: false,
  error: '',
  messages: [],
  users: [],
  isInitialLoading: false,
  isLoginLoading: false,
  isChatLoading: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _messagelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messagelist */ "./src/messagelist.js");
/* harmony import */ var _userList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userList */ "./src/userList.js");



function update() {
  if (!_state__WEBPACK_IMPORTED_MODULE_0__["default"].logged) {
    return;
  }
  var userListEl = document.querySelector('.users-list');
  var messageListEl = document.querySelector('.messages-list');
  if (!userListEl || !messageListEl) {
    return;
  }
  var userListHTML = (0,_userList__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var messageListHTML = (0,_messagelist__WEBPACK_IMPORTED_MODULE_1__["default"])();
  userListEl.innerHTML = userListHTML;
  messageListEl.innerHTML = messageListHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (update);

/***/ }),

/***/ "./src/userList.js":
/*!*************************!*\
  !*** ./src/userList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");

function generateUsersLists() {
  var userListHTML = _state__WEBPACK_IMPORTED_MODULE_0__["default"].users.map(function (user) {
    return "<li class=\"single-user\"> \n        <img src=\"/img/".concat(user.imgID, ".png\" class=\"user-avatar\" />\n        <span class=\"user-name\">").concat(user.username, "</span>\n        </li>");
  }).join('');
  return userListHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateUsersLists);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/login.js");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat */ "./src/chat.js");


function render() {
  (0,_login__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_chat__WEBPACK_IMPORTED_MODULE_1__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./src/error.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update */ "./src/update.js");





var appEl = document.querySelector('#app');
appEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('login-button')) {
    e.preventDefault();
    var loginInputEl = document.querySelector('#login-input');
    var username = loginInputEl.value;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].isLoginLoading = true;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].error = '';
    (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])();
    setTimeout(function () {
      _services__WEBPACK_IMPORTED_MODULE_2__["default"].fetchLogin(username).then(function (user) {
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].username = user.username;
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].logged = true;
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].error = '';
      }).then(function () {
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].isChatLoading = true;
        (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])();
        setTimeout(function () {
          fetchChatPage();
        }, 1500);
      })["catch"](function (err) {
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].isLoginLoading = false;
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].isChatLoading = false;
        (0,_error__WEBPACK_IMPORTED_MODULE_3__["default"])(err);
      });
    }, 1500);
    return;
  }
  if (e.target.classList.contains('send-button')) {
    var chatInputEl = document.querySelector('#chat-input');
    var message = chatInputEl.value;
    e.preventDefault();
    _services__WEBPACK_IMPORTED_MODULE_2__["default"].sendMessage(message).then(function (messageInfo) {
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].messages.push(messageInfo);
      (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })["catch"](function (err) {
      (0,_error__WEBPACK_IMPORTED_MODULE_3__["default"])(err);
    });
    return;
  }
  if (e.target.classList.contains('logout-button')) {
    _services__WEBPACK_IMPORTED_MODULE_2__["default"].logOut().then(function () {
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].logged = false;
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].error = '';
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].users = [];
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].messages = [];
      (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })["catch"](function (err) {
      return (0,_error__WEBPACK_IMPORTED_MODULE_3__["default"])(err);
    });
    return;
  }
});
function checkLogin() {
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].isInitialLoading = true;
  (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])();
  setTimeout(function () {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].isInitialLoading = false;
    _services__WEBPACK_IMPORTED_MODULE_2__["default"].checkSession().then(function (user) {
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].username = user.username;
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].logged = true;
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].error = '';
      fetchChatPage();
    })["catch"](function () {
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].logged = false;
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].error = '';
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].isLoginLoading = false;
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].isChatLoading = false;
      (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
  }, 2000);
}
function fetchChatPage() {
  _services__WEBPACK_IMPORTED_MODULE_2__["default"].fetchUserList().then(function (userList) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].users = userList;
  }).then(function () {
    return _services__WEBPACK_IMPORTED_MODULE_2__["default"].fetchMessages();
  }).then(function (messages) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].messages = messages;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].logged = true;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].error = '';
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].isLoginLoading = false;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].isChatLoading = false;
    (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])();
  })["catch"](function (err) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].isChatLoading = false;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].isChatLoading = false;
    (0,_error__WEBPACK_IMPORTED_MODULE_3__["default"])(err);
  });
}
function refreshChatPage() {
  if (_state__WEBPACK_IMPORTED_MODULE_0__["default"].logged) {
    _services__WEBPACK_IMPORTED_MODULE_2__["default"].fetchUserList().then(function (userList) {
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].users = userList;
    }).then(function () {
      return _services__WEBPACK_IMPORTED_MODULE_2__["default"].fetchMessages();
    }).then(function (messages) {
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].messages = messages;
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].logged = true;
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].error = '';
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].isLoginLoading = false;
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].isChatLoading = false;
      (0,_update__WEBPACK_IMPORTED_MODULE_4__["default"])();
    })["catch"](function (err) {
      return (0,_error__WEBPACK_IMPORTED_MODULE_3__["default"])(err);
    });
  }
}
function pollChatPage() {
  refreshChatPage();
  setTimeout(pollChatPage, 5000);
}
checkLogin();
pollChatPage();
})();

/******/ })()
;
//# sourceMappingURL=script.js.map