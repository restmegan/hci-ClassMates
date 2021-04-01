'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../../utils/constant.js');

var _time = require('../../utils/time');

var _time2 = _interopRequireDefault(_time);

var _Button = require('../Common/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PickerDragHandler = require('../Picker/PickerDragHandler');

var _PickerDragHandler2 = _interopRequireDefault(_PickerDragHandler);

var _PickerPointGenerator = require('../Picker/PickerPointGenerator');

var _PickerPointGenerator2 = _interopRequireDefault(_PickerPointGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TIME = _time2.default.time();

var propTypes = {
  hour: _propTypes2.default.string,
  language: _propTypes2.default.string,
  minute: _propTypes2.default.string,
  draggable: _propTypes2.default.bool,
  meridiem: _propTypes2.default.string,
  phrases: _propTypes2.default.object,
  handleHourChange: _propTypes2.default.func,
  handleMinuteChange: _propTypes2.default.func
};

var defaultProps = {
  hour: TIME.hour12,
  language: 'en',
  minute: TIME.minute,
  draggable: false,
  meridiem: TIME.meridiem,
  handleHourChange: Function.prototype,
  handleMinuteChange: Function.prototype
};

var TwelveHoursMode = function (_React$PureComponent) {
  _inherits(TwelveHoursMode, _React$PureComponent);

  function TwelveHoursMode(props) {
    _classCallCheck(this, TwelveHoursMode);

    var _this = _possibleConstructorReturn(this, (TwelveHoursMode.__proto__ || Object.getPrototypeOf(TwelveHoursMode)).call(this, props));

    var hourPointerRotate = _this.resetHourDegree();
    var minutePointerRotate = _this.resetMinuteDegree();
    _this.state = {
      hourPointerRotate: hourPointerRotate,
      minutePointerRotate: minutePointerRotate
    };

    _this.handleHourChange = _this.handleHourChange.bind(_this);
    _this.handleMinuteChange = _this.handleMinuteChange.bind(_this);
    _this.handleDegreeChange = _this.handleDegreeChange.bind(_this);
    _this.handleMeridiemChange = _this.handleMeridiemChange.bind(_this);
    _this.handleHourPointerClick = _this.handleHourPointerClick.bind(_this);
    _this.handleMinutePointerClick = _this.handleMinutePointerClick.bind(_this);
    return _this;
  }

  _createClass(TwelveHoursMode, [{
    key: 'resetHourDegree',
    value: function resetHourDegree() {
      var hour = parseInt(this.props.hour, 10);
      var pointerRotate = 0;
      _constant.TWELVE_HOURS.forEach(function (h, index) {
        if (hour === index + 1) {
          pointerRotate = 360 * (index + 1) / 12;
        }
      });
      return pointerRotate;
    }
  }, {
    key: 'resetMinuteDegree',
    value: function resetMinuteDegree() {
      var minute = parseInt(this.props.minute, 10);
      var pointerRotate = 0;
      _constant.MINUTES.forEach(function (m, index) {
        if (minute === index) {
          pointerRotate = 360 * index / 60;
        }
      });
      return pointerRotate;
    }
  }, {
    key: 'getHourTopAndHeight',
    value: function getHourTopAndHeight() {
      var height = _constant.MIN_ABSOLUTE_POSITION - _constant.POINTER_RADIUS;
      var top = _constant.PICKER_RADIUS - _constant.MIN_ABSOLUTE_POSITION + _constant.POINTER_RADIUS;
      return [top, height];
    }
  }, {
    key: 'getMinuteTopAndHeight',
    value: function getMinuteTopAndHeight() {
      var height = _constant.MAX_ABSOLUTE_POSITION - _constant.POINTER_RADIUS;
      var top = _constant.PICKER_RADIUS - _constant.MAX_ABSOLUTE_POSITION + _constant.POINTER_RADIUS;
      return [top, height];
    }
  }, {
    key: 'handleMeridiemChange',
    value: function handleMeridiemChange() {
      var _props = this.props,
          meridiem = _props.meridiem,
          phrases = _props.phrases;

      var newMeridiem = meridiem === 'AM' || meridiem === phrases.am ? phrases.pm : phrases.am;
      if (newMeridiem !== meridiem) {
        var handleMeridiemChange = this.props.handleMeridiemChange;

        handleMeridiemChange && handleMeridiemChange(newMeridiem);
      }
    }
  }, {
    key: 'handleHourPointerClick',
    value: function handleHourPointerClick(options) {
      var time = options.time,
          _options$pointerRotat = options.pointerRotate,
          pointerRotate = _options$pointerRotat === undefined ? null : _options$pointerRotat;

      this.handleHourChange(time);
      pointerRotate !== null && this.handleDegreeChange({ hourPointerRotate: pointerRotate });
    }
  }, {
    key: 'handleMinutePointerClick',
    value: function handleMinutePointerClick(options) {
      var time = options.time,
          _options$pointerRotat2 = options.pointerRotate,
          pointerRotate = _options$pointerRotat2 === undefined ? null : _options$pointerRotat2;

      this.handleMinuteChange(time);
      pointerRotate !== null && this.handleDegreeChange({ minutePointerRotate: pointerRotate });
    }
  }, {
    key: 'handleDegreeChange',
    value: function handleDegreeChange(pointerRotate) {
      this.setState(pointerRotate);
    }
  }, {
    key: 'handleHourChange',
    value: function handleHourChange(time) {
      var hour = parseInt(time, 10);
      var handleHourChange = this.props.handleHourChange;

      handleHourChange && handleHourChange(hour);
    }
  }, {
    key: 'handleMinuteChange',
    value: function handleMinuteChange(time) {
      var minute = parseInt(time, 10);
      var handleMinuteChange = this.props.handleMinuteChange;

      handleMinuteChange && handleMinuteChange(minute);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          hour = _props2.hour,
          minute = _props2.minute,
          phrases = _props2.phrases,
          timeMode = _props2.timeMode,
          meridiem = _props2.meridiem,
          draggable = _props2.draggable,
          clearFocus = _props2.clearFocus,
          limitDrag = _props2.limitDrag,
          minuteStep = _props2.minuteStep,
          showTimezone = _props2.showTimezone;
      var _state = this.state,
          hourPointerRotate = _state.hourPointerRotate,
          minutePointerRotate = _state.minutePointerRotate;

      var _getHourTopAndHeight = this.getHourTopAndHeight(),
          _getHourTopAndHeight2 = _slicedToArray(_getHourTopAndHeight, 2),
          top = _getHourTopAndHeight2[0],
          height = _getHourTopAndHeight2[1];

      var hourRotateState = {
        top: top,
        height: height,
        pointerRotate: hourPointerRotate
      };

      var _getMinuteTopAndHeigh = this.getMinuteTopAndHeight(),
          _getMinuteTopAndHeigh2 = _slicedToArray(_getMinuteTopAndHeigh, 2),
          minuteTop = _getMinuteTopAndHeigh2[0],
          minuteHeight = _getMinuteTopAndHeigh2[1];

      var minuteRotateState = {
        top: minuteTop,
        height: minuteHeight,
        pointerRotate: minutePointerRotate
      };

      var HourPickerPointGenerator = (0, _PickerPointGenerator2.default)('hour', 12);
      var MinutePickerPointGenerator = (0, _PickerPointGenerator2.default)('minute', 12);

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: 'time_picker_modal_header' },
          _react2.default.createElement(
            'span',
            { className: 'time_picker_header active' },
            hour,
            ':',
            minute
          ),
          '\xA0',
          _react2.default.createElement(
            'span',
            {
              onClick: this.handleMeridiemChange,
              className: 'time_picker_header meridiem'
            },
            meridiem
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'picker_container' },
          _react2.default.createElement(HourPickerPointGenerator, {
            handleTimePointerClick: this.handleHourPointerClick,
            pointerRotate: hourPointerRotate
          }),
          _react2.default.createElement(MinutePickerPointGenerator, {
            handleTimePointerClick: this.handleMinutePointerClick,
            pointerRotate: minutePointerRotate
          }),
          _react2.default.createElement(_PickerDragHandler2.default, {
            step: 1,
            timeMode: timeMode,
            limitDrag: limitDrag,
            minuteStep: minuteStep,
            rotateState: minuteRotateState,
            time: parseInt(minute, 10),
            minLength: _constant.MAX_ABSOLUTE_POSITION,
            draggable: draggable,
            handleTimePointerClick: this.handleMinutePointerClick
          }),
          _react2.default.createElement(_PickerDragHandler2.default, {
            step: 0,
            timeMode: timeMode,
            limitDrag: limitDrag,
            minuteStep: minuteStep,
            rotateState: hourRotateState,
            time: parseInt(hour, 10),
            maxLength: _constant.MIN_ABSOLUTE_POSITION,
            draggable: draggable,
            handleTimePointerClick: this.handleHourPointerClick
          })
        ),
        !showTimezone ? _react2.default.createElement(
          'div',
          { className: 'buttons_wrapper' },
          _react2.default.createElement(
            _Button2.default,
            {
              onClick: clearFocus,
              className: 'time_picker_button'
            },
            phrases.close
          )
        ) : null
      );
    }
  }]);

  return TwelveHoursMode;
}(_react2.default.PureComponent);

TwelveHoursMode.propTypes = propTypes;
TwelveHoursMode.defaultProps = defaultProps;

exports.default = TwelveHoursMode;