'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// simple utils for working with sequences like Array or string

var checkType = function checkType(val, result) {
  return Object.prototype.toString.call(val) === result;
};

var is = exports.is = {
  object: function object(val) {
    return checkType(val, '[object Object]');
  },
  array: function array(val) {
    return Array.isArray(val);
  },
  func: function func(val) {
    return checkType(val, '[object Function]');
  },
  string: function string(val) {
    return checkType(val, '[object String]');
  },
  undefined: function undefined(val) {
    return typeof val === 'undefined';
  }
};

var isSeq = exports.isSeq = function isSeq(seq) {
  return is.string(seq) || is.array(seq);
};
var head = exports.head = function head(seq) {
  return isSeq(seq) ? seq[0] : null;
};
var first = exports.first = head;
var tail = exports.tail = function tail(seq) {
  return isSeq(seq) ? seq.slice(1) : null;
};
var rest = exports.rest = tail;
var last = exports.last = function last(seq) {
  return isSeq(seq) ? seq[seq.length - 1] : null;
};