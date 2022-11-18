/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/***/ (() => {

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
var mobNav = window.matchMedia("(max-width: 960px)");
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
      ;
      if (mobNav.matches) {
        event.preventDefault();
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
function mainMenuStates() {
  var navItems = document.querySelector('#accessibleNav .site-nav.level1');
  document.querySelectorAll('.site-nav.level1 .level1_item').forEach(function (navver) {
    navver.addEventListener('mouseenter', function (e) {
      navver.classList.add('mainhover');
      navItems.classList.add('mainover');
    });
    navver.addEventListener('mouseleave', function (e) {
      navver.classList.remove('mainhover');
      navItems.classList.remove('mainover');
    });
  });
}
function menuStates() {
  var navItems = document.querySelector('#accessibleNav .site-nav');
  document.querySelectorAll('.site-nav li div a').forEach(function (navver) {
    navver.addEventListener('mouseenter', function (e) {
      navver.classList.add('hover');
      navItems.classList.add('over');
    });
    navver.addEventListener('mouseleave', function (e) {
      navver.classList.remove('hover');
      navItems.classList.remove('over');
    });
  });
}
function footNavStates() {
  var navItems = document.querySelector('.site-footer .footer_item');
  document.querySelectorAll('.footer_item .footer_linklist li a').forEach(function (navver) {
    navver.addEventListener('mouseenter', function (e) {
      navver.classList.add('hover');
      navItems.classList.add('over');
    });
    navver.addEventListener('mouseleave', function (e) {
      navver.classList.remove('hover');
      navItems.classList.remove('over');
    });
  });
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
  mainMenuStates();
  menuStates();
  footNavStates();
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

/***/ "./src/sass/styles-collections.scss":
/*!******************************************!*\
  !*** ./src/sass/styles-collections.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-page.scss":
/*!***********************************!*\
  !*** ./src/sass/styles-page.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-product.scss":
/*!**************************************!*\
  !*** ./src/sass/styles-product.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-swiffy.scss":
/*!*************************************!*\
  !*** ./src/sass/styles-swiffy.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-searchpage.scss":
/*!*****************************************!*\
  !*** ./src/sass/styles-searchpage.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-accounts.scss":
/*!***************************************!*\
  !*** ./src/sass/styles-accounts.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-top.scss":
/*!**********************************!*\
  !*** ./src/sass/styles-top.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-bot.scss":
/*!**********************************!*\
  !*** ./src/sass/styles-bot.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-article.scss":
/*!**************************************!*\
  !*** ./src/sass/styles-article.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-blog.scss":
/*!***********************************!*\
  !*** ./src/sass/styles-blog.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/styles-cart.scss":
/*!***********************************!*\
  !*** ./src/sass/styles-cart.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/scripts": 0,
/******/ 			"assets/styles-cart": 0,
/******/ 			"assets/styles-blog": 0,
/******/ 			"assets/styles-article": 0,
/******/ 			"assets/styles-bot": 0,
/******/ 			"assets/styles-top": 0,
/******/ 			"assets/styles-accounts": 0,
/******/ 			"assets/styles-searchpage": 0,
/******/ 			"assets/styles-swiffy": 0,
/******/ 			"assets/styles-product": 0,
/******/ 			"assets/styles-page": 0,
/******/ 			"assets/styles-collections": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhmp"] = self["webpackChunkhmp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/js/scripts.js")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-top.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-bot.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-article.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-blog.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-cart.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-collections.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-page.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-product.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-swiffy.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-searchpage.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/styles-cart","assets/styles-blog","assets/styles-article","assets/styles-bot","assets/styles-top","assets/styles-accounts","assets/styles-searchpage","assets/styles-swiffy","assets/styles-product","assets/styles-page","assets/styles-collections"], () => (__webpack_require__("./src/sass/styles-accounts.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRTNEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2htcC8uL3NyYy9qcy9zY3JpcHRzLmpzIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1jb2xsZWN0aW9ucy5zY3NzIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLXByb2R1Y3Quc2NzcyIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtc3dpZmZ5LnNjc3MiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLXNlYXJjaHBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtYWNjb3VudHMuc2NzcyIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtdG9wLnNjc3MiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLWJvdC5zY3NzIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1hcnRpY2xlLnNjc3MiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLWJsb2cuc2NzcyIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtY2FydC5zY3NzIiwid2VicGFjazovL2htcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaG1wL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaG1wL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuLy8gSGVscGVycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKGhvdmVyOiBob3ZlciknKS5tYXRjaGVzKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub2hvdmVyJyk7XG59IGVsc2Uge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vaG92ZXInKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xufVxuXG52YXIgZ2V0TmV4dFNpYmxpbmcgPSBmdW5jdGlvbiAoZWxlbSwgc2VsZWN0b3IpIHtcblx0Ly8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxuXHR2YXIgc2libGluZyA9IGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHQvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XG5cdC8vIElmIHRoZSBzaWJsaW5nIG1hdGNoZXMgb3VyIHNlbGVjdG9yLCB1c2UgaXRcblx0Ly8gSWYgbm90LCBqdW1wIHRvIHRoZSBuZXh0IHNpYmxpbmcgYW5kIGNvbnRpbnVlIHRoZSBsb29wXG5cdHdoaWxlIChzaWJsaW5nKSB7XG5cdFx0aWYgKHNpYmxpbmcubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBzaWJsaW5nO1xuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZ1xuXHR9XG59O1xuXG52YXIgZ2V0UHJldmlvdXNTaWJsaW5nID0gZnVuY3Rpb24gKGVsZW0sIHNlbGVjdG9yKSB7XG5cblx0Ly8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxuXHR2YXIgc2libGluZyA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcblxuXHQvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XG5cblx0Ly8gSWYgdGhlIHNpYmxpbmcgbWF0Y2hlcyBvdXIgc2VsZWN0b3IsIHVzZSBpdFxuXHQvLyBJZiBub3QsIGp1bXAgdG8gdGhlIG5leHQgc2libGluZyBhbmQgY29udGludWUgdGhlIGxvb3Bcblx0d2hpbGUgKHNpYmxpbmcpIHtcblx0XHRpZiAoc2libGluZy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHNpYmxpbmc7XG5cdFx0c2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcblx0fVxuXG59O1xuXG52YXIgZ2V0U2libGluZ3MgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHQvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXG5cdHZhciBzaWJsaW5ncyA9IFtdO1xuXHR2YXIgc2libGluZyA9IGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXHQvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuXHR3aGlsZSAoc2libGluZykge1xuXHRcdGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcblx0XHRcdHNpYmxpbmdzLnB1c2goc2libGluZyk7XG5cdFx0fVxuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuXHR9XG5cdHJldHVybiBzaWJsaW5ncztcbn07XG5cbi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gKiAoYykgMjAxNyBDaHJpcyBGZXJkaW5hbmRpLCBNSVQgTGljZW5zZSwgaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tXG4gKiBAcGFyYW0gIHtOb2RlfSAgICBlbGVtIFRoZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFJldHVybnMgdHJ1ZSBpZiBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFxuICovXG52YXIgaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0dmFyIGRpc3RhbmNlID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0cmV0dXJuIChcblx0XHRkaXN0YW5jZS50b3AgPj0gMCAmJlxuXHRcdGRpc3RhbmNlLmxlZnQgPj0gMCAmJlxuXHRcdGRpc3RhbmNlLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG5cdFx0ZGlzdGFuY2UucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcblx0KTtcbn07XG4vLyBBcyBhYm92ZSBqdXN0IGNhbGN1bGF0ZXMgZnJvbSB0aGUgdG9wXG52YXIgaXNJblZpZXdwb3J0VG9wID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgdmFyIGRpc3RhbmNlID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIChcbiAgICBkaXN0YW5jZS5ib3R0b20gPj0gMCAmJlxuICAgIGRpc3RhbmNlLmxlZnQgPj0gMCAmJlxuICAgIGRpc3RhbmNlLnRvcCA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgZGlzdGFuY2UucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgKTtcbn07XG5cbi8vIHdoZW4gc2Nyb2xsaW5nIGxldHMgbm90IGtpbGwgdGhlIHByb2Nlc3NvclxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQpIHtcbiAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aW1lICsgd2FpdCAtIERhdGUubm93KCkpIDwgMCkge1xuICAgICAgZm4oKTtcbiAgICAgIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmlnYXRpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIGRpc3RhbmNlU2Nyb2xsZWQoKSB7XG4gIGlmIChwYWdlWU9mZnNldCA+IDMyKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiaGlkZU5hdlwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlTmF2XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5leHRTZWN0aW9uKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dEJ1dHRvbicpKSB7XG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0QnV0dG9uJyk7XG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNsb3Nlc3RQYXJlbnQgPSBuZXh0QnV0dG9uLmNsb3Nlc3QoJy5zaG9waWZ5LXNlY3Rpb24nKTtcbiAgICAgIGxldCBuZXh0UGFyZW50ID0gZ2V0TmV4dFNpYmxpbmcoY2xvc2VzdFBhcmVudCk7XG4gICAgICBuZXh0UGFyZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlld3BvcnQoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRocm90dGxlKGRpc3RhbmNlU2Nyb2xsZWQsIDEwKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9LCAxKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBsb2FkZWRlZCgpIHtcbiAgICBpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9hZGluZycpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBib2R5Q2xvc2VyKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzaWJsZU5hdicpO1xuICBjb25zdCBoZWVkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGlmIChoZWVkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtb3V0JykpIHtcbiAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vYi1uYXYtb3V0Jyk7XG4gICAgfSwgZmFsc2UpO1xuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIFxuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgfSwgZmFsc2UpO1xuICB9XG59XG5cbnZhciBtb2JOYXYgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDk2MHB4KVwiKVxuXG5mdW5jdGlvbiBjbG9zZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2Nlc3NpYmxlTmF2XCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRyaWdnZXInKTtcbiAgY29uc3QgaGVlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vYi1uYXYtb3V0Jyk7XG5cbn1cblxuZnVuY3Rpb24gbW9iTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2Nlc3NpYmxlTmF2XCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRyaWdnZXInKTtcbiAgY29uc3QgaGVlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gIC8vIGNvbnN0IHNlYXJjaFRvZ2dsZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFRvZ2dsZScpO1xuICAvLyBjb25zdCBoZWFkZXJTZWFyY2g9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJTZWFyY2gnKTtcbiAgLy8gY29uc3QgbW9iU2VhcmNoQ2xvc2U9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JTZWFyY2hDbG9zZScpO1xuICBcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiY2xvc2VcIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vYi1uYXYtb3V0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJvcGVuXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LmFkZCgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2ItbmF2LW91dCcpO1xuICAgICAgYm9keUNsb3NlcigpO1xuICAgIH1cbiAgfSk7XG4gIFxuICAvLyBkcm9wZG93biB0b2dnbGVyc1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2l0ZS1uYXYgLmhhc21lZ2EnKS5mb3JFYWNoKCBmdW5jdGlvbihkcm9wTGV2ZWwxKSB7XG4gICAgZHJvcExldmVsMS5xdWVyeVNlbGVjdG9yKCdhLmxldmVsMV9wYXJlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgaWYgKGRyb3BMZXZlbDEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBkcm9wTGV2ZWwxLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wTGV2ZWwxLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9O1xuICAgICAgaWYgKG1vYk5hdi5tYXRjaGVzKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpdGUtbmF2IC5oYXNtZWdhIC5sZXZlbDJfaXRlbS5pc3BhcmVudCcpLmZvckVhY2goIGZ1bmN0aW9uKGRyb3BMZXZlbDIpIHtcbiAgICBkcm9wTGV2ZWwyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XG4gICAgICBpZiAoZHJvcExldmVsMi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGRyb3BMZXZlbDIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyb3BMZXZlbDIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxufVxuXG5cbi8vIGFjY291bnQgcGFnZXMgc3R1ZmZcbmZ1bmN0aW9uIGFjY291bnRzKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVjb3ZlclBhc3N3b3JkJykpIHtcbiAgICBsZXQgUmVjb3ZlclBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZCcpO1xuICAgIGxldCBIaWRlUmVjb3ZlclBhc3N3b3JkTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIaWRlUmVjb3ZlclBhc3N3b3JkTGluaycpO1xuICAgIGxldCBDdXN0b21lckxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDdXN0b21lckxvZ2luRm9ybScpO1xuICAgIGxldCBSZWNvdmVyUGFzc3dvcmRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZEZvcm0nKTtcbiAgICBcbiAgICBSZWNvdmVyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieWF5IGNsaWNrZWRcIik7XG4gICAgICBDdXN0b21lckxvZ2luRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBSZWNvdmVyUGFzc3dvcmRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KTtcbiAgICBcbiAgICBIaWRlUmVjb3ZlclBhc3N3b3JkTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ5YXkgY2xpY2tlZFwiKTtcbiAgICAgIFJlY292ZXJQYXNzd29yZEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgQ3VzdG9tZXJMb2dpbkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbnMoKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjb3JkaW9uR3JvdXAnKSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gQWNjb3JkaW9uc1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQWNjb3JkaW9uIGgzIGJ1dHRvbicpLmZvckVhY2goIGZ1bmN0aW9uKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGFyZ2V0U2VjdGlvbiA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGhlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldFNlY3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgaWYodHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRpcyB0cnVlXCIpO1xuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgdGhlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aXMgZmFsc2VcIik7XG4gICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIHRoZVNlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmxldCBjYXJ0VG9nZ2xlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydFRvZ2dsZScpO1xubGV0IGNsb3NlQ2FydHg9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUNhcnR4Jyk7XG5sZXQgY2xvc2VDYXJ0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VDYXJ0Jyk7XG5sZXQgc2lkZUNhcnQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlY2FydCcpO1xuXG5jYXJ0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgaWYgKGNhcnRUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIGNhcnRUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWNhcnQtYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgIH0sIDUwMCk7XG4gIH0gZWxzZSB7XG4gICAgY2FydFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzaWRlY2FydC1hY3RpdmVcIik7XG4gICAgc2lkZUNhcnQuY2xhc3NMaXN0LmFkZCgnYWxpdmUnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2lkZUNhcnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSwgNTApO1xuICB9XG4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5jbG9zZUNhcnR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgaWYgKHNpZGVDYXJ0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlY2FydC1hY3RpdmVcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgfSwgNTAwKTtcbiAgfVxufSk7XG5jbG9zZUNhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICBpZiAoc2lkZUNhcnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNpZGVjYXJ0LWFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICB9LCA1MDApO1xuICB9XG59KTtcblxuLy8gLy8gRmlsdGVycyBUb2dnbGVcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyVG9nZ2xlJykpIHtcbiAgbGV0IGZpbHRlclRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXJUb2dnbGUnKTtcbiAgbGV0IGNsb3NlRmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlRmlsdGVyJyk7XG4gIGxldCBmaWx0ZXJDbG9zZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyQ2xvc2VyJyk7XG4gIGxldCBmaWx0ZXJzPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb2xsZWN0aW9uLWZpbHRlcnMnKTtcbiAgXG4gIGZpbHRlclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgaWYgKGZpbHRlcnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZmlsdGVyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVyQ2xvc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlci1hY3RpdmVcIik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgICB9LCA1MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJUb2dnbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJDbG9zZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgZmlsdGVycy5jbGFzc0xpc3QuYWRkKCdhbGl2ZScpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZmlsdGVycy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0sIDUwKTtcbiAgICAgIFxuICAgIH1cbiAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG4gIGNsb3NlRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBpZiAoZmlsdGVycy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBmaWx0ZXJUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJDbG9zZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyLWFjdGl2ZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9KTtcbiAgZmlsdGVyQ2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBpZiAoZmlsdGVycy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBmaWx0ZXJUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJDbG9zZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyLWFjdGl2ZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIG1haW5NZW51U3RhdGVzKCkge1xuICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjZXNzaWJsZU5hdiAuc2l0ZS1uYXYubGV2ZWwxJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaXRlLW5hdi5sZXZlbDEgLmxldmVsMV9pdGVtJykuZm9yRWFjaCggZnVuY3Rpb24obmF2dmVyKSB7XG4gICAgbmF2dmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbmF2dmVyLmNsYXNzTGlzdC5hZGQoJ21haW5ob3ZlcicpO1xuICAgICAgbmF2SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWFpbm92ZXInKTtcbiAgICB9KTtcbiAgICBuYXZ2ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBuYXZ2ZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbmhvdmVyJyk7XG4gICAgICBuYXZJdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdtYWlub3ZlcicpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudVN0YXRlcygpIHtcbiAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY2Vzc2libGVOYXYgLnNpdGUtbmF2Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaXRlLW5hdiBsaSBkaXYgYScpLmZvckVhY2goIGZ1bmN0aW9uKG5hdnZlcikge1xuICAgIG5hdnZlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG5hdnZlci5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgbmF2SXRlbXMuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xuICAgIH0pO1xuICAgIG5hdnZlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG5hdnZlci5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgbmF2SXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9vdE5hdlN0YXRlcygpIHtcbiAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtZm9vdGVyIC5mb290ZXJfaXRlbScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vdGVyX2l0ZW0gLmZvb3Rlcl9saW5rbGlzdCBsaSBhJykuZm9yRWFjaCggZnVuY3Rpb24obmF2dmVyKSB7XG4gICAgbmF2dmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbmF2dmVyLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICBuYXZJdGVtcy5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XG4gICAgfSk7XG4gICAgbmF2dmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbmF2dmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICBuYXZJdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgfSk7XG4gIH0pO1xuICBcbn1cblxuXG4vLyBTd3VwICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gSW5pdGlhbCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnNvbGUubG9nKFwic2NyaXB0cyBpbml0XCIpO1xuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9hcmVhJykpIHtcbiAgICBhY2NvdW50cygpO1xuICAgLy8gIHRvZ2dsZUFkZHJlc3MoKTtcbiAgfVxuICB2aWV3cG9ydCgpO1xuICBkaXN0YW5jZVNjcm9sbGVkKCk7XG4gIGxvYWRlZCgpO1xuICBtYWluTWVudVN0YXRlcygpO1xuICBtZW51U3RhdGVzKCk7XG4gIGZvb3ROYXZTdGF0ZXMoKTtcbiAgLy9zZXROYXZpZ2F0aW9uKCk7XG4gIG1vYk5hdmlnYXRpb24oKTtcblxuICBuZXh0U2VjdGlvbigpO1xuICBhY2NvcmRpb25zKCk7XG59XG5cblxuZnVuY3Rpb24gdW5sb2FkKCkge1xuICBjbG9zZU5hdigpO1xufVxuXG4vLyBydW4gb25jZSBcbmluaXQoKTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Fzc2V0cy9zY3JpcHRzXCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1jYXJ0XCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1ibG9nXCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1ib3RcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLXRvcFwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtcGFnZVwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raG1wXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2htcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvc2NyaXB0cy5qc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvc3R5bGVzLWNhcnRcIixcImFzc2V0cy9zdHlsZXMtYmxvZ1wiLFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCIsXCJhc3NldHMvc3R5bGVzLWJvdFwiLFwiYXNzZXRzL3N0eWxlcy10b3BcIixcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIixcImFzc2V0cy9zdHlsZXMtc2VhcmNocGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIixcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiLFwiYXNzZXRzL3N0eWxlcy1wYWdlXCIsXCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGVzLXRvcC5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtYm90LnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1hcnRpY2xlLnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1ibG9nLnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1jYXJ0LnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1jb2xsZWN0aW9ucy5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtcGFnZS5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtcHJvZHVjdC5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtc3dpZmZ5LnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1zZWFyY2hwYWdlLnNjc3NcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvc3R5bGVzLWNhcnRcIixcImFzc2V0cy9zdHlsZXMtYmxvZ1wiLFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCIsXCJhc3NldHMvc3R5bGVzLWJvdFwiLFwiYXNzZXRzL3N0eWxlcy10b3BcIixcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIixcImFzc2V0cy9zdHlsZXMtc2VhcmNocGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIixcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiLFwiYXNzZXRzL3N0eWxlcy1wYWdlXCIsXCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGVzLWFjY291bnRzLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdldE5leHRTaWJsaW5nIiwiZWxlbSIsInNlbGVjdG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImdldFByZXZpb3VzU2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJnZXRTaWJsaW5ncyIsInNpYmxpbmdzIiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJub2RlVHlwZSIsInB1c2giLCJuZXh0U2libGluZyIsImlzSW5WaWV3cG9ydCIsImRpc3RhbmNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJpc0luVmlld3BvcnRUb3AiLCJ0aHJvdHRsZSIsImZuIiwid2FpdCIsInRpbWUiLCJEYXRlIiwibm93IiwiZGlzdGFuY2VTY3JvbGxlZCIsInBhZ2VZT2Zmc2V0IiwibmV4dFNlY3Rpb24iLCJnZXRFbGVtZW50QnlJZCIsIm5leHRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VzdFBhcmVudCIsImNsb3Nlc3QiLCJuZXh0UGFyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJ2aWV3cG9ydCIsImxvYWRlZCIsImV2ZW50Iiwic2V0VGltZW91dCIsImxvYWRlZGVkIiwiY29udGFpbnMiLCJib2R5Q2xvc2VyIiwibmF2IiwiaGVlZGVyIiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsIm1haW4iLCJldiIsInN0b3BQcm9wYWdhdGlvbiIsIm1vYk5hdiIsImNsb3NlTmF2IiwibW9iTmF2aWdhdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcExldmVsMSIsInByZXZlbnREZWZhdWx0IiwiZHJvcExldmVsMiIsImFjY291bnRzIiwiUmVjb3ZlclBhc3N3b3JkIiwiSGlkZVJlY292ZXJQYXNzd29yZExpbmsiLCJDdXN0b21lckxvZ2luRm9ybSIsIlJlY292ZXJQYXNzd29yZEZvcm0iLCJjb25zb2xlIiwibG9nIiwiYWNjb3JkaW9ucyIsInRyaWdnZXIiLCJ0YXJnZXRTZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwidGhlU2VjdGlvbiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNhcnRUb2dnbGUiLCJjbG9zZUNhcnR4IiwiY2xvc2VDYXJ0Iiwic2lkZUNhcnQiLCJmaWx0ZXJUb2dnbGUiLCJjbG9zZUZpbHRlciIsImZpbHRlckNsb3NlciIsImZpbHRlcnMiLCJtYWluTWVudVN0YXRlcyIsIm5hdkl0ZW1zIiwibmF2dmVyIiwiZSIsIm1lbnVTdGF0ZXMiLCJmb290TmF2U3RhdGVzIiwiaW5pdCIsInVubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=