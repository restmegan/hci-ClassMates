'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _time = require('../../utils/time');

var _time2 = _interopRequireDefault(_time);

var _TimezonePicker = require('./TimezonePicker');

var _TimezonePicker2 = _interopRequireDefault(_TimezonePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TIME = _time2.default.time();
TIME.tz = _time2.default.guessUserTz();

var Timezone = function (_React$PureComponent) {
  _inherits(Timezone, _React$PureComponent);

  function Timezone(props) {
    _classCallCheck(this, Timezone);

    var _this = _possibleConstructorReturn(this, (Timezone.__proto__ || Object.getPrototypeOf(Timezone)).call(this, props));

    var timezone = _this.props.timezone;


    _this.state = {
      focused: false,
      timezone: timezone
    };

    _this.onClearFocus = _this.onClearFocus.bind(_this);
    _this.handleFocusedChange = _this.handleFocusedChange.bind(_this);
    _this.handleTimezoneChange = _this.handleTimezoneChange.bind(_this);
    return _this;
  }

  _createClass(Timezone, [{
    key: 'onClearFocus',
    value: function onClearFocus() {
      this.setState({ focused: false });
    }
  }, {
    key: 'handleFocusedChange',
    value: function handleFocusedChange() {
      if (!this.props.timezoneIsEditable) return;

      var focused = this.state.focused;

      this.setState({ focused: !focused });
    }
  }, {
    key: 'handleTimezoneChange',
    value: function handleTimezoneChange(timezone) {
      this.setState({ timezone: timezone });
      var onTimezoneChange = this.props.onTimezoneChange;

      onTimezoneChange && onTimezoneChange(timezone);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          focused = _state.focused,
          timezone = _state.timezone;
      var _props = this.props,
          phrases = _props.phrases,
          timezoneIsEditable = _props.timezoneIsEditable;

      var footerClass = timezoneIsEditable ? 'time_picker_modal_footer clickable' : 'time_picker_modal_footer';

      var timeZonePicker = function timeZonePicker() {
        if (!timezoneIsEditable || !focused) return '';

        return _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          {
            classNames: 'timezone_picker_modal_container',
            timeout: { enter: 200, exit: 200 } },
          _react2.default.createElement(_TimezonePicker2.default, {
            key: 'timezonePicker',
            phrases: phrases,
            onClearFocus: _this2.onClearFocus,
            handleTimezoneChange: _this2.handleTimezoneChange
          })
        );
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: footerClass, onClick: this.handleFocusedChange },
          _react2.default.createElement(
            'span',
            { className: 'time_picker_modal_footer_timezone' },
            timezone.zoneName,
            ' ',
            timezone.zoneAbbr
          )
        ),
        _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          null,
          timeZonePicker()
        )
      );
    }
  }]);

  return Timezone;
}(_react2.default.PureComponent);

Timezone.propTypes = {
  phrases: _propTypes2.default.object,
  timezone: _propTypes2.default.shape({
    city: _propTypes2.default.string,
    zoneAbbr: _propTypes2.default.string,
    zoneName: _propTypes2.default.string
  }),
  timezoneIsEditable: _propTypes2.default.bool,
  onTimezoneChange: _propTypes2.default.func
};
Timezone.defaultProps = {
  timezone: TIME.tz,
  timezoneIsEditable: false,
  onTimezoneChange: Function.prototype
};

exports.default = Timezone;