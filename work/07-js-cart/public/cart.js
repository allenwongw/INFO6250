/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cat-data.js":
/*!*************************!*\
  !*** ./src/cat-data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cats: () => (/* binding */ cats)
/* harmony export */ });
var cats = [{
  id: 1,
  name: 'Fluffball',
  price: 0.99,
  img: 'http://placekitten.com/150/150?image=1',
  amount: 0
}, {
  id: 2,
  name: 'Doraemon',
  price: 3.14,
  img: 'http://placekitten.com/150/150?image=2',
  amount: 0
}, {
  id: 3,
  name: 'Pikachu',
  price: 2.73,
  img: 'http://placekitten.com/150/150?image=3',
  amount: 0
}];

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
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cat_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-data */ "./src/cat-data.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var cart = [];
document.addEventListener('DOMContentLoaded', function () {
  renderProducts();
  renderCart();
});
function renderProducts() {
  var appElement = document.getElementById('app');
  var productsElement = document.createElement('div');
  productsElement.id = 'products';
  _cat_data__WEBPACK_IMPORTED_MODULE_0__.cats.forEach(function (cat) {
    var catElement = document.createElement('div');
    catElement.innerHTML = "\n            <h3>".concat(cat.name, "</h3>\n            <img src=\"").concat(cat.img, "\" alt=\"").concat(cat.name, "\">\n            <p>$").concat(cat.price.toFixed(2), "</p>\n            <button onclick=\"addToCart(").concat(cat.id, ")\">Add to Cart</button>\n        ");
    productsElement.appendChild(catElement);
  });
  appElement.appendChild(productsElement);
}
function addToCart(id) {
  var cat = _cat_data__WEBPACK_IMPORTED_MODULE_0__.cats.find(function (cat) {
    return cat.id === id;
  });
  var cartItem = cart.find(function (item) {
    return item.id === id;
  });
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push(_objectSpread(_objectSpread({}, cat), {}, {
      quantity: 1
    }));
  }
  renderCart();
}
function renderCart() {
  var cartElement = document.querySelector('#cart');
  if (!cartElement) {
    cartElement = document.createElement('div');
    cartElement.id = 'cart';
    document.getElementById('app').appendChild(cartElement);
  }
  if (cart.length > 0) {
    var cartItemsHtml = cart.map(function (item) {
      return "\n            <div>\n                <img src=\"".concat(item.img, "\" alt=\"").concat(item.name, "\" style=\"width:50px;\">\n                <span>").concat(item.name, "</span> - \n                <span>$").concat(item.price, "</span> x \n                <span>").concat(item.quantity, "</span> = \n                <span>$").concat((item.quantity * item.price).toFixed(2), "</span>\n                <button onclick=\"removeFromCart(").concat(item.id, ")\">Remove</button>\n            </div>\n        ");
    }).join('');
    var total = cart.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0).toFixed(2);
    cartElement.innerHTML = "<h2>Your Cart</h2>".concat(cartItemsHtml, "<div>Total: $").concat(total, "</div><button onclick=\"checkout()\">Checkout</button><button id=\"hide-cart-button\" onclick=\"toggleCartVisibility()\">Hide Cart</button>");
  } else {
    cartElement.innerHTML = "<h2>Your Cart</h2><p>Your cart is empty</p>";
  }
}
function toggleCartVisibility() {
  var cartElement = document.getElementById('cart');
  cartElement.classList.toggle('hidden');
  ;
}
function removeFromCart(id) {
  cart = cart.filter(function (item) {
    return item.id !== id;
  });
  renderCart();
}
function checkout() {
  cart = [];
  renderCart();
}
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.checkout = checkout;
})();

/******/ })()
;
//# sourceMappingURL=cart.js.map