'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constant = require('./constant');

var getScrollPosition = function getScrollPosition() {
  var position = {
    x: document.documentElement.scrollLeft || document.body.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body.scrollTop || 0
  };
  return position;
};

var mousePosition = function mousePosition(e) {
  var event = e || window.event;
  var xPos = void 0;
  var scrollPosition = getScrollPosition();

  if (event.pageX) {
    xPos = event.pageX;
  } else if (event.clientX + scrollPosition.x - document.body.clientLeft) {
    xPos = event.clientX + scrollPosition.x - document.body.clientLeft;
  } else if (event.touches[0]) {
    xPos = event.touches[0].clientX;
  } else {
    xPos = event.changedTouches[0].clientX;
  }
  var yPos = void 0;
  if (event.pageY) {
    yPos = event.pageY;
  } else if (event.clientY + scrollPosition.y - document.body.clientTop) {
    yPos = event.clientY + scrollPosition.y - document.body.clientTop;
  } else if (event.touches[0]) {
    yPos = event.touches[0].clientY;
  } else {
    yPos = event.changedTouches[0].clientY;
  }
  return {
    x: xPos,
    y: yPos
  };
};

var disableMouseDown = function disableMouseDown(e) {
  var event = e || window.event;
  event.preventDefault();
  event.stopPropagation();
};

var browserStyles = function browserStyles(type, style) {
  return _constant.BROWSER_COMPATIBLE.reduce(function (dict, browser) {
    var key = browser ? '' + browser + type[0].toUpperCase() + type.slice(1) : type;
    dict[key] = style;
    return dict;
  }, {});
};

var getRotateStyle = function getRotateStyle(degree) {
  return browserStyles('transform', 'rotate(' + degree + 'deg)');
};

var getInlineRotateStyle = function getInlineRotateStyle(degree) {
  return browserStyles('transform', 'translateX(-50%) rotate(' + degree + 'deg)');
};

var getInitialPointerStyle = function getInitialPointerStyle(height, top, degree) {
  return Object.assign({
    height: height + 'px',
    top: top + 'px'
  }, browserStyles('transform', 'translateX(-50%) rotate(' + degree + 'deg)'));
};

var getStandardAbsolutePosition = function getStandardAbsolutePosition(position, minPosition, maxPosition) {
  var p = position;
  if (p < minPosition) {
    p = minPosition;
  }
  if (p > maxPosition) {
    p = maxPosition;
  }
  return p;
};

var degree2Radian = function degree2Radian(degree) {
  return degree * (2 * Math.PI) / 360;
};

exports.default = {
  degree2Radian: degree2Radian,
  mousePosition: mousePosition,
  disableMouseDown: disableMouseDown,
  rotateStyle: getRotateStyle,
  inlineRotateStyle: getInlineRotateStyle,
  initialPointerStyle: getInitialPointerStyle,
  validatePosition: getStandardAbsolutePosition
};