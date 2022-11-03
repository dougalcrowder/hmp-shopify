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

/***/ "./src/sass/styles-accounts.scss":
/*!***************************************!*\
  !*** ./src/sass/styles-accounts.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/scripts.js ./src/sass/styles-top.scss ./src/sass/styles-bot.scss ./src/sass/styles-article.scss ./src/sass/styles-blog.scss ./src/sass/styles-cart.scss ./src/sass/styles-collections.scss ./src/sass/styles-page.scss ./src/sass/styles-product.scss ./src/sass/styles-swiffy.scss ./src/sass/styles-searchpage.scss ./src/sass/styles-accounts.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
__webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-searchpage.scss */"./src/sass/styles-searchpage.scss");
module.exports = __webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/sass/styles-accounts.scss */"./src/sass/styles-accounts.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLWFjY291bnRzLnNjc3M/ZmJhMiIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtYXJ0aWNsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1ibG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLWJvdC5zY3NzPzI0ODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLWNhcnQuc2Nzcz8yZTdlIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1jb2xsZWN0aW9ucy5zY3NzP2YyNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLXBhZ2Uuc2Nzcz9jNTA3Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1wcm9kdWN0LnNjc3M/MGI2NiIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtc2VhcmNocGFnZS5zY3NzPzVhN2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLXN3aWZmeS5zY3NzPzA0YTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLXRvcC5zY3NzP2RkYTEiXSwibmFtZXMiOlsid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJnZXROZXh0U2libGluZyIsImVsZW0iLCJzZWxlY3RvciIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJnZXRQcmV2aW91c1NpYmxpbmciLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiZ2V0U2libGluZ3MiLCJzaWJsaW5ncyIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJwdXNoIiwibmV4dFNpYmxpbmciLCJpc0luVmlld3BvcnQiLCJkaXN0YW5jZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiaXNJblZpZXdwb3J0VG9wIiwidGhyb3R0bGUiLCJmbiIsIndhaXQiLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImRpc3RhbmNlU2Nyb2xsZWQiLCJwYWdlWU9mZnNldCIsIm5leHRTZWN0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3Nlc3RQYXJlbnQiLCJjbG9zZXN0IiwibmV4dFBhcmVudCIsInNjcm9sbEludG9WaWV3Iiwidmlld3BvcnQiLCJsb2FkZWQiLCJldmVudCIsInNldFRpbWVvdXQiLCJsb2FkZWRlZCIsImNvbnRhaW5zIiwiYm9keUNsb3NlciIsIm5hdiIsImhlZWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJtYWluIiwiZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJjbG9zZU5hdiIsIm1vYk5hdmlnYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRyb3BMZXZlbDEiLCJkcm9wTGV2ZWwyIiwiYWNjb3VudHMiLCJSZWNvdmVyUGFzc3dvcmQiLCJIaWRlUmVjb3ZlclBhc3N3b3JkTGluayIsIkN1c3RvbWVyTG9naW5Gb3JtIiwiUmVjb3ZlclBhc3N3b3JkRm9ybSIsImNvbnNvbGUiLCJsb2ciLCJhY2NvcmRpb25zIiwidHJpZ2dlciIsInRhcmdldFNlY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJ0aGVTZWN0aW9uIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FydFRvZ2dsZSIsImNsb3NlQ2FydHgiLCJjbG9zZUNhcnQiLCJzaWRlQ2FydCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyVG9nZ2xlIiwiY2xvc2VGaWx0ZXIiLCJmaWx0ZXJDbG9zZXIiLCJmaWx0ZXJzIiwiaW5pdCIsInVubG9hZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBSUE7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLENBQUNDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7RUFDL0NDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDcENILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDM0MsQ0FBQyxNQUFNO0VBQ0xKLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDdENILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDekM7QUFFQSxJQUFJQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBYUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7RUFDOUM7RUFDQSxJQUFJQyxPQUFPLEdBQUdGLElBQUksQ0FBQ0csa0JBQWtCO0VBQ3JDO0VBQ0EsSUFBSSxDQUFDRixRQUFRLEVBQUUsT0FBT0MsT0FBTztFQUM3QjtFQUNBO0VBQ0EsT0FBT0EsT0FBTyxFQUFFO0lBQ2YsSUFBSUEsT0FBTyxDQUFDVCxPQUFPLENBQUNRLFFBQVEsQ0FBQyxFQUFFLE9BQU9DLE9BQU87SUFDN0NBLE9BQU8sR0FBR0EsT0FBTyxDQUFDQyxrQkFBa0I7RUFDckM7QUFDRCxDQUFDO0FBRUQsSUFBSUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQixDQUFhSixJQUFJLEVBQUVDLFFBQVEsRUFBRTtFQUVsRDtFQUNBLElBQUlDLE9BQU8sR0FBR0YsSUFBSSxDQUFDSyxzQkFBc0I7O0VBRXpDO0VBQ0EsSUFBSSxDQUFDSixRQUFRLEVBQUUsT0FBT0MsT0FBTzs7RUFFN0I7RUFDQTtFQUNBLE9BQU9BLE9BQU8sRUFBRTtJQUNmLElBQUlBLE9BQU8sQ0FBQ1QsT0FBTyxDQUFDUSxRQUFRLENBQUMsRUFBRSxPQUFPQyxPQUFPO0lBQzdDQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0csc0JBQXNCO0VBQ3pDO0FBRUQsQ0FBQztBQUVELElBQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQWFOLElBQUksRUFBRTtFQUNqQztFQUNBLElBQUlPLFFBQVEsR0FBRyxFQUFFO0VBQ2pCLElBQUlMLE9BQU8sR0FBR0YsSUFBSSxDQUFDUSxVQUFVLENBQUNDLFVBQVU7RUFDeEM7RUFDQSxPQUFPUCxPQUFPLEVBQUU7SUFDZixJQUFJQSxPQUFPLENBQUNRLFFBQVEsS0FBSyxDQUFDLElBQUlSLE9BQU8sS0FBS0YsSUFBSSxFQUFFO01BQy9DTyxRQUFRLENBQUNJLElBQUksQ0FBQ1QsT0FBTyxDQUFDO0lBQ3ZCO0lBQ0FBLE9BQU8sR0FBR0EsT0FBTyxDQUFDVSxXQUFXO0VBQzlCO0VBQ0EsT0FBT0wsUUFBUTtBQUNoQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlNLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQWFiLElBQUksRUFBRTtFQUNsQyxJQUFJYyxRQUFRLEdBQUdkLElBQUksQ0FBQ2UscUJBQXFCLEVBQUU7RUFDM0MsT0FDQ0QsUUFBUSxDQUFDRSxHQUFHLElBQUksQ0FBQyxJQUNqQkYsUUFBUSxDQUFDRyxJQUFJLElBQUksQ0FBQyxJQUNsQkgsUUFBUSxDQUFDSSxNQUFNLEtBQUszQixNQUFNLENBQUM0QixXQUFXLElBQUl6QixRQUFRLENBQUMwQixlQUFlLENBQUNDLFlBQVksQ0FBQyxJQUNoRlAsUUFBUSxDQUFDUSxLQUFLLEtBQUsvQixNQUFNLENBQUNnQyxVQUFVLElBQUk3QixRQUFRLENBQUMwQixlQUFlLENBQUNJLFdBQVcsQ0FBQztBQUUvRSxDQUFDO0FBQ0Q7QUFDQSxJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsQ0FBYXpCLElBQUksRUFBRTtFQUNwQyxJQUFJYyxRQUFRLEdBQUdkLElBQUksQ0FBQ2UscUJBQXFCLEVBQUU7RUFDM0MsT0FDRUQsUUFBUSxDQUFDSSxNQUFNLElBQUksQ0FBQyxJQUNwQkosUUFBUSxDQUFDRyxJQUFJLElBQUksQ0FBQyxJQUNsQkgsUUFBUSxDQUFDRSxHQUFHLEtBQUt6QixNQUFNLENBQUM0QixXQUFXLElBQUl6QixRQUFRLENBQUMwQixlQUFlLENBQUNDLFlBQVksQ0FBQyxJQUM3RVAsUUFBUSxDQUFDUSxLQUFLLEtBQUsvQixNQUFNLENBQUNnQyxVQUFVLElBQUk3QixRQUFRLENBQUMwQixlQUFlLENBQUNJLFdBQVcsQ0FBQztBQUVqRixDQUFDOztBQUVEO0FBQ0EsU0FBU0UsUUFBUSxDQUFDQyxFQUFFLEVBQUVDLElBQUksRUFBRTtFQUMxQixJQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0VBQ3JCLE9BQU8sWUFBVztJQUNoQixJQUFLRixJQUFJLEdBQUdELElBQUksR0FBR0UsSUFBSSxDQUFDQyxHQUFHLEVBQUUsR0FBSSxDQUFDLEVBQUU7TUFDbENKLEVBQUUsRUFBRTtNQUNKRSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0lBQ25CO0VBQ0YsQ0FBQztBQUNIOztBQUdBO0FBQ0E7O0FBR0EsU0FBU0MsZ0JBQWdCLEdBQUc7RUFDMUIsSUFBSUMsV0FBVyxHQUFHLEVBQUUsRUFBRTtJQUNwQnZDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDeEMsQ0FBQyxNQUFNO0lBQ0xILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDM0M7QUFDRjtBQUVBLFNBQVNvQyxXQUFXLEdBQUc7RUFDckIsSUFBR3hDLFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtJQUN4QyxJQUFNQyxVQUFVLEdBQUcxQyxRQUFRLENBQUN5QyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQ3hEQyxVQUFVLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO01BQy9DLElBQUlDLGFBQWEsR0FBR0YsVUFBVSxDQUFDRyxPQUFPLENBQUMsa0JBQWtCLENBQUM7TUFDMUQsSUFBSUMsVUFBVSxHQUFHekMsY0FBYyxDQUFDdUMsYUFBYSxDQUFDO01BQzlDRSxVQUFVLENBQUNDLGNBQWMsRUFBRTtJQUM3QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsU0FBU0MsUUFBUSxHQUFHO0VBQ2xCbkQsTUFBTSxDQUFDOEMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFWCxRQUFRLENBQUNNLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25FO0FBRUEsU0FBU1csTUFBTSxHQUFHO0VBQ2hCcEQsTUFBTSxDQUFDOEMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQUNPLEtBQUssRUFBSztJQUN6Q2xELFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDckNnRCxVQUFVLENBQUMsWUFBVztNQUNwQm5ELFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNQLENBQUMsQ0FBQztBQUNKO0FBQ0EsU0FBU2dELFFBQVEsR0FBRztFQUNoQixJQUFHcEQsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ21ELFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtJQUM5Q3JELFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDekNKLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDdkM7QUFDSjtBQUVBLFNBQVNtRCxVQUFVLEdBQUc7RUFDcEIsSUFBTUMsR0FBRyxHQUFHdkQsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLGVBQWUsQ0FBQztFQUNwRCxJQUFNZSxNQUFNLEdBQUd4RCxRQUFRLENBQUN5RCxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQ3JELElBQU1DLE1BQU0sR0FBRzFELFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDckQsSUFBTWtCLElBQUksR0FBRzNELFFBQVEsQ0FBQ3lELGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDM0MsSUFBSUQsTUFBTSxDQUFDdEQsU0FBUyxDQUFDbUQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQ3hDTSxJQUFJLENBQUNoQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUN6Q2UsTUFBTSxDQUFDeEQsU0FBUyxDQUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDO01BQ25DbUQsR0FBRyxDQUFDckQsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQzlCb0QsTUFBTSxDQUFDdEQsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ2xDSixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQy9DLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDVG1ELEdBQUcsQ0FBQ1osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVpQixFQUFFLEVBQUU7TUFFeENBLEVBQUUsQ0FBQ0MsZUFBZSxFQUFFO0lBQ3hCLENBQUMsRUFBRSxLQUFLLENBQUM7RUFDWDtBQUNGO0FBRUEsU0FBU0MsUUFBUSxHQUFHO0VBQ2xCLElBQU1QLEdBQUcsR0FBR3ZELFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyxlQUFlLENBQUM7RUFDcEQsSUFBTWlCLE1BQU0sR0FBRzFELFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDckQsSUFBTWUsTUFBTSxHQUFHeEQsUUFBUSxDQUFDeUQsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUNqREMsTUFBTSxDQUFDeEQsU0FBUyxDQUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDO0VBQ25DbUQsR0FBRyxDQUFDckQsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQzlCb0QsTUFBTSxDQUFDdEQsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO0VBQ2xDSixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsYUFBYSxDQUFDO0FBRW5EO0FBRUEsU0FBUzJELGFBQWEsR0FBRztFQUN2QixJQUFNUixHQUFHLEdBQUd2RCxRQUFRLENBQUN5QyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQ3BELElBQU1pQixNQUFNLEdBQUcxRCxRQUFRLENBQUN5QyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JELElBQU1lLE1BQU0sR0FBR3hELFFBQVEsQ0FBQ3lELGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDckQ7RUFDQTtFQUNBOztFQUVBQyxNQUFNLENBQUNmLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQzFDLElBQUlZLEdBQUcsQ0FBQ3JELFNBQVMsQ0FBQ21ELFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNwQztNQUNBSyxNQUFNLENBQUN4RCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUM7TUFDbkNtRCxHQUFHLENBQUNyRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDOUJvRCxNQUFNLENBQUN0RCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDbENKLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDL0MsQ0FBQyxNQUFNO01BQ0w7TUFDQXNELE1BQU0sQ0FBQ3hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUNoQ29ELEdBQUcsQ0FBQ3JELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUMzQnFELE1BQU0sQ0FBQ3RELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUMvQkgsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUMxQ21ELFVBQVUsRUFBRTtJQUNkO0VBQ0YsQ0FBQyxDQUFDOztFQUVGO0VBQ0F0RCxRQUFRLENBQUNnRSxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDQyxPQUFPLENBQUUsVUFBU0MsVUFBVSxFQUFFO0lBQzVFQSxVQUFVLENBQUNULGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDZCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztNQUMvRSxJQUFJdUIsVUFBVSxDQUFDaEUsU0FBUyxDQUFDbUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzNDYSxVQUFVLENBQUNoRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDdkMsQ0FBQyxNQUFNO1FBQ0w4RCxVQUFVLENBQUNoRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDcEM7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFFRkgsUUFBUSxDQUFDZ0UsZ0JBQWdCLENBQUMsMENBQTBDLENBQUMsQ0FBQ0MsT0FBTyxDQUFFLFVBQVNFLFVBQVUsRUFBRTtJQUNsR0EsVUFBVSxDQUFDeEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7TUFDOUMsSUFBSXdCLFVBQVUsQ0FBQ2pFLFNBQVMsQ0FBQ21ELFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMzQ2MsVUFBVSxDQUFDakUsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3ZDLENBQUMsTUFBTTtRQUNMK0QsVUFBVSxDQUFDakUsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQ3BDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBRUo7O0FBR0E7QUFDQSxTQUFTaUUsUUFBUSxHQUFHO0VBQ2xCLElBQUdwRSxRQUFRLENBQUN5QyxjQUFjLENBQUMsaUJBQWlCLENBQUMsRUFBRTtJQUM3QyxJQUFJNEIsZUFBZSxHQUFHckUsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0lBQ2hFLElBQUk2Qix1QkFBdUIsR0FBR3RFLFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQztJQUNoRixJQUFJOEIsaUJBQWlCLEdBQUd2RSxRQUFRLENBQUN5QyxjQUFjLENBQUMsbUJBQW1CLENBQUM7SUFDcEUsSUFBSStCLG1CQUFtQixHQUFHeEUsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDO0lBRXhFNEIsZUFBZSxDQUFDMUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7TUFDbkQ4QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDMUJILGlCQUFpQixDQUFDckUsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ3ZDcUUsbUJBQW1CLENBQUN0RSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0lBRUZrRSx1QkFBdUIsQ0FBQzNCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO01BQzNEOEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO01BQzFCRixtQkFBbUIsQ0FBQ3RFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUN6Q29FLGlCQUFpQixDQUFDckUsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxTQUFTdUUsVUFBVSxHQUFHO0VBQ3BCLElBQUkzRSxRQUFRLENBQUN5QyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtJQUM3Q2dDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQy9CMUUsUUFBUSxDQUFDZ0UsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsT0FBTyxDQUFFLFVBQVNXLE9BQU8sRUFBRTtNQUMzRUEsT0FBTyxDQUFDakMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7UUFFNUMsSUFBSWtDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxZQUFZLENBQUMsZUFBZSxDQUFDO1FBRXpELElBQUlDLFVBQVUsR0FBRy9FLFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQ29DLGFBQWEsQ0FBQztRQUV2RCxJQUFHRCxPQUFPLENBQUNFLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxNQUFNLEVBQUU7VUFDbERMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztVQUN2QkUsT0FBTyxDQUFDSSxZQUFZLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQztVQUM5Q0QsVUFBVSxDQUFDQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUMzQyxDQUFDLE1BQU07VUFDTFAsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1VBQ3hCRSxPQUFPLENBQUNJLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDO1VBQzdDRCxVQUFVLENBQUNFLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDdEM7TUFFRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsSUFBSUMsVUFBVSxHQUFFbEYsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUNyRCxJQUFJMEMsVUFBVSxHQUFFbkYsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUNyRCxJQUFJMkMsU0FBUyxHQUFFcEYsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztBQUNuRCxJQUFJNEMsUUFBUSxHQUFFckYsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztBQUVqRHlDLFVBQVUsQ0FBQ3ZDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVTyxLQUFLLEVBQUM7RUFDbkQsSUFBSWdDLFVBQVUsQ0FBQ2hGLFNBQVMsQ0FBQ21ELFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUMzQzZCLFVBQVUsQ0FBQ2hGLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNyQ2lGLFFBQVEsQ0FBQ25GLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNuQ0osUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQ2pEK0MsVUFBVSxDQUFDLFlBQVc7TUFDcEJrQyxRQUFRLENBQUNuRixTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUMsTUFBTTtJQUNMOEUsVUFBVSxDQUFDaEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2xDSCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUNrRixRQUFRLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDL0JnRCxVQUFVLENBQUMsWUFBVztNQUNwQmtDLFFBQVEsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ1I7RUFDRCtDLEtBQUssQ0FBQ29DLGNBQWMsRUFBRTtBQUN2QixDQUFDLENBQUM7QUFFRkgsVUFBVSxDQUFDeEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVPLEtBQUssRUFBQztFQUNuRCxJQUFJbUMsUUFBUSxDQUFDbkYsU0FBUyxDQUFDbUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQ3pDZ0MsUUFBUSxDQUFDbkYsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ25DSixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDakQrQyxVQUFVLENBQUMsWUFBVztNQUNwQmtDLFFBQVEsQ0FBQ25GLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNwQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1Q7QUFDRixDQUFDLENBQUM7QUFDRmdGLFNBQVMsQ0FBQ3pDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVTyxLQUFLLEVBQUM7RUFDbEQsSUFBSW1DLFFBQVEsQ0FBQ25GLFNBQVMsQ0FBQ21ELFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUN6Q2dDLFFBQVEsQ0FBQ25GLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNuQ0osUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQ2pEK0MsVUFBVSxDQUFDLFlBQVc7TUFDcEJrQyxRQUFRLENBQUNuRixTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNUO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBSUosUUFBUSxDQUFDeUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO0VBQzNDLElBQUk4QyxZQUFZLEdBQUd2RixRQUFRLENBQUN5QyxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQzFELElBQUkrQyxXQUFXLEdBQUd4RixRQUFRLENBQUN5QyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3hELElBQUlnRCxZQUFZLEdBQUd6RixRQUFRLENBQUN5QyxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQzFELElBQUlpRCxPQUFPLEdBQUUxRixRQUFRLENBQUN5QyxjQUFjLENBQUMseUJBQXlCLENBQUM7RUFFL0Q4QyxZQUFZLENBQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVU8sS0FBSyxFQUFDO0lBQ3JELElBQUl3QyxPQUFPLENBQUN4RixTQUFTLENBQUNtRCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7TUFDeENrQyxZQUFZLENBQUNyRixTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDdkNxRixZQUFZLENBQUN2RixTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDdkNzRixPQUFPLENBQUN4RixTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDbENKLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxlQUFlLENBQUM7TUFDL0MrQyxVQUFVLENBQUMsWUFBVztRQUNwQnVDLE9BQU8sQ0FBQ3hGLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNuQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1QsQ0FBQyxNQUFNO01BQ0xtRixZQUFZLENBQUNyRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDcENzRixZQUFZLENBQUN2RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDcENILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7TUFDNUN1RixPQUFPLENBQUN4RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDOUJnRCxVQUFVLENBQUMsWUFBVztRQUNwQnVDLE9BQU8sQ0FBQ3hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNqQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRVI7SUFDRDtFQUNELENBQUMsQ0FBQzs7RUFDRnFGLFdBQVcsQ0FBQzdDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVTyxLQUFLLEVBQUM7SUFDcEQsSUFBSXdDLE9BQU8sQ0FBQ3hGLFNBQVMsQ0FBQ21ELFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUN4Q2tDLFlBQVksQ0FBQ3JGLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUN2Q3FGLFlBQVksQ0FBQ3ZGLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUN2Q3NGLE9BQU8sQ0FBQ3hGLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNsQ0osUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGVBQWUsQ0FBQztNQUMvQytDLFVBQVUsQ0FBQyxZQUFXO1FBQ3BCdUMsT0FBTyxDQUFDeEYsU0FBUyxDQUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ25DLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDVDtFQUNGLENBQUMsQ0FBQztFQUNGcUYsWUFBWSxDQUFDOUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVPLEtBQUssRUFBQztJQUNyRCxJQUFJd0MsT0FBTyxDQUFDeEYsU0FBUyxDQUFDbUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO01BQ3hDa0MsWUFBWSxDQUFDckYsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3ZDcUYsWUFBWSxDQUFDdkYsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3ZDc0YsT0FBTyxDQUFDeEYsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ2xDSixRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsZUFBZSxDQUFDO01BQy9DK0MsVUFBVSxDQUFDLFlBQVc7UUFDcEJ1QyxPQUFPLENBQUN4RixTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNUO0VBQ0YsQ0FBQyxDQUFDO0FBQ0o7QUFBQzs7QUFHRDtBQUNBOztBQUVBO0FBQ0EsU0FBU3VGLElBQUksR0FBRztFQUNkbEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQzNCLElBQUcxRSxRQUFRLENBQUN5RCxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUU7SUFDMUNXLFFBQVEsRUFBRTtJQUNYO0VBQ0Q7O0VBQ0FwQixRQUFRLEVBQUU7RUFDVlYsZ0JBQWdCLEVBQUU7RUFDbEJXLE1BQU0sRUFBRTs7RUFFUjtFQUNBYyxhQUFhLEVBQUU7RUFFZnZCLFdBQVcsRUFBRTtFQUNibUMsVUFBVSxFQUFFO0FBQ2Q7QUFHQSxTQUFTaUIsTUFBTSxHQUFHO0VBQ2hCOUIsUUFBUSxFQUFFO0FBQ1o7O0FBRUE7QUFDQTZCLElBQUksRUFBRSxDOzs7Ozs7Ozs7OztBQ3JZTix5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbi8vIEhlbHBlcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pZiAod2luZG93Lm1hdGNoTWVkaWEoJyhob3ZlcjogaG92ZXIpJykubWF0Y2hlcykge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9ob3ZlcicpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub2hvdmVyJyk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbn1cblxudmFyIGdldE5leHRTaWJsaW5nID0gZnVuY3Rpb24gKGVsZW0sIHNlbGVjdG9yKSB7XG5cdC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcblx0dmFyIHNpYmxpbmcgPSBlbGVtLm5leHRFbGVtZW50U2libGluZztcblx0Ly8gSWYgdGhlcmUncyBubyBzZWxlY3RvciwgcmV0dXJuIHRoZSBmaXJzdCBzaWJsaW5nXG5cdGlmICghc2VsZWN0b3IpIHJldHVybiBzaWJsaW5nO1xuXHQvLyBJZiB0aGUgc2libGluZyBtYXRjaGVzIG91ciBzZWxlY3RvciwgdXNlIGl0XG5cdC8vIElmIG5vdCwganVtcCB0byB0aGUgbmV4dCBzaWJsaW5nIGFuZCBjb250aW51ZSB0aGUgbG9vcFxuXHR3aGlsZSAoc2libGluZykge1xuXHRcdGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gc2libGluZztcblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmdcblx0fVxufTtcblxudmFyIGdldFByZXZpb3VzU2libGluZyA9IGZ1bmN0aW9uIChlbGVtLCBzZWxlY3Rvcikge1xuXG5cdC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcblx0dmFyIHNpYmxpbmcgPSBlbGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cblx0Ly8gSWYgdGhlcmUncyBubyBzZWxlY3RvciwgcmV0dXJuIHRoZSBmaXJzdCBzaWJsaW5nXG5cdGlmICghc2VsZWN0b3IpIHJldHVybiBzaWJsaW5nO1xuXG5cdC8vIElmIHRoZSBzaWJsaW5nIG1hdGNoZXMgb3VyIHNlbGVjdG9yLCB1c2UgaXRcblx0Ly8gSWYgbm90LCBqdW1wIHRvIHRoZSBuZXh0IHNpYmxpbmcgYW5kIGNvbnRpbnVlIHRoZSBsb29wXG5cdHdoaWxlIChzaWJsaW5nKSB7XG5cdFx0aWYgKHNpYmxpbmcubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBzaWJsaW5nO1xuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdH1cblxufTtcblxudmFyIGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0Ly8gU2V0dXAgc2libGluZ3MgYXJyYXkgYW5kIGdldCB0aGUgZmlyc3Qgc2libGluZ1xuXHR2YXIgc2libGluZ3MgPSBbXTtcblx0dmFyIHNpYmxpbmcgPSBlbGVtLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcblx0d2hpbGUgKHNpYmxpbmcpIHtcblx0XHRpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtKSB7XG5cdFx0XHRzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xuXHRcdH1cblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcblx0fVxuXHRyZXR1cm4gc2libGluZ3M7XG59O1xuXG4vKiFcbiAqIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFxuICogKGMpIDIwMTcgQ2hyaXMgRmVyZGluYW5kaSwgTUlUIExpY2Vuc2UsIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbVxuICogQHBhcmFtICB7Tm9kZX0gICAgZWxlbSBUaGUgZWxlbWVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBSZXR1cm5zIHRydWUgaWYgZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcbiAqL1xudmFyIGlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdHZhciBkaXN0YW5jZSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdHJldHVybiAoXG5cdFx0ZGlzdGFuY2UudG9wID49IDAgJiZcblx0XHRkaXN0YW5jZS5sZWZ0ID49IDAgJiZcblx0XHRkaXN0YW5jZS5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuXHRcdGRpc3RhbmNlLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG5cdCk7XG59O1xuLy8gQXMgYWJvdmUganVzdCBjYWxjdWxhdGVzIGZyb20gdGhlIHRvcFxudmFyIGlzSW5WaWV3cG9ydFRvcCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gIHZhciBkaXN0YW5jZSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiAoXG4gICAgZGlzdGFuY2UuYm90dG9tID49IDAgJiZcbiAgICBkaXN0YW5jZS5sZWZ0ID49IDAgJiZcbiAgICBkaXN0YW5jZS50b3AgPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgIGRpc3RhbmNlLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICk7XG59O1xuXG4vLyB3aGVuIHNjcm9sbGluZyBsZXRzIG5vdCBraWxsIHRoZSBwcm9jZXNzb3JcbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB3YWl0KSB7XG4gIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICgodGltZSArIHdhaXQgLSBEYXRlLm5vdygpKSA8IDApIHtcbiAgICAgIGZuKCk7XG4gICAgICB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBOYXZpZ2F0aW9uICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBkaXN0YW5jZVNjcm9sbGVkKCkge1xuICBpZiAocGFnZVlPZmZzZXQgPiAzMikge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImhpZGVOYXZcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZU5hdlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0U2VjdGlvbigpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRCdXR0b24nKSkge1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dEJ1dHRvbicpO1xuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjbG9zZXN0UGFyZW50ID0gbmV4dEJ1dHRvbi5jbG9zZXN0KCcuc2hvcGlmeS1zZWN0aW9uJyk7XG4gICAgICBsZXQgbmV4dFBhcmVudCA9IGdldE5leHRTaWJsaW5nKGNsb3Nlc3RQYXJlbnQpO1xuICAgICAgbmV4dFBhcmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdwb3J0KCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aHJvdHRsZShkaXN0YW5jZVNjcm9sbGVkLCAxMCkpO1xufVxuXG5mdW5jdGlvbiBsb2FkZWQoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSwgMSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbG9hZGVkZWQoKSB7XG4gICAgaWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRpbmcnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYm9keUNsb3NlcigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc2libGVOYXYnKTtcbiAgY29uc3QgaGVlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51VHJpZ2dlcicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBpZiAoaGVlZGVyLmNsYXNzTGlzdC5jb250YWlucygnbmF2LW91dCcpKSB7XG4gICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2ItbmF2LW91dCcpO1xuICAgIH0sIGZhbHNlKTtcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7IFxuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2Nlc3NpYmxlTmF2XCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRyaWdnZXInKTtcbiAgY29uc3QgaGVlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vYi1uYXYtb3V0Jyk7XG5cbn1cblxuZnVuY3Rpb24gbW9iTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2Nlc3NpYmxlTmF2XCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRyaWdnZXInKTtcbiAgY29uc3QgaGVlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gIC8vIGNvbnN0IHNlYXJjaFRvZ2dsZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFRvZ2dsZScpO1xuICAvLyBjb25zdCBoZWFkZXJTZWFyY2g9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJTZWFyY2gnKTtcbiAgLy8gY29uc3QgbW9iU2VhcmNoQ2xvc2U9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JTZWFyY2hDbG9zZScpO1xuICBcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiY2xvc2VcIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vYi1uYXYtb3V0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJvcGVuXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LmFkZCgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2ItbmF2LW91dCcpO1xuICAgICAgYm9keUNsb3NlcigpO1xuICAgIH1cbiAgfSk7XG4gIFxuICAvLyBkcm9wZG93biB0b2dnbGVyc1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2l0ZS1uYXYgLmhhc21lZ2EnKS5mb3JFYWNoKCBmdW5jdGlvbihkcm9wTGV2ZWwxKSB7XG4gICAgZHJvcExldmVsMS5xdWVyeVNlbGVjdG9yKCdhLmxldmVsMV9wYXJlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgaWYgKGRyb3BMZXZlbDEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBkcm9wTGV2ZWwxLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wTGV2ZWwxLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpdGUtbmF2IC5oYXNtZWdhIC5sZXZlbDJfaXRlbS5pc3BhcmVudCcpLmZvckVhY2goIGZ1bmN0aW9uKGRyb3BMZXZlbDIpIHtcbiAgICBkcm9wTGV2ZWwyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XG4gICAgICBpZiAoZHJvcExldmVsMi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGRyb3BMZXZlbDIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyb3BMZXZlbDIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxufVxuXG5cbi8vIGFjY291bnQgcGFnZXMgc3R1ZmZcbmZ1bmN0aW9uIGFjY291bnRzKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVjb3ZlclBhc3N3b3JkJykpIHtcbiAgICBsZXQgUmVjb3ZlclBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZCcpO1xuICAgIGxldCBIaWRlUmVjb3ZlclBhc3N3b3JkTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIaWRlUmVjb3ZlclBhc3N3b3JkTGluaycpO1xuICAgIGxldCBDdXN0b21lckxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDdXN0b21lckxvZ2luRm9ybScpO1xuICAgIGxldCBSZWNvdmVyUGFzc3dvcmRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZEZvcm0nKTtcbiAgICBcbiAgICBSZWNvdmVyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieWF5IGNsaWNrZWRcIik7XG4gICAgICBDdXN0b21lckxvZ2luRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBSZWNvdmVyUGFzc3dvcmRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KTtcbiAgICBcbiAgICBIaWRlUmVjb3ZlclBhc3N3b3JkTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ5YXkgY2xpY2tlZFwiKTtcbiAgICAgIFJlY292ZXJQYXNzd29yZEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgQ3VzdG9tZXJMb2dpbkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbnMoKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjb3JkaW9uR3JvdXAnKSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gQWNjb3JkaW9uc1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQWNjb3JkaW9uIGgzIGJ1dHRvbicpLmZvckVhY2goIGZ1bmN0aW9uKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGFyZ2V0U2VjdGlvbiA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGhlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldFNlY3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgaWYodHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRpcyB0cnVlXCIpO1xuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgdGhlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aXMgZmFsc2VcIik7XG4gICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIHRoZVNlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmxldCBjYXJ0VG9nZ2xlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydFRvZ2dsZScpO1xubGV0IGNsb3NlQ2FydHg9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUNhcnR4Jyk7XG5sZXQgY2xvc2VDYXJ0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VDYXJ0Jyk7XG5sZXQgc2lkZUNhcnQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlY2FydCcpO1xuXG5jYXJ0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgaWYgKGNhcnRUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIGNhcnRUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWNhcnQtYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgIH0sIDUwMCk7XG4gIH0gZWxzZSB7XG4gICAgY2FydFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzaWRlY2FydC1hY3RpdmVcIik7XG4gICAgc2lkZUNhcnQuY2xhc3NMaXN0LmFkZCgnYWxpdmUnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2lkZUNhcnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSwgNTApO1xuICB9XG4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5jbG9zZUNhcnR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgaWYgKHNpZGVDYXJ0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlY2FydC1hY3RpdmVcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgfSwgNTAwKTtcbiAgfVxufSk7XG5jbG9zZUNhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICBpZiAoc2lkZUNhcnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNpZGVjYXJ0LWFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICB9LCA1MDApO1xuICB9XG59KTtcblxuLy8gLy8gRmlsdGVycyBUb2dnbGVcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyVG9nZ2xlJykpIHtcbiAgbGV0IGZpbHRlclRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXJUb2dnbGUnKTtcbiAgbGV0IGNsb3NlRmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlRmlsdGVyJyk7XG4gIGxldCBmaWx0ZXJDbG9zZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyQ2xvc2VyJyk7XG4gIGxldCBmaWx0ZXJzPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb2xsZWN0aW9uLWZpbHRlcnMnKTtcbiAgXG4gIGZpbHRlclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgaWYgKGZpbHRlcnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZmlsdGVyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVyQ2xvc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlci1hY3RpdmVcIik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgICB9LCA1MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJUb2dnbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJDbG9zZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgZmlsdGVycy5jbGFzc0xpc3QuYWRkKCdhbGl2ZScpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZmlsdGVycy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0sIDUwKTtcbiAgICAgIFxuICAgIH1cbiAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG4gIGNsb3NlRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBpZiAoZmlsdGVycy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBmaWx0ZXJUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJDbG9zZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyLWFjdGl2ZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9KTtcbiAgZmlsdGVyQ2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBpZiAoZmlsdGVycy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBmaWx0ZXJUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJDbG9zZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyLWFjdGl2ZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9KTtcbn07XG5cblxuLy8gU3d1cCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIEluaXRpYWwgZnVuY3Rpb25zXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zb2xlLmxvZyhcInNjcmlwdHMgaW5pdFwiKTtcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfYXJlYScpKSB7XG4gICAgYWNjb3VudHMoKTtcbiAgIC8vICB0b2dnbGVBZGRyZXNzKCk7XG4gIH1cbiAgdmlld3BvcnQoKTtcbiAgZGlzdGFuY2VTY3JvbGxlZCgpO1xuICBsb2FkZWQoKTtcblxuICAvL3NldE5hdmlnYXRpb24oKTtcbiAgbW9iTmF2aWdhdGlvbigpO1xuXG4gIG5leHRTZWN0aW9uKCk7XG4gIGFjY29yZGlvbnMoKTtcbn1cblxuXG5mdW5jdGlvbiB1bmxvYWQoKSB7XG4gIGNsb3NlTmF2KCk7XG59XG5cbi8vIHJ1biBvbmNlIFxuaW5pdCgpO1xuXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==