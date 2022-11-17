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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9obXAvLi9zcmMvanMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtY29sbGVjdGlvbnMuc2Nzcz9jZDhlIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1wYWdlLnNjc3M/NzQ3YiIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtcHJvZHVjdC5zY3NzPzM2NzQiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLXN3aWZmeS5zY3NzP2U1ZGEiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLXNlYXJjaHBhZ2Uuc2Nzcz8xMmMxIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1hY2NvdW50cy5zY3NzIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy10b3Auc2NzcyIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtYm90LnNjc3MiLCJ3ZWJwYWNrOi8vaG1wLy4vc3JjL3Nhc3Mvc3R5bGVzLWFydGljbGUuc2NzcyIsIndlYnBhY2s6Ly9obXAvLi9zcmMvc2Fzcy9zdHlsZXMtYmxvZy5zY3NzIiwid2VicGFjazovL2htcC8uL3NyYy9zYXNzL3N0eWxlcy1jYXJ0LnNjc3M/ZDljNiIsIndlYnBhY2s6Ly9obXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG1wL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vaG1wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG1wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG1wL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2htcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2htcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaG1wL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbi8vIEhlbHBlcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pZiAod2luZG93Lm1hdGNoTWVkaWEoJyhob3ZlcjogaG92ZXIpJykubWF0Y2hlcykge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9ob3ZlcicpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub2hvdmVyJyk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbn1cblxudmFyIGdldE5leHRTaWJsaW5nID0gZnVuY3Rpb24gKGVsZW0sIHNlbGVjdG9yKSB7XG5cdC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcblx0dmFyIHNpYmxpbmcgPSBlbGVtLm5leHRFbGVtZW50U2libGluZztcblx0Ly8gSWYgdGhlcmUncyBubyBzZWxlY3RvciwgcmV0dXJuIHRoZSBmaXJzdCBzaWJsaW5nXG5cdGlmICghc2VsZWN0b3IpIHJldHVybiBzaWJsaW5nO1xuXHQvLyBJZiB0aGUgc2libGluZyBtYXRjaGVzIG91ciBzZWxlY3RvciwgdXNlIGl0XG5cdC8vIElmIG5vdCwganVtcCB0byB0aGUgbmV4dCBzaWJsaW5nIGFuZCBjb250aW51ZSB0aGUgbG9vcFxuXHR3aGlsZSAoc2libGluZykge1xuXHRcdGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gc2libGluZztcblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmdcblx0fVxufTtcblxudmFyIGdldFByZXZpb3VzU2libGluZyA9IGZ1bmN0aW9uIChlbGVtLCBzZWxlY3Rvcikge1xuXG5cdC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcblx0dmFyIHNpYmxpbmcgPSBlbGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cblx0Ly8gSWYgdGhlcmUncyBubyBzZWxlY3RvciwgcmV0dXJuIHRoZSBmaXJzdCBzaWJsaW5nXG5cdGlmICghc2VsZWN0b3IpIHJldHVybiBzaWJsaW5nO1xuXG5cdC8vIElmIHRoZSBzaWJsaW5nIG1hdGNoZXMgb3VyIHNlbGVjdG9yLCB1c2UgaXRcblx0Ly8gSWYgbm90LCBqdW1wIHRvIHRoZSBuZXh0IHNpYmxpbmcgYW5kIGNvbnRpbnVlIHRoZSBsb29wXG5cdHdoaWxlIChzaWJsaW5nKSB7XG5cdFx0aWYgKHNpYmxpbmcubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBzaWJsaW5nO1xuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdH1cblxufTtcblxudmFyIGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0Ly8gU2V0dXAgc2libGluZ3MgYXJyYXkgYW5kIGdldCB0aGUgZmlyc3Qgc2libGluZ1xuXHR2YXIgc2libGluZ3MgPSBbXTtcblx0dmFyIHNpYmxpbmcgPSBlbGVtLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcblx0d2hpbGUgKHNpYmxpbmcpIHtcblx0XHRpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtKSB7XG5cdFx0XHRzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xuXHRcdH1cblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcblx0fVxuXHRyZXR1cm4gc2libGluZ3M7XG59O1xuXG4vKiFcbiAqIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFxuICogKGMpIDIwMTcgQ2hyaXMgRmVyZGluYW5kaSwgTUlUIExpY2Vuc2UsIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbVxuICogQHBhcmFtICB7Tm9kZX0gICAgZWxlbSBUaGUgZWxlbWVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBSZXR1cm5zIHRydWUgaWYgZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcbiAqL1xudmFyIGlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdHZhciBkaXN0YW5jZSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdHJldHVybiAoXG5cdFx0ZGlzdGFuY2UudG9wID49IDAgJiZcblx0XHRkaXN0YW5jZS5sZWZ0ID49IDAgJiZcblx0XHRkaXN0YW5jZS5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuXHRcdGRpc3RhbmNlLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG5cdCk7XG59O1xuLy8gQXMgYWJvdmUganVzdCBjYWxjdWxhdGVzIGZyb20gdGhlIHRvcFxudmFyIGlzSW5WaWV3cG9ydFRvcCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gIHZhciBkaXN0YW5jZSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiAoXG4gICAgZGlzdGFuY2UuYm90dG9tID49IDAgJiZcbiAgICBkaXN0YW5jZS5sZWZ0ID49IDAgJiZcbiAgICBkaXN0YW5jZS50b3AgPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgIGRpc3RhbmNlLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICk7XG59O1xuXG4vLyB3aGVuIHNjcm9sbGluZyBsZXRzIG5vdCBraWxsIHRoZSBwcm9jZXNzb3JcbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB3YWl0KSB7XG4gIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICgodGltZSArIHdhaXQgLSBEYXRlLm5vdygpKSA8IDApIHtcbiAgICAgIGZuKCk7XG4gICAgICB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBOYXZpZ2F0aW9uICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBkaXN0YW5jZVNjcm9sbGVkKCkge1xuICBpZiAocGFnZVlPZmZzZXQgPiAzMikge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImhpZGVOYXZcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZU5hdlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0U2VjdGlvbigpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRCdXR0b24nKSkge1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dEJ1dHRvbicpO1xuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjbG9zZXN0UGFyZW50ID0gbmV4dEJ1dHRvbi5jbG9zZXN0KCcuc2hvcGlmeS1zZWN0aW9uJyk7XG4gICAgICBsZXQgbmV4dFBhcmVudCA9IGdldE5leHRTaWJsaW5nKGNsb3Nlc3RQYXJlbnQpO1xuICAgICAgbmV4dFBhcmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdwb3J0KCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aHJvdHRsZShkaXN0YW5jZVNjcm9sbGVkLCAxMCkpO1xufVxuXG5mdW5jdGlvbiBsb2FkZWQoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSwgMSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbG9hZGVkZWQoKSB7XG4gICAgaWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRpbmcnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYm9keUNsb3NlcigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc2libGVOYXYnKTtcbiAgY29uc3QgaGVlZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51VHJpZ2dlcicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBpZiAoaGVlZGVyLmNsYXNzTGlzdC5jb250YWlucygnbmF2LW91dCcpKSB7XG4gICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2ItbmF2LW91dCcpO1xuICAgIH0sIGZhbHNlKTtcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7IFxuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuXG52YXIgbW9iTmF2ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA5NjBweClcIilcblxuZnVuY3Rpb24gY2xvc2VOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXNzaWJsZU5hdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2ItbmF2LW91dCcpO1xuXG59XG5cbmZ1bmN0aW9uIG1vYk5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXNzaWJsZU5hdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUcmlnZ2VyJyk7XG4gIGNvbnN0IGhlZWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAvLyBjb25zdCBzZWFyY2hUb2dnbGU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hUb2dnbGUnKTtcbiAgLy8gY29uc3QgaGVhZGVyU2VhcmNoPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyU2VhcmNoJyk7XG4gIC8vIGNvbnN0IG1vYlNlYXJjaENsb3NlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iU2VhcmNoQ2xvc2UnKTtcbiAgXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgLy9jb25zb2xlLmxvZyhcImNsb3NlXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBoZWVkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW91dCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2ItbmF2LW91dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwib3BlblwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtb3BlbicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgaGVlZGVyLmNsYXNzTGlzdC5hZGQoJ25hdi1vdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9iLW5hdi1vdXQnKTtcbiAgICAgIGJvZHlDbG9zZXIoKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgLy8gZHJvcGRvd24gdG9nZ2xlcnNcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpdGUtbmF2IC5oYXNtZWdhJykuZm9yRWFjaCggZnVuY3Rpb24oZHJvcExldmVsMSkge1xuICAgIGRyb3BMZXZlbDEucXVlcnlTZWxlY3RvcignYS5sZXZlbDFfcGFyZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICAgIGlmIChkcm9wTGV2ZWwxLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZHJvcExldmVsMS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcExldmVsMS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfTtcbiAgICAgIGlmIChtb2JOYXYubWF0Y2hlcykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaXRlLW5hdiAuaGFzbWVnYSAubGV2ZWwyX2l0ZW0uaXNwYXJlbnQnKS5mb3JFYWNoKCBmdW5jdGlvbihkcm9wTGV2ZWwyKSB7XG4gICAgZHJvcExldmVsMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgaWYgKGRyb3BMZXZlbDIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBkcm9wTGV2ZWwyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wTGV2ZWwyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBcbn1cblxuXG4vLyBhY2NvdW50IHBhZ2VzIHN0dWZmXG5mdW5jdGlvbiBhY2NvdW50cygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlY292ZXJQYXNzd29yZCcpKSB7XG4gICAgbGV0IFJlY292ZXJQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmQnKTtcbiAgICBsZXQgSGlkZVJlY292ZXJQYXNzd29yZExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSGlkZVJlY292ZXJQYXNzd29yZExpbmsnKTtcbiAgICBsZXQgQ3VzdG9tZXJMb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3VzdG9tZXJMb2dpbkZvcm0nKTtcbiAgICBsZXQgUmVjb3ZlclBhc3N3b3JkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWNvdmVyUGFzc3dvcmRGb3JtJyk7XG4gICAgXG4gICAgUmVjb3ZlclBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInlheSBjbGlja2VkXCIpO1xuICAgICAgQ3VzdG9tZXJMb2dpbkZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgUmVjb3ZlclBhc3N3b3JkRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSk7XG4gICAgXG4gICAgSGlkZVJlY292ZXJQYXNzd29yZExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieWF5IGNsaWNrZWRcIik7XG4gICAgICBSZWNvdmVyUGFzc3dvcmRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIEN1c3RvbWVyTG9naW5Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25zKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY29yZGlvbkdyb3VwJykpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIEFjY29yZGlvbnNcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkFjY29yZGlvbiBoMyBidXR0b24nKS5mb3JFYWNoKCBmdW5jdGlvbih0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IHRhcmdldFNlY3Rpb24gPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRoZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRTZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aXMgdHJ1ZVwiKTtcbiAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgIHRoZVNlY3Rpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGlzIGZhbHNlXCIpO1xuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB0aGVTZWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5sZXQgY2FydFRvZ2dsZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnRUb2dnbGUnKTtcbmxldCBjbG9zZUNhcnR4PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VDYXJ0eCcpO1xubGV0IGNsb3NlQ2FydD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQ2FydCcpO1xubGV0IHNpZGVDYXJ0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWNhcnQnKTtcblxuY2FydFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gIGlmIChjYXJ0VG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBjYXJ0VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNpZGVjYXJ0LWFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWxpdmUnKTtcbiAgICB9LCA1MDApO1xuICB9IGVsc2Uge1xuICAgIGNhcnRUb2dnbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic2lkZWNhcnQtYWN0aXZlXCIpO1xuICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5hZGQoJ2FsaXZlJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0sIDUwKTtcbiAgfVxuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY2xvc2VDYXJ0eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gIGlmIChzaWRlQ2FydC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgc2lkZUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWNhcnQtYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgIH0sIDUwMCk7XG4gIH1cbn0pO1xuY2xvc2VDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgaWYgKHNpZGVDYXJ0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBzaWRlQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlY2FydC1hY3RpdmVcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNpZGVDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgfSwgNTAwKTtcbiAgfVxufSk7XG5cbi8vIC8vIEZpbHRlcnMgVG9nZ2xlXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlclRvZ2dsZScpKSB7XG4gIGxldCBmaWx0ZXJUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyVG9nZ2xlJyk7XG4gIGxldCBjbG9zZUZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUZpbHRlcicpO1xuICBsZXQgZmlsdGVyQ2xvc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlckNsb3NlcicpO1xuICBsZXQgZmlsdGVycz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29sbGVjdGlvbi1maWx0ZXJzJyk7XG4gIFxuICBmaWx0ZXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGlmIChmaWx0ZXJzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGZpbHRlclRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGZpbHRlckNsb3Nlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhbGl2ZScpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVyQ2xvc2VyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyLWFjdGl2ZVwiKTtcbiAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LmFkZCgnYWxpdmUnKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9LCA1MCk7XG4gICAgICBcbiAgICB9XG4gICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBjbG9zZUZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgaWYgKGZpbHRlcnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZmlsdGVyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVyQ2xvc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlci1hY3RpdmVcIik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfSk7XG4gIGZpbHRlckNsb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgaWYgKGZpbHRlcnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZmlsdGVyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVyQ2xvc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlci1hY3RpdmVcIik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaXZlJyk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cbi8vIFN3dXAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBJbml0aWFsIGZ1bmN0aW9uc1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc29sZS5sb2coXCJzY3JpcHRzIGluaXRcIik7XG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X2FyZWEnKSkge1xuICAgIGFjY291bnRzKCk7XG4gICAvLyAgdG9nZ2xlQWRkcmVzcygpO1xuICB9XG4gIHZpZXdwb3J0KCk7XG4gIGRpc3RhbmNlU2Nyb2xsZWQoKTtcbiAgbG9hZGVkKCk7XG5cbiAgLy9zZXROYXZpZ2F0aW9uKCk7XG4gIG1vYk5hdmlnYXRpb24oKTtcblxuICBuZXh0U2VjdGlvbigpO1xuICBhY2NvcmRpb25zKCk7XG59XG5cblxuZnVuY3Rpb24gdW5sb2FkKCkge1xuICBjbG9zZU5hdigpO1xufVxuXG4vLyBydW4gb25jZSBcbmluaXQoKTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Fzc2V0cy9zY3JpcHRzXCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1jYXJ0XCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1ibG9nXCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCI6IDAsXG5cdFwiYXNzZXRzL3N0eWxlcy1ib3RcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLXRvcFwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIjogMCxcblx0XCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtcGFnZVwiOiAwLFxuXHRcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raG1wXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2htcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvc2NyaXB0cy5qc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvc3R5bGVzLWNhcnRcIixcImFzc2V0cy9zdHlsZXMtYmxvZ1wiLFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCIsXCJhc3NldHMvc3R5bGVzLWJvdFwiLFwiYXNzZXRzL3N0eWxlcy10b3BcIixcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIixcImFzc2V0cy9zdHlsZXMtc2VhcmNocGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIixcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiLFwiYXNzZXRzL3N0eWxlcy1wYWdlXCIsXCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGVzLXRvcC5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtYm90LnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1hcnRpY2xlLnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1ibG9nLnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1jYXJ0LnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1jb2xsZWN0aW9ucy5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtcGFnZS5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtcHJvZHVjdC5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9zdHlsZXMtY2FydFwiLFwiYXNzZXRzL3N0eWxlcy1ibG9nXCIsXCJhc3NldHMvc3R5bGVzLWFydGljbGVcIixcImFzc2V0cy9zdHlsZXMtYm90XCIsXCJhc3NldHMvc3R5bGVzLXRvcFwiLFwiYXNzZXRzL3N0eWxlcy1hY2NvdW50c1wiLFwiYXNzZXRzL3N0eWxlcy1zZWFyY2hwYWdlXCIsXCJhc3NldHMvc3R5bGVzLXN3aWZmeVwiLFwiYXNzZXRzL3N0eWxlcy1wcm9kdWN0XCIsXCJhc3NldHMvc3R5bGVzLXBhZ2VcIixcImFzc2V0cy9zdHlsZXMtY29sbGVjdGlvbnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZXMtc3dpZmZ5LnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYXNzZXRzL3N0eWxlcy1jYXJ0XCIsXCJhc3NldHMvc3R5bGVzLWJsb2dcIixcImFzc2V0cy9zdHlsZXMtYXJ0aWNsZVwiLFwiYXNzZXRzL3N0eWxlcy1ib3RcIixcImFzc2V0cy9zdHlsZXMtdG9wXCIsXCJhc3NldHMvc3R5bGVzLWFjY291bnRzXCIsXCJhc3NldHMvc3R5bGVzLXNlYXJjaHBhZ2VcIixcImFzc2V0cy9zdHlsZXMtc3dpZmZ5XCIsXCJhc3NldHMvc3R5bGVzLXByb2R1Y3RcIixcImFzc2V0cy9zdHlsZXMtcGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1jb2xsZWN0aW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zYXNzL3N0eWxlcy1zZWFyY2hwYWdlLnNjc3NcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvc3R5bGVzLWNhcnRcIixcImFzc2V0cy9zdHlsZXMtYmxvZ1wiLFwiYXNzZXRzL3N0eWxlcy1hcnRpY2xlXCIsXCJhc3NldHMvc3R5bGVzLWJvdFwiLFwiYXNzZXRzL3N0eWxlcy10b3BcIixcImFzc2V0cy9zdHlsZXMtYWNjb3VudHNcIixcImFzc2V0cy9zdHlsZXMtc2VhcmNocGFnZVwiLFwiYXNzZXRzL3N0eWxlcy1zd2lmZnlcIixcImFzc2V0cy9zdHlsZXMtcHJvZHVjdFwiLFwiYXNzZXRzL3N0eWxlcy1wYWdlXCIsXCJhc3NldHMvc3R5bGVzLWNvbGxlY3Rpb25zXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGVzLWFjY291bnRzLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdldE5leHRTaWJsaW5nIiwiZWxlbSIsInNlbGVjdG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImdldFByZXZpb3VzU2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJnZXRTaWJsaW5ncyIsInNpYmxpbmdzIiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJub2RlVHlwZSIsInB1c2giLCJuZXh0U2libGluZyIsImlzSW5WaWV3cG9ydCIsImRpc3RhbmNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJpc0luVmlld3BvcnRUb3AiLCJ0aHJvdHRsZSIsImZuIiwid2FpdCIsInRpbWUiLCJEYXRlIiwibm93IiwiZGlzdGFuY2VTY3JvbGxlZCIsInBhZ2VZT2Zmc2V0IiwibmV4dFNlY3Rpb24iLCJnZXRFbGVtZW50QnlJZCIsIm5leHRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VzdFBhcmVudCIsImNsb3Nlc3QiLCJuZXh0UGFyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJ2aWV3cG9ydCIsImxvYWRlZCIsImV2ZW50Iiwic2V0VGltZW91dCIsImxvYWRlZGVkIiwiY29udGFpbnMiLCJib2R5Q2xvc2VyIiwibmF2IiwiaGVlZGVyIiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsIm1haW4iLCJldiIsInN0b3BQcm9wYWdhdGlvbiIsIm1vYk5hdiIsImNsb3NlTmF2IiwibW9iTmF2aWdhdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcExldmVsMSIsInByZXZlbnREZWZhdWx0IiwiZHJvcExldmVsMiIsImFjY291bnRzIiwiUmVjb3ZlclBhc3N3b3JkIiwiSGlkZVJlY292ZXJQYXNzd29yZExpbmsiLCJDdXN0b21lckxvZ2luRm9ybSIsIlJlY292ZXJQYXNzd29yZEZvcm0iLCJjb25zb2xlIiwibG9nIiwiYWNjb3JkaW9ucyIsInRyaWdnZXIiLCJ0YXJnZXRTZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwidGhlU2VjdGlvbiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNhcnRUb2dnbGUiLCJjbG9zZUNhcnR4IiwiY2xvc2VDYXJ0Iiwic2lkZUNhcnQiLCJmaWx0ZXJUb2dnbGUiLCJjbG9zZUZpbHRlciIsImZpbHRlckNsb3NlciIsImZpbHRlcnMiLCJpbml0IiwidW5sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==