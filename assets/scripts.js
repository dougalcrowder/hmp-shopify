/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Imports
///////////////////////////////////////////////////////////////////////////////////////

// Helpers *****************************************************
///////////////////////////////////////////////////////////////////////////////////////

if (window.matchMedia('(hover: hover)').matches) {
  document.body.classList.add('hover');
}
var getNextSibling = function getNextSibling(elem, selector) {
  // Get the next sibling element
  var sibling = elem.nextElementSibling;
  // If there's no selector, return the first sibling
  if (!selector) return sibling;
  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }
};
var getPreviousSibling = function getPreviousSibling(elem, selector) {
  // Get the next sibling element
  var sibling = elem.previousElementSibling;

  // If there's no selector, return the first sibling
  if (!selector) return sibling;

  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.previousElementSibling;
  }
};
var getSiblings = function getSiblings(elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function isInViewport(elem) {
  var distance = elem.getBoundingClientRect();
  return distance.top >= 0 && distance.left >= 0 && distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) && distance.right <= (window.innerWidth || document.documentElement.clientWidth);
};
// As above just calculates from the top
var isInViewportTop = function isInViewportTop(elem) {
  var distance = elem.getBoundingClientRect();
  return distance.bottom >= 0 && distance.left >= 0 && distance.top <= (window.innerHeight || document.documentElement.clientHeight) && distance.right <= (window.innerWidth || document.documentElement.clientWidth);
};

// when scrolling lets not kill the processor
function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

// Navigation *****************************************************
///////////////////////////////////////////////////////////////////////////////////////

function distanceScrolled() {
  if (pageYOffset > 32) {
    document.body.classList.add("hideNav");
  } else {
    document.body.classList.remove("hideNav");
  }
}
function nextSection() {
  if (document.getElementById('nextButton')) {
    var nextButton = document.getElementById('nextButton');
    nextButton.addEventListener("click", function () {
      var closestParent = nextButton.closest('.shopify-section');
      var nextParent = getNextSibling(closestParent);
      nextParent.scrollIntoView();
    });
  }
}
function viewport() {
  window.addEventListener("scroll", throttle(distanceScrolled, 10));
}
function loaded() {
  window.addEventListener('load', function (event) {
    document.body.classList.add('loaded');
    setTimeout(function () {
      document.body.classList.remove('loading');
    }, 1);
  });
}
function loadeded() {
  if (document.body.classList.contains('loading')) {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  }
}
function bodyCloser() {
  var body = document.getElementById('swup');
  var nav = document.getElementById('accessibleNav');
  var heeder = document.querySelector('.site-header');
  var button = document.getElementById('menuTrigger');
  if (heeder.classList.contains('nav-out')) {
    body.addEventListener("click", function () {
      button.classList.remove('nav-open');
      nav.classList.remove('active');
      heeder.classList.remove('nav-out');
    }, false);
    nav.addEventListener("click", function (ev) {
      ev.stopPropagation();
    }, false);
  }
}
function closeNav() {
  var nav = document.getElementById("accessibleNav");
  var button = document.getElementById('menuTrigger');
  var heeder = document.querySelector('.site-header');
  button.classList.remove('nav-open');
  nav.classList.remove('active');
  heeder.classList.remove('nav-out');
}
function mobNavigation() {
  var nav = document.getElementById("accessibleNav");
  var button = document.getElementById('menuTrigger');
  var heeder = document.querySelector('.site-header');
  // const searchToggle= document.getElementById('searchToggle');
  // const headerSearch= document.getElementById('headerSearch');
  // const mobSearchClose= document.getElementById('mobSearchClose');

  button.addEventListener('click', function () {
    if (nav.classList.contains('active')) {
      button.classList.remove('nav-open');
      nav.classList.remove('active');
      heeder.classList.remove('nav-out');
    } else {
      button.classList.add('nav-open');
      nav.classList.add('active');
      heeder.classList.add('nav-out');
      bodyCloser();
    }
  });
}
function setNavigation() {
  var nav = document.getElementById("SiteNav"),
    anchor = nav.getElementsByTagName("a"),
    current = window.location;

  // console.log("anchor = ",anchor,"current = ",current);

  for (var i = 0; i < anchor.length; i++) {
    if (anchor[i].href == current) {
      anchor[i].className = "site-nav--active";
    } else {
      anchor[i].className = "site-nav--not_active";
    }
  }
}

// account pages stuff
function accounts() {
  if (document.getElementById('RecoverPassword')) {
    var RecoverPassword = document.getElementById('RecoverPassword');
    var HideRecoverPasswordLink = document.getElementById('HideRecoverPasswordLink');
    var CustomerLoginForm = document.getElementById('CustomerLoginForm');
    var RecoverPasswordForm = document.getElementById('RecoverPasswordForm');
    RecoverPassword.addEventListener('click', function () {
      console.log("yay clicked");
      CustomerLoginForm.classList.add('hide');
      RecoverPasswordForm.classList.remove('hide');
    });
    HideRecoverPasswordLink.addEventListener('click', function () {
      console.log("yay clicked");
      RecoverPasswordForm.classList.add('hide');
      CustomerLoginForm.classList.remove('hide');
    });
  }
}
function accordions() {
  if (document.getElementById('accordionGroup')) {
    console.log("hello Accordions");
    document.querySelectorAll('.Accordion h3 button').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var targetSection = trigger.getAttribute('aria-controls');
        var theSection = document.getElementById(targetSection);
        if (trigger.getAttribute('aria-expanded') == 'true') {
          console.log("tis true");
          trigger.setAttribute('aria-expanded', 'false');
          theSection.setAttribute('hidden', 'true');
        } else {
          console.log("tis false");
          trigger.setAttribute('aria-expanded', 'true');
          theSection.removeAttribute('hidden');
        }
      });
    });
  }
}

// Swup *****************************************************
///////////////////////////////////////////////////////////////////////////////////////

// Initial functions
function init() {
  console.log("scripts init");
  if (document.querySelector('.account_area')) {
    accounts();
    //  toggleAddress();
  }

  viewport();
  distanceScrolled();
  loaded();
  setNavigation();
  mobNavigation();
  nextSection();
  accordions();
}
function unload() {
  closeNav();
}

// run once 
init();

/***/ }),

/***/ "./src/sass/styles-article.scss":
/*!**************************************!*\
  !*** ./src/sass/styles-article.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/styles-blog.scss":
/*!***********************************!*\
  !*** ./src/sass/styles-blog.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/styles-bot.scss":
/*!**********************************!*\
  !*** ./src/sass/styles-bot.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/styles-cart.scss":
/*!***********************************!*\
  !*** ./src/sass/styles-cart.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/styles-collections.scss":
/*!******************************************!*\
  !*** ./src/sass/styles-collections.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/styles-page.scss":
/*!***********************************!*\
  !*** ./src/sass/styles-page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/styles-product.scss":
/*!**************************************!*\
  !*** ./src/sass/styles-product.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/styles-swiffy.scss":
/*!*************************************!*\
  !*** ./src/sass/styles-swiffy.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/styles-top.scss":
/*!**********************************!*\
  !*** ./src/sass/styles-top.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/scripts.js ./src/sass/styles-top.scss ./src/sass/styles-bot.scss ./src/sass/styles-article.scss ./src/sass/styles-blog.scss ./src/sass/styles-cart.scss ./src/sass/styles-collections.scss ./src/sass/styles-page.scss ./src/sass/styles-product.scss ./src/sass/styles-swiffy.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/js/scripts.js */"./src/js/scripts.js");
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-top.scss */"./src/sass/styles-top.scss");
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-bot.scss */"./src/sass/styles-bot.scss");
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-article.scss */"./src/sass/styles-article.scss");
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-blog.scss */"./src/sass/styles-blog.scss");
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-cart.scss */"./src/sass/styles-cart.scss");
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-collections.scss */"./src/sass/styles-collections.scss");
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-page.scss */"./src/sass/styles-page.scss");
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-product.scss */"./src/sass/styles-product.scss");
module.exports = __webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-swiffy.scss */"./src/sass/styles-swiffy.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLWFydGljbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtYmxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1ib3Quc2Nzcz8yNDg0Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1jYXJ0LnNjc3M/MmU3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtY29sbGVjdGlvbnMuc2Nzcz9mMjY5Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLXByb2R1Y3Quc2Nzcz8wYjY2Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1zd2lmZnkuc2Nzcz8wNGExIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy10b3Auc2Nzcz9kZGExIl0sIm5hbWVzIjpbIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0TmV4dFNpYmxpbmciLCJlbGVtIiwic2VsZWN0b3IiLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImdldFNpYmxpbmdzIiwic2libGluZ3MiLCJwYXJlbnROb2RlIiwiZmlyc3RDaGlsZCIsIm5vZGVUeXBlIiwicHVzaCIsIm5leHRTaWJsaW5nIiwiaXNJblZpZXdwb3J0IiwiZGlzdGFuY2UiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImlzSW5WaWV3cG9ydFRvcCIsInRocm90dGxlIiwiZm4iLCJ3YWl0IiwidGltZSIsIkRhdGUiLCJub3ciLCJkaXN0YW5jZVNjcm9sbGVkIiwicGFnZVlPZmZzZXQiLCJyZW1vdmUiLCJuZXh0U2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwibmV4dEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0UGFyZW50IiwiY2xvc2VzdCIsIm5leHRQYXJlbnQiLCJzY3JvbGxJbnRvVmlldyIsInZpZXdwb3J0IiwibG9hZGVkIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwibG9hZGVkZWQiLCJjb250YWlucyIsImJvZHlDbG9zZXIiLCJuYXYiLCJoZWVkZXIiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwiZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJjbG9zZU5hdiIsIm1vYk5hdmlnYXRpb24iLCJzZXROYXZpZ2F0aW9uIiwiYW5jaG9yIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjdXJyZW50IiwibG9jYXRpb24iLCJpIiwibGVuZ3RoIiwiaHJlZiIsImNsYXNzTmFtZSIsImFjY291bnRzIiwiUmVjb3ZlclBhc3N3b3JkIiwiSGlkZVJlY292ZXJQYXNzd29yZExpbmsiLCJDdXN0b21lckxvZ2luRm9ybSIsIlJlY292ZXJQYXNzd29yZEZvcm0iLCJjb25zb2xlIiwibG9nIiwiYWNjb3JkaW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidHJpZ2dlciIsInRhcmdldFNlY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJ0aGVTZWN0aW9uIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdCIsInVubG9hZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTQyxJQUFJLEdBQUc7RUFDZFgsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQzNCLElBQUc5RSxRQUFRLENBQUN5RCxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUU7SUFDMUNlLFFBQVEsRUFBRTtJQUNYO0VBQ0Q7O0VBQ0F4QixRQUFRLEVBQUU7RUFDVlgsZ0JBQWdCLEVBQUU7RUFDbEJZLE1BQU0sRUFBRTtFQUVSYyxhQUFhLEVBQUU7RUFDZkQsYUFBYSxFQUFFO0VBRWZ0QixXQUFXLEVBQUU7RUFDYnVDLFVBQVUsRUFBRTtBQUNkO0FBR0EsU0FBU1UsTUFBTSxHQUFHO0VBQ2hCNUIsUUFBUSxFQUFFO0FBQ1o7O0FBRUE7QUFDQTJCLElBQUksRUFBRSxDOzs7Ozs7Ozs7OztBQ3hSTix5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbi8vIEhlbHBlcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pZiAod2luZG93Lm1hdGNoTWVkaWEoJyhob3ZlcjogaG92ZXIpJykubWF0Y2hlcykge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG59XG5cbnZhciBnZXROZXh0U2libGluZyA9IGZ1bmN0aW9uIChlbGVtLCBzZWxlY3Rvcikge1xuXHQvLyBHZXQgdGhlIG5leHQgc2libGluZyBlbGVtZW50XG5cdHZhciBzaWJsaW5nID0gZWxlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdC8vIElmIHRoZXJlJ3Mgbm8gc2VsZWN0b3IsIHJldHVybiB0aGUgZmlyc3Qgc2libGluZ1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2libGluZztcblx0Ly8gSWYgdGhlIHNpYmxpbmcgbWF0Y2hlcyBvdXIgc2VsZWN0b3IsIHVzZSBpdFxuXHQvLyBJZiBub3QsIGp1bXAgdG8gdGhlIG5leHQgc2libGluZyBhbmQgY29udGludWUgdGhlIGxvb3Bcblx0d2hpbGUgKHNpYmxpbmcpIHtcblx0XHRpZiAoc2libGluZy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHNpYmxpbmc7XG5cdFx0c2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nXG5cdH1cbn07XG5cbnZhciBnZXRQcmV2aW91c1NpYmxpbmcgPSBmdW5jdGlvbiAoZWxlbSwgc2VsZWN0b3IpIHtcblxuXHQvLyBHZXQgdGhlIG5leHQgc2libGluZyBlbGVtZW50XG5cdHZhciBzaWJsaW5nID0gZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG5cdC8vIElmIHRoZXJlJ3Mgbm8gc2VsZWN0b3IsIHJldHVybiB0aGUgZmlyc3Qgc2libGluZ1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2libGluZztcblxuXHQvLyBJZiB0aGUgc2libGluZyBtYXRjaGVzIG91ciBzZWxlY3RvciwgdXNlIGl0XG5cdC8vIElmIG5vdCwganVtcCB0byB0aGUgbmV4dCBzaWJsaW5nIGFuZCBjb250aW51ZSB0aGUgbG9vcFxuXHR3aGlsZSAoc2libGluZykge1xuXHRcdGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gc2libGluZztcblx0XHRzaWJsaW5nID0gc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHR9XG5cbn07XG5cbnZhciBnZXRTaWJsaW5ncyA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdC8vIFNldHVwIHNpYmxpbmdzIGFycmF5IGFuZCBnZXQgdGhlIGZpcnN0IHNpYmxpbmdcblx0dmFyIHNpYmxpbmdzID0gW107XG5cdHZhciBzaWJsaW5nID0gZWxlbS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG5cdC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XG5cdHdoaWxlIChzaWJsaW5nKSB7XG5cdFx0aWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbSkge1xuXHRcdFx0c2libGluZ3MucHVzaChzaWJsaW5nKTtcblx0XHR9XG5cdFx0c2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG5cdH1cblx0cmV0dXJuIHNpYmxpbmdzO1xufTtcblxuLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcbiAqIChjKSAyMDE3IENocmlzIEZlcmRpbmFuZGksIE1JVCBMaWNlbnNlLCBodHRwczovL2dvbWFrZXRoaW5ncy5jb21cbiAqIEBwYXJhbSAge05vZGV9ICAgIGVsZW0gVGhlIGVsZW1lbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgUmV0dXJucyB0cnVlIGlmIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gKi9cbnZhciBpc0luVmlld3BvcnQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHR2YXIgZGlzdGFuY2UgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRyZXR1cm4gKFxuXHRcdGRpc3RhbmNlLnRvcCA+PSAwICYmXG5cdFx0ZGlzdGFuY2UubGVmdCA+PSAwICYmXG5cdFx0ZGlzdGFuY2UuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcblx0XHRkaXN0YW5jZS5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuXHQpO1xufTtcbi8vIEFzIGFib3ZlIGp1c3QgY2FsY3VsYXRlcyBmcm9tIHRoZSB0b3BcbnZhciBpc0luVmlld3BvcnRUb3AgPSBmdW5jdGlvbiAoZWxlbSkge1xuICB2YXIgZGlzdGFuY2UgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gKFxuICAgIGRpc3RhbmNlLmJvdHRvbSA+PSAwICYmXG4gICAgZGlzdGFuY2UubGVmdCA+PSAwICYmXG4gICAgZGlzdGFuY2UudG9wIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICBkaXN0YW5jZS5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICApO1xufTtcblxuLy8gd2hlbiBzY3JvbGxpbmcgbGV0cyBub3Qga2lsbCB0aGUgcHJvY2Vzc29yXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgd2FpdCkge1xuICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoKHRpbWUgKyB3YWl0IC0gRGF0ZS5ub3coKSkgPCAwKSB7XG4gICAgICBmbigpO1xuICAgICAgdGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gTmF2aWdhdGlvbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuZnVuY3Rpb24gZGlzdGFuY2VTY3JvbGxlZCgpIHtcbiAgaWYgKHBhZ2VZT2Zmc2V0ID4gMzIpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoaWRlTmF2XCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVOYXZcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV4dFNlY3Rpb24oKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0QnV0dG9uJykpIHtcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRCdXR0b24nKTtcbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY2xvc2VzdFBhcmVudCA9IG5leHRCdXR0b24uY2xvc2VzdCgnLnNob3BpZnktc2VjdGlvbicpO1xuICAgICAgbGV0IG5leHRQYXJlbnQgPSBnZXROZXh0U2libGluZyhjbG9zZXN0UGFyZW50KTtcbiAgICAgIG5leHRQYXJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2aWV3cG9ydCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhyb3R0bGUoZGlzdGFuY2VTY3JvbGxlZCwgMTApKTtcbn1cblxuZnVuY3Rpb24gbG9hZGVkKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH0sIDEpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGxvYWRlZGVkKCkge1xuICAgIGlmKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2FkaW5nJykpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJvZHlDbG9zZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3d1cCcpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzaWJsZU5hdicpO1xuICBjb25zdCBoZWVkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIFxuICBpZiAoaGVlZGVyLmNsYXNzTGlzdC5jb250YWlucygnbmF2LW91dCcpKSB7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgIH0sIGZhbHNlKTtcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7IFxuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2Nlc3NpYmxlTmF2XCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRyaWdnZXInKTtcbiAgY29uc3QgaGVlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3V0Jyk7XG5cbn1cblxuZnVuY3Rpb24gbW9iTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2Nlc3NpYmxlTmF2XCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRyaWdnZXInKTtcbiAgY29uc3QgaGVlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gIC8vIGNvbnN0IHNlYXJjaFRvZ2dsZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFRvZ2dsZScpO1xuICAvLyBjb25zdCBoZWFkZXJTZWFyY2g9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJTZWFyY2gnKTtcbiAgLy8gY29uc3QgbW9iU2VhcmNoQ2xvc2U9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JTZWFyY2hDbG9zZScpO1xuICBcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3V0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5hZGQoJ25hdi1vdXQnKTtcbiAgICAgIGJvZHlDbG9zZXIoKTtcbiAgICB9XG4gIH0pO1xuICBcbn1cblxuZnVuY3Rpb24gc2V0TmF2aWdhdGlvbigpIHtcbiAgdmFyIG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2l0ZU5hdlwiKSxcbiAgYW5jaG9yID0gbmF2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSxcbiAgY3VycmVudCA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgXG4gIC8vIGNvbnNvbGUubG9nKFwiYW5jaG9yID0gXCIsYW5jaG9yLFwiY3VycmVudCA9IFwiLGN1cnJlbnQpO1xuICBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmNob3IubGVuZ3RoOyBpKyspIHtcbiAgaWYoYW5jaG9yW2ldLmhyZWYgPT0gY3VycmVudCkge1xuICAgIGFuY2hvcltpXS5jbGFzc05hbWUgPSBcInNpdGUtbmF2LS1hY3RpdmVcIjtcbiAgfSBlbHNlIHtcbiAgICBhbmNob3JbaV0uY2xhc3NOYW1lID0gXCJzaXRlLW5hdi0tbm90X2FjdGl2ZVwiO1xuICB9XG4gIFxuICB9XG4gIFxufVxuXG4vLyBhY2NvdW50IHBhZ2VzIHN0dWZmXG5mdW5jdGlvbiBhY2NvdW50cygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZCcpKSB7XG4gICAgbGV0IFJlY292ZXJQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmQnKTtcbiAgICBsZXQgSGlkZVJlY292ZXJQYXNzd29yZExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSGlkZVJlY292ZXJQYXNzd29yZExpbmsnKTtcbiAgICBsZXQgQ3VzdG9tZXJMb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3VzdG9tZXJMb2dpbkZvcm0nKTtcbiAgICBsZXQgUmVjb3ZlclBhc3N3b3JkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmRGb3JtJyk7XG4gICAgXG4gICAgUmVjb3ZlclBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInlheSBjbGlja2VkXCIpO1xuICAgICAgQ3VzdG9tZXJMb2dpbkZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgUmVjb3ZlclBhc3N3b3JkRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSk7XG4gICAgXG4gICAgSGlkZVJlY292ZXJQYXNzd29yZExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieWF5IGNsaWNrZWRcIik7XG4gICAgICBSZWNvdmVyUGFzc3dvcmRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIEN1c3RvbWVyTG9naW5Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25zKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY29yZGlvbkdyb3VwJykpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIEFjY29yZGlvbnNcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkFjY29yZGlvbiBoMyBidXR0b24nKS5mb3JFYWNoKCBmdW5jdGlvbih0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IHRhcmdldFNlY3Rpb24gPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRoZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRTZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aXMgdHJ1ZVwiKTtcbiAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgIHRoZVNlY3Rpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGlzIGZhbHNlXCIpO1xuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB0aGVTZWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBTd3VwICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gSW5pdGlhbCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnNvbGUubG9nKFwic2NyaXB0cyBpbml0XCIpO1xuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9hcmVhJykpIHtcbiAgICBhY2NvdW50cygpO1xuICAgLy8gIHRvZ2dsZUFkZHJlc3MoKTtcbiAgfVxuICB2aWV3cG9ydCgpO1xuICBkaXN0YW5jZVNjcm9sbGVkKCk7XG4gIGxvYWRlZCgpO1xuXG4gIHNldE5hdmlnYXRpb24oKTtcbiAgbW9iTmF2aWdhdGlvbigpO1xuXG4gIG5leHRTZWN0aW9uKCk7XG4gIGFjY29yZGlvbnMoKTtcbn1cblxuXG5mdW5jdGlvbiB1bmxvYWQoKSB7XG4gIGNsb3NlTmF2KCk7XG59XG5cbi8vIHJ1biBvbmNlIFxuaW5pdCgpO1xuXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9