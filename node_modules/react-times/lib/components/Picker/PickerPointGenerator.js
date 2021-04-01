'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constant = require('../../utils/constant.js');

var _PickerPoint = require('./PickerPoint');

var _PickerPoint2 = _interopRequireDefault(_PickerPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pickerPointGenerator = function pickerPointGenerator() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hour';
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
  return function (_React$PureComponent) {
    _inherits(PickerPointGenerator, _React$PureComponent);

    function PickerPointGenerator() {
      _classCallCheck(this, PickerPointGenerator);

      return _possibleConstructorReturn(this, (PickerPointGenerator.__proto__ || Object.getPrototypeOf(PickerPointGenerator)).apply(this, arguments));
    }

    _createClass(PickerPointGenerator, [{
      key: 'addAnimation',
      value: function addAnimation() {
        this.pickerPointerContainer.className = 'animation';
      }
    }, {
      key: 'removeAnimation',
      value: function removeAnimation() {
        this.pickerPointerContainer.className = '';
      }
    }, {
      key: 'renderMinutePointes',
      value: function renderMinutePointes() {
        var _this2 = this;

        return _constant.MINUTES.map(function (_, index) {
          var angle = 360 * index / 60;
          if (index % 5 === 0) {
            return _react2.default.createElement(_PickerPoint2.default, {
              key: index,
              angle: angle,
              index: index,
              pointerRotate: _this2.props.pointerRotate,
              onClick: _this2.props.handleTimePointerClick
            });
          }
          return null;
        });
      }
    }, {
      key: 'renderHourPointes',
      value: function renderHourPointes() {
        var _this3 = this;

        var hours = parseInt(mode, 10) === 24 ? _constant.HOURS : _constant.TWELVE_HOURS;
        return hours.map(function (_, index) {
          var pointClass = index < 12 ? 'picker_point point_inner' : 'picker_point point_outter';
          var angle = index < 12 ? 360 * index / 12 : 360 * (index - 12) / 12;
          return _react2.default.createElement(_PickerPoint2.default, {
            key: index,
            angle: angle,
            index: index,
            pointClass: pointClass,
            pointerRotate: _this3.props.pointerRotate,
            onClick: _this3.props.handleTimePointerClick
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        return _react2.default.createElement(
          'div',
          {
            ref: function ref(_ref) {
              return _this4.pickerPointerContainer = _ref;
            },
            className: 'picker_pointer_container'
          },
          type === 'hour' ? this.renderHourPointes() : this.renderMinutePointes()
        );
      }
    }]);

    return PickerPointGenerator;
  }(_react2.default.PureComponent);
};

exports.default = pickerPointGenerator;