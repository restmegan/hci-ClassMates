'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _systemImportTransformerGlobalIdentifier = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : {};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AsyncComponent = require('../Common/AsyncComponent');

var _AsyncComponent2 = _interopRequireDefault(_AsyncComponent);

var _Timezone = require('../Timezone');

var _Timezone2 = _interopRequireDefault(_Timezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialPlates = {
  12: (0, _AsyncComponent2.default)(function () {
    return (typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
      _systemImportTransformerGlobalIdentifier.require(['./TwelveHoursMode'], resolve, reject);
    }) : typeof module !== 'undefined' && module.exports && typeof require !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? Promise.resolve(require(('./TwelveHoursMode'))) : Promise.resolve(_systemImportTransformerGlobalIdentifier['./TwelveHoursMode'])).then(function (component) {
      return component.default;
    });
  }),
  24: (0, _AsyncComponent2.default)(function () {
    return (typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
      _systemImportTransformerGlobalIdentifier.require(['./TwentyFourHoursMode'], resolve, reject);
    }) : typeof module !== 'undefined' && module.exports && typeof require !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? Promise.resolve(require(('./TwentyFourHoursMode'))) : Promise.resolve(_systemImportTransformerGlobalIdentifier['./TwentyFourHoursMode'])).then(function (component) {
      return component.default;
    });
  })
};

var MaterialTheme = function MaterialTheme(props) {
  var phrases = props.phrases,
      timeMode = props.timeMode,
      timezone = props.timezone,
      showTimezone = props.showTimezone,
      onTimezoneChange = props.onTimezoneChange,
      timezoneIsEditable = props.timezoneIsEditable;


  var DialPlate = DialPlates[timeMode];
  return _react2.default.createElement(
    'div',
    { className: 'modal_container time_picker_modal_container', id: 'MaterialTheme' },
    _react2.default.createElement(DialPlate, props),
    showTimezone ? _react2.default.createElement(_Timezone2.default, {
      phrases: phrases,
      timezone: timezone,
      timezoneIsEditable: timezoneIsEditable,
      onTimezoneChange: onTimezoneChange
    }) : null
  );
};

exports.default = MaterialTheme;