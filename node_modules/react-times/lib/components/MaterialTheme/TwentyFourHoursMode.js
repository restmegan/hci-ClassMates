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

var _PickerDragHandler = require('../Picker/PickerDragHandler');

var _PickerDragHandler2 = _interopRequireDefault(_PickerDragHandler);

var _PickerPointGenerator = require('../Picker/PickerPointGenerator');

var _PickerPointGenerator2 = _interopRequireDefault(_PickerPointGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  step: _propTypes2.default.number,
  hour: _propTypes2.default.string,
  autoMode: _propTypes2.default.bool,
  minute: _propTypes2.default.string,
  handleHourChange: _propTypes2.default.func,
  handleMinuteChange: _propTypes2.default.func,
  clearFocus: _propTypes2.default.func
};

var defaultProps = {
  step: 0,
  hour: '00',
  minute: '00',
  autoMode: true,
  clearFocus: Function.prototype,
  handleHourChange: Function.prototype,
  handleMinuteChange: Function.prototype
};

var TwentyFourHoursMode = function (_React$PureComponent) {
  _inherits(TwentyFourHoursMode, _React$PureComponent);

  function TwentyFourHoursMode(props) {
    _classCallCheck(this, TwentyFourHoursMode);

    var _this = _possibleConstructorReturn(this, (TwentyFourHoursMode.__proto__ || Object.getPrototypeOf(TwentyFourHoursMode)).call(this, props));

    var pointerRotate = _this.resetHourDegree();
    var step = props.step;

    _this.state = {
      step: step,
      pointerRotate: pointerRotate
    };
    _this.handleStepChange = _this.handleStepChange.bind(_this);
    _this.handleTimeChange = _this.handleTimeChange.bind(_this);
    _this.handleTimePointerClick = _this.handleTimePointerClick.bind(_this);
    return _this;
  }

  _createClass(TwentyFourHoursMode, [{
    key: 'handleStepChange',
    value: function handleStepChange(step) {
      var _this2 = this;

      var stateStep = this.state.step;
      if (stateStep !== step) {
        this.pickerPointerContainer && this.pickerPointerContainer.addAnimation();
        setTimeout(function () {
          _this2.pickerPointerContainer && _this2.pickerPointerContainer.removeAnimation();
          _this2.setStep(step);
        }, 300);
      }
    }
  }, {
    key: 'setStep',
    value: function setStep(step) {
      var pointerRotate = step === 0 ? this.resetHourDegree() : this.resetMinuteDegree();
      this.setState({
        step: step,
        pointerRotate: pointerRotate
      });
    }
  }, {
    key: 'clearFocus',
    value: function clearFocus() {
      var _props = this.props,
          autoClose = _props.autoClose,
          clearFocus = _props.clearFocus;

      autoClose && clearFocus && clearFocus();
    }
  }, {
    key: 'handleTimePointerClick',
    value: function handleTimePointerClick(options) {
      var time = options.time,
          _options$autoMode = options.autoMode,
          autoMode = _options$autoMode === undefined ? null : _options$autoMode,
          _options$pointerRotat = options.pointerRotate,
          pointerRotate = _options$pointerRotat === undefined ? null : _options$pointerRotat;


      var isInteger = function isInteger(num) {
        return (num ^ 0) === +num;
      };
      if (Number.isInteger) {
        Number.isInteger(pointerRotate) && this.setState({ pointerRotate: pointerRotate });
      } else {
        isInteger(pointerRotate) && this.setState({ pointerRotate: pointerRotate });
      }
      this.handleTimeChange(time, autoMode);
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(time) {
      var autoMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var validateTime = parseInt(time, 10);
      var step = this.state.step;

      var auto = autoMode === null ? this.props.autoMode : autoMode;

      var _props2 = this.props,
          handleHourChange = _props2.handleHourChange,
          handleMinuteChange = _props2.handleMinuteChange;


      if (step === 0) {
        handleHourChange && handleHourChange(validateTime);
      } else {
        handleMinuteChange && handleMinuteChange(validateTime);
      }
      if (!auto) return;

      if (step === 0) {
        this.handleStepChange(1);
      } else {
        this.clearFocus();
        this.setStep(0);
      }
    }
  }, {
    key: 'resetHourDegree',
    value: function resetHourDegree() {
      var hour = parseInt(this.props.hour, 10);
      var pointerRotate = 0;
      _constant.HOURS.forEach(function (h, index) {
        if (hour === index + 1) {
          pointerRotate = index < 12 ? 360 * (index + 1) / 12 : 360 * (index + 1 - 12) / 12;
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
    key: 'getTopAndHeight',
    value: function getTopAndHeight() {
      var step = this.state.step;
      var _props3 = this.props,
          hour = _props3.hour,
          minute = _props3.minute;

      var time = step === 0 ? hour : minute;
      var splitNum = step === 0 ? 12 : 60;
      var minLength = step === 0 ? _constant.MIN_ABSOLUTE_POSITION : _constant.MAX_ABSOLUTE_POSITION;
      var height = time < splitNum ? minLength - _constant.POINTER_RADIUS : _constant.MAX_ABSOLUTE_POSITION - _constant.POINTER_RADIUS;
      var top = time < splitNum ? _constant.PICKER_RADIUS - minLength + _constant.POINTER_RADIUS : _constant.PICKER_RADIUS - _constant.MAX_ABSOLUTE_POSITION + _constant.POINTER_RADIUS;
      return [top, height];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props4 = this.props,
          hour = _props4.hour,
          minute = _props4.minute,
          timeMode = _props4.timeMode,
          draggable = _props4.draggable,
          limitDrag = _props4.limitDrag,
          minuteStep = _props4.minuteStep;
      var _state = this.state,
          step = _state.step,
          pointerRotate = _state.pointerRotate;


      var activeHourClass = step === 0 ? 'time_picker_header active' : 'time_picker_header';
      var activeMinuteClass = step === 1 ? 'time_picker_header active' : 'time_picker_header';

      var _getTopAndHeight = this.getTopAndHeight(),
          _getTopAndHeight2 = _slicedToArray(_getTopAndHeight, 2),
          top = _getTopAndHeight2[0],
          height = _getTopAndHeight2[1];

      var rotateState = {
        top: top,
        height: height,
        pointerRotate: pointerRotate
      };
      var type = step === 0 ? 'hour' : 'minute';
      var PickerPointGenerator = (0, _PickerPointGenerator2.default)(type);

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: 'time_picker_modal_header' },
          _react2.default.createElement(
            'span',
            {
              className: activeHourClass,
              onClick: function onClick() {
                return _this3.handleStepChange(0);
              }
            },
            hour
          ),
          _react2.default.createElement(
            'span',
            { className: 'time_picker_header_delivery' },
            ':'
          ),
          _react2.default.createElement(
            'span',
            {
              className: activeMinuteClass,
              onClick: function onClick() {
                return _this3.handleStepChange(1);
              }
            },
            minute
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'picker_container' },
          _react2.default.createElement(PickerPointGenerator, {
            ref: function ref(_ref) {
              return _this3.pickerPointerContainer = _ref;
            },
            handleTimePointerClick: this.handleTimePointerClick,
            pointerRotate: pointerRotate
          }),
          _react2.default.createElement(_PickerDragHandler2.default, {
            step: step,
            timeMode: timeMode,
            limitDrag: limitDrag,
            minuteStep: minuteStep,
            draggable: draggable,
            rotateState: rotateState,
            time: step === 0 ? parseInt(hour, 10) : parseInt(minute, 10),
            minLength: step === 0 ? _constant.MIN_ABSOLUTE_POSITION : _constant.MAX_ABSOLUTE_POSITION,
            handleTimePointerClick: this.handleTimePointerClick
          })
        )
      );
    }
  }]);

  return TwentyFourHoursMode;
}(_react2.default.PureComponent);

TwentyFourHoursMode.propTypes = propTypes;
TwentyFourHoursMode.defaultProps = defaultProps;

exports.default = TwentyFourHoursMode;