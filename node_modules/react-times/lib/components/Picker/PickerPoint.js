'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _drag = require('../../utils/drag');

var _drag2 = _interopRequireDefault(_drag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  index: _propTypes2.default.number,
  angle: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  pointClass: _propTypes2.default.string
};

var defaultProps = {
  index: 0,
  angle: 0,
  onClick: Function.prototype,
  pointClass: 'picker_point point_outter'
};

var PickerPoint = function PickerPoint(props) {
  var index = props.index,
      angle = props.angle,
      _onClick = props.onClick,
      pointClass = props.pointClass,
      pointerRotate = props.pointerRotate;

  var inlineStyle = _drag2.default.inlineRotateStyle(angle);
  var wrapperStyle = _drag2.default.rotateStyle(-angle);

  return _react2.default.createElement(
    'div',
    {
      style: inlineStyle,
      className: pointClass,
      onClick: function onClick() {
        var relativeRotate = angle - pointerRotate % 360;
        if (relativeRotate >= 180) {
          relativeRotate -= 360;
        } else if (relativeRotate < -180) {
          relativeRotate += 360;
        }
        _onClick && _onClick({
          time: index,
          pointerRotate: relativeRotate + pointerRotate
        });
      },
      onMouseDown: _drag2.default.disableMouseDown
    },
    _react2.default.createElement(
      'div',
      { className: 'point_wrapper', style: wrapperStyle },
      index
    )
  );
};

PickerPoint.propTypes = propTypes;
PickerPoint.defaultProps = defaultProps;

exports.default = PickerPoint;