var CommentsApp =
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	  HelloWorld: __webpack_require__(2),
	  Comment: __webpack_require__(3),
	  CommentsWrapper: __webpack_require__(6)
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var HelloWorld = React.createClass({
	  displayName: "HelloWorld",
	  render: function () {
	    return React.createElement(
	      "div",
	      { "class": "hi-there" },
	      "Hello, World!1!"
	    );
	  }
	});

	module.exports = HelloWorld;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Image = __webpack_require__(4);
	var Content = __webpack_require__(5);
	var Comment = React.createClass({
	  displayName: "Comment",
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "comment" },
	      React.createElement(Image, { src: this.props.image.src, alt: this.props.image.alt }),
	      React.createElement(Content, { header: this.props.content.header, body: this.props.content.body, details: this.props.details })
	    );
	  }
	});

	module.exports = Comment;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var Image = React.createClass({
	  displayName: "Image",
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "comment-image" },
	      React.createElement("img", { src: this.props.src, alt: this.props.alt })
	    );
	  }
	});

	module.exports = Image;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var Content = React.createClass({
	  displayName: "Content",
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "comment-content" },
	      React.createElement(
	        "h1",
	        null,
	        this.props.header
	      ),
	      React.createElement(
	        "p",
	        null,
	        this.props.body
	      ),
	      React.createElement(
	        "p",
	        { className: "comment-detail" },
	        this.props.details
	      )
	    );
	  }
	});

	module.exports = Content;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var CommentsWrapper = React.createClass({
	  displayName: "CommentsWrapper",
	  render: function () {
	    return React.createElement(
	      "div",
	      { "class": "comments-wrapper" },
	      this.props.comments.map(function (comment, i) {
	        return React.createElement(CommentsApp.Comment, { image: comment.image, content: comment.content, details: comment.details });
	      })
	    );
	  }
	});

	module.exports = CommentsWrapper;

/***/ }
/******/ ]);