'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _systemImportTransformerGlobalIdentifier = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : {};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _OutsideClickHandler = require('./OutsideClickHandler');

var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

var _Button = require('./Common/Button');

var _Button2 = _interopRequireDefault(_Button);

var _time = require('../utils/time.js');

var _time2 = _interopRequireDefault(_time);

var _language = require('../utils/language');

var _language2 = _interopRequireDefault(_language);

var _icons = require('../utils/icons');

var _icons2 = _interopRequireDefault(_icons);

var _func = require('../utils/func');

var _AsyncComponent = require('./Common/AsyncComponent');

var _AsyncComponent2 = _interopRequireDefault(_AsyncComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialPlates = {
  material: (0, _AsyncComponent2.default)(function () {
    return (typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
      _systemImportTransformerGlobalIdentifier.require(['./MaterialTheme'], resolve, reject);
    }) : typeof module !== 'undefined' && module.exports && typeof require !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? Promise.resolve(require(('./MaterialTheme'))) : Promise.resolve(_systemImportTransformerGlobalIdentifier['./MaterialTheme'])).then(function (component) {
      return component.default;
    });
  }),
  classic: (0, _AsyncComponent2.default)(function () {
    return (typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
      _systemImportTransformerGlobalIdentifier.require(['./ClassicTheme'], resolve, reject);
    }) : typeof module !== 'undefined' && module.exports && typeof require !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? Promise.resolve(require(('./ClassicTheme'))) : Promise.resolve(_systemImportTransformerGlobalIdentifier['./ClassicTheme'])).then(function (component) {
      return component.default;
    });
  })
};

// aliases for defaultProps readability
var TIME = _time2.default.time({ useTz: false });
TIME.current = _time2.default.current();

var propTypes = {
  autoMode: _propTypes2.default.bool,
  autoClose: _propTypes2.default.bool,
  colorPalette: _propTypes2.default.string,
  draggable: _propTypes2.default.bool,
  focused: _propTypes2.default.bool,
  language: _propTypes2.default.string,
  meridiem: _propTypes2.default.string,
  onFocusChange: _propTypes2.default.func,
  onTimeChange: _propTypes2.default.func,
  onTimezoneChange: _propTypes2.default.func,
  phrases: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  showTimezone: _propTypes2.default.bool,
  theme: _propTypes2.default.string,
  time: _propTypes2.default.string,
  timeMode: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  timezone: _propTypes2.default.string,
  timezoneIsEditable: _propTypes2.default.bool,
  trigger: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object, _propTypes2.default.element, _propTypes2.default.array, _propTypes2.default.node, _propTypes2.default.instanceOf(_react2.default.Component), _propTypes2.default.instanceOf(_react2.default.PureComponent)]),
  withoutIcon: _propTypes2.default.bool,
  minuteStep: _propTypes2.default.number,
  limitDrag: _propTypes2.default.bool,
  timeFormat: _propTypes2.default.string,
  timeFormatter: _propTypes2.default.func,
  useTz: _propTypes2.default.bool,
  closeOnOutsideClick: _propTypes2.default.bool,
  timeConfig: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  focusDropdownOnTime: _propTypes2.default.bool
};

var defaultProps = {
  autoMode: true,
  autoClose: true,
  colorPalette: 'light',
  draggable: true,
  focused: false,
  language: 'en',
  meridiem: TIME.meridiem,
  onFocusChange: Function.prototype,
  onTimeChange: Function.prototype,
  onTimezoneChange: Function.prototype,
  placeholder: '',
  showTimezone: false,
  theme: 'material',
  time: '',
  timeMode: TIME.mode,
  trigger: null,
  withoutIcon: false,
  minuteStep: 5,
  limitDrag: false,
  timeFormat: '',
  timeFormatter: null,
  useTz: true,
  closeOnOutsideClick: true,
  timeConfig: {
    step: 30,
    unit: 'minutes'
  },
  disabled: false,
  focusDropdownOnTime: true
};

var TimePicker = function (_React$PureComponent) {
  _inherits(TimePicker, _React$PureComponent);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

    var focused = props.focused,
        timezone = props.timezone,
        onTimezoneChange = props.onTimezoneChange;

    var timeData = _this.timeData(false);
    var timezoneData = _time2.default.tzForName(timeData.timezone);

    _this.state = {
      focused: focused,
      timezoneData: timezoneData,
      timeChanged: false
    };

    _this.onBlur = _this.onBlur.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.timeData = _this.timeData.bind(_this);
    _this.handleTimeChange = _this.handleTimeChange.bind(_this);
    _this.handleHourChange = _this.handleHourChange.bind(_this);
    _this.handleMinuteChange = _this.handleMinuteChange.bind(_this);
    _this.handleMeridiemChange = _this.handleMeridiemChange.bind(_this);
    _this.handleHourAndMinuteChange = _this.handleHourAndMinuteChange.bind(_this);

    // if a timezone value was not passed in,
    // call the callback with the default value used for timezone
    if (!timezone) {
      onTimezoneChange(timezoneData);
    }
    return _this;
  }

  _createClass(TimePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var focused = nextProps.focused;

      if (focused !== this.props.focused) {
        this.setState({ focused: focused });
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      var focused = this.state.focused;

      if (!focused) {
        this.onFocusChange(!focused);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var focused = this.state.focused;

      if (focused) {
        this.onFocusChange(!focused);
      }
    }
  }, {
    key: 'onFocusChange',
    value: function onFocusChange(focused) {
      var disabled = this.props.disabled;

      if (disabled) return;

      this.setState({ focused: focused });
      var onFocusChange = this.props.onFocusChange;

      onFocusChange && onFocusChange(focused);
    }
  }, {
    key: 'timeData',
    value: function timeData(timeChanged) {
      var _props = this.props,
          time = _props.time,
          useTz = _props.useTz,
          timeMode = _props.timeMode,
          timezone = _props.timezone,
          meridiem = _props.meridiem;

      var timeData = _time2.default.time({
        time: time,
        meridiem: meridiem,
        timeMode: timeMode,
        tz: timezone,
        useTz: !time && !timeChanged && useTz
      });
      return timeData;
    }
  }, {
    key: 'onTimeChanged',
    value: function onTimeChanged(timeChanged) {
      this.setState({ timeChanged: timeChanged });
    }
  }, {
    key: 'handleHourChange',
    value: function handleHourChange(hour) {
      var validateHour = _time2.default.validate(hour);
      var minute = this.hourAndMinute[1];
      this.handleTimeChange({
        hour: validateHour,
        minute: minute,
        meridiem: this.meridiem
      });
    }
  }, {
    key: 'handleMinuteChange',
    value: function handleMinuteChange(minute) {
      var validateMinute = _time2.default.validate(minute);
      var hour = this.hourAndMinute[0];

      this.handleTimeChange({
        hour: hour,
        minute: validateMinute,
        meridiem: this.meridiem
      });
    }
  }, {
    key: 'handleMeridiemChange',
    value: function handleMeridiemChange(meridiem) {
      var _hourAndMinute = _slicedToArray(this.hourAndMinute, 2),
          hour = _hourAndMinute[0],
          minute = _hourAndMinute[1];

      this.handleTimeChange({
        hour: hour,
        minute: minute,
        meridiem: meridiem
      });
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(options) {
      var onTimeChange = this.props.onTimeChange;

      onTimeChange && onTimeChange(options);
      this.onTimeChanged(true);
    }
  }, {
    key: 'handleHourAndMinuteChange',
    value: function handleHourAndMinuteChange(time) {
      this.onTimeChanged(true);
      var _props2 = this.props,
          onTimeChange = _props2.onTimeChange,
          autoClose = _props2.autoClose;

      if (autoClose) this.onBlur();
      return onTimeChange && onTimeChange(time);
    }
  }, {
    key: 'renderDialPlate',
    value: function renderDialPlate() {
      var _props3 = this.props,
          theme = _props3.theme,
          disabled = _props3.disabled,
          timeMode = _props3.timeMode,
          autoMode = _props3.autoMode,
          autoClose = _props3.autoClose,
          draggable = _props3.draggable,
          language = _props3.language,
          limitDrag = _props3.limitDrag,
          minuteStep = _props3.minuteStep,
          timeConfig = _props3.timeConfig,
          colorPalette = _props3.colorPalette,
          showTimezone = _props3.showTimezone,
          onTimezoneChange = _props3.onTimezoneChange,
          timezoneIsEditable = _props3.timezoneIsEditable,
          focusDropdownOnTime = _props3.focusDropdownOnTime;


      if (disabled) return null;

      var dialTheme = theme === 'material' ? theme : 'classic';
      var DialPlate = DialPlates[dialTheme];

      var timezoneData = this.state.timezoneData;

      var _hourAndMinute2 = _slicedToArray(this.hourAndMinute, 2),
          hour = _hourAndMinute2[0],
          minute = _hourAndMinute2[1];

      return _react2.default.createElement(DialPlate, {
        hour: hour,
        minute: minute,
        autoMode: autoMode,
        autoClose: autoClose,
        language: language,
        draggable: draggable,
        limitDrag: limitDrag,
        timezone: timezoneData,
        meridiem: this.meridiem,
        timeConfig: timeConfig,
        showTimezone: showTimezone,
        phrases: this.languageData,
        colorPalette: colorPalette,
        clearFocus: this.onBlur,
        timeMode: parseInt(timeMode, 10),
        onTimezoneChange: onTimezoneChange,
        minuteStep: parseInt(minuteStep, 10),
        timezoneIsEditable: timezoneIsEditable,
        handleHourChange: this.handleHourChange,
        handleTimeChange: this.handleTimeChange,
        handleMinuteChange: this.handleMinuteChange,
        handleMeridiemChange: this.handleMeridiemChange,
        focusDropdownOnTime: focusDropdownOnTime
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          trigger = _props4.trigger,
          disabled = _props4.disabled,
          placeholder = _props4.placeholder,
          withoutIcon = _props4.withoutIcon,
          colorPalette = _props4.colorPalette,
          closeOnOutsideClick = _props4.closeOnOutsideClick;
      var focused = this.state.focused;

      var times = this.formattedTime;

      var pickerPreviewClass = (0, _classnames2.default)('time_picker_preview', focused && 'active', disabled && 'disabled');
      var containerClass = (0, _classnames2.default)('time_picker_container', colorPalette === 'dark' && 'dark');
      var previewContainerClass = (0, _classnames2.default)('preview_container', withoutIcon && 'without_icon');

      return _react2.default.createElement(
        'div',
        { className: containerClass },
        trigger || _react2.default.createElement(
          _Button2.default,
          {
            onClick: this.onFocus,
            className: pickerPreviewClass
          },
          _react2.default.createElement(
            'div',
            { className: previewContainerClass },
            withoutIcon ? '' : _icons2.default.time,
            placeholder || times
          )
        ),
        _react2.default.createElement(
          _OutsideClickHandler2.default,
          {
            focused: focused,
            onOutsideClick: this.onBlur,
            closeOnOutsideClick: disabled ? false : closeOnOutsideClick
          },
          this.renderDialPlate()
        )
      );
    }
  }, {
    key: 'languageData',
    get: function get() {
      var _props5 = this.props,
          language = _props5.language,
          _props5$phrases = _props5.phrases,
          phrases = _props5$phrases === undefined ? {} : _props5$phrases;

      return Object.assign({}, _language2.default.get(language), phrases);
    }
  }, {
    key: 'hourAndMinute',
    get: function get() {
      var timeMode = this.props.timeMode;

      var timeData = this.timeData(this.state.timeChanged);
      // Since someone might pass a time in 24h format, etc., we need to get it from
      // timeData to 'translate' it into the local format, including its accurate meridiem
      var hour = parseInt(timeMode, 10) === 12 ? parseInt(timeData.hour12, 10) === 12 ? '00' : timeData.hour12 : parseInt(timeData.hour24, 10) === 24 ? '00' : timeData.hour24;
      var minute = timeData.minute;
      return [hour, minute];
    }
  }, {
    key: 'formattedTime',
    get: function get() {
      var _props6 = this.props,
          timeMode = _props6.timeMode,
          timeFormat = _props6.timeFormat,
          timeFormatter = _props6.timeFormatter;

      var _hourAndMinute3 = _slicedToArray(this.hourAndMinute, 2),
          hour = _hourAndMinute3[0],
          minute = _hourAndMinute3[1];

      var validTimeMode = _time2.default.validateTimeMode(timeMode);

      var times = '';
      if (timeFormatter && _func.is.func(timeFormatter)) {
        times = timeFormatter({
          hour: hour,
          minute: minute,
          meridiem: this.meridiem
        });
      } else if (timeFormat && _func.is.string(timeFormat)) {
        times = timeFormat;
        if (/HH?/.test(times) || /MM?/.test(times)) {
          if (validTimeMode === 12) {
            console.warn('It seems you are using 12 hours mode with 24 hours time format. Please check your timeMode and timeFormat props');
          }
        } else if (/hh?/.test(times) || /mm?/.test(times)) {
          if (validTimeMode === 24) {
            console.warn('It seems you are using 24 hours mode with 12 hours time format. Please check your timeMode and timeFormat props');
          }
        }
        times = times.replace(/(HH|hh)/g, hour);
        times = times.replace(/(MM|mm)/g, minute);
        times = times.replace(/(H|h)/g, Number(hour));
        times = times.replace(/(M|m)/g, Number(minute));
      } else {
        times = validTimeMode === 12 ? hour + ' : ' + minute + ' ' + this.meridiem : hour + ' : ' + minute;
      }
      return times;
    }
  }, {
    key: 'meridiem',
    get: function get() {
      var meridiem = this.props.meridiem;

      var timeData = this.timeData(this.state.timeChanged);
      var localMessages = this.languageData;
      // eslint-disable-next-line no-unneeded-ternary
      var m = meridiem ? meridiem : timeData.meridiem;
      // eslint-disable-next-line no-extra-boolean-cast
      return m && !!m.match(/^am|pm/i) ? localMessages[m.toLowerCase()] : m;
    }
  }]);

  return TimePicker;
}(_react2.default.PureComponent);

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

exports.default = TimePicker;