'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrapTypeahead = require('react-bootstrap-typeahead');

var _time = require('../../utils/time');

var _time2 = _interopRequireDefault(_time);

var _icons = require('../../utils/icons');

var _icons2 = _interopRequireDefault(_icons);

var _Button = require('../Common/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimezonePicker = function (_React$PureComponent) {
  _inherits(TimezonePicker, _React$PureComponent);

  function TimezonePicker(props) {
    _classCallCheck(this, TimezonePicker);

    var _this = _possibleConstructorReturn(this, (TimezonePicker.__proto__ || Object.getPrototypeOf(TimezonePicker)).call(this, props));

    _this.handleTimezoneChange = _this.handleTimezoneChange.bind(_this);
    return _this;
  }

  _createClass(TimezonePicker, [{
    key: 'handleTimezoneChange',
    value: function handleTimezoneChange(selection) {
      var _props = this.props,
          handleTimezoneChange = _props.handleTimezoneChange,
          onClearFocus = _props.onClearFocus;

      var zoneObject = selection[0];
      if (zoneObject) {
        handleTimezoneChange && handleTimezoneChange(zoneObject);
        onClearFocus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          phrases = _props2.phrases,
          onClearFocus = _props2.onClearFocus;

      return _react2.default.createElement(
        'div',
        { className: 'timezone_picker_modal_container' },
        _react2.default.createElement(
          'div',
          { className: 'timezone_picker_modal_header' },
          _react2.default.createElement(
            'span',
            { onClick: onClearFocus, className: 'icon' },
            _icons2.default.chevronLeft
          ),
          _react2.default.createElement(
            'span',
            { className: 'timezone_picker_header_title' },
            phrases.timezonePickerTitle
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'timezone_picker_container' },
          _react2.default.createElement(
            'div',
            { className: 'timezone_picker_search' },
            _react2.default.createElement(_reactBootstrapTypeahead.Typeahead, {
              onChange: this.handleTimezoneChange,
              labelKey: function labelKey(option) {
                return option.city + ' - ' + option.zoneAbbr;
              },
              options: _time2.default.tzMaps,
              maxResults: 5,
              minLength: 3,
              placeholder: phrases.timezonePickerLabel
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons_wrapper' },
          _react2.default.createElement(
            _Button2.default,
            {
              onClick: onClearFocus,
              className: 'time_picker_button'
            },
            phrases.close
          )
        )
      );
    }
  }]);

  return TimezonePicker;
}(_react2.default.PureComponent);

TimezonePicker.propTypes = {
  phrases: _propTypes2.default.object,
  onClearFocus: _propTypes2.default.func,
  handleTimezoneChange: _propTypes2.default.func
};
TimezonePicker.defaultProps = {
  onClearFocus: Function.prototype,
  handleTimezoneChange: Function.prototype
};

exports.default = TimezonePicker;