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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRTNEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2htcC8uL3NyYy9qcy9zY3JpcHRzLmpzIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1jb2xsZWN0aW9ucy5zY3NzP2NkOGUiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLXBhZ2Uuc2Nzcz83NDdiIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1wcm9kdWN0LnNjc3M/MzY3NCIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtc3dpZmZ5LnNjc3M/ZTVkYSIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtc2VhcmNocGFnZS5zY3NzPzEyYzEiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLWFjY291bnRzLnNjc3MiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLXRvcC5zY3NzIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1ib3Quc2NzcyIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtYXJ0aWNsZS5zY3NzIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1ibG9nLnNjc3MiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLWNhcnQuc2Nzcz9kOWM2Iiwid2VicGFjazovL2htcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaG1wL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaG1wL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuLy8gSGVscGVycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKGhvdmVyOiBob3ZlciknKS5tYXRjaGVzKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub2hvdmVyJyk7XG59IGVsc2Uge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vaG92ZXInKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xufVxuXG52YXIgZ2V0TmV4dFNpYmxpbmcgPSBmdW5jdGlvbiAoZWxlbSwgc2VsZWN0b3IpIHtcblx0Ly8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxuXHR2YXIgc2libGluZyA9IGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHQvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XG5cdC8vIElmIHRoZSBzaWJsaW5nIG1hdGNoZXMgb3VyIHNlbGVjdG9yLCB1c2UgaXRcblx0Ly8gSWYgbm90LCBqdW1wIHRvIHRoZSBuZXh0IHNpYmxpbmcgYW5kIGNvbnRpbnVlIHRoZSBsb29wXG5cdHdoaWxlIChzaWJsaW5nKSB7XG5cdFx0aWYgKHNpYmxpbmcubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBzaWJsaW5nO1xuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZ1xuXHR9XG59O1xuXG52YXIgZ2V0UHJldmlvdXNTaWJsaW5nID0gZnVuY3Rpb24gKGVsZW0sIHNlbGVjdG9yKSB7XG5cblx0Ly8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxuXHR2YXIgc2libGluZyA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcblxuXHQvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XG5cblx0Ly8gSWYgdGhlIHNpYmxpbmcgbWF0Y2hlcyBvdXIgc2VsZWN0b3IsIHVzZSBpdFxuXHQvLyBJZiBub3QsIGp1bXAgdG8gdGhlIG5leHQgc2libGluZyBhbmQgY29udGludWUgdGhlIGxvb3Bcblx0d2hpbGUgKHNpYmxpbmcpIHtcblx0XHRpZiAoc2libGluZy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHNpYmxpbmc7XG5cdFx0c2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcblx0fVxuXG59O1xuXG52YXIgZ2V0U2libGluZ3MgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHQvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXG5cdHZhciBzaWJsaW5ncyA9IFtdO1xuXHR2YXIgc2libGluZyA9IGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXHQvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuXHR3aGlsZSAoc2libGluZykge1xuXHRcdGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcblx0XHRcdHNpYmxpbmdzLnB1c2goc2libGluZyk7XG5cdFx0fVxuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuXHR9XG5cdHJldHVybiBzaWJsaW5ncztcbn07XG5cbi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gKiAoYykgMjAxNyBDaHJpcyBGZXJkaW5hbmRpLCBNSVQgTGljZW5zZSwgaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tXG4gKiBAcGFyYW0gIHtOb2RlfSAgICBlbGVtIFRoZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFJldHVybnMgdHJ1ZSBpZiBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFxuICovXG52YXIgaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0dmFyIGRpc3RhbmNlID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0cmV0dXJuIChcblx0XHRkaXN0YW5jZS50b3AgPj0gMCAmJlxuXHRcdGRpc3RhbmNlLmxlZnQgPj0gMCAmJlxuXHRcdGRpc3RhbmNlLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG5cdFx0ZGlzdGFuY2UucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcblx0KTtcbn07XG4vLyBBcyBhYm92ZSBqdXN0IGNhbGN1bGF0ZXMgZnJvbSB0aGUgdG9wXG52YXIgaXNJblZpZXdwb3J0VG9wID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgdmFyIGRpc3RhbmNlID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIChcbiAgICBkaXN0YW5jZS5ib3R0b20gPj0gMCAmJlxuICAgIGRpc3RhbmNlLmxlZnQgPj0gMCAmJlxuICAgIGRpc3RhbmNlLnRvcCA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgZGlzdGFuY2UucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgKTtcbn07XG5cbi8vIHdoZW4gc2Nyb2xsaW5nIGxldHMgbm90IGtpbGwgdGhlIHByb2Nlc3NvclxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQpIHtcbiAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aW1lICsgd2FpdCAtIERhdGUubm93KCkpIDwgMCkge1xuICAgICAgZm4oKTtcbiAgICAgIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmlnYXRpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIGRpc3RhbmNlU2Nyb2xsZWQoKSB7XG4gIGlmIChwYWdlWU9mZnNldCA+IDMyKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiaGlkZU5hdlwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlTmF2XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5leHRTZWN0aW9uKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dEJ1dHRvbicpKSB7XG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0QnV0dG9uJyk7XG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNsb3Nlc3RQYXJlbnQgPSBuZXh0QnV0dG9uLmNsb3Nlc3QoJy5zaG9waWZ5LXNlY3Rpb24nKTtcbiAgICAgIGxldCBuZXh0UGFyZW50ID0gZ2V0TmV4dFNpYmxpbmcoY2xvc2VzdFBhcmVudCk7XG4gICAgICBuZXh0UGFyZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlld3BvcnQoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRocm90dGxlKGRpc3RhbmNlU2Nyb2xsZWQsIDEwKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9LCAxKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBsb2FkZWRlZCgpIHtcbiAgICBpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9hZGluZycpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBib2R5Q2xvc2VyKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzaWJsZU5hdicpO1xuICBjb25zdCBoZWVkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGlmIChoZWVkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtb3V0JykpIHtcbiAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vYi1uYXYtb3V0Jyk7XG4gICAgfSwgZmFsc2UpO1xuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIFxuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgfSwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2Vzc2libGVOYXZcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51VHJpZ2dlcicpO1xuICBjb25zdCBoZWVkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9iLW5hdi1vdXQnKTtcblxufVxuXG5mdW5jdGlvbiBtb2JOYXZpZ2F0aW9uKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2Vzc2libGVOYXZcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51VHJpZ2dlcicpO1xuICBjb25zdCBoZWVkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcbiAgLy8gY29uc3Qgc2VhcmNoVG9nZ2xlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVG9nZ2xlJyk7XG4gIC8vIGNvbnN0IGhlYWRlclNlYXJjaD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlclNlYXJjaCcpO1xuICAvLyBjb25zdCBtb2JTZWFyY2hDbG9zZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYlNlYXJjaENsb3NlJyk7XG4gIFxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJjbG9zZVwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9iLW5hdi1vdXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9jb25zb2xlLmxvZyhcIm9wZW5cIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LW9wZW4nKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGhlZWRlci5jbGFzc0xpc3QuYWRkKCduYXYtb3V0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vYi1uYXYtb3V0Jyk7XG4gICAgICBib2R5Q2xvc2VyKCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIC8vIGRyb3Bkb3duIHRvZ2dsZXJzXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaXRlLW5hdiAuaGFzbWVnYScpLmZvckVhY2goIGZ1bmN0aW9uKGRyb3BMZXZlbDEpIHtcbiAgICBkcm9wTGV2ZWwxLnF1ZXJ5U2VsZWN0b3IoJ2EubGV2ZWwxX3BhcmVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XG4gICAgICBpZiAoZHJvcExldmVsMS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGRyb3BMZXZlbDEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyb3BMZXZlbDEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2l0ZS1uYXYgLmhhc21lZ2EgLmxldmVsMl9pdGVtLmlzcGFyZW50JykuZm9yRWFjaCggZnVuY3Rpb24oZHJvcExldmVsMikge1xuICAgIGRyb3BMZXZlbDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICAgIGlmIChkcm9wTGV2ZWwyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZHJvcExldmVsMi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcExldmVsMi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgXG59XG5cblxuLy8gYWNjb3VudCBwYWdlcyBzdHVmZlxuZnVuY3Rpb24gYWNjb3VudHMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmQnKSkge1xuICAgIGxldCBSZWNvdmVyUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVjb3ZlclBhc3N3b3JkJyk7XG4gICAgbGV0IEhpZGVSZWNvdmVyUGFzc3dvcmRMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0hpZGVSZWNvdmVyUGFzc3dvcmRMaW5rJyk7XG4gICAgbGV0IEN1c3RvbWVyTG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0N1c3RvbWVyTG9naW5Gb3JtJyk7XG4gICAgbGV0IFJlY292ZXJQYXNzd29yZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVjb3ZlclBhc3N3b3JkRm9ybScpO1xuICAgIFxuICAgIFJlY292ZXJQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ5YXkgY2xpY2tlZFwiKTtcbiAgICAgIEN1c3RvbWVyTG9naW5Gb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIFJlY292ZXJQYXNzd29yZEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pO1xuICAgIFxuICAgIEhpZGVSZWNvdmVyUGFzc3dvcmRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInlheSBjbGlja2VkXCIpO1xuICAgICAgUmVjb3ZlclBhc3N3b3JkRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBDdXN0b21lckxvZ2luRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9ucygpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvcmRpb25Hcm91cCcpKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyBBY2NvcmRpb25zXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5BY2NvcmRpb24gaDMgYnV0dG9uJykuZm9yRWFjaCggZnVuY3Rpb24odHJpZ2dlcikge1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXJnZXRTZWN0aW9uID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0aGVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0U2VjdGlvbik7XG4gICAgICAgIFxuICAgICAgICBpZih0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09ICd0cnVlJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGlzIHRydWVcIik7XG4gICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICB0aGVTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRpcyBmYWxzZVwiKTtcbiAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdGhlU2VjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxubGV0IGNhcnRUb2dnbGU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0VG9nZ2xlJyk7XG5sZXQgY2xvc2VDYXJ0eD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQ2FydHgnKTtcbmxldCBjbG9zZUNhcnQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUNhcnQnKTtcbmxldCBzaWRlQ2FydD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVjYXJ0Jyk7XG5cbmNhcnRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICBpZiAoY2FydFRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgY2FydFRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlY2FydC1hY3RpdmVcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgfSwgNTAwKTtcbiAgfSBlbHNlIHtcbiAgICBjYXJ0VG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInNpZGVjYXJ0LWFjdGl2ZVwiKTtcbiAgICBzaWRlQ2FydC5jbGFzc0xpc3QuYWRkKCdhbGl2ZScpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzaWRlQ2FydC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9LCA1MCk7XG4gIH1cbiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbmNsb3NlQ2FydHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICBpZiAoc2lkZUNhcnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNpZGVjYXJ0LWFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICB9LCA1MDApO1xuICB9XG59KTtcbmNsb3NlQ2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gIGlmIChzaWRlQ2FydC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWNhcnQtYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgIH0sIDUwMCk7XG4gIH1cbn0pO1xuXG4vLyAvLyBGaWx0ZXJzIFRvZ2dsZVxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXJUb2dnbGUnKSkge1xuICBsZXQgZmlsdGVyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlclRvZ2dsZScpO1xuICBsZXQgY2xvc2VGaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VGaWx0ZXInKTtcbiAgbGV0IGZpbHRlckNsb3NlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXJDbG9zZXInKTtcbiAgbGV0IGZpbHRlcnM9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbGxlY3Rpb24tZmlsdGVycycpO1xuICBcbiAgZmlsdGVyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBpZiAoZmlsdGVycy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBmaWx0ZXJUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJDbG9zZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyLWFjdGl2ZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlclRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGZpbHRlckNsb3Nlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZpbHRlci1hY3RpdmVcIik7XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5hZGQoJ2FsaXZlJyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfSwgNTApO1xuICAgICAgXG4gICAgfVxuICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgY2xvc2VGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGlmIChmaWx0ZXJzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGZpbHRlclRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGZpbHRlckNsb3Nlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH0pO1xuICBmaWx0ZXJDbG9zZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGlmIChmaWx0ZXJzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGZpbHRlclRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGZpbHRlckNsb3Nlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vLyBTd3VwICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gSW5pdGlhbCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnNvbGUubG9nKFwic2NyaXB0cyBpbml0XCIpO1xuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9hcmVhJykpIHtcbiAgICBhY2NvdW50cygpO1xuICAgLy8gIHRvZ2dsZUFkZHJlc3MoKTtcbiAgfVxuICB2aWV3cG9ydCgpO1xuICBkaXN0YW5jZVNjcm9sbGVkKCk7XG4gIGxvYWRlZCgpO1xuXG4gIC8vc2V0TmF2aWdhdGlvbigpO1xuICBtb2JOYXZpZ2F0aW9uKCk7XG5cbiAgbmV4dFNlY3Rpb24oKTtcbiAgYWNjb3JkaW9ucygpO1xufVxuXG5cbmZ1bmN0aW9uIHVubG9hZCgpIHtcbiAgY2xvc2VOYXYoKTtcbn1cblxuLy8gcnVuIG9uY2UgXG5pbml0KCk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9hc3NldHMvc2NyaXB0c1wiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtY2FydFwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtYmxvZ1wiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtYm90XCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy10b3BcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLXBhZ2VcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2htcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtobXBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvc3R5bGVzLWNhcnRcIixcImFzc2V0cy9zdHlsZXMtYmxvZ1wiLFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCIsXCJhc3NldHMvc3R5bGVzLWJvdFwiLFwiYXNzZXRzL3N0eWxlcy10b3BcIixcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIixcImFzc2V0cy9zdHlsZXMtc2VhcmNocGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIixcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiLFwiYXNzZXRzL3N0eWxlcy1wYWdlXCIsXCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL3NjcmlwdHMuanNcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy10b3Auc2Nzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvc3R5bGVzLWNhcnRcIixcImFzc2V0cy9zdHlsZXMtYmxvZ1wiLFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCIsXCJhc3NldHMvc3R5bGVzLWJvdFwiLFwiYXNzZXRzL3N0eWxlcy10b3BcIixcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIixcImFzc2V0cy9zdHlsZXMtc2VhcmNocGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIixcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiLFwiYXNzZXRzL3N0eWxlcy1wYWdlXCIsXCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGVzLWJvdC5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtYXJ0aWNsZS5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtYmxvZy5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtY2FydC5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtY29sbGVjdGlvbnMuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvc3R5bGVzLWNhcnRcIixcImFzc2V0cy9zdHlsZXMtYmxvZ1wiLFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCIsXCJhc3NldHMvc3R5bGVzLWJvdFwiLFwiYXNzZXRzL3N0eWxlcy10b3BcIixcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIixcImFzc2V0cy9zdHlsZXMtc2VhcmNocGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIixcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiLFwiYXNzZXRzL3N0eWxlcy1wYWdlXCIsXCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGVzLXBhZ2Uuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvc3R5bGVzLWNhcnRcIixcImFzc2V0cy9zdHlsZXMtYmxvZ1wiLFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCIsXCJhc3NldHMvc3R5bGVzLWJvdFwiLFwiYXNzZXRzL3N0eWxlcy10b3BcIixcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIixcImFzc2V0cy9zdHlsZXMtc2VhcmNocGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIixcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiLFwiYXNzZXRzL3N0eWxlcy1wYWdlXCIsXCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGVzLXByb2R1Y3Quc2Nzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvc3R5bGVzLWNhcnRcIixcImFzc2V0cy9zdHlsZXMtYmxvZ1wiLFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCIsXCJhc3NldHMvc3R5bGVzLWJvdFwiLFwiYXNzZXRzL3N0eWxlcy10b3BcIixcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIixcImFzc2V0cy9zdHlsZXMtc2VhcmNocGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIixcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiLFwiYXNzZXRzL3N0eWxlcy1wYWdlXCIsXCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGVzLXN3aWZmeS5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtc2VhcmNocGFnZS5zY3NzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1hY2NvdW50cy5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJnZXROZXh0U2libGluZyIsImVsZW0iLCJzZWxlY3RvciIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJnZXRQcmV2aW91c1NpYmxpbmciLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiZ2V0U2libGluZ3MiLCJzaWJsaW5ncyIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJwdXNoIiwibmV4dFNpYmxpbmciLCJpc0luVmlld3BvcnQiLCJkaXN0YW5jZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiaXNJblZpZXdwb3J0VG9wIiwidGhyb3R0bGUiLCJmbiIsIndhaXQiLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImRpc3RhbmNlU2Nyb2xsZWQiLCJwYWdlWU9mZnNldCIsIm5leHRTZWN0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3Nlc3RQYXJlbnQiLCJjbG9zZXN0IiwibmV4dFBhcmVudCIsInNjcm9sbEludG9WaWV3Iiwidmlld3BvcnQiLCJsb2FkZWQiLCJldmVudCIsInNldFRpbWVvdXQiLCJsb2FkZWRlZCIsImNvbnRhaW5zIiwiYm9keUNsb3NlciIsIm5hdiIsImhlZWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJtYWluIiwiZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJjbG9zZU5hdiIsIm1vYk5hdmlnYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRyb3BMZXZlbDEiLCJkcm9wTGV2ZWwyIiwiYWNjb3VudHMiLCJSZWNvdmVyUGFzc3dvcmQiLCJIaWRlUmVjb3ZlclBhc3N3b3JkTGluayIsIkN1c3RvbWVyTG9naW5Gb3JtIiwiUmVjb3ZlclBhc3N3b3JkRm9ybSIsImNvbnNvbGUiLCJsb2ciLCJhY2NvcmRpb25zIiwidHJpZ2dlciIsInRhcmdldFNlY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJ0aGVTZWN0aW9uIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FydFRvZ2dsZSIsImNsb3NlQ2FydHgiLCJjbG9zZUNhcnQiLCJzaWRlQ2FydCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyVG9nZ2xlIiwiY2xvc2VGaWx0ZXIiLCJmaWx0ZXJDbG9zZXIiLCJmaWx0ZXJzIiwiaW5pdCIsInVubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=