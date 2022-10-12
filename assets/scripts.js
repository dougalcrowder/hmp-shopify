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

/***/ "./src/sass/styles-top.scss":
/*!**********************************!*\
  !*** ./src/sass/styles-top.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/scripts.js ./src/sass/styles-top.scss ./src/sass/styles-bot.scss ./src/sass/styles-article.scss ./src/sass/styles-blog.scss ./src/sass/styles-cart.scss ./src/sass/styles-collections.scss ./src/sass/styles-page.scss ./src/sass/styles-product.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
module.exports = __webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-product.scss */"./src/sass/styles-product.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLWFydGljbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtYmxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1ib3Quc2Nzcz8yNDg0Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1jYXJ0LnNjc3M/MmU3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtY29sbGVjdGlvbnMuc2Nzcz9mMjY5Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLXByb2R1Y3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtdG9wLnNjc3M/ZGRhMSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsImdldE5leHRTaWJsaW5nIiwiZWxlbSIsInNlbGVjdG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImdldFByZXZpb3VzU2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJnZXRTaWJsaW5ncyIsInNpYmxpbmdzIiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJub2RlVHlwZSIsInB1c2giLCJuZXh0U2libGluZyIsImlzSW5WaWV3cG9ydCIsImRpc3RhbmNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJpc0luVmlld3BvcnRUb3AiLCJ0aHJvdHRsZSIsImZuIiwid2FpdCIsInRpbWUiLCJEYXRlIiwibm93IiwiZGlzdGFuY2VTY3JvbGxlZCIsInBhZ2VZT2Zmc2V0IiwicmVtb3ZlIiwibmV4dFNlY3Rpb24iLCJnZXRFbGVtZW50QnlJZCIsIm5leHRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VzdFBhcmVudCIsImNsb3Nlc3QiLCJuZXh0UGFyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJ2aWV3cG9ydCIsImxvYWRlZCIsImV2ZW50Iiwic2V0VGltZW91dCIsImxvYWRlZGVkIiwiY29udGFpbnMiLCJib2R5Q2xvc2VyIiwibmF2IiwiaGVlZGVyIiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsImV2Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xvc2VOYXYiLCJtb2JOYXZpZ2F0aW9uIiwic2V0TmF2aWdhdGlvbiIsImFuY2hvciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3VycmVudCIsImxvY2F0aW9uIiwiaSIsImxlbmd0aCIsImhyZWYiLCJjbGFzc05hbWUiLCJhY2NvdW50cyIsIlJlY292ZXJQYXNzd29yZCIsIkhpZGVSZWNvdmVyUGFzc3dvcmRMaW5rIiwiQ3VzdG9tZXJMb2dpbkZvcm0iLCJSZWNvdmVyUGFzc3dvcmRGb3JtIiwiY29uc29sZSIsImxvZyIsImFjY29yZGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRyaWdnZXIiLCJ0YXJnZXRTZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwidGhlU2VjdGlvbiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImluaXQiLCJ1bmxvYWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FB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Q0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUMzQixJQUFHOUUsUUFBUSxDQUFDeUQsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFO0lBQzFDZSxRQUFRLEVBQUU7SUFDWDtFQUNEOztFQUNBeEIsUUFBUSxFQUFFO0VBQ1ZYLGdCQUFnQixFQUFFO0VBQ2xCWSxNQUFNLEVBQUU7RUFFUmMsYUFBYSxFQUFFO0VBQ2ZELGFBQWEsRUFBRTtFQUVmdEIsV0FBVyxFQUFFO0VBQ2J1QyxVQUFVLEVBQUU7QUFDZDtBQUdBLFNBQVNVLE1BQU0sR0FBRztFQUNoQjVCLFFBQVEsRUFBRTtBQUNaOztBQUVBO0FBQ0EyQixJQUFJLEVBQUUsQzs7Ozs7Ozs7Ozs7QUN4Uk4seUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG4vLyBIZWxwZXJzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcoaG92ZXI6IGhvdmVyKScpLm1hdGNoZXMpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xufVxuXG52YXIgZ2V0TmV4dFNpYmxpbmcgPSBmdW5jdGlvbiAoZWxlbSwgc2VsZWN0b3IpIHtcblx0Ly8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxuXHR2YXIgc2libGluZyA9IGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHQvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XG5cdC8vIElmIHRoZSBzaWJsaW5nIG1hdGNoZXMgb3VyIHNlbGVjdG9yLCB1c2UgaXRcblx0Ly8gSWYgbm90LCBqdW1wIHRvIHRoZSBuZXh0IHNpYmxpbmcgYW5kIGNvbnRpbnVlIHRoZSBsb29wXG5cdHdoaWxlIChzaWJsaW5nKSB7XG5cdFx0aWYgKHNpYmxpbmcubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBzaWJsaW5nO1xuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZ1xuXHR9XG59O1xuXG52YXIgZ2V0UHJldmlvdXNTaWJsaW5nID0gZnVuY3Rpb24gKGVsZW0sIHNlbGVjdG9yKSB7XG5cblx0Ly8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxuXHR2YXIgc2libGluZyA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcblxuXHQvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XG5cblx0Ly8gSWYgdGhlIHNpYmxpbmcgbWF0Y2hlcyBvdXIgc2VsZWN0b3IsIHVzZSBpdFxuXHQvLyBJZiBub3QsIGp1bXAgdG8gdGhlIG5leHQgc2libGluZyBhbmQgY29udGludWUgdGhlIGxvb3Bcblx0d2hpbGUgKHNpYmxpbmcpIHtcblx0XHRpZiAoc2libGluZy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHNpYmxpbmc7XG5cdFx0c2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcblx0fVxuXG59O1xuXG52YXIgZ2V0U2libGluZ3MgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHQvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXG5cdHZhciBzaWJsaW5ncyA9IFtdO1xuXHR2YXIgc2libGluZyA9IGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXHQvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuXHR3aGlsZSAoc2libGluZykge1xuXHRcdGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcblx0XHRcdHNpYmxpbmdzLnB1c2goc2libGluZyk7XG5cdFx0fVxuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuXHR9XG5cdHJldHVybiBzaWJsaW5ncztcbn07XG5cbi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gKiAoYykgMjAxNyBDaHJpcyBGZXJkaW5hbmRpLCBNSVQgTGljZW5zZSwgaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tXG4gKiBAcGFyYW0gIHtOb2RlfSAgICBlbGVtIFRoZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFJldHVybnMgdHJ1ZSBpZiBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFxuICovXG52YXIgaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0dmFyIGRpc3RhbmNlID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0cmV0dXJuIChcblx0XHRkaXN0YW5jZS50b3AgPj0gMCAmJlxuXHRcdGRpc3RhbmNlLmxlZnQgPj0gMCAmJlxuXHRcdGRpc3RhbmNlLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG5cdFx0ZGlzdGFuY2UucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcblx0KTtcbn07XG4vLyBBcyBhYm92ZSBqdXN0IGNhbGN1bGF0ZXMgZnJvbSB0aGUgdG9wXG52YXIgaXNJblZpZXdwb3J0VG9wID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgdmFyIGRpc3RhbmNlID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIChcbiAgICBkaXN0YW5jZS5ib3R0b20gPj0gMCAmJlxuICAgIGRpc3RhbmNlLmxlZnQgPj0gMCAmJlxuICAgIGRpc3RhbmNlLnRvcCA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgZGlzdGFuY2UucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgKTtcbn07XG5cbi8vIHdoZW4gc2Nyb2xsaW5nIGxldHMgbm90IGtpbGwgdGhlIHByb2Nlc3NvclxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQpIHtcbiAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aW1lICsgd2FpdCAtIERhdGUubm93KCkpIDwgMCkge1xuICAgICAgZm4oKTtcbiAgICAgIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmlnYXRpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIGRpc3RhbmNlU2Nyb2xsZWQoKSB7XG4gIGlmIChwYWdlWU9mZnNldCA+IDMyKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiaGlkZU5hdlwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlTmF2XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5leHRTZWN0aW9uKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dEJ1dHRvbicpKSB7XG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0QnV0dG9uJyk7XG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNsb3Nlc3RQYXJlbnQgPSBuZXh0QnV0dG9uLmNsb3Nlc3QoJy5zaG9waWZ5LXNlY3Rpb24nKTtcbiAgICAgIGxldCBuZXh0UGFyZW50ID0gZ2V0TmV4dFNpYmxpbmcoY2xvc2VzdFBhcmVudCk7XG4gICAgICBuZXh0UGFyZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlld3BvcnQoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRocm90dGxlKGRpc3RhbmNlU2Nyb2xsZWQsIDEwKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9LCAxKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBsb2FkZWRlZCgpIHtcbiAgICBpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9hZGluZycpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBib2R5Q2xvc2VyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3dXAnKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc2libGVOYXYnKTtcbiAgY29uc3QgaGVlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51VHJpZ2dlcicpO1xuICBcbiAgaWYgKGhlZWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1vdXQnKSkge1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vdXQnKTtcbiAgICB9LCBmYWxzZSk7XG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgXG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpOyBcbiAgICB9LCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXNzaWJsZU5hdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuXG59XG5cbmZ1bmN0aW9uIG1vYk5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXNzaWJsZU5hdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAvLyBjb25zdCBzZWFyY2hUb2dnbGU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hUb2dnbGUnKTtcbiAgLy8gY29uc3QgaGVhZGVyU2VhcmNoPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyU2VhcmNoJyk7XG4gIC8vIGNvbnN0IG1vYlNlYXJjaENsb3NlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iU2VhcmNoQ2xvc2UnKTtcbiAgXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QuYWRkKCduYXYtb3V0Jyk7XG4gICAgICBib2R5Q2xvc2VyKCk7XG4gICAgfVxuICB9KTtcbiAgXG59XG5cbmZ1bmN0aW9uIHNldE5hdmlnYXRpb24oKSB7XG4gIHZhciBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNpdGVOYXZcIiksXG4gIGFuY2hvciA9IG5hdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIiksXG4gIGN1cnJlbnQgPSB3aW5kb3cubG9jYXRpb247XG4gIFxuICAvLyBjb25zb2xlLmxvZyhcImFuY2hvciA9IFwiLGFuY2hvcixcImN1cnJlbnQgPSBcIixjdXJyZW50KTtcbiAgXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYW5jaG9yLmxlbmd0aDsgaSsrKSB7XG4gIGlmKGFuY2hvcltpXS5ocmVmID09IGN1cnJlbnQpIHtcbiAgICBhbmNob3JbaV0uY2xhc3NOYW1lID0gXCJzaXRlLW5hdi0tYWN0aXZlXCI7XG4gIH0gZWxzZSB7XG4gICAgYW5jaG9yW2ldLmNsYXNzTmFtZSA9IFwic2l0ZS1uYXYtLW5vdF9hY3RpdmVcIjtcbiAgfVxuICBcbiAgfVxuICBcbn1cblxuLy8gYWNjb3VudCBwYWdlcyBzdHVmZlxuZnVuY3Rpb24gYWNjb3VudHMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmQnKSkge1xuICAgIGxldCBSZWNvdmVyUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVjb3ZlclBhc3N3b3JkJyk7XG4gICAgbGV0IEhpZGVSZWNvdmVyUGFzc3dvcmRMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0hpZGVSZWNvdmVyUGFzc3dvcmRMaW5rJyk7XG4gICAgbGV0IEN1c3RvbWVyTG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0N1c3RvbWVyTG9naW5Gb3JtJyk7XG4gICAgbGV0IFJlY292ZXJQYXNzd29yZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVjb3ZlclBhc3N3b3JkRm9ybScpO1xuICAgIFxuICAgIFJlY292ZXJQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ5YXkgY2xpY2tlZFwiKTtcbiAgICAgIEN1c3RvbWVyTG9naW5Gb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIFJlY292ZXJQYXNzd29yZEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pO1xuICAgIFxuICAgIEhpZGVSZWNvdmVyUGFzc3dvcmRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInlheSBjbGlja2VkXCIpO1xuICAgICAgUmVjb3ZlclBhc3N3b3JkRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBDdXN0b21lckxvZ2luRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9ucygpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvcmRpb25Hcm91cCcpKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyBBY2NvcmRpb25zXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5BY2NvcmRpb24gaDMgYnV0dG9uJykuZm9yRWFjaCggZnVuY3Rpb24odHJpZ2dlcikge1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXJnZXRTZWN0aW9uID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0aGVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0U2VjdGlvbik7XG4gICAgICAgIFxuICAgICAgICBpZih0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09ICd0cnVlJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGlzIHRydWVcIik7XG4gICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICB0aGVTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRpcyBmYWxzZVwiKTtcbiAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdGhlU2VjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gU3d1cCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIEluaXRpYWwgZnVuY3Rpb25zXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zb2xlLmxvZyhcInNjcmlwdHMgaW5pdFwiKTtcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfYXJlYScpKSB7XG4gICAgYWNjb3VudHMoKTtcbiAgIC8vICB0b2dnbGVBZGRyZXNzKCk7XG4gIH1cbiAgdmlld3BvcnQoKTtcbiAgZGlzdGFuY2VTY3JvbGxlZCgpO1xuICBsb2FkZWQoKTtcblxuICBzZXROYXZpZ2F0aW9uKCk7XG4gIG1vYk5hdmlnYXRpb24oKTtcblxuICBuZXh0U2VjdGlvbigpO1xuICBhY2NvcmRpb25zKCk7XG59XG5cblxuZnVuY3Rpb24gdW5sb2FkKCkge1xuICBjbG9zZU5hdigpO1xufVxuXG4vLyBydW4gb25jZSBcbmluaXQoKTtcblxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=