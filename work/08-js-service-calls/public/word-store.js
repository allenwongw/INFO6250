/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchPostWord: () => (/* binding */ fetchPostWord),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchWord: () => (/* binding */ fetchWord)
/* harmony export */ });
// This is a sample file that demonstrates
// how you can write an abstraction around
// a fetch() call
// This exported function returns a promise
// that resolves with data
// or rejects with an error object
//
// The caller of this function can decide
// what to do with the data
// or what to do with the error
//
// You can add to this file and use this function
// or write your own files/functions

function fetchSession() {
  return fetch('/api/session', {
    method: 'GET'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
}
function fetchLogin(username) {
  return fetch('/api/session', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    })
  })
  // fetch() rejects on network error
  // So we convert that to a formatted error object
  // so our caller can handle all "errors" in a similar way
  ["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    } else {
      response.json();
    }
  });
}
function fetchWord() {
  return fetch('/api/word', {
    method: 'GET'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
}
function fetchPostWord(word) {
  return fetch('/api/word', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      word: word
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
  });
}
function fetchLogout() {
  return fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
  });
}

/***/ }),

/***/ "./src/web-page.js":
/*!*************************!*\
  !*** ./src/web-page.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
var webPage = document.querySelector('#app');
var render = function render(username, currentWord) {
  webPage.innerHTML = generateHtml(username, currentWord);
  return;
};
var generateHtml = function generateHtml(username, currentWord) {
  if (!username && !currentWord) {
    return "\n            <div class=\"container\">\n                <input class=\"input\" placeholder=\"login your name\"/>\n                <button class=\"cat-login\">Cat~In</button>\n            </div>\n            <div class=\"error\"></div>\n        ";
  } else {
    return "\n            <div class=\"container\">\n                <div class=\"user-name\">\n                    <div class=\"user-name\">Your Name ".concat(username, "</div>\n                    <div class=\"new-words\" >New Words: ").concat(currentWord || ' ', "</div>\n                </div>\n                <input class=\"input\" placeholder=\" 'cat' your word \"/>\n                <button class=\"new-word\">New Word</button>\n                <button class=\"log-out\">Log out</button>\n            </div>\n            <div class=\"error\"></div>\n        ");
  }
};

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
/*!***************************!*\
  !*** ./src/word-store.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _web_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-page */ "./src/web-page.js");


var webPage = document.querySelector('#app');
var errorEl = document.querySelector('.error');
(0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchSession)()["catch"](function (err) {
  if (err.error == 'network-error') {
    errorEl.innerHTML = "<p>network error</p>";
  }
}).then(function (response) {
  if (!response.error) {
    var username = response.username;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchWord)(username)["catch"](function (err) {
      if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>network error</p>";
      }
    }).then(function (response) {
      var username = response.username,
        storedWord = response.storedWord;
      (0,_web_page__WEBPACK_IMPORTED_MODULE_1__.render)(username, storedWord);
    });
  }
  (0,_web_page__WEBPACK_IMPORTED_MODULE_1__.render)('', '');
});
webPage.addEventListener('click', function (e) {
  if (e.target.classList.contains('cat-login')) {
    var input = document.querySelector('.input');
    var username = input.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username)["catch"](function (err) {
      if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>network error</p>";
      } else if (err.error == 'required-username') {
        errorEl.innerHTML = "<p>Kindly use numbers and letters</p>";
      } else if (err.error == 'auth-insufficient') {
        errorEl.innerHTML = "<p>dog is disaster, use cat</p>";
      }
    }).then(function (response) {
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchWord)()["catch"](function (err) {
        if (err.error == 'network-error') {
          errorEl.innerHTML = "<p>network error</p>";
        }
      }).then(function (response) {
        var username = response.username,
          storedWord = response.storedWord;
        (0,_web_page__WEBPACK_IMPORTED_MODULE_1__.render)(username, storedWord);
      });
    });
    return;
  }
  if (e.target.classList.contains('new-word')) {
    var _input = document.querySelector('.input');
    var newWord = _input.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchPostWord)(newWord)["catch"](function (err) {
      if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>network error</p>";
      } else if (err.error == 'invalid-word') {
        errorEl.innerHTML = "<p>Kindly use letters</p>";
      }
    }).then(function (response) {
      if (response) {
        var _username = response.username,
          storedWord = response.storedWord;
        (0,_web_page__WEBPACK_IMPORTED_MODULE_1__.render)(_username, storedWord);
      }
    });
  }
  if (e.target.classList.contains('log-out')) {
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)()["catch"](function (err) {
      if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>network error</p>";
      }
    }).then(function (response) {
      errorEl.innerHTML = response.error ? errorEl.innerHTML : '';
      (0,_web_page__WEBPACK_IMPORTED_MODULE_1__.render)('', '');
      return;
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=word-store.js.map