var oc=oc||{};oc.reactComponents=oc.reactComponents||{};oc.reactComponents['ccd91ea97e7bc9e96bcdb4ad68ebad5d3292556e']=oc.reactComponents['ccd91ea97e7bc9e96bcdb4ad68ebad5d3292556e']||(function(){var module = /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./helloWorld/_package/temp/reactOCProvider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helloWorld/_package/temp/reactOCProvider.js":
/*!*****************************************************!*\
  !*** ./helloWorld/_package/temp/reactOCProvider.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_anandakrishnanr_Projects_Project_OC_Playground_helloWorld_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helloWorld/app.js */ \"./helloWorld/app.js\");\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\nvar OCProvider = function (_React$Component) {\n  _inherits(OCProvider, _React$Component);\n\n  function OCProvider() {\n    _classCallCheck(this, OCProvider);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  OCProvider.prototype.componentDidMount = function componentDidMount() {\n    var _props = this.props,\n        _staticPath = _props._staticPath,\n        _baseUrl = _props._baseUrl,\n        _componentName = _props._componentName,\n        _componentVersion = _props._componentVersion,\n        rest = _objectWithoutProperties(_props, ['_staticPath', '_baseUrl', '_componentName', '_componentVersion']);\n\n    window.oc.events.fire('oc:componentDidMount', rest);\n  };\n\n  OCProvider.prototype.getChildContext = function getChildContext() {\n    var _this2 = this;\n\n    var getData = function getData(parameters, cb) {\n      return window.oc.getData({\n        name: _this2.props._componentName,\n        version: _this2.props._componentVersion,\n        baseUrl: _this2.props._baseUrl,\n        parameters: parameters\n      }, function (err, data) {\n        if (err) {\n          return cb(err);\n        }\n\n        var _data$reactComponent$ = data.reactComponent.props,\n            _staticPath = _data$reactComponent$._staticPath,\n            _baseUrl = _data$reactComponent$._baseUrl,\n            _componentName = _data$reactComponent$._componentName,\n            _componentVersion = _data$reactComponent$._componentVersion,\n            rest = _objectWithoutProperties(_data$reactComponent$, ['_staticPath', '_baseUrl', '_componentName', '_componentVersion']);\n\n        cb(null, rest, data.reactComponent.props);\n      });\n    };\n    var getSetting = function getSetting(setting) {\n      var settingHash = {\n        name: _this2.props._componentName,\n        version: _this2.props._componentVersion,\n        baseUrl: _this2.props._baseUrl,\n        staticPath: _this2.props._staticPath\n      };\n      return settingHash[setting];\n    };\n    return { getData: getData, getSetting: getSetting };\n  };\n\n  OCProvider.prototype.render = function render() {\n    var _props2 = this.props,\n        _staticPath = _props2._staticPath,\n        _baseUrl = _props2._baseUrl,\n        _componentName = _props2._componentName,\n        _componentVersion = _props2._componentVersion,\n        rest = _objectWithoutProperties(_props2, ['_staticPath', '_baseUrl', '_componentName', '_componentVersion']);\n\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Users_anandakrishnanr_Projects_Project_OC_Playground_helloWorld_app_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], rest);\n  };\n\n  return OCProvider;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nOCProvider.childContextTypes = {\n  getData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,\n  getSetting: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (OCProvider);\n\n//# sourceURL=webpack:///./helloWorld/_package/temp/reactOCProvider.js?");

/***/ }),

/***/ "./helloWorld/app.js":
/*!***************************!*\
  !*** ./helloWorld/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./helloWorld/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n\n// import ReactShadowRoot from 'react-shadow-root';\n\n\nvar App = function App(props) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('hi!!'),\n      hi = _React$useState[0],\n      setHi = _React$useState[1];\n\n  console.log('styles', _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a);\n\n  return (\n    // <ReactShadowRoot>\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a.special },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'button',\n        {\n          onClick: function onClick() {\n            console.log('clicked');\n            setHi('bye');\n          } },\n        'click'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'h1',\n        null,\n        hi,\n        ' ',\n        props.name\n      )\n    )\n    // </ReactShadowRoot>\n\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./helloWorld/app.js?");

/***/ }),

/***/ "./helloWorld/styles.css":
/*!*******************************!*\
  !*** ./helloWorld/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"special\":\"oc__helloWorld-styles-css__special__2USmlsSh\"};\n\n//# sourceURL=webpack:///./helloWorld/styles.css?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PropTypes;\n\n//# sourceURL=webpack:///external_%22PropTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ })

/******/ });; return module.default}())