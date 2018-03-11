webpackJsonp([3],{

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 50px;\n  padding-bottom: 20px; }\n\n/* Wrapping element */\n/* Set some basic padding to keep content from hitting the edges */\n.body-content {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 2em; }\n\n/* QR code generator */\n#qrCode {\n  margin: 15px; }\n\n/* Hide/rearrange for smaller screens */\n@media screen and (max-width: 767px) {\n  /* Hide captions */\n  .carousel-caption {\n    display: none; }\n  .navbar-nav .dropdown-menu {\n    box-shadow: 0em 0em 0em; } }\n\n.navbar {\n  /* background-color: white; */\n  box-shadow: 0 0 0.5em; }\n\n.navbar-nav .dropdown-menu {\n  box-shadow: 0em 0.25em 0.25em; }\n\n.navbar-light .navbar-nav .nav-link {\n  color: #337ab7; }\n\n.navbar-inverse {\n  border-color: #337ab7; }\n\n.navbar-inverse > .container-fluid {\n  box-shadow: 0 0 0.5em; }\n\n.navbar-inverse .navbar-brand {\n  color: #337ab7; }\n\n.navbar-inverse .navbar-brand:hover {\n  color: #9d9d9d; }\n\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #9d9d9d; }\n\n.navbar-inverse .navbar-toggle {\n  border-color: #337ab7;\n  background-color: #9d9d9d; }\n", ""]);

// exports


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(46);
__webpack_require__(47);
module.exports = __webpack_require__(650);


/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_css__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__site_css__);


if (true) {
  module.hot.accept();
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(36)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(165, function() {
			var newContent = __webpack_require__(165);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[649]);
//# sourceMappingURL=shared.js.map