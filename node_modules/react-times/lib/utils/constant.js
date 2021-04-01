'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getArray = function getArray(length) {
  return new Array(length).join('0').split('');
};

var HOURS = exports.HOURS = getArray(24 + 1);
var TWELVE_HOURS = exports.TWELVE_HOURS = getArray(12 + 1);
var MINUTES = exports.MINUTES = getArray(60 + 1);

var PICKER_WIDTH = 260;
var POINTER_WIDTH = 35;

var PICKER_RADIUS = exports.PICKER_RADIUS = PICKER_WIDTH / 2;
var MAX_ABSOLUTE_POSITION = exports.MAX_ABSOLUTE_POSITION = 125;
var MIN_ABSOLUTE_POSITION = exports.MIN_ABSOLUTE_POSITION = 90;
var POINTER_RADIUS = exports.POINTER_RADIUS = POINTER_WIDTH / 2;

var BROWSER_COMPATIBLE = exports.BROWSER_COMPATIBLE = ['', 'O', 'Moz', 'Ms', 'ms', 'Webkit'];

var MERIDIEMS = exports.MERIDIEMS = ['AM', 'PM'];