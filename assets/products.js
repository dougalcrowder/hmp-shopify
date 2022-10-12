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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function relatedProducts() {
  function loadProductRecommendationsIntoSection() {
    // Look for an element with class 'product-recommendations'
    var productRecommendationsSection = document.querySelector(".product-recommendations");
    if (productRecommendationsSection === null) {
      return;
    }
    // Read product id from data attribute
    var productId = productRecommendationsSection.dataset.productId;
    // Read base URL from data attribute
    var baseUrl = productRecommendationsSection.dataset.baseUrl;
    // Read limit from data attribute
    var limit = productRecommendationsSection.dataset.limit;
    // Build request URL
    var requestUrl = baseUrl + "?section_id=product-recommendations&product_id=" + productId + "&limit=" + limit;
    // Create request and submit it using Ajax
    var request = new XMLHttpRequest();
    request.open("GET", requestUrl);
    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        var container = document.createElement("div");
        container.innerHTML = request.response;
        productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;
      }
    };
    request.send();
  }
  ;

  // Listen for changes done in the Theme Editor
  document.addEventListener("shopify:section:load", function (event) {
    if (event.detail.sectionId === "product-recommendations") {
      loadProductRecommendationsIntoSection();
    }
  });
  // Fetching the recommendations on page load
  loadProductRecommendationsIntoSection();
}
relatedProducts();

/***/ }),

/***/ 1:
/*!**********************************!*\
  !*** multi ./src/js/products.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dougalcrowder/Dropbox/Websites/Hannah Martin Pierced/Hannah Martin Pierced Shopify/src/js/products.js */"./src/js/products.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Byb2R1Y3RzLmpzIl0sIm5hbWVzIjpbInJlbGF0ZWRQcm9kdWN0cyIsImxvYWRQcm9kdWN0UmVjb21tZW5kYXRpb25zSW50b1NlY3Rpb24iLCJwcm9kdWN0UmVjb21tZW5kYXRpb25zU2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2R1Y3RJZCIsImRhdGFzZXQiLCJiYXNlVXJsIiwibGltaXQiLCJyZXF1ZXN0VXJsIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJyZXNwb25zZSIsInBhcmVudEVsZW1lbnQiLCJzZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGV0YWlsIiwic2VjdGlvbklkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsU0FBU0EsZUFBZSxHQUFHO0VBRXZCLFNBQVNDLHFDQUFxQyxHQUFHO0lBQzlDO0lBQ0EsSUFBSUMsNkJBQTZCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDBCQUEwQixDQUFDO0lBQ3RGLElBQUlGLDZCQUE2QixLQUFLLElBQUksRUFBRTtNQUFFO0lBQVE7SUFDdEQ7SUFDQSxJQUFJRyxTQUFTLEdBQUdILDZCQUE2QixDQUFDSSxPQUFPLENBQUNELFNBQVM7SUFDL0Q7SUFDQSxJQUFJRSxPQUFPLEdBQUdMLDZCQUE2QixDQUFDSSxPQUFPLENBQUNDLE9BQU87SUFDM0Q7SUFDQSxJQUFJQyxLQUFLLEdBQUdOLDZCQUE2QixDQUFDSSxPQUFPLENBQUNFLEtBQUs7SUFDdkQ7SUFDQSxJQUFJQyxVQUFVLEdBQUdGLE9BQU8sR0FBRyxpREFBaUQsR0FBR0YsU0FBUyxHQUFHLFNBQVMsR0FBR0csS0FBSztJQUM1RztJQUNBLElBQUlFLE9BQU8sR0FBRyxJQUFJQyxjQUFjLEVBQUU7SUFDbENELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRUgsVUFBVSxDQUFDO0lBQy9CQyxPQUFPLENBQUNHLE1BQU0sR0FBRyxZQUFXO01BQzFCLElBQUlILE9BQU8sQ0FBQ0ksTUFBTSxJQUFJLEdBQUcsSUFBSUosT0FBTyxDQUFDSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ2pELElBQUlDLFNBQVMsR0FBR1osUUFBUSxDQUFDYSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzdDRCxTQUFTLENBQUNFLFNBQVMsR0FBR1AsT0FBTyxDQUFDUSxRQUFRO1FBQ3RDaEIsNkJBQTZCLENBQUNpQixhQUFhLENBQUNGLFNBQVMsR0FBR0YsU0FBUyxDQUFDWCxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQ2EsU0FBUztNQUN2SDtJQUNGLENBQUM7SUFDRFAsT0FBTyxDQUFDVSxJQUFJLEVBQUU7RUFDaEI7RUFBQzs7RUFFRjtFQUNDakIsUUFBUSxDQUFDa0IsZ0JBQWdCLENBQUMsc0JBQXNCLEVBQUUsVUFBU0MsS0FBSyxFQUFFO0lBQ2hFLElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLEtBQUsseUJBQXlCLEVBQUU7TUFDeER2QixxQ0FBcUMsRUFBRTtJQUN6QztFQUNGLENBQUMsQ0FBQztFQUNGO0VBQ0FBLHFDQUFxQyxFQUFFO0FBRTVDO0FBRUFELGVBQWUsRUFBRSxDIiwiZmlsZSI6Ii9wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJmdW5jdGlvbiByZWxhdGVkUHJvZHVjdHMoKSB7XG5cbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdFJlY29tbWVuZGF0aW9uc0ludG9TZWN0aW9uKCkge1xuICAgICAgIC8vIExvb2sgZm9yIGFuIGVsZW1lbnQgd2l0aCBjbGFzcyAncHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMnXG4gICAgICAgdmFyIHByb2R1Y3RSZWNvbW1lbmRhdGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LXJlY29tbWVuZGF0aW9uc1wiKTtcbiAgICAgICBpZiAocHJvZHVjdFJlY29tbWVuZGF0aW9uc1NlY3Rpb24gPT09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgLy8gUmVhZCBwcm9kdWN0IGlkIGZyb20gZGF0YSBhdHRyaWJ1dGVcbiAgICAgICB2YXIgcHJvZHVjdElkID0gcHJvZHVjdFJlY29tbWVuZGF0aW9uc1NlY3Rpb24uZGF0YXNldC5wcm9kdWN0SWQ7XG4gICAgICAgLy8gUmVhZCBiYXNlIFVSTCBmcm9tIGRhdGEgYXR0cmlidXRlXG4gICAgICAgdmFyIGJhc2VVcmwgPSBwcm9kdWN0UmVjb21tZW5kYXRpb25zU2VjdGlvbi5kYXRhc2V0LmJhc2VVcmw7XG4gICAgICAgLy8gUmVhZCBsaW1pdCBmcm9tIGRhdGEgYXR0cmlidXRlXG4gICAgICAgdmFyIGxpbWl0ID0gcHJvZHVjdFJlY29tbWVuZGF0aW9uc1NlY3Rpb24uZGF0YXNldC5saW1pdDtcbiAgICAgICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxuICAgICAgIHZhciByZXF1ZXN0VXJsID0gYmFzZVVybCArIFwiP3NlY3Rpb25faWQ9cHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMmcHJvZHVjdF9pZD1cIiArIHByb2R1Y3RJZCArIFwiJmxpbWl0PVwiICsgbGltaXQ7XG4gICAgICAgLy8gQ3JlYXRlIHJlcXVlc3QgYW5kIHN1Ym1pdCBpdCB1c2luZyBBamF4XG4gICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFVybCk7XG4gICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgICAgICBwcm9kdWN0UmVjb21tZW5kYXRpb25zU2VjdGlvbi5wYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3QtcmVjb21tZW5kYXRpb25zXCIpLmlubmVySFRNTDtcbiAgICAgICAgIH1cbiAgICAgICB9O1xuICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICB9O1xuICAgIFxuICAgIC8vIExpc3RlbiBmb3IgY2hhbmdlcyBkb25lIGluIHRoZSBUaGVtZSBFZGl0b3JcbiAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNob3BpZnk6c2VjdGlvbjpsb2FkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgaWYgKGV2ZW50LmRldGFpbC5zZWN0aW9uSWQgPT09IFwicHJvZHVjdC1yZWNvbW1lbmRhdGlvbnNcIikge1xuICAgICAgICAgbG9hZFByb2R1Y3RSZWNvbW1lbmRhdGlvbnNJbnRvU2VjdGlvbigpO1xuICAgICAgIH1cbiAgICAgfSk7XG4gICAgIC8vIEZldGNoaW5nIHRoZSByZWNvbW1lbmRhdGlvbnMgb24gcGFnZSBsb2FkXG4gICAgIGxvYWRQcm9kdWN0UmVjb21tZW5kYXRpb25zSW50b1NlY3Rpb24oKTtcblxufVxuXG5yZWxhdGVkUHJvZHVjdHMoKTsiXSwic291cmNlUm9vdCI6IiJ9