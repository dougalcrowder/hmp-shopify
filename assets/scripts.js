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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLWFydGljbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtYmxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1ib3Quc2Nzcz8yNDg0Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1jYXJ0LnNjc3M/MmU3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtY29sbGVjdGlvbnMuc2Nzcz9mMjY5Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1wYWdlLnNjc3M/YzUwNyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtcHJvZHVjdC5zY3NzPzBiNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLXN3aWZmeS5zY3NzPzA0YTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLXRvcC5zY3NzP2RkYTEiXSwibmFtZXMiOlsid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXROZXh0U2libGluZyIsImVsZW0iLCJzZWxlY3RvciIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJnZXRQcmV2aW91c1NpYmxpbmciLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiZ2V0U2libGluZ3MiLCJzaWJsaW5ncyIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJwdXNoIiwibmV4dFNpYmxpbmciLCJpc0luVmlld3BvcnQiLCJkaXN0YW5jZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiaXNJblZpZXdwb3J0VG9wIiwidGhyb3R0bGUiLCJmbiIsIndhaXQiLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImRpc3RhbmNlU2Nyb2xsZWQiLCJwYWdlWU9mZnNldCIsInJlbW92ZSIsIm5leHRTZWN0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3Nlc3RQYXJlbnQiLCJjbG9zZXN0IiwibmV4dFBhcmVudCIsInNjcm9sbEludG9WaWV3Iiwidmlld3BvcnQiLCJsb2FkZWQiLCJldmVudCIsInNldFRpbWVvdXQiLCJsb2FkZWRlZCIsImNvbnRhaW5zIiwiYm9keUNsb3NlciIsIm5hdiIsImhlZWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJldiIsInN0b3BQcm9wYWdhdGlvbiIsImNsb3NlTmF2IiwibW9iTmF2aWdhdGlvbiIsInNldE5hdmlnYXRpb24iLCJhbmNob3IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImN1cnJlbnQiLCJsb2NhdGlvbiIsImkiLCJsZW5ndGgiLCJocmVmIiwiY2xhc3NOYW1lIiwiYWNjb3VudHMiLCJSZWNvdmVyUGFzc3dvcmQiLCJIaWRlUmVjb3ZlclBhc3N3b3JkTGluayIsIkN1c3RvbWVyTG9naW5Gb3JtIiwiUmVjb3ZlclBhc3N3b3JkRm9ybSIsImNvbnNvbGUiLCJsb2ciLCJhY2NvcmRpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0cmlnZ2VyIiwidGFyZ2V0U2VjdGlvbiIsImdldEF0dHJpYnV0ZSIsInRoZVNlY3Rpb24iLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbml0IiwidW5sb2FkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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O0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVNDLElBQUksR0FBRztFQUNkWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDM0IsSUFBRzlFLFFBQVEsQ0FBQ3lELGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtJQUMxQ2UsUUFBUSxFQUFFO0lBQ1g7RUFDRDs7RUFDQXhCLFFBQVEsRUFBRTtFQUNWWCxnQkFBZ0IsRUFBRTtFQUNsQlksTUFBTSxFQUFFO0VBRVJjLGFBQWEsRUFBRTtFQUNmRCxhQUFhLEVBQUU7RUFFZnRCLFdBQVcsRUFBRTtFQUNidUMsVUFBVSxFQUFFO0FBQ2Q7QUFHQSxTQUFTVSxNQUFNLEdBQUc7RUFDaEI1QixRQUFRLEVBQUU7QUFDWjs7QUFFQTtBQUNBMkIsSUFBSSxFQUFFLEM7Ozs7Ozs7Ozs7O0FDeFJOLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuLy8gSGVscGVycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKGhvdmVyOiBob3ZlciknKS5tYXRjaGVzKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbn1cblxudmFyIGdldE5leHRTaWJsaW5nID0gZnVuY3Rpb24gKGVsZW0sIHNlbGVjdG9yKSB7XG5cdC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcblx0dmFyIHNpYmxpbmcgPSBlbGVtLm5leHRFbGVtZW50U2libGluZztcblx0Ly8gSWYgdGhlcmUncyBubyBzZWxlY3RvciwgcmV0dXJuIHRoZSBmaXJzdCBzaWJsaW5nXG5cdGlmICghc2VsZWN0b3IpIHJldHVybiBzaWJsaW5nO1xuXHQvLyBJZiB0aGUgc2libGluZyBtYXRjaGVzIG91ciBzZWxlY3RvciwgdXNlIGl0XG5cdC8vIElmIG5vdCwganVtcCB0byB0aGUgbmV4dCBzaWJsaW5nIGFuZCBjb250aW51ZSB0aGUgbG9vcFxuXHR3aGlsZSAoc2libGluZykge1xuXHRcdGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gc2libGluZztcblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmdcblx0fVxufTtcblxudmFyIGdldFByZXZpb3VzU2libGluZyA9IGZ1bmN0aW9uIChlbGVtLCBzZWxlY3Rvcikge1xuXG5cdC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcblx0dmFyIHNpYmxpbmcgPSBlbGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cblx0Ly8gSWYgdGhlcmUncyBubyBzZWxlY3RvciwgcmV0dXJuIHRoZSBmaXJzdCBzaWJsaW5nXG5cdGlmICghc2VsZWN0b3IpIHJldHVybiBzaWJsaW5nO1xuXG5cdC8vIElmIHRoZSBzaWJsaW5nIG1hdGNoZXMgb3VyIHNlbGVjdG9yLCB1c2UgaXRcblx0Ly8gSWYgbm90LCBqdW1wIHRvIHRoZSBuZXh0IHNpYmxpbmcgYW5kIGNvbnRpbnVlIHRoZSBsb29wXG5cdHdoaWxlIChzaWJsaW5nKSB7XG5cdFx0aWYgKHNpYmxpbmcubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBzaWJsaW5nO1xuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdH1cblxufTtcblxudmFyIGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0Ly8gU2V0dXAgc2libGluZ3MgYXJyYXkgYW5kIGdldCB0aGUgZmlyc3Qgc2libGluZ1xuXHR2YXIgc2libGluZ3MgPSBbXTtcblx0dmFyIHNpYmxpbmcgPSBlbGVtLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcblx0d2hpbGUgKHNpYmxpbmcpIHtcblx0XHRpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtKSB7XG5cdFx0XHRzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xuXHRcdH1cblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcblx0fVxuXHRyZXR1cm4gc2libGluZ3M7XG59O1xuXG4vKiFcbiAqIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFxuICogKGMpIDIwMTcgQ2hyaXMgRmVyZGluYW5kaSwgTUlUIExpY2Vuc2UsIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbVxuICogQHBhcmFtICB7Tm9kZX0gICAgZWxlbSBUaGUgZWxlbWVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBSZXR1cm5zIHRydWUgaWYgZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcbiAqL1xudmFyIGlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdHZhciBkaXN0YW5jZSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdHJldHVybiAoXG5cdFx0ZGlzdGFuY2UudG9wID49IDAgJiZcblx0XHRkaXN0YW5jZS5sZWZ0ID49IDAgJiZcblx0XHRkaXN0YW5jZS5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuXHRcdGRpc3RhbmNlLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG5cdCk7XG59O1xuLy8gQXMgYWJvdmUganVzdCBjYWxjdWxhdGVzIGZyb20gdGhlIHRvcFxudmFyIGlzSW5WaWV3cG9ydFRvcCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gIHZhciBkaXN0YW5jZSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiAoXG4gICAgZGlzdGFuY2UuYm90dG9tID49IDAgJiZcbiAgICBkaXN0YW5jZS5sZWZ0ID49IDAgJiZcbiAgICBkaXN0YW5jZS50b3AgPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgIGRpc3RhbmNlLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICk7XG59O1xuXG4vLyB3aGVuIHNjcm9sbGluZyBsZXRzIG5vdCBraWxsIHRoZSBwcm9jZXNzb3JcbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB3YWl0KSB7XG4gIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICgodGltZSArIHdhaXQgLSBEYXRlLm5vdygpKSA8IDApIHtcbiAgICAgIGZuKCk7XG4gICAgICB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBOYXZpZ2F0aW9uICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBkaXN0YW5jZVNjcm9sbGVkKCkge1xuICBpZiAocGFnZVlPZmZzZXQgPiAzMikge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImhpZGVOYXZcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZU5hdlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0U2VjdGlvbigpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRCdXR0b24nKSkge1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dEJ1dHRvbicpO1xuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjbG9zZXN0UGFyZW50ID0gbmV4dEJ1dHRvbi5jbG9zZXN0KCcuc2hvcGlmeS1zZWN0aW9uJyk7XG4gICAgICBsZXQgbmV4dFBhcmVudCA9IGdldE5leHRTaWJsaW5nKGNsb3Nlc3RQYXJlbnQpO1xuICAgICAgbmV4dFBhcmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdwb3J0KCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aHJvdHRsZShkaXN0YW5jZVNjcm9sbGVkLCAxMCkpO1xufVxuXG5mdW5jdGlvbiBsb2FkZWQoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSwgMSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbG9hZGVkZWQoKSB7XG4gICAgaWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRpbmcnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYm9keUNsb3NlcigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd3VwJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3NpYmxlTmF2Jyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRyaWdnZXInKTtcbiAgXG4gIGlmIChoZWVkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtb3V0JykpIHtcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3V0Jyk7XG4gICAgfSwgZmFsc2UpO1xuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIFxuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgfSwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2Vzc2libGVOYXZcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51VHJpZ2dlcicpO1xuICBjb25zdCBoZWVkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vdXQnKTtcblxufVxuXG5mdW5jdGlvbiBtb2JOYXZpZ2F0aW9uKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2Vzc2libGVOYXZcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51VHJpZ2dlcicpO1xuICBjb25zdCBoZWVkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcbiAgLy8gY29uc3Qgc2VhcmNoVG9nZ2xlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVG9nZ2xlJyk7XG4gIC8vIGNvbnN0IGhlYWRlclNlYXJjaD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlclNlYXJjaCcpO1xuICAvLyBjb25zdCBtb2JTZWFyY2hDbG9zZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYlNlYXJjaENsb3NlJyk7XG4gIFxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vdXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LmFkZCgnbmF2LW91dCcpO1xuICAgICAgYm9keUNsb3NlcigpO1xuICAgIH1cbiAgfSk7XG4gIFxufVxuXG5mdW5jdGlvbiBzZXROYXZpZ2F0aW9uKCkge1xuICB2YXIgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaXRlTmF2XCIpLFxuICBhbmNob3IgPSBuYXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpLFxuICBjdXJyZW50ID0gd2luZG93LmxvY2F0aW9uO1xuICBcbiAgLy8gY29uc29sZS5sb2coXCJhbmNob3IgPSBcIixhbmNob3IsXCJjdXJyZW50ID0gXCIsY3VycmVudCk7XG4gIFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFuY2hvci5sZW5ndGg7IGkrKykge1xuICBpZihhbmNob3JbaV0uaHJlZiA9PSBjdXJyZW50KSB7XG4gICAgYW5jaG9yW2ldLmNsYXNzTmFtZSA9IFwic2l0ZS1uYXYtLWFjdGl2ZVwiO1xuICB9IGVsc2Uge1xuICAgIGFuY2hvcltpXS5jbGFzc05hbWUgPSBcInNpdGUtbmF2LS1ub3RfYWN0aXZlXCI7XG4gIH1cbiAgXG4gIH1cbiAgXG59XG5cbi8vIGFjY291bnQgcGFnZXMgc3R1ZmZcbmZ1bmN0aW9uIGFjY291bnRzKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVjb3ZlclBhc3N3b3JkJykpIHtcbiAgICBsZXQgUmVjb3ZlclBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZCcpO1xuICAgIGxldCBIaWRlUmVjb3ZlclBhc3N3b3JkTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIaWRlUmVjb3ZlclBhc3N3b3JkTGluaycpO1xuICAgIGxldCBDdXN0b21lckxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDdXN0b21lckxvZ2luRm9ybScpO1xuICAgIGxldCBSZWNvdmVyUGFzc3dvcmRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZEZvcm0nKTtcbiAgICBcbiAgICBSZWNvdmVyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieWF5IGNsaWNrZWRcIik7XG4gICAgICBDdXN0b21lckxvZ2luRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBSZWNvdmVyUGFzc3dvcmRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KTtcbiAgICBcbiAgICBIaWRlUmVjb3ZlclBhc3N3b3JkTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ5YXkgY2xpY2tlZFwiKTtcbiAgICAgIFJlY292ZXJQYXNzd29yZEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgQ3VzdG9tZXJMb2dpbkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbnMoKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjb3JkaW9uR3JvdXAnKSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gQWNjb3JkaW9uc1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQWNjb3JkaW9uIGgzIGJ1dHRvbicpLmZvckVhY2goIGZ1bmN0aW9uKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGFyZ2V0U2VjdGlvbiA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGhlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldFNlY3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgaWYodHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRpcyB0cnVlXCIpO1xuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgdGhlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aXMgZmFsc2VcIik7XG4gICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIHRoZVNlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIFN3dXAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBJbml0aWFsIGZ1bmN0aW9uc1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc29sZS5sb2coXCJzY3JpcHRzIGluaXRcIik7XG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X2FyZWEnKSkge1xuICAgIGFjY291bnRzKCk7XG4gICAvLyAgdG9nZ2xlQWRkcmVzcygpO1xuICB9XG4gIHZpZXdwb3J0KCk7XG4gIGRpc3RhbmNlU2Nyb2xsZWQoKTtcbiAgbG9hZGVkKCk7XG5cbiAgc2V0TmF2aWdhdGlvbigpO1xuICBtb2JOYXZpZ2F0aW9uKCk7XG5cbiAgbmV4dFNlY3Rpb24oKTtcbiAgYWNjb3JkaW9ucygpO1xufVxuXG5cbmZ1bmN0aW9uIHVubG9hZCgpIHtcbiAgY2xvc2VOYXYoKTtcbn1cblxuLy8gcnVuIG9uY2UgXG5pbml0KCk7XG5cbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=