webpackJsonp([0],Array(21).concat([
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(219);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(222);
/* unused harmony reexport HashRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(224);
/* unused harmony reexport MemoryRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(226);
/* unused harmony reexport NavLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(229);
/* unused harmony reexport Prompt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(230);
/* unused harmony reexport Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(65);
/* unused harmony reexport Router */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(235);
/* unused harmony reexport StaticRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(236);
/* unused harmony reexport Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(237);
/* unused harmony reexport matchPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(41);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getPreClones = getPreClones;
exports.getPostClones = getPostClones;
exports.getTotalSlides = getTotalSlides;
exports.siblingDirection = siblingDirection;
exports.slidesOnRight = slidesOnRight;
exports.slidesOnLeft = slidesOnLeft;
function getPreClones(_ref) {
  var slideCount = _ref.slideCount,
      variableWidth = _ref.variableWidth,
      slidesToShow = _ref.slidesToShow,
      centerMode = _ref.centerMode,
      unslick = _ref.unslick;

  if (unslick) return 0;
  if (variableWidth) {
    return slideCount;
  }
  return slidesToShow + (centerMode ? 1 : 0);
}

function getPostClones(_ref2) {
  var slideCount = _ref2.slideCount,
      unslick = _ref2.unslick;

  if (unslick) return 0;
  return slideCount;
}

function getTotalSlides(_ref3) {
  var variableWidth = _ref3.variableWidth,
      slideCount = _ref3.slideCount,
      slidesToShow = _ref3.slidesToShow,
      centerMode = _ref3.centerMode,
      unslick = _ref3.unslick;

  if (slideCount === 1) {
    return 1;
  }
  return getPreClones({ slideCount: slideCount, variableWidth: variableWidth, slidesToShow: slidesToShow, centerMode: centerMode, unslick: unslick }) + slideCount + getPostClones({ slideCount: slideCount, unslick: unslick });
}

function siblingDirection(_ref4) {
  var currentSlide = _ref4.currentSlide,
      targetSlide = _ref4.targetSlide,
      slidesToShow = _ref4.slidesToShow,
      centerMode = _ref4.centerMode,
      rtl = _ref4.rtl;

  if (targetSlide > currentSlide) {
    if (targetSlide > currentSlide + slidesOnRight(slidesToShow, centerMode, rtl)) {
      return 'left';
    }
    return 'right';
  } else {
    if (targetSlide < currentSlide - slidesOnLeft(slidesToShow, centerMode, rtl)) {
      return 'right';
    }
    return 'left';
  }
}

function slidesOnRight(slidesToShow, centerMode, rtl) {
  // returns no of slides on the right of active slide
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }
  if (rtl) {
    return 0;
  }
  return slidesToShow - 1;
}

function slidesOnLeft(slidesToShow, centerMode, rtl) {
  // returns no of slides on the left of active slide
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }
  if (rtl) {
    return slidesToShow - 1;
  }
  return 0;
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _trackHelper = __webpack_require__(116);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helpers = {
  // supposed to start autoplay of slides
  initialize: function initialize(props) {
    var slickList = _reactDom2.default.findDOMNode(this.list);

    var slideCount = _react2.default.Children.count(props.children);
    var listWidth = this.getWidth(slickList);
    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
    var slideWidth;

    if (!props.vertical) {
      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
      if (props.centerPadding.slice(-1) === '%') {
        centerPaddingAdj *= listWidth / 100;
      }
      slideWidth = Math.ceil((this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow);
    } else {
      slideWidth = Math.ceil(this.getWidth(_reactDom2.default.findDOMNode(this)));
    }

    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
    var listHeight = slideHeight * props.slidesToShow;

    var currentSlide = props.rtl ? slideCount - 1 - props.initialSlide : props.initialSlide;

    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
      listWidth: listWidth,
      trackWidth: trackWidth,
      currentSlide: currentSlide,
      slideHeight: slideHeight,
      listHeight: listHeight
    }, function () {
      // this reference isn't lost due to mixin
      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, props, this.state));
      // getCSS function needs previously set state
      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

      this.setState({ trackStyle: trackStyle });

      this.autoPlay(); // once we're set up, trigger the initial autoplay.
    });
  },
  update: function update(props) {
    var slickList = _reactDom2.default.findDOMNode(this.list);
    // This method has mostly same code as initialize method.
    // Refactor it
    var slideCount = _react2.default.Children.count(props.children);
    var listWidth = this.getWidth(slickList);
    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
    var slideWidth;

    if (!props.vertical) {
      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
      if (props.centerPadding.slice(-1) === '%') {
        centerPaddingAdj *= listWidth / 100;
      }
      slideWidth = Math.ceil((this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow);
    } else {
      slideWidth = Math.ceil(this.getWidth(_reactDom2.default.findDOMNode(this)));
    }

    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
    var listHeight = slideHeight * props.slidesToShow;

    // pause slider if autoplay is set to false
    if (!props.autoplay) {
      this.pause();
    } else {
      this.autoPlay(props.autoplay);
    }

    var lazyLoadedList = this.state.lazyLoadedList;
    var startIndex = void 0,
        endIndex = void 0;
    if (props.centerMode) {
      startIndex = this.state.currentSlide - props.slidesToShow / 2;
      endIndex = this.state.currentSlide + props.slidesToShow / 2;
    } else {
      startIndex = this.state.currentSlide;
      endIndex = this.state.currentSlide + props.slidesToShow;
    }
    for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex += 1) {
      if (lazyLoadedList.indexOf(slideIndex) < 0) {
        lazyLoadedList.push(slideIndex);
      }
    }

    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
      listWidth: listWidth,
      trackWidth: trackWidth,
      slideHeight: slideHeight,
      listHeight: listHeight,
      lazyLoadedList: lazyLoadedList
    }, function () {

      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, props, this.state));
      // getCSS function needs previously set state
      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

      this.setState({ trackStyle: trackStyle });
    });
  },
  getWidth: function getWidth(elem) {
    return elem && (elem.getBoundingClientRect().width || elem.offsetWidth) || 0;
  },
  getHeight: function getHeight(elem) {
    return elem && (elem.getBoundingClientRect().height || elem.offsetHeight) || 0;
  },

  adaptHeight: function adaptHeight() {
    if (this.props.adaptiveHeight) {
      var selector = '[data-index="' + this.state.currentSlide + '"]';
      if (this.list) {
        var slickList = _reactDom2.default.findDOMNode(this.list);
        var elem = slickList.querySelector(selector) || {};
        slickList.style.height = (elem.offsetHeight || 0) + 'px';
      }
    }
  },
  canGoNext: function canGoNext(opts) {
    var canGo = true;
    if (!opts.infinite) {
      if (opts.centerMode) {
        // check if current slide is last slide
        if (opts.currentSlide >= opts.slideCount - 1) {
          canGo = false;
        }
      } else {
        // check if all slides are shown in slider
        if (opts.slideCount <= opts.slidesToShow || opts.currentSlide >= opts.slideCount - opts.slidesToShow) {
          canGo = false;
        }
      }
    }
    return canGo;
  },
  slideHandler: function slideHandler(index) {
    var _this = this;

    // index is target slide index

    // Functionality of animateSlide and postSlide is merged into this function
    var animationTargetSlide, finalTargetSlide;
    var animationTargetLeft, finalTargetLeft;
    var callback;

    if (this.props.waitForAnimate && this.state.animating) {
      return;
    }

    if (this.props.fade) {
      finalTargetSlide = this.state.currentSlide;

      // Don't change slide if infinite=false and target slide is out of range
      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
        return;
      }

      //  Shifting animationTargetSlide back into the range
      if (index < 0) {
        animationTargetSlide = index + this.state.slideCount;
      } else if (index >= this.state.slideCount) {
        animationTargetSlide = index - this.state.slideCount;
      } else {
        animationTargetSlide = index;
      }

      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(animationTargetSlide) < 0) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList.concat(animationTargetSlide)
        });
      }

      callback = function callback() {
        _this.setState({
          animating: false
        });
        if (_this.props.afterChange) {
          _this.props.afterChange(animationTargetSlide);
        }
        delete _this.animationEndCallback;
        if (_this.props.fade) {
          var focusableSlide = _reactDom2.default.findDOMNode(_this.track).children[animationTargetSlide];
          focusableSlide.focus();
        }
      };

      this.setState({
        animating: true,
        currentSlide: animationTargetSlide
      }, function () {
        this.animationEndCallback = setTimeout(callback, this.props.speed);
      });

      if (this.props.beforeChange) {
        this.props.beforeChange(this.state.currentSlide, animationTargetSlide);
      }

      this.autoPlay();
      return;
    }

    animationTargetSlide = index;

    /*
      @TODO: Make sure to leave no bug in the code below
      start: critical checkpoint
    */
    if (animationTargetSlide < 0) {
      if (this.props.infinite === false) {
        finalTargetSlide = 0;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        finalTargetSlide = this.state.slideCount - this.state.slideCount % this.props.slidesToScroll;
      } else {
        finalTargetSlide = this.state.slideCount + animationTargetSlide;
      }
    } else if (this.props.centerMode && animationTargetSlide >= this.state.slideCount) {
      if (this.props.infinite === false) {
        animationTargetSlide = this.state.slideCount - 1;
        finalTargetSlide = this.state.slideCount - 1;
      } else {
        animationTargetSlide = this.state.slideCount;
        finalTargetSlide = 0;
      }
    } else if (animationTargetSlide >= this.state.slideCount) {
      if (this.props.infinite === false) {
        finalTargetSlide = this.state.slideCount - this.props.slidesToShow;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        finalTargetSlide = 0;
      } else {
        finalTargetSlide = animationTargetSlide - this.state.slideCount;
      }
    } else if (this.state.currentSlide + this.slidesToShow < this.state.slideCount && animationTargetSlide + this.props.slidesToShow >= this.state.slideCount) {
      if (this.props.infinite === false) {
        finalTargetSlide = this.state.slideCount - this.props.slidesToShow;
      } else {
        if ((this.state.slideCount - animationTargetSlide) % this.props.slidesToScroll !== 0) {
          finalTargetSlide = this.state.slideCount - this.props.slidesToShow;
        } else {
          finalTargetSlide = animationTargetSlide;
        }
      }
    } else {
      finalTargetSlide = animationTargetSlide;
    }

    /* 
      stop: critical checkpoint
    */

    animationTargetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
      slideIndex: animationTargetSlide,
      trackRef: this.track
    }, this.props, this.state));

    finalTargetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
      slideIndex: finalTargetSlide,
      trackRef: this.track
    }, this.props, this.state));

    if (this.props.infinite === false) {
      if (animationTargetLeft === finalTargetLeft) {
        animationTargetSlide = finalTargetSlide;
      }
      animationTargetLeft = finalTargetLeft;
    }

    if (this.props.beforeChange) {
      this.props.beforeChange(this.state.currentSlide, finalTargetSlide);
    }

    if (this.props.lazyLoad) {
      var slidesToLoad = [];
      var slideCount = this.state.slideCount;
      for (var i = animationTargetSlide; i < animationTargetSlide + this.props.slidesToShow; i++) {
        if (this.state.lazyLoadedList.indexOf(i) < 0) {
          slidesToLoad.push(i);
        }
        if (i >= slideCount && this.state.lazyLoadedList.indexOf(i - slideCount) < 0) {
          slidesToLoad.push(i - slideCount);
        }
        if (i < 0 && this.state.lazyLoadedList.indexOf(i + slideCount) < 0) {
          slidesToLoad.push(i + slideCount);
        }
      }
      if (slidesToLoad.length > 0) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad)
        });
      }
    }

    // Slide Transition happens here.
    // animated transition happens to target Slide and
    // non - animated transition happens to current Slide
    // If CSS transitions are false, directly go the current slide.

    if (this.props.useCSS === false) {
      this.setState({
        currentSlide: finalTargetSlide,
        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: finalTargetLeft }, this.props, this.state))
      }, function () {
        if (this.props.afterChange) {
          this.props.afterChange(finalTargetSlide);
        }
      });
    } else {

      var nextStateChanges = {
        animating: false,
        currentSlide: finalTargetSlide,
        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: finalTargetLeft }, this.props, this.state)),
        swipeLeft: null
      };
      callback = function callback() {
        _this.setState(nextStateChanges, function () {
          if (_this.props.afterChange) {
            _this.props.afterChange(finalTargetSlide);
          }
          delete _this.animationEndCallback;
        });
      };

      this.setState({
        animating: true,
        currentSlide: finalTargetSlide,
        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: animationTargetLeft }, this.props, this.state))
      }, function () {
        this.animationEndCallback = setTimeout(callback, this.props.speed);
      });
    }

    this.autoPlay();
  },
  swipeDirection: function swipeDirection(touchObject) {
    var xDist, yDist, r, swipeAngle;

    xDist = touchObject.startX - touchObject.curX;
    yDist = touchObject.startY - touchObject.curY;
    r = Math.atan2(yDist, xDist);

    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
      return 'left';
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return 'right';
    }
    if (this.props.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  },
  play: function play() {
    var nextIndex;

    // if (!this.state.mounted) {
    //   return false
    // }

    if (this.props.rtl) {
      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
    } else {
      if (this.canGoNext(_extends({}, this.props, this.state))) {
        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
      } else {
        return false;
      }
    }

    this.slideHandler(nextIndex);
  },
  autoPlay: function autoPlay() {
    var autoplay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (this.state.autoPlayTimer) {
      clearTimeout(this.state.autoPlayTimer);
    }
    if (autoplay || this.props.autoplay) {
      this.setState({
        autoPlayTimer: setTimeout(this.play, this.props.autoplaySpeed)
      });
    }
  },
  pause: function pause() {
    if (this.state.autoPlayTimer) {
      clearTimeout(this.state.autoPlayTimer);
      this.setState({
        autoPlayTimer: null
      });
    }
  }
};

exports.default = helpers;

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Link> outside a <Router>');

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 108 */,
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(66);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = undefined;

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _trackUtils = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// checks if spec is the superset of keys in keysArray, i.e., spec contains all the keys from keysArray
var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error('Keys Missing', spec);
};

var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow; // this should probably be getTotalSlides
  if (!spec.vertical) {
    trackWidth = (0, _trackUtils.getTotalSlides)(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transition: '',
    WebkitTransition: '',
    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)'
  };
  if (spec.fade) {
    style = {
      opacity: 1
    };
  }

  if (trackWidth) {
    (0, _objectAssign2.default)(style, { width: trackWidth });
  }

  if (trackHeight) {
    (0, _objectAssign2.default)(style, { height: trackHeight });
  }

  // Fallback for IE8
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + 'px';
    } else {
      style.marginTop = spec.left + 'px';
    }
  }

  return style;
};

var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

  var style = getTrackCSS(spec);
  // useCSS is true by default so it can be undefined
  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
  return style;
};

// gets total length of track that's on the left side of current slide
var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {

  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);

  var slideIndex = spec.slideIndex,
      trackRef = spec.trackRef,
      infinite = spec.infinite,
      centerMode = spec.centerMode,
      slideCount = spec.slideCount,
      slidesToShow = spec.slidesToShow,
      slidesToScroll = spec.slidesToScroll,
      slideWidth = spec.slideWidth,
      listWidth = spec.listWidth,
      variableWidth = spec.variableWidth,
      slideHeight = spec.slideHeight,
      fade = spec.fade,
      vertical = spec.vertical;


  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (fade || spec.slideCount === 1) {
    return 0;
  }

  var slidesToOffset = 0;
  if (infinite) {
    slidesToOffset = -(0, _trackUtils.getPreClones)(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    }
    // shift current slide to center of the frame
    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }
    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }
  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;

  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }

  if (variableWidth === true) {
    var targetSlideIndex;
    var lastSlide = _reactDom2.default.findDOMNode(trackRef).children[slideCount - 1];
    var max = -lastSlide.offsetLeft + listWidth - lastSlide.offsetWidth;
    targetSlideIndex = slideIndex + (0, _trackUtils.getPreClones)(spec);
    targetSlide = _reactDom2.default.findDOMNode(trackRef).childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + (0, _trackUtils.getPreClones)(spec) : slideIndex;
      targetSlide = _reactDom2.default.findDOMNode(trackRef).children[targetSlideIndex];
      targetLeft = 0;
      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= _reactDom2.default.findDOMNode(trackRef).children[slide].offsetWidth;
      }
      targetLeft += (listWidth - targetSlide.offsetWidth) / 2;
    }
    if (spec.infinite === false && targetLeft < max) {
      targetLeft = max;
    }
  }

  return targetLeft;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    className: '',
    accessibility: true,
    adaptiveHeight: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: '50px',
    cssEase: 'ease',
    customPaging: function customPaging(i) {
        return _react2.default.createElement(
            'button',
            null,
            i + 1
        );
    },
    dots: false,
    dotsClass: 'slick-dots',
    draggable: true,
    easing: 'linear',
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: false,
    pauseOnHover: true,
    responsive: null,
    rtl: false,
    slide: 'div',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    variableWidth: false,
    vertical: false,
    waitForAnimate: true,
    afterChange: null,
    beforeChange: null,
    edgeEvent: null,
    // init: function hook that gets called right before InnerSlider mounts
    init: null,
    swipeEvent: null,
    // nextArrow, prevArrow should react componets
    nextArrow: null,
    prevArrow: null,
    appendDots: function appendDots(dots) {
        return _react2.default.createElement(
            'ul',
            { style: { display: 'block' } },
            dots
        );
    }
};

exports.default = defaultProps;

/***/ }),
/* 118 */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);




class Twenty48 extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://localhost:9000/js/bind_polyfill.js";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "http://localhost:9000/js/classlist_polyfill.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "http://localhost:9000/js/animframe_polyfill.js";
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement("script");
    script4.src = "http://localhost:9000/js/keyboard_input_manager.js";
    script4.async = true;
    document.getElementById('content').appendChild(script4);

    const script5 = document.createElement("script");
    script5.src = "http://localhost:9000/js/html_actuator.js";
    script5.async = true;
    document.body.appendChild(script5);

    const script6 = document.createElement("script");
    script6.src = "http://localhost:9000/js/grid.js";
    script6.async = true;
    document.body.appendChild(script6);

    const script7 = document.createElement("script");
    script7.src = "http://localhost:9000/js/tile.js";
    script7.async = true;
    document.body.appendChild(script7);

    const script8 = document.createElement("script");
    script8.src = "http://localhost:9000/js/local_storage_manager.js";
    script8.async = true;
    document.body.appendChild(script8);

    const script9 = document.createElement("script");
    script9.src = "http://localhost:9000/js/game_manager.js";
    script9.async = true;
    document.body.appendChild(script9);

    const script10 = document.createElement("script");
    script10.src = "http://localhost:9000/js/application.js";
    script10.async = true;
    document.body.appendChild(script10);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'content' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/css/main.css', rel: 'stylesheet', type: 'text/css' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/css/main.scss', rel: 'stylesheet', type: 'text/css' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/css/helper.scss', rel: 'stylesheet', type: 'text/css' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'heading' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: 'title' },
            '2048'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'scores-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'score-container' },
              '0'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'best-container' },
              '0'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'above-game' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'game-intro' },
            'Join the numbers and get to the ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              '2048 tile!'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'restart-button' },
            'New Game'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'game-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'game-message' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'lower' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'keep-playing-button' },
                'Keep going'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'retry-button' },
                'Try again'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'grid-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'grid-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'grid-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'grid-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'grid-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grid-cell' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'tile-container' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'game-explanation' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            { className: 'important' },
            'How to play:'
          ),
          ' Use your ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            'arrow keys'
          ),
          ' to move the tiles. When two tiles with the same number touch, they ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            'merge into one!'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Created by ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'http://gabrielecirulli.com', target: '_blank' },
            'Gabriele Cirulli.'
          ),
          ' Based on ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://itunes.apple.com/us/app/1024!/id823499224', target: '_blank' },
            '1024 by Veewo Studio'
          ),
          ' and conceptually similar to ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'http://asherv.com/threes/', target: '_blank' },
            'Threes by Asher Vollmer.'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Twenty48);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_landing__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_events__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_gameinput__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_highscores__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_simpledonate__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_edit__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_2048__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_css__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__app_css__);


















class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.user = new User(window.__PRELOADED_STATE__.username, window.__PRELOADED_STATE__.primary_email);
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* BrowserRouter */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_header__["a" /* default */], { user: this.user }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { exact: true, path: '/', render: props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_landing__["a" /* default */], { user: this.user }) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: '/register', component: __WEBPACK_IMPORTED_MODULE_5__components_register__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: '/events', component: __WEBPACK_IMPORTED_MODULE_6__components_events__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: '/gameinput', component: __WEBPACK_IMPORTED_MODULE_7__components_gameinput__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: '/highscore', component: __WEBPACK_IMPORTED_MODULE_8__components_highscores__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: '/simpledonate', render: props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_simpledonate__["a" /* default */], { user: this.user }) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { exact: true, path: '/profile/:username', render: props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_profile__["a" /* default */], { user: this.user }) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: '/profile/:username/edit', render: props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_edit__["a" /* default */], { user: this.user }) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: '/2048', component: __WEBPACK_IMPORTED_MODULE_12__components_2048__["a" /* default */] })
            )
        );
    }
}

class User {
    constructor(username, primary_email) {
        if (username && primary_email) {
            this.data = {
                username: username,
                primary_email: primary_email
            };
        } else {
            this.data = {
                username: "",
                primary_email: ""
            };
        }
    }

    loggedIn() {
        return this.data.username && this.data.primary_email;
    }

    username() {
        return this.data.username;
    }

    logIn(router, data) {
        // Store locally
        this.data = data;
        // Go to user profile
        router.push(`/profile/${data.username}`);
    }

    logOut(router) {
        // Remove user info
        this.data = {
            username: "",
            primary_email: ""
        };
        // Go to login page
        router.push('/');
    }

    getUser() {
        return this.data;
    }
}

Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), document.getElementById('mainDiv'));

/***/ }),
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(65);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),
/* 220 */,
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(8);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(13);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(63);

var _PathUtils = __webpack_require__(31);

var _createTransitionManager = __webpack_require__(64);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(65);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* unused harmony default export */ var _unused_webpack_default_export = (HashRouter);

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(8);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(13);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(63);

var _PathUtils = __webpack_require__(31);

var _createTransitionManager = __webpack_require__(64);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(108);
// Written in this round about way for babel-transform-imports


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),
/* 225 */,
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(107);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref.ariaCurrent,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        'aria-current': isActive && ariaCurrent
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  ariaCurrent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['page', 'step', 'location', 'true'])
};

NavLink.defaultProps = {
  activeClassName: 'active',
  ariaCurrent: 'true'
};

/* unused harmony default export */ var _unused_webpack_default_export = (NavLink);

/***/ }),
/* 227 */,
/* 228 */,
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(110);
// Written in this round about way for babel-transform-imports


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(111);
// Written in this round about way for babel-transform-imports


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(113);
// Written in this round about way for babel-transform-imports


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(114);
// Written in this round about way for babel-transform-imports


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(42);
// Written in this round about way for babel-transform-imports


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(115);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),
/* 239 */,
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const Event = ({ event, index }) => {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'tr',
		{ key: index },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'td',
			{ style: { verticalAlign: 'middle', height: '50px' } },
			event.location
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'td',
			{ style: { verticalAlign: 'middle', height: '50px' } },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'button',
				{ className: 'button apricot hover-apple-core right', style: { width: '70%' } },
				event.date
			)
		)
	);
};

class Landing extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
	constructor(props) {
		super(props);
		this.state = { events: {}, charities: {}, games: {} };

		this.dateFormat = this.dateFormat.bind(this);
	}

	componentDidMount() {

		$.ajax({
			url: `/v1/events`,
			method: "get"
		}).then(data => {
			console.log(data.events);
			this.setState({ events: data.events });
		}).fail(err => {
			console.log(err.error);
		});

		$.ajax({
			url: `/v1/charities`,
			method: "get"
		}).then(data => {
			console.log(data.charities);
			this.setState({ charities: data.charities });
		}).fail(err => {
			console.log(err.error);
		});

		$.ajax({
			url: `/v1/games`,
			method: "get"
		}).then(data => {
			console.log(data.games);
			this.setState({ games: data.games });
		}).fail(err => {
			console.log(err.error);
		});

		/*$.ajax({
  	url : `/images/slideshow/`
  })
  	.then(data => {
  		$(data).find("a").attr("href", function (i, val) {
  			if( val.match(/\.(jpe?g|png|gif)$/) ) {
  				this.state.slides.concat("<div><img src='"+ folder + val +"'></div>");
  			}
  		})
  	})
  	.fail(err => {
  		console.log("Image load failed");
  		console.log(err.error);
  	});*/
	}

	dateFormat(d) {
		return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
	}

	render() {

		const settings = {
			autoplaySpeed: 5000,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			pauseOnHover: false

			//let slides_list = this.state.slides.length > 0 ?
			//	this.state.slides : <div>No Images</div>;

		};let event_list = this.state.events.length > 0 ? this.state.events.map((e, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'tr',
			{ key: index },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '50px' } },
				e.location
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '50px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'button',
					{ className: 'button apricot hover-apple-core right', style: { width: '70%' } },
					this.dateFormat(new Date(e.date))
				)
			)
		)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'tr',
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '50px' } },
				'No events'
			)
		);

		let charity_list = this.state.charities.length > 0 ? this.state.charities.map((c, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'tr',
			{ key: index },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', textAlign: 'center', height: '100px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: { maxWidth: '60%', minWidth: '30%', maxHeight: '100px' }, src: c.picture })
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				c.charity_name
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'button',
					{ className: 'button blueberry hover-apple-core right' },
					'Learn More'
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'button',
					{ className: 'button apricot hover-apple-core right' },
					'Select'
				)
			)
		)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'tr',
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				'No charities'
			)
		);

		let game_list = this.state.games.length > 0 ? this.state.games.map((g, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'tr',
			{ key: index },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: g.picture, style: { maxWidth: '267px', maxHeight: '100px' } })
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				g.game_name
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'button',
					{ className: 'button blueberry hover-apple-core right' },
					'Learn More'
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'button',
					{ className: 'button apricot hover-apple-core right' },
					'Play'
				)
			)
		)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'tr',
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				'No games'
			)
		);

		const page_html = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'content', style: { maxWidth: '2000px', marginTop: '46px' } },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', charSet: 'UTF-8', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_slick___default.a,
				_extends({ style: { width: '100%' } }, settings),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ style: { textAlign: 'center' } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: { width: '70vw', margin: 'auto' }, src: '/images/slideshow/2048_example.jpg' })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ style: { textAlign: 'center' } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: { width: '70vw', margin: 'auto' }, src: '/images/slideshow/rooster_teeth_example.jpg' })
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ style: { textAlign: 'center' } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: { width: '70vw', margin: 'auto' }, src: '/images/slideshow/trevor_project_example.jpg' })
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'container content center padding-64', style: { maxWidth: '800px' }, id: 'events' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h2',
					{ className: 'wide' },
					'EVENTS'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ className: 'opacity center' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'i',
						null,
						'Find one near you!'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'table',
					{ style: { margin: 'auto' }, className: 'col-xs-12' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'thead',
						{ style: { width: '80%', maxWidth: '600px', margin: 'auto' }, className: 'table-all white text-grey' },
						event_list
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'blueberry', id: 'charities' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'container content padding-64', style: { maxWidth: '90%' } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'h2',
						{ className: 'wide center' },
						'CHARITIES'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						{ className: 'opacity center' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'i',
							null,
							'Contribute to one of these great organizations!'
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'table',
						{ style: { margin: 'auto' }, className: 'col-xs-12' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'thead',
							{ style: { width: '60%', maxWidth: '600px', margin: 'auto' }, className: 'table-all white text-grey' },
							charity_list
						)
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'container content center padding-64', style: { maxWidth: '800px' }, id: 'games' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h2',
					{ className: 'wide' },
					'GAMES'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ className: 'opacity center' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'i',
						null,
						'Which one will you choose?'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'table',
					{ style: { margin: 'auto' }, className: 'col-xs-12' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'thead',
						{ style: { width: '80%', maxWidth: '600px', margin: 'auto' }, className: 'table-all white text-grey' },
						game_list
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'blueberry', id: 'about' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'container content padding-64', style: { maxWidth: '800px' } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'h2',
						{ className: 'wide center' },
						'ABOUT US'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						{ className: 'opacity center' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'i',
							null,
							'This is who we are.'
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						{ className: 'center padding-16' },
						'Play to Give is a not-for-profit whose goal is to provide players with a fun gaming experience that also makes a positive impact on the world. How does this work? Well, we host a variety of games for players to enjoy for a small fee which is put into a pot. When players sign up, they must pay their fee and register to support the charity of their choice.  Then, at the end of the day, the players who have the highest scores each receive a portion of the total pot to go to the charity that they championed.'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						{ className: 'center' },
						'Pretty cool, huh?'
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'container content padding-64', style: { maxWidth: '800px' }, id: 'contact' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h2',
					{ className: 'wide center' },
					'CONTACT'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ className: 'opacity center' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'i',
						null,
						'Question? Comment? Here\'s how to let us know'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'row padding-32' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'col m6 large margin-bottom' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-map-marker', style: { width: '30px' } }),
						' Nashville, TN, USA',
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-phone', style: { width: '30px' } }),
						' Phone: +1-800-867-5309',
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'i',
							{ className: 'fa fa-envelope', style: { width: '30px' } },
							' '
						),
						' Email: playtogive@gmail.com',
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'col m6' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'form',
							{ action: './mail.php', target: '_blank' },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'div',
								{ className: 'row-padding', style: { margin: '0 -16px 8px -16px' } },
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'div',
									{ className: 'half' },
									__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'input border', type: 'text', placeholder: 'Name', required: true, name: 'Name' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'div',
									{ className: 'half' },
									__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'input border', type: 'text', placeholder: 'Email', required: true, name: 'Email' })
								)
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'input border', type: 'text', placeholder: 'Message', required: true, name: 'Message' }),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'button',
								{ className: 'button blueberry section right', type: 'submit' },
								'SEND'
							)
						)
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'footer',
				{ className: 'container padding-64 center opacity light-grey xlarge' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-facebook-official hover-opacity' }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-instagram hover-opacity' }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-snapchat hover-opacity' }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-pinterest-p hover-opacity' }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-twitter hover-opacity' }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-linkedin hover-opacity' })
			)
		);

		return page_html;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Landing);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(242);

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _innerSlider = __webpack_require__(243);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _json2mq = __webpack_require__(250);

var _json2mq2 = _interopRequireDefault(_json2mq);

var _defaultProps = __webpack_require__(117);

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _canUseDom = __webpack_require__(252);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var enquire = _canUseDom2.default && __webpack_require__(253);

var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    _this.innerSliderRefHandler = _this.innerSliderRefHandler.bind(_this);
    return _this;
  }

  Slider.prototype.innerSliderRefHandler = function innerSliderRefHandler(ref) {
    this.innerSlider = ref;
  };

  Slider.prototype.media = function media(query, handler) {
    // javascript handler for  css media query
    enquire.register(query, handler);
    this._responsiveMediaHandlers.push({ query: query, handler: handler });
  };
  // handles responsive breakpoints


  Slider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    if (this.props.responsive) {
      var breakpoints = this.props.responsive.map(function (breakpt) {
        return breakpt.breakpoint;
      });
      // sort them in increasing order of their numerical value
      breakpoints.sort(function (x, y) {
        return x - y;
      });

      breakpoints.forEach(function (breakpoint, index) {
        // media query for each breakpoint
        var bQuery;
        if (index === 0) {
          bQuery = (0, _json2mq2.default)({ minWidth: 0, maxWidth: breakpoint });
        } else {
          bQuery = (0, _json2mq2.default)({ minWidth: breakpoints[index - 1], maxWidth: breakpoint });
        }
        // when not using server side rendering
        _canUseDom2.default && _this2.media(bQuery, function () {
          _this2.setState({ breakpoint: breakpoint });
        });
      });

      // Register media query for full screen. Need to support resize from small to large
      // convert javascript object to media query string
      var query = (0, _json2mq2.default)({ minWidth: breakpoints.slice(-1)[0] });

      _canUseDom2.default && this.media(query, function () {
        _this2.setState({ breakpoint: null });
      });
    }
  };

  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
    this._responsiveMediaHandlers.forEach(function (obj) {
      enquire.unregister(obj.query, obj.handler);
    });
  };

  Slider.prototype.slickPrev = function slickPrev() {
    this.innerSlider.slickPrev();
  };

  Slider.prototype.slickNext = function slickNext() {
    this.innerSlider.slickNext();
  };

  Slider.prototype.slickGoTo = function slickGoTo(slide) {
    this.innerSlider.slickGoTo(slide);
  };

  Slider.prototype.slickPause = function slickPause() {
    this.innerSlider.pause();
  };

  Slider.prototype.slickPlay = function slickPlay() {
    this.innerSlider.autoPlay();
  };

  Slider.prototype.render = function render() {
    var _this3 = this;

    var settings;
    var newProps;
    if (this.state.breakpoint) {
      // never executes in the first render
      // so defaultProps should be already there in this.props
      newProps = this.props.responsive.filter(function (resp) {
        return resp.breakpoint === _this3.state.breakpoint;
      });
      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2.default)({}, _defaultProps2.default, this.props, newProps[0].settings);
    } else {
      settings = (0, _objectAssign2.default)({}, _defaultProps2.default, this.props);
    }

    // force scrolling by one if centerMode is on
    if (settings.centerMode) {
      if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== 'production') {
        console.warn('slidesToScroll should be equal to 1 in centerMode, you are using ' + settings.slidesToScroll);
      }
      settings.slidesToScroll = 1;
    }
    // force showing one slide and scrolling by one if the fade mode is on
    if (settings.fade) {
      if (settings.slidesToShow > 1 && process.env.NODE_ENV !== 'production') {
        console.warn('slidesToShow should be equal to 1 when fade is true, you\'re using ' + settings.slidesToShow);
      }
      if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== 'production') {
        console.warn('slidesToScroll should be equal to 1 when fade is true, you\'re using ' + settings.slidesToScroll);
      }
      settings.slidesToShow = 1;
      settings.slidesToScroll = 1;
    }

    // makes sure that children is an array, even when there is only 1 child
    var children = _react2.default.Children.toArray(this.props.children);

    // Children may contain false or null, so we should filter them
    // children may also contain string filled with spaces (in certain cases where we use jsx strings)
    children = children.filter(function (child) {
      if (typeof child === 'string') {
        return !!child.trim();
      }
      return !!child;
    });

    if (settings === 'unslick') {
      settings = (0, _objectAssign2.default)({ unslick: true }, _defaultProps2.default, this.props);
      settings.slidesToShow = children.length;
    } else if (children.length <= settings.slidesToShow) {
      settings.unslick = true;
    }
    return _react2.default.createElement(
      _innerSlider.InnerSlider,
      _extends({ ref: this.innerSliderRefHandler }, settings),
      children
    );
  };

  return Slider;
}(_react2.default.Component);

exports.default = Slider;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.InnerSlider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _eventHandlers = __webpack_require__(244);

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _helpers = __webpack_require__(69);

var _helpers2 = _interopRequireDefault(_helpers);

var _initialState = __webpack_require__(245);

var _initialState2 = _interopRequireDefault(_initialState);

var _defaultProps = __webpack_require__(117);

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _createReactClass = __webpack_require__(246);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _track = __webpack_require__(247);

var _dots = __webpack_require__(248);

var _arrows = __webpack_require__(249);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerSlider = exports.InnerSlider = (0, _createReactClass2.default)({
  displayName: 'InnerSlider',

  mixins: [_helpers2.default, _eventHandlers2.default],
  list: null, // wraps the track
  track: null, // component that rolls out like a film
  listRefHandler: function listRefHandler(ref) {
    this.list = ref;
  },
  trackRefHandler: function trackRefHandler(ref) {
    this.track = ref;
  },
  getInitialState: function getInitialState() {
    return _extends({}, _initialState2.default, {
      currentSlide: this.props.initialSlide
    });
  },
  componentWillMount: function componentWillMount() {
    if (this.props.init) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('init prop is deprecated and will be removed in next release');
      }
      this.props.init();
    }
    // this.setState({
    //   mounted: true
    // });
    var lazyLoadedList = [];
    // number of slides shown in the active frame
    var slidesToShow = this.props.slidesToShow;
    var childrenLen = _react2.default.Children.count(this.props.children);
    var currentSlide = this.state.currentSlide;
    for (var i = 0; i < childrenLen; i++) {
      // if currentSlide is the lastSlide of current frame and 
      // rest of the active slides are on the left of currentSlide
      // then the following might cause a problem
      if (i >= currentSlide && i < currentSlide + slidesToShow) {
        lazyLoadedList.push(i);
      }
    }
    if (this.props.centerMode === true) {
      // add slides to show on the left in case of centerMode with lazyLoad
      var additionalCount = Math.floor(slidesToShow / 2);
      if (parseInt(this.props.centerPadding) > 0) {
        additionalCount += 1;
      }
      var additionalNum = currentSlide;
      while (additionalCount--) {
        lazyLoadedList.push((--additionalNum + childrenLen) % childrenLen);
      }
    }

    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
      this.setState({
        lazyLoadedList: lazyLoadedList
      });
    }
  },
  componentDidMount: function componentDidMount() {
    // Hack for autoplay -- Inspect Later
    this.initialize(this.props);
    this.adaptHeight();

    // To support server-side rendering
    if (!window) {
      return;
    }
    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.animationEndCallback) {
      clearTimeout(this.animationEndCallback);
    }
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
    if (this.state.autoPlayTimer) {
      clearInterval(this.state.autoPlayTimer);
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.slickGoTo != nextProps.slickGoTo) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('react-slick deprecation warning: slickGoTo prop is deprecated and it will be removed in next release. Use slickGoTo method instead');
      }
      this.changeSlide({
        message: 'index',
        index: nextProps.slickGoTo,
        currentSlide: this.state.currentSlide
      });
    } else if (this.state.currentSlide >= nextProps.children.length) {
      this.update(nextProps);
      this.changeSlide({
        message: 'index',
        index: nextProps.children.length - nextProps.slidesToShow,
        currentSlide: this.state.currentSlide
      });
    } else {
      this.update(nextProps);
    }
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.props.lazyLoad && this.props.centerMode) {
      var childrenLen = _react2.default.Children.count(this.props.children);
      var additionalCount = Math.floor(this.props.slidesToShow / 2);
      if (parseInt(this.props.centerPadding) > 0) additionalCount++;
      var leftMostSlide = (this.state.currentSlide - additionalCount + childrenLen) % childrenLen;
      var rightMostSlide = (this.state.currentSlide + additionalCount) % childrenLen;
      if (!this.state.lazyLoadedList.includes(leftMostSlide)) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList + [leftMostSlide]
        });
      }
      if (!this.state.lazyLoadedList.includes(rightMostSlide)) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList + [rightMostSlide]
        });
      }
    }
    this.adaptHeight();
  },
  onWindowResized: function onWindowResized() {
    this.update(this.props);
    // animating state should be cleared while resizing, otherwise autoplay stops working
    this.setState({
      animating: false
    });
    clearTimeout(this.animationEndCallback);
    delete this.animationEndCallback;
  },
  slickPrev: function slickPrev() {
    this.changeSlide({ message: 'previous' });
  },
  slickNext: function slickNext() {
    this.changeSlide({ message: 'next' });
  },
  slickGoTo: function slickGoTo(slide) {
    slide = Number(slide);
    !isNaN(slide) && this.changeSlide({
      message: 'index',
      index: slide,
      currentSlide: this.state.currentSlide
    });
  },
  render: function render() {
    var className = (0, _classnames2.default)('slick-initialized', 'slick-slider', this.props.className, {
      'slick-vertical': this.props.vertical
    });

    var trackProps = {
      fade: this.props.fade,
      cssEase: this.props.cssEase,
      speed: this.props.speed,
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      focusOnSelect: this.props.focusOnSelect ? this.selectHandler : null,
      currentSlide: this.state.currentSlide,
      lazyLoad: this.props.lazyLoad,
      lazyLoadedList: this.state.lazyLoadedList,
      rtl: this.props.rtl,
      slideWidth: this.state.slideWidth,
      slideHeight: this.state.slideHeight,
      listHeight: this.state.listHeight,
      vertical: this.props.vertical,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      slideCount: this.state.slideCount,
      trackStyle: this.state.trackStyle,
      variableWidth: this.props.variableWidth,
      unslick: this.props.unslick
    };

    var dots;

    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
      var dotProps = {
        dotsClass: this.props.dotsClass,
        slideCount: this.state.slideCount,
        slidesToShow: this.props.slidesToShow,
        currentSlide: this.state.currentSlide,
        slidesToScroll: this.props.slidesToScroll,
        clickHandler: this.changeSlide,
        children: this.props.children,
        customPaging: this.props.customPaging,
        infinite: this.props.infinite,
        appendDots: this.props.appendDots
      };

      dots = _react2.default.createElement(_dots.Dots, dotProps);
    }

    var prevArrow, nextArrow;

    var arrowProps = {
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      currentSlide: this.state.currentSlide,
      slideCount: this.state.slideCount,
      slidesToShow: this.props.slidesToShow,
      prevArrow: this.props.prevArrow,
      nextArrow: this.props.nextArrow,
      clickHandler: this.changeSlide
    };

    if (this.props.arrows) {
      prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
      nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
    }

    var verticalHeightStyle = null;

    if (this.props.vertical) {
      verticalHeightStyle = {
        height: this.state.listHeight
      };
    }

    var centerPaddingStyle = null;

    if (this.props.vertical === false) {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: '0px ' + this.props.centerPadding
        };
      }
    } else {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: this.props.centerPadding + ' 0px'
        };
      }
    }

    var listStyle = (0, _objectAssign2.default)({}, verticalHeightStyle, centerPaddingStyle);
    var listProps = {
      className: 'slick-list',
      style: listStyle,
      onMouseDown: this.swipeStart,
      onMouseMove: this.state.dragging ? this.swipeMove : null,
      onMouseUp: this.swipeEnd,
      onMouseLeave: this.state.dragging ? this.swipeEnd : null,
      onTouchStart: this.swipeStart,
      onTouchMove: this.state.dragging ? this.swipeMove : null,
      onTouchEnd: this.swipeEnd,
      onTouchCancel: this.state.dragging ? this.swipeEnd : null,
      onKeyDown: this.props.accessibility ? this.keyHandler : null
    };

    var innerSliderProps = {
      className: className,
      onMouseEnter: this.onInnerSliderEnter,
      onMouseLeave: this.onInnerSliderLeave,
      onMouseOver: this.onInnerSliderOver
    };

    if (this.props.unslick) {
      listProps = { className: 'slick-list' };
      innerSliderProps = { className: className };
    }

    return _react2.default.createElement(
      'div',
      innerSliderProps,
      !this.props.unslick ? prevArrow : '',
      _react2.default.createElement(
        'div',
        _extends({ ref: this.listRefHandler }, listProps),
        _react2.default.createElement(
          _track.Track,
          _extends({ ref: this.trackRefHandler }, trackProps),
          this.props.children
        )
      ),
      !this.props.unslick ? nextArrow : '',
      !this.props.unslick ? dots : ''
    );
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _trackHelper = __webpack_require__(116);

var _helpers = __webpack_require__(69);

var _helpers2 = _interopRequireDefault(_helpers);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _trackUtils = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventHandlers = {
  // Event handler for previous and next
  // gets called if slide is changed via arrows or dots but not swiping/dragging
  changeSlide: function changeSlide(options) {
    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
    var _props = this.props,
        slidesToScroll = _props.slidesToScroll,
        slidesToShow = _props.slidesToShow,
        centerMode = _props.centerMode,
        rtl = _props.rtl;
    var _state = this.state,
        slideCount = _state.slideCount,
        currentSlide = _state.currentSlide;

    unevenOffset = slideCount % slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

    if (options.message === 'previous') {
      slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
      targetSlide = currentSlide - slideOffset;
      if (this.props.lazyLoad && !this.props.infinite) {
        previousInt = currentSlide - slideOffset;
        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
      }
    } else if (options.message === 'next') {
      slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
      targetSlide = currentSlide + slideOffset;
      if (this.props.lazyLoad && !this.props.infinite) {
        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
      }
    } else if (options.message === 'dots') {
      // Click on dots
      targetSlide = options.index * options.slidesToScroll;
      if (targetSlide === options.currentSlide) {
        return;
      }
    } else if (options.message === 'children') {
      // Click on the slides
      targetSlide = options.index;
      if (targetSlide === options.currentSlide) {
        return;
      }
      if (this.props.infinite) {
        var direction = (0, _trackUtils.siblingDirection)({ currentSlide: currentSlide, targetSlide: targetSlide, slidesToShow: slidesToShow, centerMode: centerMode, slideCount: slideCount, rtl: rtl });
        if (targetSlide > options.currentSlide && direction === 'left') {
          targetSlide = targetSlide - slideCount;
        } else if (targetSlide < options.currentSlide && direction === 'right') {
          targetSlide = targetSlide + slideCount;
        }
      }
    } else if (options.message === 'index') {
      targetSlide = Number(options.index);
      if (targetSlide === options.currentSlide) {
        return;
      }
    }
    this.slideHandler(targetSlide);
  },

  // Accessiblity handler for previous and next
  keyHandler: function keyHandler(e) {
    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
    if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (e.keyCode === 37 && this.props.accessibility === true) {
        this.changeSlide({
          message: this.props.rtl === true ? 'next' : 'previous'
        });
      } else if (e.keyCode === 39 && this.props.accessibility === true) {
        this.changeSlide({
          message: this.props.rtl === true ? 'previous' : 'next'
        });
      }
    }
  },
  // Focus on selecting a slide (click handler on track)
  selectHandler: function selectHandler(options) {
    this.changeSlide(options);
  },
  // invoked when swiping/dragging starts (just once)
  swipeStart: function swipeStart(e) {
    var touches, posX, posY;

    // the condition after or looked redundant
    if (this.props.swipe === false) {
      // || ('ontouchend' in document && this.props.swipe === false)) {
      return;
    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
      return;
    }
    posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
    posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
    this.setState({
      dragging: true,
      touchObject: {
        startX: posX,
        startY: posY,
        curX: posX,
        curY: posY
      }
    });
  },
  // continuous invokation while swiping/dragging is going on
  swipeMove: function swipeMove(e) {
    if (!this.state.dragging) {
      e.preventDefault();
      return;
    }
    if (this.state.scrolling) {
      return;
    }
    if (this.state.animating) {
      e.preventDefault();
      return;
    }
    if (this.props.vertical && this.props.swipeToSlide && this.props.verticalSwiping) {
      e.preventDefault();
    }
    var swipeLeft;
    var curLeft, positionOffset;
    var touchObject = this.state.touchObject;

    curLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
      slideIndex: this.state.currentSlide,
      trackRef: this.track
    }, this.props, this.state));
    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

    if (!this.props.verticalSwiping && !this.state.swiping && verticalSwipeLength > 10) {
      this.setState({
        scrolling: true
      });
      return;
    }

    if (this.props.verticalSwiping) {
      touchObject.swipeLength = verticalSwipeLength;
    }

    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);

    if (this.props.verticalSwiping) {
      positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
    }

    var currentSlide = this.state.currentSlide;
    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll); // this might not be correct, using getDotCount may be more accurate
    var swipeDirection = this.swipeDirection(this.state.touchObject);
    var touchSwipeLength = touchObject.swipeLength;

    if (this.props.infinite === false) {
      if (currentSlide === 0 && swipeDirection === 'right' || currentSlide + 1 >= dotCount && swipeDirection === 'left') {
        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;

        if (this.state.edgeDragged === false && this.props.edgeEvent) {
          this.props.edgeEvent(swipeDirection);
          this.setState({ edgeDragged: true });
        }
      }
    }
    if (this.state.swiped === false && this.props.swipeEvent) {
      this.props.swipeEvent(swipeDirection);
      this.setState({ swiped: true });
    }

    if (!this.props.vertical) {
      if (!this.props.rtl) {
        swipeLeft = curLeft + touchSwipeLength * positionOffset;
      } else {
        swipeLeft = curLeft - touchSwipeLength * positionOffset;
      }
    } else {
      swipeLeft = curLeft + touchSwipeLength * (this.state.listHeight / this.state.listWidth) * positionOffset;
    }

    if (this.props.verticalSwiping) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    }

    this.setState({
      touchObject: touchObject,
      swipeLeft: swipeLeft,
      trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: swipeLeft }, this.props, this.state))
    });

    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
      return;
    }
    if (touchObject.swipeLength > 10) {
      this.setState({
        swiping: true
      });
      e.preventDefault();
    }
  },
  getNavigableIndexes: function getNavigableIndexes() {
    var max = void 0;
    var breakPoint = 0;
    var counter = 0;
    var indexes = [];

    if (!this.props.infinite) {
      max = this.state.slideCount;
    } else {
      breakPoint = this.props.slidesToShow * -1;
      counter = this.props.slidesToShow * -1;
      max = this.state.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + this.props.slidesToScroll;

      counter += this.props.slidesToScroll <= this.props.slidesToShow ? this.props.slidesToScroll : this.props.slidesToShow;
    }

    return indexes;
  },
  checkNavigable: function checkNavigable(index) {
    var navigables = this.getNavigableIndexes();
    var prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  },
  getSlideCount: function getSlideCount() {
    var _this = this;

    var centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;

    if (this.props.swipeToSlide) {
      var swipedSlide = void 0;

      var slickList = _reactDom2.default.findDOMNode(this.list);

      var slides = slickList.querySelectorAll('.slick-slide');

      Array.from(slides).every(function (slide) {
        if (!_this.props.vertical) {
          if (slide.offsetLeft - centerOffset + _this.getWidth(slide) / 2 > _this.state.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        } else {
          if (slide.offsetTop + _this.getHeight(slide) / 2 > _this.state.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        }

        return true;
      });

      var currentIndex = this.props.rtl === true ? this.state.slideCount - this.state.currentSlide : this.state.currentSlide;
      var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;

      return slidesTraversed;
    } else {
      return this.props.slidesToScroll;
    }
  },

  swipeEnd: function swipeEnd(e) {
    if (!this.state.dragging) {
      if (this.props.swipe) {
        e.preventDefault();
      }
      return;
    }
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth / this.props.touchThreshold;
    var swipeDirection = this.swipeDirection(touchObject);

    if (this.props.verticalSwiping) {
      minSwipe = this.state.listHeight / this.props.touchThreshold;
    }

    var wasScrolling = this.state.scrolling;
    // reset the state of touch related state variables.
    this.setState({
      dragging: false,
      edgeDragged: false,
      scrolling: false,
      swiping: false,
      swiped: false,
      swipeLeft: null,
      touchObject: {}
    });
    if (wasScrolling) {
      return;
    }

    // Fix for #13
    if (!touchObject.swipeLength) {
      return;
    }
    if (touchObject.swipeLength > minSwipe) {
      e.preventDefault();

      var slideCount = void 0,
          newSlide = void 0;

      switch (swipeDirection) {

        case 'left':
        case 'down':
          newSlide = this.state.currentSlide + this.getSlideCount();
          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
          // this.state.currentDirection = 0; // critical: change this line with setState statement
          this.setState({ currentDirection: 0 }); // unverified fix of above line
          break;

        case 'right':
        case 'up':
          newSlide = this.state.currentSlide - this.getSlideCount();
          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
          // this.state.currentDirection = 1; // critical: change this line with setState statement
          this.setState({ currentDirection: 1 }); // unverified fix of above line
          break;

        default:
          slideCount = this.state.currentSlide;

      }
      this.slideHandler(slideCount);
    } else {
      // Adjust the track back to it's original position.
      var currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, this.props, this.state));

      this.setState({
        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
      });
    }
  },
  onInnerSliderEnter: function onInnerSliderEnter(e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause();
    }
  },
  onInnerSliderOver: function onInnerSliderOver(e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause();
    }
  },
  onInnerSliderLeave: function onInnerSliderLeave(e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.autoPlay();
    }
  }
};

exports.default = EventHandlers;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initialState = {
    animating: false,
    dragging: false,
    autoPlayTimer: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    listWidth: null,
    listHeight: null,
    scrolling: false,
    // loadIndex: 0,
    slideCount: null,
    slideWidth: null,
    slideHeight: null,
    swiping: false,
    // sliding: false,
    // slideOffset: 0,
    swipeLeft: null,
    touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
    },

    lazyLoadedList: [],

    // added for react
    initialized: false,
    edgeDragged: false,
    swiped: false, // used by swipeEvent. differentites between touch and swipe.
    trackStyle: {},
    trackWidth: 0

    // Removed
    // transformsEnabled: false,
    // $nextArrow: null,
    // $prevArrow: null,
    // $dots: null,
    // $list: null,
    // $slideTrack: null,
    // $slides: null,
};

module.exports = initialState;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(3);
var factory = __webpack_require__(78);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Track = undefined;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _trackUtils = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  // if spec has currentSlideIndex, we can also apply slickCurrent class according to that (https://github.com/kenwheeler/slick/blob/master/slick/slick.js#L2300-L2302)
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    // if we're going right to left, index is reversed
    index = spec.slideCount - 1 - spec.index;
  } else {
    // index of the slide
    index = spec.index;
  }
  slickCloned = index < 0 || index >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0; // concern: not sure if this should be correct (https://github.com/kenwheeler/slick/blob/master/slick/slick.js#L2328-L2346)
    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    // concern: following can be incorrect in case where currentSlide is lastSlide in frame and rest of the slides to show have index smaller than currentSlideIndex
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }
  var slickCurrent = index === spec.currentSlide;
  return (0, _classnames2.default)({
    'slick-slide': true,
    'slick-active': slickActive,
    'slick-center': slickCenter,
    'slick-cloned': slickCloned,
    'slick-current': slickCurrent // dubious in case of RTL
  });
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = 'relative';
    if (spec.vertical) {
      style.top = -spec.index * spec.slideHeight;
    } else {
      style.left = -spec.index * spec.slideWidth;
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.visibility = spec.currentSlide === spec.index ? 'visible' : 'hidden';
    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase + ', ' + 'visibility ' + spec.speed + 'ms ' + spec.cssEase;
    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase + ', ' + 'visibility ' + spec.speed + 'ms ' + spec.cssEase;
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = _react2.default.Children.count(spec.children);

  _react2.default.Children.forEach(spec.children, function (elem, index) {
    var child = void 0;
    var childOnClickOptions = {
      message: 'children',
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };

    // in case of lazyLoad, whether or not we want to fetch the slide
    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = _react2.default.createElement('div', null);
    }
    var childStyle = getSlideStyle((0, _objectAssign2.default)({}, spec, { index: index }));
    var slideClass = child.props.className || '';

    var onClick = function onClick(e) {
      child.props && child.props.onClick && child.props.onClick(e);
      if (spec.focusOnSelect) {
        spec.focusOnSelect(childOnClickOptions);
      }
    };

    // push a cloned element of the desired slide
    slides.push(_react2.default.cloneElement(child, {
      key: 'original' + getKey(child, index),
      'data-index': index,
      className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: index }, spec)), slideClass),
      tabIndex: '-1',
      style: (0, _objectAssign2.default)({ outline: 'none' }, child.props.style || {}, childStyle),
      onClick: onClick
    }));

    // variableWidth doesn't wrap properly.
    // if slide needs to be precloned or postcloned
    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;
      if (preCloneNo <= (0, _trackUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;
        preCloneSlides.push(_react2.default.cloneElement(child, {
          key: 'precloned' + getKey(child, key),
          'data-index': key,
          className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: key }, spec)), slideClass),
          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
          onClick: onClick
        }));
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;
        postCloneSlides.push(_react2.default.cloneElement(child, {
          key: 'postcloned' + getKey(child, key),
          'data-index': key,
          className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: key }, spec)), slideClass),
          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
          onClick: onClick
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track = exports.Track = function (_React$Component) {
  _inherits(Track, _React$Component);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Track.prototype.render = function render() {
    // var slides = renderSlides.call(this, this.props);
    var slides = renderSlides(this.props);
    return _react2.default.createElement(
      'div',
      { className: 'slick-track', style: this.props.trackStyle },
      slides
    );
  };

  return Track;
}(_react2.default.Component);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Dots = undefined;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDotCount = function getDotCount(spec) {
  var dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }

  return dots;
};

var Dots = exports.Dots = function (_React$Component) {
  _inherits(Dots, _React$Component);

  function Dots() {
    _classCallCheck(this, Dots);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Dots.prototype.clickHandler = function clickHandler(options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    this.props.clickHandler(options);
  };

  Dots.prototype.render = function render() {
    var _this2 = this;

    var dotCount = getDotCount({
      slideCount: this.props.slideCount,
      slidesToScroll: this.props.slidesToScroll,
      slidesToShow: this.props.slidesToShow,
      infinite: this.props.infinite
    });

    // Apply join & split to Array to pre-fill it for IE8
    //
    // Credit: http://stackoverflow.com/a/13735425/1849458
    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {

      var leftBound = i * _this2.props.slidesToScroll;
      var rightBound = i * _this2.props.slidesToScroll + (_this2.props.slidesToScroll - 1);
      var className = (0, _classnames2.default)({
        'slick-active': _this2.props.currentSlide >= leftBound && _this2.props.currentSlide <= rightBound
      });

      var dotOptions = {
        message: 'dots',
        index: i,
        slidesToScroll: _this2.props.slidesToScroll,
        currentSlide: _this2.props.currentSlide
      };

      var onClick = _this2.clickHandler.bind(_this2, dotOptions);

      return _react2.default.createElement(
        'li',
        { key: i, className: className },
        _react2.default.cloneElement(_this2.props.customPaging(i), { onClick: onClick })
      );
    });

    return _react2.default.cloneElement(this.props.appendDots(dots), { className: this.props.dotsClass });
  };

  return Dots;
}(_react2.default.Component);

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NextArrow = exports.PrevArrow = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(69);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrevArrow = exports.PrevArrow = function (_React$Component) {
  _inherits(PrevArrow, _React$Component);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  PrevArrow.prototype.clickHandler = function clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  };

  PrevArrow.prototype.render = function render() {
    var prevClasses = { 'slick-arrow': true, 'slick-prev': true };
    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });

    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
      prevClasses['slick-disabled'] = true;
      prevHandler = null;
    }

    var prevArrowProps = {
      key: '0',
      'data-role': 'none',
      className: (0, _classnames2.default)(prevClasses),
      style: { display: 'block' },
      onClick: prevHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var prevArrow = void 0;

    if (this.props.prevArrow) {
      prevArrow = _react2.default.cloneElement(this.props.prevArrow, _extends({}, prevArrowProps, customProps));
    } else {
      prevArrow = _react2.default.createElement(
        'button',
        _extends({ key: '0', type: 'button' }, prevArrowProps),
        ' Previous'
      );
    }

    return prevArrow;
  };

  return PrevArrow;
}(_react2.default.Component);

var NextArrow = exports.NextArrow = function (_React$Component2) {
  _inherits(NextArrow, _React$Component2);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  NextArrow.prototype.clickHandler = function clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  };

  NextArrow.prototype.render = function render() {
    var nextClasses = { 'slick-arrow': true, 'slick-next': true };
    var nextHandler = this.clickHandler.bind(this, { message: 'next' });

    if (!_helpers2.default.canGoNext(this.props)) {
      nextClasses['slick-disabled'] = true;
      nextHandler = null;
    }

    var nextArrowProps = {
      key: '1',
      'data-role': 'none',
      className: (0, _classnames2.default)(nextClasses),
      style: { display: 'block' },
      onClick: nextHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var nextArrow = void 0;

    if (this.props.nextArrow) {
      nextArrow = _react2.default.cloneElement(this.props.nextArrow, _extends({}, nextArrowProps, customProps));
    } else {
      nextArrow = _react2.default.createElement(
        'button',
        _extends({ key: '1', type: 'button' }, nextArrowProps),
        ' Next'
      );
    }

    return nextArrow;
  };

  return NextArrow;
}(_react2.default.Component);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__(251);

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),
/* 251 */
/***/ (function(module, exports) {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),
/* 252 */
/***/ (function(module, exports) {

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(254);
module.exports = new MediaQueryDispatch();


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(255);
var Util = __webpack_require__(118);
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(256);
var each = __webpack_require__(118).each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),
/* 256 */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);





class Header extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
	constructor(props) {
		super(props);
		this.loginClick = this.loginClick.bind(this);
		this.modalClick = this.modalClick.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.logout = this.logout.bind(this);
	}

	logout(ev) {
		ev.preventDefault();
		this.props.user.logOut(this.props.history);
	}

	onSubmit(ev) {
		ev.preventDefault();
		const data = {
			username: document.getElementById('username').value,
			password: document.getElementById('password').value
		};
		$.ajax({
			url: '/v1/session',
			method: 'post',
			data: data
		}).then(data => {
			this.props.user.logIn(this.props.history, data);
			let loginModal = document.getElementById('loginModal');
			loginModal.style.display = 'none';
		}).fail(err => {
			let errorEl = document.getElementById('errorMsg');
			errorEl.innerHTML = `Error:  ${err.responseJSON.error}`;
		});
	}

	loginClick(ev) {
		ev.preventDefault();
		let loginModal = document.getElementById('loginModal');
		loginModal.style.display = 'block';
	}

	modalClick(ev) {
		ev.preventDefault();
		let loginModal = document.getElementById('loginModal');
		loginModal.style.display = 'none';
	}

	render() {
		const img_source = "/images/d-pad_example.png";
		const user = this.props.user.getUser();
		const loginModal = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ id: 'loginModal', className: 'modal' },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'modal-content animate-top card-4' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'header',
					{ id: 'loginModalHeader', className: 'container blueberry center padding-32' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'span',
						{ onClick: this.modalClick, className: 'button blueberry hover-red xlarge display-topright' },
						'\xD7'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'h2',
						{ className: 'wide' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-user margin-right' }),
						'Login'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'form',
					{ id: 'loginModalForm', className: 'container text-dark-grey' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						null,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'label',
							{ htmlFor: 'username' },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-user' }),
							' Username'
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'input border', id: 'username', type: 'text', placeholder: 'Enter Username' }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						null,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'label',
							{ htmlFor: 'password' },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-key' }),
							' Password'
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'input border', id: 'password', type: 'password', placeholder: 'Enter Password' }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'button',
						{ onClick: this.onSubmit, className: 'button block blueberry hover-apple-core padding-16 section right' },
						'LOGIN ',
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-check' })
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						{ className: 'left' },
						'Not a member? ',
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
							{ to: './register', className: 'text-blue' },
							'Sign Up'
						)
					)
				)
			)
		);
		const header = user.username === '' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'nav',
			{ className: 'bar blueberry card' },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: { height: '25px' }, src: img_source }),
				' PLAY TO GIVE'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'EVENTS'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'CHARITIES'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'GAMES'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'ABOUT US'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'CONTACT'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'button',
				{ className: 'bar-item button padding-large hover-apple-core hide-small right', onClick: this.loginClick },
				'login / sign up'
			),
			loginModal
		) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'nav',
			{ className: 'bar blueberry card' },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: { height: '25px' }, src: img_source }),
				' PLAY TO GIVE'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'EVENTS'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'CHARITIES'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'GAMES'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'ABOUT US'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: '/', className: 'bar-item button hover-apple-core padding-large hide-small' },
				'CONTACT'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'button',
				{ className: 'bar-item button padding-large hover-apple-core hide-small right', onClick: this.logout },
				'Logout'
			),
			loginModal
		);

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'top' },
			header
		);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* withRouter */])(Header));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(70);



/*************************************************************************/

class Register extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let loginModal = document.getElementById('loginModal');
        loginModal.style.display = 'none';
    }

    static validPassword(password) {
        if (!password || password.length < 8) {
            return { error: 'password length must be > 7' };
        } else if (!password.match(/[0-9]/i)) {
            return { error: 'password must contain a number' };
        } else if (!password.match(/[a-z]/)) {
            return { error: 'password a lowercase letter' };
        } else if (!password.match(/\@|\!|\#|\$|\%|\^/i)) {
            return { error: 'password must contain @, !, #, $, % or ^' };
        } else if (!password.match(/[A-Z]/)) {
            return { error: 'password an uppercase letter' };
        }
        return undefined;
    }

    onSubmit(ev) {
        ev.preventDefault();
        const data = {
            username: document.getElementById('username_register').value,
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            primary_email: document.getElementById('primary_email').value,
            password: document.getElementById('password_register').value
        };
        let $error = $('#errorMsg');
        let pwdInvalid = Register.validPassword(data.password);
        if (!data.username || data.username.length > 16 || data.username.length < 6 || !data.username.match(/^[a-z0-9]+$/i)) {
            $error.html('Error: malformed username');
            console.log(data.username);
        } else if (pwdInvalid) {
            $error.html(`Error: ${pwdInvalid.error}`);
        } else $.ajax({
            url: "/v1/user",
            method: "post",
            data: data
        }).then(() => {
            this.props.history.push('/');
        }).fail(err => {
            let errorEl = document.getElementById('errorMsg');
            errorEl.innerHTML = `Error: ${err.responseJSON.error}`;
            console.log(err);
        });
    }

    render() {
        const contentStyle = {
            width: '2000px'
        };
        const containerStyle = {
            width: '800px'
        };
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'content', style: contentStyle },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container content center padding-64', style: containerStyle, id: 'info' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'center-block' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', { id: 'errorMsg', className: 'bg-danger' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    { className: 'wide' },
                    'Sign Up'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'form',
                    { className: 'form-horizontal' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            { className: 'col-sm-2 control-label', htmlFor: 'first_name' },
                            'First Name:'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-10' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'first_name', type: 'text', placeholder: 'First Name' })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            { className: 'col-sm-2 control-label', htmlFor: 'last_name' },
                            'Last Name:'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-10' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'last_name', type: 'text', placeholder: 'Last Name' })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            { className: 'col-sm-2 control-label', htmlFor: 'primary_email' },
                            'Email:'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-10' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'primary_email', type: 'email', placeholder: 'Email Address' })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            { className: 'col-sm-2 control-label', htmlFor: 'username_register' },
                            'Username:'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-10' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'username_register', type: 'text', placeholder: 'Username' })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            { className: 'col-sm-2 control-label', htmlFor: 'password_register' },
                            'Password:'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-10' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'password_register', type: 'password', placeholder: 'Password' })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { onClick: this.onSubmit, className: 'button block blueberry hover-apple-core padding-16 section right' },
                        'Register ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-check' })
                    )
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["withRouter"])(Register));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);





class Events extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
		constructor(props) {
				super(props);
				this.createEvent = this.createEvent.bind(this);
				this.createCharity = this.createCharity.bind(this);
				this.createGame = this.createGame.bind(this);
		}

		createEvent() {
				const data = {
						event_id: document.getElementById('event_id').value,
						event_name: document.getElementById('event_name').value,
						location: document.getElementById('location').value,
						date: document.getElementById('date').value,
						time: document.getElementById('time').value
				};

				$.ajax({
						url: `/v1/events`,
						method: "post",
						data: data
				}).then(data => {
						console.log("posted");
						document.getElementById('event_id').value = ""; // empty input boxes
						document.getElementById('event_name').value = "";
						document.getElementById('location').value = "";
				}).fail(err => {
						console.log("post failed");
						console.log(err.error);
				});
		}

		createCharity() {
				const data = {
						charity_name: document.getElementById('charity_name').value,
						picture: document.getElementById('charity_picture').value,
						summary: document.getElementById('charity_summary').value,
						paypal: document.getElementById('pay-pal').value
				};

				$.ajax({
						url: `/v1/charities`,
						method: "post",
						data: data
				}).then(data => {
						console.log("posted");
						document.getElementById('charity_name').value = ""; // empty input boxes
						document.getElementById('charity_picture').value = "";
						document.getElementById('charity_summary').value = "";
						document.getElementById('pay-pal').value = "";
				}).fail(err => {
						console.log("post failed");
						console.log(err.error);
				});
		}

		createGame() {
				const data = {
						game_name: document.getElementById('game_name').value,
						picture: document.getElementById('game_picture').value,
						summary: document.getElementById('game_summary').value
				};

				$.ajax({
						url: `/v1/games`,
						method: "post",
						data: data
				}).then(data => {
						console.log("posted");
						document.getElementById('game_name').value = ""; // empty input boxes
						document.getElementById('game_picture').value = "";
						document.getElementById('game_summary').value = "";
				}).fail(err => {
						console.log("post failed");
						console.log(err.error);
				});
		}

		render() {
				const page_html = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'content', style: { maxWidth: '2000px', marginTop: '46px' } },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', { id: 'errorMsg', className: 'bg-danger' }),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'div',
								null,
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Event ID'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'event_id', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Event Name'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'event_name', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Event Location'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'location', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Event Date'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'date', type: 'date' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Event Time'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'time', type: 'time' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'button',
										{ className: 'btn btn-primary', onClick: this.createEvent },
										'Create Event'
								)
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'div',
								null,
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Charity Name'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'charity_name', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Charity Picture'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'charity_picture', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Charity Summary'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'charity_summary', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Charity PayPal'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'pay-pal', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'button',
										{ className: 'btn btn-primary', onClick: this.createCharity },
										'Create Charity'
								)
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'div',
								null,
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Game Name'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'game_name', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Game Picture'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'game_picture', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: 'form-group' },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'label',
												null,
												'Game Summary'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'game_summary', type: 'text' })
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'button',
										{ className: 'btn btn-primary', onClick: this.createGame },
										'Create Game'
								)
						)
				);
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						null,
						page_html
				);
		}
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* withRouter */])(Events));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);



class GameInput extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev) {
        ev.preventDefault();
        console.log(this.props);
        let data = {
            score: document.getElementById('score').value
        };
        $.ajax({
            url: '/v1/game/create',
            method: 'post',
            data: data
        }).then(console.log('game created'));
    }

    render() {

        const containerStyle = {
            width: '800px'
        };

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container content center padding-64', style: containerStyle, id: 'info' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'form',
                { className: 'form-horizontal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { className: 'col-sm-2 control-label', htmlFor: 'score' },
                        'Score: '
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-sm-10' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'score', type: 'text', placeholder: 'Score' })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: this.onSubmit, className: 'button block blueberry hover-apple-core padding-16 section right' },
                    'Submit Score'
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* withRouter */])(GameInput));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);



class HighScore extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = { highscores: {} };
    }

    componentDidMount() {
        $.ajax({
            url: `/v1/game/highscores`,
            method: 'get'
        }).then(data => {
            console.log(data.highscores);
            this.setState({ highscores: data.highscores });
        });
    }

    render() {

        let highscore_list = this.state.highscores.length > 0 ? this.state.highscores.map((highscore, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tr',
            { key: index },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { style: { verticalAlign: 'middle', height: '50px' } },
                highscore.score
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { style: { verticalAlign: 'middle', height: '50px' } },
                highscore.owner
            )
        )) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tr',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { style: { verticalAlign: 'middle', height: '50px' } },
                'No highscores'
            )
        );

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container content center padding-64', style: { maxWidth: '800px' }, id: 'highscores' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                { className: 'wide' },
                'Highscores'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'table',
                { style: { margin: 'auto' }, className: 'col-xs-12' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    { style: { width: '80%', maxWidth: '600px', margin: 'auto' }, className: 'table-all white text-grey' },
                    highscore_list
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* withRouter */])(HighScore));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_paypal_express_checkout__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_paypal_express_checkout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_paypal_express_checkout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__2048__ = __webpack_require__(119);





class SimpleDonate extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
	constructor(props) {
		super(props);
		this.donateClick = this.donateClick.bind(this);
		this.modalClick = this.modalClick.bind(this);

		this.state = { games: {} };
	}

	// hide the game by default, get a list of playable games
	componentDidMount() {
		let game = document.getElementById('game');
		game.style.display = 'none';

		// watch for game completion
		window.addEventListener('score', function (e) {
			console.log(e.data);

			const data = {
				score: e.data
			};

			$.ajax({
				url: `/v1/game/create`,
				method: 'post',
				data: data
			}).then(data => {
				console.log('score updated');
			}).fail(err => {
				let errorEl = document.getElementById('errorMsg');
				errorEl.innerHTML = `Error:  ${err.responseJSON.error}`;
			});
		}, false);

		$.ajax({
			url: `/v1/games`,
			method: "get"
		}).then(data => {
			this.setState({ games: data.games });
		}).fail(err => {
			console.log(err.error);
		});
	}

	donateClick(username) {

		// check that the user has paid,
		// if they have, show the game
		$.ajax({
			url: `/v1/user/timestamp/${username}`,
			method: 'get'
		}).then(data => {
			if (data.valid) {
				console.log("user has paid");

				let game = document.getElementById('game');
				game.style.display = 'block';
				ReactDOM.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__2048__["a" /* default */], null), game);

				let play = document.getElementById('play');
				play.style.display = 'none';
			} else {
				let donateModal = document.getElementById('donateModal');
				donateModal.style.display = 'block';
			}
		}).fail(err => {
			let errorEl = document.getElementById('errorMsg');
			errorEl.innerHTML = `Error:  ${err.responseJSON.error}`;
		});
	}

	// hide modal
	modalClick(ev) {
		ev.preventDefault();
		let donateModal = document.getElementById('donateModal');
		donateModal.style.display = 'none';
	}

	render() {
		let env = 'sandbox';
		let currency = 'USD';
		let total = 1;

		const user = this.props.user.getUser();
		const onSuccess = payment => {
			console.log("The payment was successful!", payment);

			// get the time the user paid
			const data = {
				username: user.username,
				timestamp: new Date().getTime()
			};

			//set some state on user account info via api call to let them play games
			$.ajax({
				url: '/v1/user/timestamp',
				method: 'put',
				data: data
			}).then(data => {
				let donateModal = document.getElementById('donateModal');
				donateModal.style.display = 'none';
				console.log('updated user timestamp');
			}).fail(err => {
				let errorEl = document.getElementById('errorMsg');
				errorEl.innerHTML = `Error:  ${err.responseJSON.error}`;
			});
		};
		const onCancel = data => {
			console.log('The payment was cancelled!', data);
		};
		const onError = err => {
			console.log("Error!", err);
		};
		const client = {
			// jacob's sandbox facilitator
			//sandbox:	'AQ-fj_iUQju9vVqDH5WQTD1ZZrS6YiwWn7KlLuq-Pnq4Lya5UvCf4_w2NQRVC34SvDJ0FBj9SBs3gBaX',

			sandbox: 'AXNyaNk-cU4QvxtUq3g-_LBO22hiFggLx8i5-k-j1QWmqfuE9AWy06ThkkPOOpqtde-XHwUPwcYWLM3A',
			production: 'YOUR-PRODUCTION-APP-ID'
		};

		let game_list = this.state.games.length > 0 ? this.state.games.map((g, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'tr',
			{ key: index },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: g.picture, style: { maxWidth: '267px', maxHeight: '100px' } })
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				g.game_name
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'button',
					{ className: 'button blueberry hover-apple-core right' },
					'Learn More'
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'button',
					{ className: 'button blueberry hover-apple-core right', onClick: this.donateClick.bind(this, user.username) },
					'Play'
				)
			)
		)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'tr',
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'td',
				{ style: { verticalAlign: 'middle', height: '100px' } },
				'No games'
			)
		);

		// pop-up asking user to donate
		const donateModal = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ id: 'donateModal', className: 'modal' },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'modal-content animate-top card-4' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'header',
					{ id: 'donateModalHeader', className: 'modal-header blueberry center padding-32' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'span',
						{ onClick: this.modalClick, className: 'button blueberry hover-red xlarge display-topright' },
						'\xD7'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'h2',
						null,
						'Donate to Play!'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'modal-body' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'container-fluid' },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'row' },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'div',
								{ className: 'col-sm-2 col-sm-offset-5 text-center' },
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_paypal_express_checkout___default.a, { env: env, client: client, currency: currency, total: total, onError: onError, onSuccess: onSuccess, onCancel: onCancel })
							)
						)
					)
				)
			)
		);

		return user.username !== '' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'content', style: { marginTop: '46px' } },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'errorMsg' }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'container content center padding-64', style: { maxWidth: '800px' }, id: 'play' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h2',
					{ className: 'wide' },
					'GAMES'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ className: 'opacity center' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'i',
						null,
						'Which one will you choose?'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'table',
					{ style: { margin: 'auto' }, className: 'col-xs-12' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'thead',
						{ style: { width: '80%', maxWidth: '600px', margin: 'auto' }, className: 'table-all white text-grey' },
						game_list
					)
				)
			),
			donateModal,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'game' })
		) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'content', style: { marginTop: '100px' } },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'alert alert-warning' },
				'You must log in to play!'
			)
		);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* withRouter */])(SimpleDonate));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(264);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(24), __webpack_require__(265), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-dom'), require('react-async-script-loader'), require('prop-types'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactDom, global.reactAsyncScriptLoader, global.propTypes);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _reactDom, _reactAsyncScriptLoader, _propTypes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _reactAsyncScriptLoader2 = _interopRequireDefault(_reactAsyncScriptLoader);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var PaypalButton = function (_React$Component) {
        _inherits(PaypalButton, _React$Component);

        function PaypalButton(props) {
            _classCallCheck(this, PaypalButton);

            var _this = _possibleConstructorReturn(this, (PaypalButton.__proto__ || Object.getPrototypeOf(PaypalButton)).call(this, props));

            window.React = _react2.default;
            window.ReactDOM = _reactDom2.default;
            _this.state = {
                showButton: false
            };
            return _this;
        }

        _createClass(PaypalButton, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(_ref) {
                var isScriptLoaded = _ref.isScriptLoaded,
                    isScriptLoadSucceed = _ref.isScriptLoadSucceed;

                if (!this.state.show) {
                    if (isScriptLoaded && !this.props.isScriptLoaded) {
                        if (isScriptLoadSucceed) {
                            this.setState({ showButton: true });
                        } else {
                            console.log('Cannot load Paypal script!');
                            this.props.onError();
                        }
                    }
                }
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _props = this.props,
                    isScriptLoaded = _props.isScriptLoaded,
                    isScriptLoadSucceed = _props.isScriptLoadSucceed;

                if (isScriptLoaded && isScriptLoadSucceed) {
                    this.setState({ showButton: true });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                var payment = function payment() {
                    return paypal.rest.payment.create(_this2.props.env, _this2.props.client, {
                        transactions: [{ amount: { total: _this2.props.total, currency: _this2.props.currency } }]
                    }, {
                        input_fields: {
                            // any values other than null, and the address is not returned after payment execution.
                            no_shipping: _this2.props.shipping
                        }
                    });
                };

                var onAuthorize = function onAuthorize(data, actions) {
                    return actions.payment.execute().then(function (payment_data) {
                        // console.log(`payment_data: ${JSON.stringify(payment_data, null, 1)}`)
                        var payment = Object.assign({}, _this2.props.payment);
                        payment.paid = true;
                        payment.cancelled = false;
                        payment.payerID = data.payerID;
                        payment.paymentID = data.paymentID;
                        payment.paymentToken = data.paymentToken;
                        payment.returnUrl = data.returnUrl;
                        // getting buyer's shipping address and email
                        payment.address = payment_data.payer.payer_info.shipping_address;
                        payment.email = payment_data.payer.payer_info.email;
                        _this2.props.onSuccess(payment);
                    });
                };

                var ppbtn = '';
                if (this.state.showButton) {
                    ppbtn = _react2.default.createElement(paypal.Button.react, {
                        env: this.props.env,
                        client: this.props.client,
                        style: this.props.style,
                        payment: payment,
                        commit: true,
                        onAuthorize: onAuthorize,
                        onCancel: this.props.onCancel

                        // "Error: Unrecognized prop: shipping" was caused by the next line
                        // shipping={this.props.shipping}
                    });
                }
                return _react2.default.createElement(
                    'div',
                    null,
                    ppbtn
                );
            }
        }]);

        return PaypalButton;
    }(_react2.default.Component);

    PaypalButton.propTypes = {
        currency: _propTypes2.default.string.isRequired,
        total: _propTypes2.default.number.isRequired,
        client: _propTypes2.default.object.isRequired,
        style: _propTypes2.default.object
    };

    PaypalButton.defaultProps = {
        env: 'sandbox',
        // null means buyer address is returned in the payment execution response
        shipping: null,
        onSuccess: function onSuccess(payment) {
            console.log('The payment was succeeded!', payment);
        },
        onCancel: function onCancel(data) {
            console.log('The payment was cancelled!', data);
        },
        onError: function onError(err) {
            console.log('Error loading Paypal script!', err);
        }
    };

    exports.default = (0, _reactAsyncScriptLoader2.default)('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);
});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.startLoadingScripts = startLoadingScripts;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(266);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _utils = __webpack_require__(267);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var loadedScript = [];
var pendingScripts = {};
var failedScript = [];

function startLoadingScripts(scripts) {
  var onComplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.noop;

  // sequence load
  var loadNewScript = function loadNewScript(src) {
    if (loadedScript.indexOf(src) < 0) {
      return function (taskComplete) {
        var callbacks = pendingScripts[src] || [];
        callbacks.push(taskComplete);
        pendingScripts[src] = callbacks;
        if (callbacks.length === 1) {
          return (0, _utils.newScript)(src)(function (err) {
            pendingScripts[src].forEach(function (cb) {
              return cb(err, src);
            });
            delete pendingScripts[src];
          });
        }
      };
    }
  };
  var tasks = scripts.map(function (src) {
    if (Array.isArray(src)) {
      return src.map(loadNewScript);
    } else return loadNewScript(src);
  });

  _utils.series.apply(undefined, _toConsumableArray(tasks))(function (err, src) {
    if (err) {
      failedScript.push(src);
    } else {
      if (Array.isArray(src)) {
        src.forEach(addCache);
      } else addCache(src);
    }
  })(function (err) {
    removeFailedScript();
    onComplete(err);
  });
}

var addCache = function addCache(entry) {
  if (loadedScript.indexOf(entry) < 0) {
    loadedScript.push(entry);
  }
};

var removeFailedScript = function removeFailedScript() {
  if (failedScript.length > 0) {
    failedScript.forEach(function (script) {
      var node = document.querySelector('script[src=\'' + script + '\']');
      if (node != null) {
        node.parentNode.removeChild(node);
      }
    });

    failedScript = [];
  }
};

var scriptLoader = function scriptLoader() {
  for (var _len = arguments.length, scripts = Array(_len), _key = 0; _key < _len; _key++) {
    scripts[_key] = arguments[_key];
  }

  return function (WrappedComponent) {
    var ScriptLoader = function (_Component) {
      _inherits(ScriptLoader, _Component);

      function ScriptLoader(props, context) {
        _classCallCheck(this, ScriptLoader);

        var _this = _possibleConstructorReturn(this, (ScriptLoader.__proto__ || Object.getPrototypeOf(ScriptLoader)).call(this, props, context));

        _this.state = {
          isScriptLoaded: false,
          isScriptLoadSucceed: false
        };

        _this._isMounted = false;
        return _this;
      }

      _createClass(ScriptLoader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          this._isMounted = true;
          startLoadingScripts(scripts, function (err) {
            if (_this2._isMounted) {
              _this2.setState({
                isScriptLoaded: true,
                isScriptLoadSucceed: !err
              }, function () {
                if (!err) {
                  _this2.props.onScriptLoaded();
                }
              });
            }
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this._isMounted = false;
        }
      }, {
        key: 'render',
        value: function render() {
          var props = _extends({}, this.props, this.state);

          return _react2.default.createElement(WrappedComponent, props);
        }
      }]);

      return ScriptLoader;
    }(_react.Component);

    ScriptLoader.propTypes = {
      onScriptLoaded: _propTypes2.default.func
    };
    ScriptLoader.defaultProps = {
      onScriptLoaded: _utils.noop
    };


    return (0, _hoistNonReactStatics2.default)(ScriptLoader, WrappedComponent);
  };
};

exports.default = scriptLoader;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isDefined = exports.isDefined = function isDefined(val) {
  return val != null;
};
var isFunction = exports.isFunction = function isFunction(val) {
  return typeof val === 'function';
};
var noop = exports.noop = function noop(_) {};

var newScript = exports.newScript = function newScript(src) {
  return function (cb) {
    var script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function () {
      return cb(null, src);
    });
    script.addEventListener('error', function () {
      return cb(true, src);
    });
    document.body.appendChild(script);
    return script;
  };
};

var keyIterator = function keyIterator(cols) {
  var keys = Object.keys(cols);
  var i = -1;
  return {
    next: function next() {
      i++; // inc
      if (i >= keys.length) return null;else return keys[i];
    }
  };
};

// tasks should be a collection of thunk
var parallel = exports.parallel = function parallel() {
  for (var _len = arguments.length, tasks = Array(_len), _key = 0; _key < _len; _key++) {
    tasks[_key] = arguments[_key];
  }

  return function (each) {
    return function (cb) {
      var hasError = false;
      var successed = 0;
      var ret = [];
      tasks = tasks.filter(isFunction);

      if (tasks.length <= 0) cb(null);else {
        tasks.forEach(function (task, i) {
          var thunk = task;
          thunk(function (err) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            if (err) hasError = true;else {
              // collect result
              if (args.length <= 1) args = args[0];

              ret[i] = args;
              successed++;
            }

            if (isFunction(each)) each.call(null, err, args, i);

            if (hasError) cb(true);else if (tasks.length === successed) {
              cb(null, ret);
            }
          });
        });
      }
    };
  };
};

// tasks should be a collection of thunk
var series = exports.series = function series() {
  for (var _len3 = arguments.length, tasks = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    tasks[_key3] = arguments[_key3];
  }

  return function (each) {
    return function (cb) {
      tasks = tasks.filter(function (val) {
        return val != null;
      });
      var nextKey = keyIterator(tasks);
      var nextThunk = function nextThunk() {
        var key = nextKey.next();
        var thunk = tasks[key];
        if (Array.isArray(thunk)) thunk = parallel.apply(null, thunk).call(null, each);
        return [+key, thunk]; // convert `key` to number
      };
      var key = void 0,
          thunk = void 0;
      var next = nextThunk();
      key = next[0];
      thunk = next[1];
      if (thunk == null) return cb(null);

      var ret = [];
      var iterator = function iterator() {
        thunk(function (err) {
          for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }

          if (args.length <= 1) args = args[0];
          if (isFunction(each)) each.call(null, err, args, key);

          if (err) cb(err);else {
            // collect result
            ret.push(args);

            next = nextThunk();
            key = next[0];
            thunk = next[1];
            if (thunk == null) return cb(null, ret); // finished
            else iterator();
          }
        });
      };
      iterator();
    };
  };
};

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(21);





class Profile extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.playGame = this.playGame.bind(this);
    }

    playGame(ev) {
        ev.preventDefault();
        this.props.history.push('/simpledonate');
    }

    fetchUser(username) {
        $.ajax({
            url: `/v1/user/${username}`,
            method: "get"
        }).then(data => {
            this.setState({ user: data });
        }).fail(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.fetchUser(this.props.match.params.username);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchUser(nextProps.match.params.username);
    }

    render() {
        // Is the logged in user viewing their own profile
        const user = this.props.match.params.username;
        const isUser = this.props.match.params.username === this.props.user.getUser().username;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row content', style: { marginTop: 100 } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-xs-4' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h4',
                    { style: { margin: 0 } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        null,
                        'User Information'
                    )
                ),
                isUser ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { to: `/profile/${this.props.match.params.username}/edit` },
                    'Edit Profile'
                ) : undefined
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-xs-10' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-xs-11' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-xs-3 text-right' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'b',
                                    null,
                                    'Username:'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'b',
                                    null,
                                    'First Name:'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'b',
                                    null,
                                    'Last Name:'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'b',
                                    null,
                                    'Email Address:'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'b',
                                    null,
                                    'Main Charity:'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-xs-6' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                this.state.user.username
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                this.state.user.first_name
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                this.state.user.last_name
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                this.state.user.primary_email
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                null,
                                this.state.user.main_charity
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { onClick: this.playGame, className: 'button block blueberry hover-apple-core padding-16 section right' },
                        'Play Game '
                    )
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* withRouter */])(Profile));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(70);





class Edit extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.changeCharity = this.changeCharity.bind(this);
        this.state = { charities: {} };
    }

    componentDidMount() {
        $.ajax({
            url: "/v1/charities",
            method: 'get'
        }).then(data => {
            this.setState({ charities: data.charities });
        }).fail(err => {
            console.log(err.error);
        });
    }

    onSubmit(ev) {
        ev.preventDefault();
        const first_name = document.getElementById('first_name') !== null ? document.getElementById('first_name').value : '';
        const last_name = document.getElementById('last_name') !== null ? document.getElementById('last_name').value : '';

        const data = {
            first_name: first_name,
            last_name: last_name
        };

        $.ajax({
            url: "/v1/user",
            method: 'put',
            data: data
        }).then(() => {
            this.props.history.push(`/profile/${this.props.match.params.username}`);
        }).fail(err => {
            let errorEl = document.getElementById('errorMsg');
            errorEl.innerHTML = `Error: ${err.error}`;
        });
    }

    changeCharity(ev) {
        ev.preventDefault();
        let charityId = ev.target.id;
        $.ajax({
            url: "/v1/user/charity",
            method: 'put',
            data: { charityId }
        }).then(() => {
            this.props.history.push(`/profile/${this.props.match.params.username}`);
        }).fail(err => {
            let errorEl = document.getElementById('errorMsg');
            errorEl.innerHTML = `Error: ${err.error}`;
        });
    }

    render() {
        let charity_list = this.state.charities.length > 0 ? this.state.charities.map((c, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tr',
            { key: index },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { style: { verticalAlign: 'middle', textAlign: 'center', height: '100px' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: { maxWidth: '60%', minWidth: '30%', maxHeight: '100px' }, src: c.picture })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { style: { verticalAlign: 'middle', height: '100px' } },
                c.charity_name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { style: { verticalAlign: 'middle', height: '100px' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { className: 'button blueberry hover-apple-core right' },
                    'Learn More'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { style: { verticalAlign: 'middle', height: '100px' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { id: c._id, onClick: this.changeCharity, className: 'button apricot hover-apple-core right' },
                    'Select'
                )
            )
        )) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tr',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { style: { verticalAlign: 'middle', height: '100px' } },
                'No charities'
            )
        );
        const isUser = this.props.match.params.username === this.props.user.getUser().username;
        const page_html = isUser ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', style: { margin: 100 } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-xs-2' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-xs-8' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'center-block' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', { id: 'errorMsg', className: 'bg-danger' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'form',
                    { className: 'form-horizontal' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            { className: 'col-sm-2 control-label', htmlFor: 'first_name' },
                            'First Name:'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-10' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'first_name', type: 'text', placeholder: 'First Name' })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            { className: 'col-sm-2 control-label', htmlFor: 'last_name' },
                            'Last Name:'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-10' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control', id: 'last_name', type: 'text', placeholder: 'Last Name' })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-offset-2 col-sm-10' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'button',
                                { onClick: this.onSubmit, className: 'btn btn-default' },
                                'Edit'
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        null,
                        'Change your main charity:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'table',
                        { style: { margin: 'auto' }, className: 'col-xs-12' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'thead',
                            { style: { width: '60%', maxWidth: '600px', margin: 'auto' }, className: 'table-all white text-grey' },
                            charity_list
                        )
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-xs-2' })
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                null,
                'You must be logged in as this user to edit this profile'
            )
        );
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            page_html
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["withRouter"])(Edit));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(271);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(273)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./app.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(272)(false);
// imports


// module
exports.push([module.i, "#loginModalHeader {\r\n    width: 100%;\r\n}\r\n\r\n#loginModalForm {\r\n    width: 100%;\r\n}\r\n\r\n.col-xs-12 {\r\n    float: none;\r\n}", ""]);

// exports


/***/ }),
/* 272 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(274);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 274 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
]),[120]);
//# sourceMappingURL=main.map