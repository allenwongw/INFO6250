/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT: () => (/* binding */ CLIENT),
/* harmony export */   MESSAGES: () => (/* binding */ MESSAGES),
/* harmony export */   SERVER: () => (/* binding */ SERVER)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username'
};
var CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession',
  REQUIRED_MESSAGES: 'requiredMessage'
};
var MESSAGES = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CLIENT.NETWORK_ERROR, 'Trouble connecting to the network.  Please try again'), SERVER.AUTH_INSUFFICIENT, 'dog is bad, welcome to use cat'), SERVER.REQUIRED_USERNAME, 'Please enter a valid (letters and/or numbers) username'), "default", 'Something went wrong.  Please try again');

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAbilityPost: () => (/* binding */ addAbilityPost),
/* harmony export */   addAbilityToLogin: () => (/* binding */ addAbilityToLogin),
/* harmony export */   addAbilityToLogout: () => (/* binding */ addAbilityToLogout)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");



var appEl = document.querySelector('#app');
function addAbilityToLogin(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  appEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('login-cat')) {
      var username = document.querySelector('.input-cat').value;
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function (response) {
        (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchGetMessages)().then(function (response) {
          (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(response);
          (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
            state: state,
            appEl: appEl
          });
        });
      })["catch"](function (error) {
        (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(error.error);
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
          state: state,
          appEl: appEl
        });
      });
    }
  });
}
function addAbilityToLogout(_ref2) {
  var state = _ref2.state,
    appEl = _ref2.appEl;
  appEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('logout')) {
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)().then(function (response) {
        (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
          state: state,
          appEl: appEl
        });
      })["catch"](function (error) {
        (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(error.error);
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
          state: state,
          appEl: appEl
        });
      });
    }
  });
}
function addAbilityPost(_ref3) {
  var state = _ref3.state,
    appEl = _ref3.appEl;
  appEl.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('chat-cat')) {
      var message = document.querySelector('.message').value;
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchPostMessage)(message).then(function (response) {
        (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(response);
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
          state: state,
          appEl: appEl
        });
      })["catch"](function (error) {
        (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(error.error);
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
          state: state,
          appEl: appEl
        });
      });
    }
  });
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messagesHtml: () => (/* binding */ messagesHtml),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   usersHtml: () => (/* binding */ usersHtml)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function render(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  var mainContentHtml = state.loginPending ? "\n        ".concat(generateErrorHtml(state), "\n        ").concat(generateChatHtml(state), "\n        <div>\n            <button class=\"chat-cat\">Chat~Cat</button>\n            <button class=\"logout\">Cat~Out</button>\n        </div>\n    ") : "\n        <h2>Welcome Cat Chat</h2>\n        ".concat(generateErrorHtml(state), "\n        ").concat(generateLoginHtml(state), "\n    ");
  appEl.innerHTML = "<div class=\"main\">".concat(mainContentHtml, "</div>");
}
function generateErrorHtml(state) {
  return state.error ? "<div class=\"error\">".concat(state.error, "</div>") : '';
}
function generateLoginHtml() {
  return "\n        <div class=\"login\">\n            <form class=\"login-form\">\n                <input class=\"input-cat\" placeholder=\"'Cat' your name\" />\n                <button type=\"button\" class=\"login-cat\">Log in</button>\n            </form>\n        </div>\n    ";
}
function generateChatHtml(state) {
  return "\n        <div class=\"chat\">\n            <div class=\"container-user\">\n            ".concat(usersHtml(state.users), "\n            </div>\n            <div class=\"container-message\">\n            ").concat(messagesHtml(state.messages), "\n            </div>\n            <div class=\"post-message\">\n            ").concat(sendMessageHtml(), "\n            </div>\n        </div>\n    ");
}
function usersHtml(users) {
  return Object.entries(users).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      username = _ref3[0],
      userStatus = _ref3[1];
    return "\n        <div class=\"".concat(userStatus.loginPending ? 'online-user' : 'offline-user', "\">\n            ").concat(username, "\n        </div>\n    ");
  }).join('');
}
function messagesHtml(messages) {
  return messages.map(function (_ref4) {
    var username = _ref4.username,
      message = _ref4.message;
    return "\n        <div class=\"one-message-container\">\n            <div class=\"username\">".concat(username, "</div>\n            <div>").concat(message, "</div>\n        </div>\n    ");
  }).join('');
}
function sendMessageHtml() {
  return "\n        <form class=\"message-send-form\">\n            <input type=\"text\" class=\"message\" placeholder=\"Type and click join us\" />\n        </form>\n    ";
}

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchGetMessages: () => (/* binding */ fetchGetMessages),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchPostMessage: () => (/* binding */ fetchPostMessage),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession)
/* harmony export */ });
function fetchSession() {
  showLoader();
  return fetch("/api/v1/session", {
    method: "GET"
  })["catch"](function (error) {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  })["finally"](hideLoader);
}
function fetchLogin(username) {
  showLoader();
  return fetch('/api/v1/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    })
  })["catch"](function (error) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (error) {
        return Promise.reject(error);
      });
    }
    return response.json();
  })["finally"](hideLoader);
}
function fetchLogout() {
  showLoader();
  return fetch("/api/v1/session", {
    method: "DELETE"
  })["catch"](function (error) {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (error) {
        return Promise.reject(error);
      });
    }
    return response.json();
  })["finally"](hideLoader);
}
function fetchGetMessages() {
  showLoader();
  return fetch('/api/v1/messages')["catch"](function (error) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (error) {
        return Promise.reject(error);
      });
    }
    return response.json();
  })["finally"](hideLoader);
}
function fetchPostMessage(message) {
  showLoader();
  return fetch('/api/v1/message', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      message: message
    })
  })["catch"](function (error) {
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
  })["finally"](hideLoader);
}
function showLoader() {
  document.querySelector('#loader-container').classList.remove('hidden');
}
function hideLoader() {
  document.querySelector('#loader-container').classList.add('hidden');
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getMessages: () => (/* binding */ getMessages),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   setError: () => (/* binding */ setError)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

var state = {
  loginPending: false,
  username: '',
  users: {},
  messages: [],
  error: ''
};
function logout() {
  state.loginPending = false;
  state.messages = [];
  state.username = '';
  state.users = {};
  state.error = '';
}
function getMessages(response) {
  state.messages = response.messages;
  state.error = '';
}
function setError(error) {
  if (!error) {
    state.error = '';
    return;
  }
  state.error = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
}
function login(response) {
  state.username = response.username;
  state.users = response.users;
  state.loginPending = true;
  state.messages = response.messages;
  state.error = '';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

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
/*!*************************!*\
  !*** ./src/chat-cat.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");




var appEl = document.querySelector('#app');
(0,_listeners__WEBPACK_IMPORTED_MODULE_3__.addAbilityToLogin)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_3__.addAbilityToLogout)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_3__.addAbilityPost)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
loadChats();
(0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchSession)().then(function (response) {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchGetMessages)().then(function (response) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(response);
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  });
})["catch"](function (error) {
  (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
  (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)({
    state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
    appEl: appEl
  });
});
function pendingChat() {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchGetMessages)().then(function (response) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(response);
    var usersContainerEl = document.querySelector('.container-user');
    usersContainerEl.innerHTML = (0,_render__WEBPACK_IMPORTED_MODULE_2__.usersHtml)(_state__WEBPACK_IMPORTED_MODULE_1__["default"].users);
    var messagesContainerEl = document.querySelector('.container-message');
    messagesContainerEl.innerHTML = (0,_render__WEBPACK_IMPORTED_MODULE_2__.messagesHtml)(_state__WEBPACK_IMPORTED_MODULE_1__["default"].messages);
  })["catch"](function (error) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(error.error);
  });
}
function loadChats() {
  pendingChat();
  setTimeout(loadChats, 5000);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map