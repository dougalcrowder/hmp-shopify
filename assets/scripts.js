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

// function setNavigation() {
//   var nav = document.getElementById("SiteNav"),
//   anchor = nav.getElementsByTagName("a"),
//   current = window.location;
//   
//   // console.log("anchor = ",anchor,"current = ",current);
//   
//   for (var i = 0; i < anchor.length; i++) {
//   if(anchor[i].href == current) {
//     anchor[i].className = "site-nav--active";
//   } else {
//     anchor[i].className = "site-nav--not_active";
//   }
//   
//   }
//   
// }

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

// // Shop
// let navToggleShop= document.getElementById('navToggle-shop');
// let dropNavs= document.getElementById('dropNavs').innerHTML;
// let navDropShop= document.getElementById('shopify-section-nav-drop-shop');
// 
// navToggleShop.innerHTML = navToggleShop.innerHTML + dropNavs;
// navToggleShop.classList.add('hasmega');
// 
// //Create Your Own
// let navToggleCyo= document.getElementById('navToggle-create-your-own');
// let dropNavsCyo= document.getElementById('dropNavsCyo').innerHTML;
// let navDropCyo= document.getElementById('shopify-section-nav-drop-create');
// 
// navToggleCyo.innerHTML = navToggleCyo.innerHTML + dropNavsCyo;
// navToggleCyo.classList.add('hasmega');
// 
// //Guide
// let navToggleGuide= document.getElementById('navToggle-guide');
// let dropNavsGuide= document.getElementById('dropNavsGuide').innerHTML;
// let navDropGuide= document.getElementById('shopify-section-nav-drop-guide');
// 
// navToggleGuide.innerHTML = navToggleGuide.innerHTML + dropNavsGuide;
// navToggleGuide.classList.add('hasmega'); 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLWFydGljbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtYmxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1ib3Quc2Nzcz8yNDg0Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1jYXJ0LnNjc3M/MmU3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtY29sbGVjdGlvbnMuc2Nzcz9mMjY5Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1wYWdlLnNjc3M/YzUwNyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMtcHJvZHVjdC5zY3NzPzBiNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLXNlYXJjaHBhZ2Uuc2Nzcz81YTdiIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy1zd2lmZnkuc2Nzcz8wNGExIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy10b3Auc2Nzcz9kZGExIl0sIm5hbWVzIjpbIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0TmV4dFNpYmxpbmciLCJlbGVtIiwic2VsZWN0b3IiLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImdldFNpYmxpbmdzIiwic2libGluZ3MiLCJwYXJlbnROb2RlIiwiZmlyc3RDaGlsZCIsIm5vZGVUeXBlIiwicHVzaCIsIm5leHRTaWJsaW5nIiwiaXNJblZpZXdwb3J0IiwiZGlzdGFuY2UiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImlzSW5WaWV3cG9ydFRvcCIsInRocm90dGxlIiwiZm4iLCJ3YWl0IiwidGltZSIsIkRhdGUiLCJub3ciLCJkaXN0YW5jZVNjcm9sbGVkIiwicGFnZVlPZmZzZXQiLCJuZXh0U2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwibmV4dEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0UGFyZW50IiwiY2xvc2VzdCIsIm5leHRQYXJlbnQiLCJzY3JvbGxJbnRvVmlldyIsInZpZXdwb3J0IiwibG9hZGVkIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwibG9hZGVkZWQiLCJjb250YWlucyIsImJvZHlDbG9zZXIiLCJuYXYiLCJoZWVkZXIiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwibWFpbiIsImV2Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xvc2VOYXYiLCJtb2JOYXZpZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wTGV2ZWwxIiwiZHJvcExldmVsMiIsImFjY291bnRzIiwiUmVjb3ZlclBhc3N3b3JkIiwiSGlkZVJlY292ZXJQYXNzd29yZExpbmsiLCJDdXN0b21lckxvZ2luRm9ybSIsIlJlY292ZXJQYXNzd29yZEZvcm0iLCJjb25zb2xlIiwibG9nIiwiYWNjb3JkaW9ucyIsInRyaWdnZXIiLCJ0YXJnZXRTZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwidGhlU2VjdGlvbiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNhcnRUb2dnbGUiLCJjbG9zZUNhcnR4IiwiY2xvc2VDYXJ0Iiwic2lkZUNhcnQiLCJwcmV2ZW50RGVmYXVsdCIsImluaXQiLCJ1bmxvYWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFDLEVBQUU7SUFDMUNXLFFBQVEsRUFBRTtJQUNYO0VBQ0Q7O0VBQ0FwQixRQUFRLEVBQUU7RUFDVlYsZ0JBQWdCLEVBQUU7RUFDbEJXLE1BQU0sRUFBRTs7RUFFUjtFQUNBYyxhQUFhLEVBQUU7RUFFZnZCLFdBQVcsRUFBRTtFQUNibUMsVUFBVSxFQUFFO0FBQ2Q7QUFHQSxTQUFTYSxNQUFNLEdBQUc7RUFDaEIxQixRQUFRLEVBQUU7QUFDWjs7QUFFQTtBQUNBeUIsSUFBSSxFQUFFLEM7Ozs7Ozs7Ozs7O0FDMVhOLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuLy8gSGVscGVycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKGhvdmVyOiBob3ZlciknKS5tYXRjaGVzKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub2hvdmVyJyk7XG59IGVsc2Uge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vaG92ZXInKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xufVxuXG52YXIgZ2V0TmV4dFNpYmxpbmcgPSBmdW5jdGlvbiAoZWxlbSwgc2VsZWN0b3IpIHtcblx0Ly8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxuXHR2YXIgc2libGluZyA9IGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHQvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XG5cdC8vIElmIHRoZSBzaWJsaW5nIG1hdGNoZXMgb3VyIHNlbGVjdG9yLCB1c2UgaXRcblx0Ly8gSWYgbm90LCBqdW1wIHRvIHRoZSBuZXh0IHNpYmxpbmcgYW5kIGNvbnRpbnVlIHRoZSBsb29wXG5cdHdoaWxlIChzaWJsaW5nKSB7XG5cdFx0aWYgKHNpYmxpbmcubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBzaWJsaW5nO1xuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZ1xuXHR9XG59O1xuXG52YXIgZ2V0UHJldmlvdXNTaWJsaW5nID0gZnVuY3Rpb24gKGVsZW0sIHNlbGVjdG9yKSB7XG5cblx0Ly8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxuXHR2YXIgc2libGluZyA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcblxuXHQvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XG5cblx0Ly8gSWYgdGhlIHNpYmxpbmcgbWF0Y2hlcyBvdXIgc2VsZWN0b3IsIHVzZSBpdFxuXHQvLyBJZiBub3QsIGp1bXAgdG8gdGhlIG5leHQgc2libGluZyBhbmQgY29udGludWUgdGhlIGxvb3Bcblx0d2hpbGUgKHNpYmxpbmcpIHtcblx0XHRpZiAoc2libGluZy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHNpYmxpbmc7XG5cdFx0c2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcblx0fVxuXG59O1xuXG52YXIgZ2V0U2libGluZ3MgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHQvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXG5cdHZhciBzaWJsaW5ncyA9IFtdO1xuXHR2YXIgc2libGluZyA9IGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXHQvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuXHR3aGlsZSAoc2libGluZykge1xuXHRcdGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcblx0XHRcdHNpYmxpbmdzLnB1c2goc2libGluZyk7XG5cdFx0fVxuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuXHR9XG5cdHJldHVybiBzaWJsaW5ncztcbn07XG5cbi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gKiAoYykgMjAxNyBDaHJpcyBGZXJkaW5hbmRpLCBNSVQgTGljZW5zZSwgaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tXG4gKiBAcGFyYW0gIHtOb2RlfSAgICBlbGVtIFRoZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFJldHVybnMgdHJ1ZSBpZiBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFxuICovXG52YXIgaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0dmFyIGRpc3RhbmNlID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0cmV0dXJuIChcblx0XHRkaXN0YW5jZS50b3AgPj0gMCAmJlxuXHRcdGRpc3RhbmNlLmxlZnQgPj0gMCAmJlxuXHRcdGRpc3RhbmNlLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG5cdFx0ZGlzdGFuY2UucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcblx0KTtcbn07XG4vLyBBcyBhYm92ZSBqdXN0IGNhbGN1bGF0ZXMgZnJvbSB0aGUgdG9wXG52YXIgaXNJblZpZXdwb3J0VG9wID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgdmFyIGRpc3RhbmNlID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIChcbiAgICBkaXN0YW5jZS5ib3R0b20gPj0gMCAmJlxuICAgIGRpc3RhbmNlLmxlZnQgPj0gMCAmJlxuICAgIGRpc3RhbmNlLnRvcCA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgZGlzdGFuY2UucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgKTtcbn07XG5cbi8vIHdoZW4gc2Nyb2xsaW5nIGxldHMgbm90IGtpbGwgdGhlIHByb2Nlc3NvclxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQpIHtcbiAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aW1lICsgd2FpdCAtIERhdGUubm93KCkpIDwgMCkge1xuICAgICAgZm4oKTtcbiAgICAgIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmlnYXRpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIGRpc3RhbmNlU2Nyb2xsZWQoKSB7XG4gIGlmIChwYWdlWU9mZnNldCA+IDMyKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiaGlkZU5hdlwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlTmF2XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5leHRTZWN0aW9uKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dEJ1dHRvbicpKSB7XG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0QnV0dG9uJyk7XG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNsb3Nlc3RQYXJlbnQgPSBuZXh0QnV0dG9uLmNsb3Nlc3QoJy5zaG9waWZ5LXNlY3Rpb24nKTtcbiAgICAgIGxldCBuZXh0UGFyZW50ID0gZ2V0TmV4dFNpYmxpbmcoY2xvc2VzdFBhcmVudCk7XG4gICAgICBuZXh0UGFyZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlld3BvcnQoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRocm90dGxlKGRpc3RhbmNlU2Nyb2xsZWQsIDEwKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9LCAxKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBsb2FkZWRlZCgpIHtcbiAgICBpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9hZGluZycpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBib2R5Q2xvc2VyKCkge1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3NpYmxlTmF2Jyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRyaWdnZXInKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgaWYgKGhlZWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1vdXQnKSkge1xuICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9iLW5hdi1vdXQnKTtcbiAgICB9LCBmYWxzZSk7XG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgXG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpOyBcbiAgICB9LCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXNzaWJsZU5hdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2ItbmF2LW91dCcpO1xuXG59XG5cbmZ1bmN0aW9uIG1vYk5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXNzaWJsZU5hdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAvLyBjb25zdCBzZWFyY2hUb2dnbGU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hUb2dnbGUnKTtcbiAgLy8gY29uc3QgaGVhZGVyU2VhcmNoPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyU2VhcmNoJyk7XG4gIC8vIGNvbnN0IG1vYlNlYXJjaENsb3NlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iU2VhcmNoQ2xvc2UnKTtcbiAgXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgLy9jb25zb2xlLmxvZyhcImNsb3NlXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2ItbmF2LW91dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwib3BlblwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5hZGQoJ25hdi1vdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9iLW5hdi1vdXQnKTtcbiAgICAgIGJvZHlDbG9zZXIoKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgLy8gZHJvcGRvd24gdG9nZ2xlcnNcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpdGUtbmF2IC5oYXNtZWdhJykuZm9yRWFjaCggZnVuY3Rpb24oZHJvcExldmVsMSkge1xuICAgIGRyb3BMZXZlbDEucXVlcnlTZWxlY3RvcignYS5sZXZlbDFfcGFyZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICAgIGlmIChkcm9wTGV2ZWwxLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZHJvcExldmVsMS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcExldmVsMS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaXRlLW5hdiAuaGFzbWVnYSAubGV2ZWwyX2l0ZW0uaXNwYXJlbnQnKS5mb3JFYWNoKCBmdW5jdGlvbihkcm9wTGV2ZWwyKSB7XG4gICAgZHJvcExldmVsMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgaWYgKGRyb3BMZXZlbDIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBkcm9wTGV2ZWwyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wTGV2ZWwyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBcbn1cblxuLy8gZnVuY3Rpb24gc2V0TmF2aWdhdGlvbigpIHtcbi8vICAgdmFyIG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2l0ZU5hdlwiKSxcbi8vICAgYW5jaG9yID0gbmF2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSxcbi8vICAgY3VycmVudCA9IHdpbmRvdy5sb2NhdGlvbjtcbi8vICAgXG4vLyAgIC8vIGNvbnNvbGUubG9nKFwiYW5jaG9yID0gXCIsYW5jaG9yLFwiY3VycmVudCA9IFwiLGN1cnJlbnQpO1xuLy8gICBcbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmNob3IubGVuZ3RoOyBpKyspIHtcbi8vICAgaWYoYW5jaG9yW2ldLmhyZWYgPT0gY3VycmVudCkge1xuLy8gICAgIGFuY2hvcltpXS5jbGFzc05hbWUgPSBcInNpdGUtbmF2LS1hY3RpdmVcIjtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBhbmNob3JbaV0uY2xhc3NOYW1lID0gXCJzaXRlLW5hdi0tbm90X2FjdGl2ZVwiO1xuLy8gICB9XG4vLyAgIFxuLy8gICB9XG4vLyAgIFxuLy8gfVxuXG4vLyBhY2NvdW50IHBhZ2VzIHN0dWZmXG5mdW5jdGlvbiBhY2NvdW50cygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZCcpKSB7XG4gICAgbGV0IFJlY292ZXJQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmQnKTtcbiAgICBsZXQgSGlkZVJlY292ZXJQYXNzd29yZExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSGlkZVJlY292ZXJQYXNzd29yZExpbmsnKTtcbiAgICBsZXQgQ3VzdG9tZXJMb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3VzdG9tZXJMb2dpbkZvcm0nKTtcbiAgICBsZXQgUmVjb3ZlclBhc3N3b3JkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmRGb3JtJyk7XG4gICAgXG4gICAgUmVjb3ZlclBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInlheSBjbGlja2VkXCIpO1xuICAgICAgQ3VzdG9tZXJMb2dpbkZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgUmVjb3ZlclBhc3N3b3JkRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSk7XG4gICAgXG4gICAgSGlkZVJlY292ZXJQYXNzd29yZExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieWF5IGNsaWNrZWRcIik7XG4gICAgICBSZWNvdmVyUGFzc3dvcmRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIEN1c3RvbWVyTG9naW5Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25zKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY29yZGlvbkdyb3VwJykpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIEFjY29yZGlvbnNcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkFjY29yZGlvbiBoMyBidXR0b24nKS5mb3JFYWNoKCBmdW5jdGlvbih0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IHRhcmdldFNlY3Rpb24gPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRoZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRTZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aXMgdHJ1ZVwiKTtcbiAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgIHRoZVNlY3Rpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGlzIGZhbHNlXCIpO1xuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB0aGVTZWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5sZXQgY2FydFRvZ2dsZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnRUb2dnbGUnKTtcbmxldCBjbG9zZUNhcnR4PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VDYXJ0eCcpO1xubGV0IGNsb3NlQ2FydD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQ2FydCcpO1xubGV0IHNpZGVDYXJ0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWNhcnQnKTtcblxuY2FydFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gIGlmIChjYXJ0VG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBjYXJ0VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNpZGVjYXJ0LWFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICB9LCA1MDApO1xuICB9IGVsc2Uge1xuICAgIGNhcnRUb2dnbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic2lkZWNhcnQtYWN0aXZlXCIpO1xuICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5hZGQoJ2FsaXZlJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0sIDUwKTtcbiAgfVxuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY2xvc2VDYXJ0eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gIGlmIChzaWRlQ2FydC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWNhcnQtYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgIH0sIDUwMCk7XG4gIH1cbn0pO1xuY2xvc2VDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgaWYgKHNpZGVDYXJ0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlY2FydC1hY3RpdmVcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgfSwgNTAwKTtcbiAgfVxufSk7XG5cbi8vIC8vIFNob3Bcbi8vIGxldCBuYXZUb2dnbGVTaG9wPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2VG9nZ2xlLXNob3AnKTtcbi8vIGxldCBkcm9wTmF2cz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3BOYXZzJykuaW5uZXJIVE1MO1xuLy8gbGV0IG5hdkRyb3BTaG9wPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcGlmeS1zZWN0aW9uLW5hdi1kcm9wLXNob3AnKTtcbi8vIFxuLy8gbmF2VG9nZ2xlU2hvcC5pbm5lckhUTUwgPSBuYXZUb2dnbGVTaG9wLmlubmVySFRNTCArIGRyb3BOYXZzO1xuLy8gbmF2VG9nZ2xlU2hvcC5jbGFzc0xpc3QuYWRkKCdoYXNtZWdhJyk7XG4vLyBcbi8vIC8vQ3JlYXRlIFlvdXIgT3duXG4vLyBsZXQgbmF2VG9nZ2xlQ3lvPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2VG9nZ2xlLWNyZWF0ZS15b3VyLW93bicpO1xuLy8gbGV0IGRyb3BOYXZzQ3lvPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcE5hdnNDeW8nKS5pbm5lckhUTUw7XG4vLyBsZXQgbmF2RHJvcEN5bz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3BpZnktc2VjdGlvbi1uYXYtZHJvcC1jcmVhdGUnKTtcbi8vIFxuLy8gbmF2VG9nZ2xlQ3lvLmlubmVySFRNTCA9IG5hdlRvZ2dsZUN5by5pbm5lckhUTUwgKyBkcm9wTmF2c0N5bztcbi8vIG5hdlRvZ2dsZUN5by5jbGFzc0xpc3QuYWRkKCdoYXNtZWdhJyk7XG4vLyBcbi8vIC8vR3VpZGVcbi8vIGxldCBuYXZUb2dnbGVHdWlkZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlRvZ2dsZS1ndWlkZScpO1xuLy8gbGV0IGRyb3BOYXZzR3VpZGU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wTmF2c0d1aWRlJykuaW5uZXJIVE1MO1xuLy8gbGV0IG5hdkRyb3BHdWlkZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3BpZnktc2VjdGlvbi1uYXYtZHJvcC1ndWlkZScpO1xuLy8gXG4vLyBuYXZUb2dnbGVHdWlkZS5pbm5lckhUTUwgPSBuYXZUb2dnbGVHdWlkZS5pbm5lckhUTUwgKyBkcm9wTmF2c0d1aWRlO1xuLy8gbmF2VG9nZ2xlR3VpZGUuY2xhc3NMaXN0LmFkZCgnaGFzbWVnYScpOyBcblxuLy8gU3d1cCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIEluaXRpYWwgZnVuY3Rpb25zXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zb2xlLmxvZyhcInNjcmlwdHMgaW5pdFwiKTtcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfYXJlYScpKSB7XG4gICAgYWNjb3VudHMoKTtcbiAgIC8vICB0b2dnbGVBZGRyZXNzKCk7XG4gIH1cbiAgdmlld3BvcnQoKTtcbiAgZGlzdGFuY2VTY3JvbGxlZCgpO1xuICBsb2FkZWQoKTtcblxuICAvL3NldE5hdmlnYXRpb24oKTtcbiAgbW9iTmF2aWdhdGlvbigpO1xuXG4gIG5leHRTZWN0aW9uKCk7XG4gIGFjY29yZGlvbnMoKTtcbn1cblxuXG5mdW5jdGlvbiB1bmxvYWQoKSB7XG4gIGNsb3NlTmF2KCk7XG59XG5cbi8vIHJ1biBvbmNlIFxuaW5pdCgpO1xuXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=