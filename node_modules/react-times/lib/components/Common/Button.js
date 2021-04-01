'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.state = {
      pressed: false
    };

    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'onMouseDown',
    value: function onMouseDown() {
      this.setState({ pressed: true });
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp() {
      this.setState({ pressed: false });
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      var onMouseEnter = this.props.onMouseEnter;

      onMouseEnter && onMouseEnter();
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      this.onMouseUp();
      var onMouseLeave = this.props.onMouseLeave;

      onMouseLeave && onMouseLeave();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          children = _props.children,
          className = _props.className;
      var pressed = this.state.pressed;


      var buttonClass = (0, _classnames2.default)('react_times_button', pressed && 'pressDown', className);

      return _react2.default.createElement(
        'div',
        {
          onClick: onClick,
          className: buttonClass,
          onMouseUp: this.onMouseUp,
          onMouseOut: this.onMouseUp,
          onMouseDown: this.onMouseDown,
          onMouseLeave: this.onMouseLeave,
          onMouseEnter: this.onMouseEnter
        },
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          children
        )
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  text: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.array, _propTypes2.default.string]),
  className: _propTypes2.default.string
};

Button.defaultProps = {
  text: 'button',
  onClick: Function.prototype,
  children: null,
  className: ''
};

exports.default = Button;