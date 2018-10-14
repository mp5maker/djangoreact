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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/scripts/Common/App.js":
/*!***************************************!*\
  !*** ./src/app/scripts/Common/App.js ***!
  \***************************************/
/*! exports provided: DjangoSidebarTitle, DjangoContentTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DjangoSidebarTitle\", function() { return DjangoSidebarTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DjangoContentTitle\", function() { return DjangoContentTitle; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar DjangoSidebarTitle =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(DjangoSidebarTitle, _React$Component);\n\n  function DjangoSidebarTitle() {\n    _classCallCheck(this, DjangoSidebarTitle);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(DjangoSidebarTitle).apply(this, arguments));\n  }\n\n  _createClass(DjangoSidebarTitle, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"h4\", {\n        className: \"teal-text text-darken-1\"\n      }, React.createElement(\"span\", null, \"Table of Contents\"));\n    }\n  }]);\n\n  return DjangoSidebarTitle;\n}(React.Component);\n\nvar DjangoContentTitle =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(DjangoContentTitle, _React$Component2);\n\n  function DjangoContentTitle() {\n    _classCallCheck(this, DjangoContentTitle);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(DjangoContentTitle).apply(this, arguments));\n  }\n\n  _createClass(DjangoContentTitle, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"h4\", {\n        className: \"white-text\"\n      }, React.createElement(\"span\", null, \"Django React Content\"));\n    }\n  }]);\n\n  return DjangoContentTitle;\n}(React.Component);\n\n\n\n//# sourceURL=webpack:///./src/app/scripts/Common/App.js?");

/***/ }),

/***/ "./src/app/scripts/Factories/ApiHelper.js":
/*!************************************************!*\
  !*** ./src/app/scripts/Factories/ApiHelper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar server = \"http://localhost:8000\";\nvar ApiHelper = {\n  getUserList: function getUserList() {\n    return axios.get(server + '/api/v1/user');\n  },\n  getUserDetail: function getUserDetail(id) {\n    return axios.get(server + '/api/v1/user/' + id);\n  },\n  getPostList: function getPostList() {\n    return axios.get(server + '/api/v1/post');\n  },\n  getPostDetail: function getPostDetail(id) {\n    return axios.get(server + '/api/v1/post/' + id);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiHelper);\n\n//# sourceURL=webpack:///./src/app/scripts/Factories/ApiHelper.js?");

/***/ }),

/***/ "./src/app/scripts/Post/Post.js":
/*!**************************************!*\
  !*** ./src/app/scripts/Post/Post.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Factories_ApiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Factories/ApiHelper */ \"./src/app/scripts/Factories/ApiHelper.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar PostList =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(PostList, _React$Component);\n\n  function PostList(props) {\n    var _this;\n\n    _classCallCheck(this, PostList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostList).call(this, props));\n    _this.state = {\n      data: [],\n      loading: true,\n      error: false\n    };\n    return _this;\n  }\n\n  _createClass(PostList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      _Factories_ApiHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPostList().then(function (response) {\n        _this2.setState({\n          data: response.data,\n          loading: false,\n          error: false\n        });\n      }).catch(function (error) {\n        _this2.setState({\n          error: error,\n          loading: false\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          data = _this$state.data,\n          loading = _this$state.loading,\n          error = _this$state.error;\n\n      if (loading) {\n        return \"Loading ....\";\n      }\n\n      if (error) {\n        return \"There was an error loading the data...\";\n      }\n\n      if (data) {\n        return React.createElement(PostCollection, {\n          collection: data\n        });\n      }\n    }\n  }]);\n\n  return PostList;\n}(React.Component);\n\nvar PostCollection =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(PostCollection, _React$Component2);\n\n  function PostCollection() {\n    _classCallCheck(this, PostCollection);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(PostCollection).apply(this, arguments));\n  }\n\n  _createClass(PostCollection, [{\n    key: \"render\",\n    value: function render() {\n      var posts = this.props.collection;\n      return React.createElement(\"ul\", null, posts.map(function (post, i) {\n        return React.createElement(PostDetail, {\n          data: post,\n          key: i\n        });\n      }));\n    }\n  }]);\n\n  return PostCollection;\n}(React.Component);\n\nvar PostDetail =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(PostDetail, _React$Component3);\n\n  function PostDetail(props) {\n    var _this3;\n\n    _classCallCheck(this, PostDetail);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PostDetail).call(this, props));\n    _this3.postDetail = _this3.postDetail.bind(_assertThisInitialized(_assertThisInitialized(_this3)));\n    _this3.authorDetail = _this3.authorDetail.bind(_assertThisInitialized(_assertThisInitialized(_this3)));\n    return _this3;\n  }\n\n  _createClass(PostDetail, [{\n    key: \"postDetail\",\n    value: function postDetail(event) {\n      event.preventDefault();\n      console.log(\"Post Detail has been clicked\");\n    }\n  }, {\n    key: \"authorDetail\",\n    value: function authorDetail(event) {\n      event.preventDefault();\n      console.log(\"Author Detail has been clicked\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var post = this.props.data;\n      return React.createElement(\"li\", null, React.createElement(\"div\", {\n        className: \"card grey lighten-2 waves-effect waves-block waves-light hoverable\"\n      }, React.createElement(\"div\", {\n        className: \"card-content\"\n      }, React.createElement(\"span\", {\n        className: \"card-title teal-text text-darken-3\",\n        onClick: this.postDetail\n      }, React.createElement(\"strong\", null, post.title)), React.createElement(\"p\", {\n        className: \"teal-text\"\n      }, post.content)), React.createElement(\"div\", {\n        className: \"card-action\"\n      }, React.createElement(\"p\", null, React.createElement(\"a\", {\n        onClick: this.authorDetail,\n        className: \"teal-text text-darken-5\"\n      }, \"Author : \\xA0\", React.createElement(\"strong\", null, post.author))))));\n    }\n  }]);\n\n  return PostDetail;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\n\n//# sourceURL=webpack:///./src/app/scripts/Post/Post.js?");

/***/ }),

/***/ "./src/app/scripts/main.js":
/*!*********************************!*\
  !*** ./src/app/scripts/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Common_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common/App */ \"./src/app/scripts/Common/App.js\");\n/* harmony import */ var _Post_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post/Post */ \"./src/app/scripts/Post/Post.js\");\n/**\r\n * Simple Example to test\r\n */\n\n/* \r\n    helloWorld = React.createElement('h4', { className: \"title\" }, \"Hello World\");\r\n    ReactDOM.render(\r\n        helloWorld,\r\n        document.getElementById('hello-world'),\r\n    )\r\n*/\n\n\nReactDOM.render(React.createElement(_Common_App__WEBPACK_IMPORTED_MODULE_0__[\"DjangoSidebarTitle\"], null), document.getElementById('django-sidebar-title'));\nReactDOM.render(React.createElement(_Common_App__WEBPACK_IMPORTED_MODULE_0__[\"DjangoContentTitle\"], null), document.getElementById(\"django-content-title\"));\nReactDOM.render(React.createElement(_Post_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), document.getElementById('django-post-list'));\n\n//# sourceURL=webpack:///./src/app/scripts/main.js?");

/***/ })

/******/ });