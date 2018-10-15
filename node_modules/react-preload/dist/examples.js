var ReactPreload =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _ExamplePlayer = __webpack_require__(1);\n\nvar _ExamplePlayer2 = _interopRequireDefault(_ExamplePlayer);\n\nvar _Examples = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar wrapPlayer = function wrapPlayer(Component) {\n    return React.createElement(\n        _ExamplePlayer2.default,\n        null,\n        React.createElement(Component, null)\n    );\n};\n\nReactDOM.render(wrapPlayer(_Examples.Example1), document.getElementById('example1'));\n\n//////////////////\n// WEBPACK FOOTER\n// ./examples/src/index.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./examples/src/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ExamplePlayer = function (_React$Component) {\n    _inherits(ExamplePlayer, _React$Component);\n\n    function ExamplePlayer() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, ExamplePlayer);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExamplePlayer.__proto__ || Object.getPrototypeOf(ExamplePlayer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            playing: false\n        }, _this._handleClickPlay = function () {\n            _this.setState({\n                playing: true\n            });\n        }, _this._handleClickReset = function () {\n            _this.setState({\n                playing: false\n            });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(ExamplePlayer, [{\n        key: \"getButton\",\n        value: function getButton() {\n            if (this.state.playing) {\n                return _react2.default.createElement(\n                    \"button\",\n                    {\n                        onClick: this._handleClickReset,\n                        type: \"button\",\n                        className: \"btn btn-primary\"\n                    },\n                    \"Reset\"\n                );\n            }\n\n            return _react2.default.createElement(\n                \"button\",\n                {\n                    onClick: this._handleClickPlay,\n                    type: \"button\",\n                    className: \"btn btn-info\"\n                },\n                \"Play\"\n            );\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"row\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"col-xs-12\" },\n                        this.getButton()\n                    )\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"row\", style: { marginTop: '1em' } },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"col-xs-12\" },\n                        this.state.playing && this.props.children\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ExamplePlayer;\n}(_react2.default.Component);\n\nExamplePlayer.propTypes = {\n    children: _react.PropTypes.element.isRequired\n};\nexports.default = ExamplePlayer;\n\n//////////////////\n// WEBPACK FOOTER\n// ./examples/src/ExamplePlayer.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./examples/src/ExamplePlayer.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	eval("module.exports = React;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"React\"\n// module id = 2\n// module chunks = 0 1\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Example1 = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactPreload = __webpack_require__(4);\n\nvar _reactPreload2 = _interopRequireDefault(_reactPreload);\n\nvar _Spinner = __webpack_require__(5);\n\nvar _Spinner2 = _interopRequireDefault(_Spinner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar imgBase = 'https://api.fnkr.net/testimg/800x600/00CED1/FFF/?';\n\nvar Example1 = exports.Example1 = function (_React$Component) {\n    _inherits(Example1, _React$Component);\n\n    function Example1() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Example1);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example1.__proto__ || Object.getPrototypeOf(Example1)).call.apply(_ref, [this].concat(args))), _this), _this._handleImageLoadError = function (failedImages) {\n            _this.setState({\n                preloadError: true\n            });\n        }, _this._handleImageLoadSuccess = function () {}, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Example1, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            this.setState({\n                cacheBreaker: Date.now()\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n\n            var images = [imgBase + 'text=1-' + this.state.cacheBreaker, imgBase + 'text=2-' + this.state.cacheBreaker, imgBase + 'text=3-' + this.state.cacheBreaker, 'http://not-a-real-image-url'];\n\n            return _react2.default.createElement(\n                _reactPreload2.default,\n                {\n\n                    images: images,\n                    onError: this._handleImageLoadError,\n                    onSuccess: this._handleImageLoadSuccess,\n                    mountChildren: true,\n                    resolveOnError: true\n                },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    this.state.preloadError && _react2.default.createElement(\n                        'div',\n                        { className: 'alert alert-warning', role: 'alert' },\n                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-exclamation-sign', 'aria-hidden': 'true' }),\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'sr-only' },\n                            'Error:'\n                        ),\n                        'There was an error loading some of the images'\n                    ),\n                    images.map(function (url, i) {\n                        return _react2.default.createElement(\n                            'div',\n                            { key: i, className: 'col-xs-6 col-md-3' },\n                            _react2.default.createElement(\n                                'span',\n                                { className: 'thumbnail' },\n                                _react2.default.createElement('img', { src: url })\n                            )\n                        );\n                    })\n                )\n            );\n        }\n    }]);\n\n    return Example1;\n}(_react2.default.Component);\n\n//////////////////\n// WEBPACK FOOTER\n// ./examples/src/Examples.js\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./examples/src/Examples.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	eval("module.exports = ReactPreload;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"ReactPreload\"\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///external_%22ReactPreload%22?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = Spinner;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Spinner() {\n    return _react2.default.createElement('span', {\n        className: 'glyphicon glyphicon-refresh gly-ani',\n        style: {\n            fontSize: '40px',\n            left: '50%',\n            transform: 'translateX(-50%)'\n        }\n    });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./examples/src/Spinner.js\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///./examples/src/Spinner.js?");

/***/ })
/******/ ]);