var MobiComments =
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
	  CommentList: __webpack_require__(3)
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
	      "Hello, World!!!"
	    );
	  }
	});

	module.exports = HelloWorld;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Comment = __webpack_require__(4);

	var CommentList = React.createClass({
	  displayName: "CommentList",
	  getInitialState: function () {
	    return { data: [] };
	  },

	  componentDidMount: function () {
	    this.loadComments();
	  },

	  loadComments: function () {
	    $.ajax({
	      url: this.props.url,
	      dataType: "json",
	      cache: false,
	      success: (function (data) {
	        this.setState({ data: data });
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }).bind(this)
	    });
	  },

	  render: function () {
	    var commentNodes = this.state.data.map(function (comment) {
	      return React.createElement(Comment, { image: comment.image_url, content: comment.content, details: comment.details });
	    });

	    return React.createElement(
	      "div",
	      { className: "comment-list" },
	      commentNodes
	    );
	  }
	});

	module.exports = CommentList;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Image = __webpack_require__(5);
	var Content = __webpack_require__(6);
	var Comment = React.createClass({
	  displayName: "Comment",
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "comment" },
	      React.createElement(Image, { src: this.props.image }),
	      React.createElement(Content, { header: this.props.content.header, body: this.props.content.body, details: this.props.details })
	    );
	  }
	});

	module.exports = Comment;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var Image = React.createClass({
	  displayName: "Image",
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "comment-image" },
	      React.createElement("img", { src: this.props.src })
	    );
	  }
	});

	module.exports = Image;

/***/ },
/* 6 */
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

/***/ }
/******/ ]);
