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
  document.body.classList.remove('nohover');
} else {
  document.body.classList.add('nohover');
  document.body.classList.remove('hover');
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
  var nav = document.getElementById('accessibleNav');
  var heeder = document.querySelector('.site-header');
  var button = document.getElementById('menuTrigger');
  var main = document.querySelector('main');
  if (heeder.classList.contains('nav-out')) {
    main.addEventListener("click", function () {
      button.classList.remove('nav-open');
      nav.classList.remove('active');
      heeder.classList.remove('nav-out');
      document.body.classList.remove('mob-nav-out');
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
  document.body.classList.remove('mob-nav-out');
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
      //console.log("close");
      button.classList.remove('nav-open');
      nav.classList.remove('active');
      heeder.classList.remove('nav-out');
      document.body.classList.remove('mob-nav-out');
    } else {
      //console.log("open");
      button.classList.add('nav-open');
      nav.classList.add('active');
      heeder.classList.add('nav-out');
      document.body.classList.add('mob-nav-out');
      bodyCloser();
    }
  });

  // dropdown togglers
  document.querySelectorAll('.site-nav .hasmega').forEach(function (dropLevel1) {
    dropLevel1.querySelector('a.level1_parent').addEventListener('click', function () {
      if (dropLevel1.classList.contains('active')) {
        dropLevel1.classList.remove("active");
      } else {
        dropLevel1.classList.add("active");
      }
    });
  });
  document.querySelectorAll('.site-nav .hasmega .level2_item.isparent').forEach(function (dropLevel2) {
    dropLevel2.addEventListener('click', function () {
      if (dropLevel2.classList.contains('active')) {
        dropLevel2.classList.remove("active");
      } else {
        dropLevel2.classList.add("active");
      }
    });
  });
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
var cartToggle = document.getElementById('cartToggle');
var closeCartx = document.getElementById('closeCartx');
var closeCart = document.getElementById('closeCart');
var sideCart = document.getElementById('sidecart');
cartToggle.addEventListener('click', function (event) {
  if (cartToggle.classList.contains('active')) {
    cartToggle.classList.remove('active');
    sideCart.classList.remove('active');
    document.body.classList.remove("sidecart-active");
    setTimeout(function () {
      sideCart.classList.remove('alive');
    }, 500);
  } else {
    cartToggle.classList.add('active');
    document.body.classList.add("sidecart-active");
    sideCart.classList.add('alive');
    setTimeout(function () {
      sideCart.classList.add('active');
    }, 50);
  }
  event.preventDefault();
});
closeCartx.addEventListener('click', function (event) {
  if (sideCart.classList.contains('active')) {
    sideCart.classList.remove('active');
    document.body.classList.remove("sidecart-active");
    setTimeout(function () {
      sideCart.classList.remove('alive');
    }, 500);
  }
});
closeCart.addEventListener('click', function (event) {
  if (sideCart.classList.contains('active')) {
    sideCart.classList.remove('active');
    document.body.classList.remove("sidecart-active");
    setTimeout(function () {
      sideCart.classList.remove('alive');
    }, 500);
  }
});

// // Filters Toggle
if (document.getElementById('filterToggle')) {
  var filterToggle = document.getElementById('filterToggle');
  var closeFilter = document.getElementById('closeFilter');
  var filterCloser = document.getElementById('filterCloser');
  var filters = document.getElementById('main-collection-filters');
  filterToggle.addEventListener('click', function (event) {
    if (filters.classList.contains('active')) {
      filterToggle.classList.remove('active');
      filterCloser.classList.remove('active');
      filters.classList.remove('active');
      document.body.classList.remove("filter-active");
      setTimeout(function () {
        filters.classList.remove('alive');
      }, 500);
    } else {
      filterToggle.classList.add('active');
      filterCloser.classList.add('active');
      document.body.classList.add("filter-active");
      filters.classList.add('alive');
      setTimeout(function () {
        filters.classList.add('active');
      }, 50);
    }
    //event.preventDefault();
  });

  closeFilter.addEventListener('click', function (event) {
    if (filters.classList.contains('active')) {
      filterToggle.classList.remove('active');
      filterCloser.classList.remove('active');
      filters.classList.remove('active');
      document.body.classList.remove("filter-active");
      setTimeout(function () {
        filters.classList.remove('alive');
      }, 500);
    }
  });
  filterCloser.addEventListener('click', function (event) {
    if (filters.classList.contains('active')) {
      filterToggle.classList.remove('active');
      filterCloser.classList.remove('active');
      filters.classList.remove('active');
      document.body.classList.remove("filter-active");
      setTimeout(function () {
        filters.classList.remove('alive');
      }, 500);
    }
  });
}
;

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

  //setNavigation();
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

/***/ "./src/sass/styles-searchpage.scss":
/*!*****************************************!*\
  !*** ./src/sass/styles-searchpage.scss ***!
  \*****************************************/
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
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/scripts.js ./src/sass/styles-top.scss ./src/sass/styles-bot.scss ./src/sass/styles-article.scss ./src/sass/styles-blog.scss ./src/sass/styles-cart.scss ./src/sass/styles-collections.scss ./src/sass/styles-page.scss ./src/sass/styles-product.scss ./src/sass/styles-swiffy.scss ./src/sass/styles-searchpage.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-swiffy.scss */"./src/sass/styles-swiffy.scss");
module.exports = __webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-searchpage.scss */"./src/sass/styles-searchpage.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLWFydGljbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtYmxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1ib3Quc2Nzcz8yNDg0Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1jYXJ0LnNjc3M/MmU3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtY29sbGVjdGlvbnMuc2Nzcz9mMjY5Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1wYWdlLnNjc3M/YzUwNyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtcHJvZHVjdC5zY3NzPzBiNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLXNlYXJjaHBhZ2Uuc2Nzcz81YTdiIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1zd2lmZnkuc2Nzcz8wNGExIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy10b3Auc2Nzcz9kZGExIl0sIm5hbWVzIjpbIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0TmV4dFNpYmxpbmciLCJlbGVtIiwic2VsZWN0b3IiLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImdldFNpYmxpbmdzIiwic2libGluZ3MiLCJwYXJlbnROb2RlIiwiZmlyc3RDaGlsZCIsIm5vZGVUeXBlIiwicHVzaCIsIm5leHRTaWJsaW5nIiwiaXNJblZpZXdwb3J0IiwiZGlzdGFuY2UiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImlzSW5WaWV3cG9ydFRvcCIsInRocm90dGxlIiwiZm4iLCJ3YWl0IiwidGltZSIsIkRhdGUiLCJub3ciLCJkaXN0YW5jZVNjcm9sbGVkIiwicGFnZVlPZmZzZXQiLCJuZXh0U2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwibmV4dEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0UGFyZW50IiwiY2xvc2VzdCIsIm5leHRQYXJlbnQiLCJzY3JvbGxJbnRvVmlldyIsInZpZXdwb3J0IiwibG9hZGVkIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwibG9hZGVkZWQiLCJjb250YWlucyIsImJvZHlDbG9zZXIiLCJuYXYiLCJoZWVkZXIiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwibWFpbiIsImV2Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xvc2VOYXYiLCJtb2JOYXZpZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wTGV2ZWwxIiwiZHJvcExldmVsMiIsImFjY291bnRzIiwiUmVjb3ZlclBhc3N3b3JkIiwiSGlkZVJlY292ZXJQYXNzd29yZExpbmsiLCJDdXN0b21lckxvZ2luRm9ybSIsIlJlY292ZXJQYXNzd29yZEZvcm0iLCJjb25zb2xlIiwibG9nIiwiYWNjb3JkaW9ucyIsInRyaWdnZXIiLCJ0YXJnZXRTZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwidGhlU2VjdGlvbiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNhcnRUb2dnbGUiLCJjbG9zZUNhcnR4IiwiY2xvc2VDYXJ0Iiwic2lkZUNhcnQiLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlclRvZ2dsZSIsImNsb3NlRmlsdGVyIiwiZmlsdGVyQ2xvc2VyIiwiZmlsdGVycyIsImluaXQiLCJ1bmxvYWQiXSwibWFwcGluZ3MiOiI7UUFB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QixJQUFHMUUsUUFBUSxDQUFDeUQsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFO0lBQzFDVyxRQUFRLEVBQUU7SUFDWDtFQUNEOztFQUNBcEIsUUFBUSxFQUFFO0VBQ1ZWLGdCQUFnQixFQUFFO0VBQ2xCVyxNQUFNLEVBQUU7O0VBRVI7RUFDQWMsYUFBYSxFQUFFO0VBRWZ2QixXQUFXLEVBQUU7RUFDYm1DLFVBQVUsRUFBRTtBQUNkO0FBR0EsU0FBU2lCLE1BQU0sR0FBRztFQUNoQjlCLFFBQVEsRUFBRTtBQUNaOztBQUVBO0FBQ0E2QixJQUFJLEVBQUUsQzs7Ozs7Ozs7Ozs7QUNyWU4seUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG4vLyBIZWxwZXJzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcoaG92ZXI6IGhvdmVyKScpLm1hdGNoZXMpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vaG92ZXInKTtcbn0gZWxzZSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9ob3ZlcicpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG59XG5cbnZhciBnZXROZXh0U2libGluZyA9IGZ1bmN0aW9uIChlbGVtLCBzZWxlY3Rvcikge1xuXHQvLyBHZXQgdGhlIG5leHQgc2libGluZyBlbGVtZW50XG5cdHZhciBzaWJsaW5nID0gZWxlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdC8vIElmIHRoZXJlJ3Mgbm8gc2VsZWN0b3IsIHJldHVybiB0aGUgZmlyc3Qgc2libGluZ1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2libGluZztcblx0Ly8gSWYgdGhlIHNpYmxpbmcgbWF0Y2hlcyBvdXIgc2VsZWN0b3IsIHVzZSBpdFxuXHQvLyBJZiBub3QsIGp1bXAgdG8gdGhlIG5leHQgc2libGluZyBhbmQgY29udGludWUgdGhlIGxvb3Bcblx0d2hpbGUgKHNpYmxpbmcpIHtcblx0XHRpZiAoc2libGluZy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHNpYmxpbmc7XG5cdFx0c2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nXG5cdH1cbn07XG5cbnZhciBnZXRQcmV2aW91c1NpYmxpbmcgPSBmdW5jdGlvbiAoZWxlbSwgc2VsZWN0b3IpIHtcblxuXHQvLyBHZXQgdGhlIG5leHQgc2libGluZyBlbGVtZW50XG5cdHZhciBzaWJsaW5nID0gZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG5cdC8vIElmIHRoZXJlJ3Mgbm8gc2VsZWN0b3IsIHJldHVybiB0aGUgZmlyc3Qgc2libGluZ1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2libGluZztcblxuXHQvLyBJZiB0aGUgc2libGluZyBtYXRjaGVzIG91ciBzZWxlY3RvciwgdXNlIGl0XG5cdC8vIElmIG5vdCwganVtcCB0byB0aGUgbmV4dCBzaWJsaW5nIGFuZCBjb250aW51ZSB0aGUgbG9vcFxuXHR3aGlsZSAoc2libGluZykge1xuXHRcdGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gc2libGluZztcblx0XHRzaWJsaW5nID0gc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHR9XG5cbn07XG5cbnZhciBnZXRTaWJsaW5ncyA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdC8vIFNldHVwIHNpYmxpbmdzIGFycmF5IGFuZCBnZXQgdGhlIGZpcnN0IHNpYmxpbmdcblx0dmFyIHNpYmxpbmdzID0gW107XG5cdHZhciBzaWJsaW5nID0gZWxlbS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG5cdC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XG5cdHdoaWxlIChzaWJsaW5nKSB7XG5cdFx0aWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbSkge1xuXHRcdFx0c2libGluZ3MucHVzaChzaWJsaW5nKTtcblx0XHR9XG5cdFx0c2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG5cdH1cblx0cmV0dXJuIHNpYmxpbmdzO1xufTtcblxuLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcbiAqIChjKSAyMDE3IENocmlzIEZlcmRpbmFuZGksIE1JVCBMaWNlbnNlLCBodHRwczovL2dvbWFrZXRoaW5ncy5jb21cbiAqIEBwYXJhbSAge05vZGV9ICAgIGVsZW0gVGhlIGVsZW1lbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgUmV0dXJucyB0cnVlIGlmIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gKi9cbnZhciBpc0luVmlld3BvcnQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHR2YXIgZGlzdGFuY2UgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRyZXR1cm4gKFxuXHRcdGRpc3RhbmNlLnRvcCA+PSAwICYmXG5cdFx0ZGlzdGFuY2UubGVmdCA+PSAwICYmXG5cdFx0ZGlzdGFuY2UuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcblx0XHRkaXN0YW5jZS5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuXHQpO1xufTtcbi8vIEFzIGFib3ZlIGp1c3QgY2FsY3VsYXRlcyBmcm9tIHRoZSB0b3BcbnZhciBpc0luVmlld3BvcnRUb3AgPSBmdW5jdGlvbiAoZWxlbSkge1xuICB2YXIgZGlzdGFuY2UgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gKFxuICAgIGRpc3RhbmNlLmJvdHRvbSA+PSAwICYmXG4gICAgZGlzdGFuY2UubGVmdCA+PSAwICYmXG4gICAgZGlzdGFuY2UudG9wIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICBkaXN0YW5jZS5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICApO1xufTtcblxuLy8gd2hlbiBzY3JvbGxpbmcgbGV0cyBub3Qga2lsbCB0aGUgcHJvY2Vzc29yXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgd2FpdCkge1xuICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoKHRpbWUgKyB3YWl0IC0gRGF0ZS5ub3coKSkgPCAwKSB7XG4gICAgICBmbigpO1xuICAgICAgdGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gTmF2aWdhdGlvbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuZnVuY3Rpb24gZGlzdGFuY2VTY3JvbGxlZCgpIHtcbiAgaWYgKHBhZ2VZT2Zmc2V0ID4gMzIpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoaWRlTmF2XCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVOYXZcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV4dFNlY3Rpb24oKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0QnV0dG9uJykpIHtcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRCdXR0b24nKTtcbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY2xvc2VzdFBhcmVudCA9IG5leHRCdXR0b24uY2xvc2VzdCgnLnNob3BpZnktc2VjdGlvbicpO1xuICAgICAgbGV0IG5leHRQYXJlbnQgPSBnZXROZXh0U2libGluZyhjbG9zZXN0UGFyZW50KTtcbiAgICAgIG5leHRQYXJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2aWV3cG9ydCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhyb3R0bGUoZGlzdGFuY2VTY3JvbGxlZCwgMTApKTtcbn1cblxuZnVuY3Rpb24gbG9hZGVkKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH0sIDEpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGxvYWRlZGVkKCkge1xuICAgIGlmKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2FkaW5nJykpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJvZHlDbG9zZXIoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3NpYmxlTmF2Jyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRyaWdnZXInKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgaWYgKGhlZWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1vdXQnKSkge1xuICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9iLW5hdi1vdXQnKTtcbiAgICB9LCBmYWxzZSk7XG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgXG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpOyBcbiAgICB9LCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXNzaWJsZU5hdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2ItbmF2LW91dCcpO1xuXG59XG5cbmZ1bmN0aW9uIG1vYk5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXNzaWJsZU5hdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAvLyBjb25zdCBzZWFyY2hUb2dnbGU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hUb2dnbGUnKTtcbiAgLy8gY29uc3QgaGVhZGVyU2VhcmNoPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyU2VhcmNoJyk7XG4gIC8vIGNvbnN0IG1vYlNlYXJjaENsb3NlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iU2VhcmNoQ2xvc2UnKTtcbiAgXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgLy9jb25zb2xlLmxvZyhcImNsb3NlXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2ItbmF2LW91dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwib3BlblwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5hZGQoJ25hdi1vdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9iLW5hdi1vdXQnKTtcbiAgICAgIGJvZHlDbG9zZXIoKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgLy8gZHJvcGRvd24gdG9nZ2xlcnNcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpdGUtbmF2IC5oYXNtZWdhJykuZm9yRWFjaCggZnVuY3Rpb24oZHJvcExldmVsMSkge1xuICAgIGRyb3BMZXZlbDEucXVlcnlTZWxlY3RvcignYS5sZXZlbDFfcGFyZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICAgIGlmIChkcm9wTGV2ZWwxLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZHJvcExldmVsMS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcExldmVsMS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaXRlLW5hdiAuaGFzbWVnYSAubGV2ZWwyX2l0ZW0uaXNwYXJlbnQnKS5mb3JFYWNoKCBmdW5jdGlvbihkcm9wTGV2ZWwyKSB7XG4gICAgZHJvcExldmVsMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgaWYgKGRyb3BMZXZlbDIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBkcm9wTGV2ZWwyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wTGV2ZWwyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBcbn1cblxuXG4vLyBhY2NvdW50IHBhZ2VzIHN0dWZmXG5mdW5jdGlvbiBhY2NvdW50cygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZCcpKSB7XG4gICAgbGV0IFJlY292ZXJQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmQnKTtcbiAgICBsZXQgSGlkZVJlY292ZXJQYXNzd29yZExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSGlkZVJlY292ZXJQYXNzd29yZExpbmsnKTtcbiAgICBsZXQgQ3VzdG9tZXJMb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3VzdG9tZXJMb2dpbkZvcm0nKTtcbiAgICBsZXQgUmVjb3ZlclBhc3N3b3JkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmRGb3JtJyk7XG4gICAgXG4gICAgUmVjb3ZlclBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInlheSBjbGlja2VkXCIpO1xuICAgICAgQ3VzdG9tZXJMb2dpbkZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgUmVjb3ZlclBhc3N3b3JkRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSk7XG4gICAgXG4gICAgSGlkZVJlY292ZXJQYXNzd29yZExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieWF5IGNsaWNrZWRcIik7XG4gICAgICBSZWNvdmVyUGFzc3dvcmRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIEN1c3RvbWVyTG9naW5Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25zKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY29yZGlvbkdyb3VwJykpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIEFjY29yZGlvbnNcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkFjY29yZGlvbiBoMyBidXR0b24nKS5mb3JFYWNoKCBmdW5jdGlvbih0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IHRhcmdldFNlY3Rpb24gPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRoZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRTZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aXMgdHJ1ZVwiKTtcbiAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgIHRoZVNlY3Rpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGlzIGZhbHNlXCIpO1xuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB0aGVTZWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5sZXQgY2FydFRvZ2dsZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnRUb2dnbGUnKTtcbmxldCBjbG9zZUNhcnR4PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VDYXJ0eCcpO1xubGV0IGNsb3NlQ2FydD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQ2FydCcpO1xubGV0IHNpZGVDYXJ0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWNhcnQnKTtcblxuY2FydFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gIGlmIChjYXJ0VG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBjYXJ0VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNpZGVjYXJ0LWFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICB9LCA1MDApO1xuICB9IGVsc2Uge1xuICAgIGNhcnRUb2dnbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic2lkZWNhcnQtYWN0aXZlXCIpO1xuICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5hZGQoJ2FsaXZlJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0sIDUwKTtcbiAgfVxuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY2xvc2VDYXJ0eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gIGlmIChzaWRlQ2FydC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWNhcnQtYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgIH0sIDUwMCk7XG4gIH1cbn0pO1xuY2xvc2VDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgaWYgKHNpZGVDYXJ0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlY2FydC1hY3RpdmVcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgfSwgNTAwKTtcbiAgfVxufSk7XG5cbi8vIC8vIEZpbHRlcnMgVG9nZ2xlXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlclRvZ2dsZScpKSB7XG4gIGxldCBmaWx0ZXJUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyVG9nZ2xlJyk7XG4gIGxldCBjbG9zZUZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUZpbHRlcicpO1xuICBsZXQgZmlsdGVyQ2xvc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlckNsb3NlcicpO1xuICBsZXQgZmlsdGVycz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29sbGVjdGlvbi1maWx0ZXJzJyk7XG4gIFxuICBmaWx0ZXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGlmIChmaWx0ZXJzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGZpbHRlclRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGZpbHRlckNsb3Nlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVyQ2xvc2VyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyLWFjdGl2ZVwiKTtcbiAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LmFkZCgnYWxpdmUnKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9LCA1MCk7XG4gICAgICBcbiAgICB9XG4gICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBjbG9zZUZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgaWYgKGZpbHRlcnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZmlsdGVyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVyQ2xvc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlci1hY3RpdmVcIik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfSk7XG4gIGZpbHRlckNsb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgaWYgKGZpbHRlcnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZmlsdGVyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVyQ2xvc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlci1hY3RpdmVcIik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cbi8vIFN3dXAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBJbml0aWFsIGZ1bmN0aW9uc1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc29sZS5sb2coXCJzY3JpcHRzIGluaXRcIik7XG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X2FyZWEnKSkge1xuICAgIGFjY291bnRzKCk7XG4gICAvLyAgdG9nZ2xlQWRkcmVzcygpO1xuICB9XG4gIHZpZXdwb3J0KCk7XG4gIGRpc3RhbmNlU2Nyb2xsZWQoKTtcbiAgbG9hZGVkKCk7XG5cbiAgLy9zZXROYXZpZ2F0aW9uKCk7XG4gIG1vYk5hdmlnYXRpb24oKTtcblxuICBuZXh0U2VjdGlvbigpO1xuICBhY2NvcmRpb25zKCk7XG59XG5cblxuZnVuY3Rpb24gdW5sb2FkKCkge1xuICBjbG9zZU5hdigpO1xufVxuXG4vLyBydW4gb25jZSBcbmluaXQoKTtcblxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9