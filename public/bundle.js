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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\dev\\\\Gobarber\\\\modulo04\\\\src\\\\index.js: Unexpected token (6:32)\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mApp\\u001b[39m from \\u001b[32m'./App'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39mlet component \\u001b[33m=\\u001b[39m \\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'app'\\u001b[39m))\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m                                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39mconsole\\u001b[33m.\\u001b[39mlog(component)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser._raise (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:723:17)\\n    at Parser.raiseWithData (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:716:17)\\n    at Parser.raise (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:710:17)\\n    at Parser.unexpected (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8606:16)\\n    at Parser.parseExprAtom (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9865:20)\\n    at Parser.parseExprSubscripts (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9451:23)\\n    at Parser.parseMaybeUnary (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9431:21)\\n    at Parser.parseExprOps (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9301:23)\\n    at Parser.parseMaybeConditional (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9274:23)\\n    at Parser.parseMaybeAssign (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9229:21)\\n    at Parser.parseExprListItem (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10519:18)\\n    at Parser.parseCallExpressionArguments (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9632:22)\\n    at Parser.parseSubscript (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9538:31)\\n    at Parser.parseSubscripts (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9468:19)\\n    at Parser.parseExprSubscripts (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9457:17)\\n    at Parser.parseMaybeUnary (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9431:21)\\n    at Parser.parseExprOps (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9301:23)\\n    at Parser.parseMaybeConditional (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9274:23)\\n    at Parser.parseMaybeAssign (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9229:21)\\n    at Parser.parseVar (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11538:26)\\n    at Parser.parseVarStatement (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11350:10)\\n    at Parser.parseStatementContent (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10949:21)\\n    at Parser.parseStatement (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10882:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11456:25)\\n    at Parser.parseBlockBody (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11443:10)\\n    at Parser.parseTopLevel (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10813:10)\\n    at Parser.parse (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12425:10)\\n    at parse (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12476:38)\\n    at parser (C:\\\\dev\\\\Gobarber\\\\modulo04\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });