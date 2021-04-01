'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../../utils/constant.js');

var _drag = require('../../utils/drag');

var _drag2 = _interopRequireDefault(_drag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  time: _propTypes2.default.number,
  step: _propTypes2.default.number,
  draggable: _propTypes2.default.bool,
  pointerRotate: _propTypes2.default.number,
  minLength: _propTypes2.default.number,
  maxLength: _propTypes2.default.number,
  minuteStep: _propTypes2.default.number,
  limitDrag: _propTypes2.default.bool,
  rotateState: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    height: _propTypes2.default.number,
    pointerRotate: _propTypes2.default.number
  }),
  handleTimePointerClick: _propTypes2.default.func
};

var defaultProps = {
  time: 0,
  step: 0,
  pointerRotate: 0,
  rotateState: {
    top: 0,
    height: 0,
    pointerRotate: 0
  },
  minLength: _constant.MIN_ABSOLUTE_POSITION,
  maxLength: _constant.MAX_ABSOLUTE_POSITION,
  minuteStep: 5,
  limitDrag: false,
  handleTimePointerClick: Function.prototype
};

var PickerDragHandler = function (_React$PureComponent) {
  _inherits(PickerDragHandler, _React$PureComponent);

  function PickerDragHandler(props) {
    _classCallCheck(this, PickerDragHandler);

    var _this = _possibleConstructorReturn(this, (PickerDragHandler.__proto__ || Object.getPrototypeOf(PickerDragHandler)).call(this, props));

    _this.startX = 0;
    _this.startY = 0;
    _this.originX = null;
    _this.originY = null;
    _this.dragCenterX = null;
    _this.dragCenterY = null;
    _this.offsetDragCenterX = 0;
    _this.offsetDragCenterY = 0;
    _this.state = _this.initialRotationAndLength();

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.resetOrigin = _this.resetOrigin.bind(_this);
    return _this;
  }

  _createClass(PickerDragHandler, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resetOrigin();
      if (window.addEventListener) {
        window.addEventListener('resize', this.resetOrigin, true);
      } else {
        window.addEventListener('onresize', this.resetOrigin);
      }
      if (document.addEventListener) {
        document.addEventListener('scroll', this.resetOrigin, true);
        document.addEventListener('mousemove', this.handleMouseMove, true);
        document.addEventListener('mouseup', this.handleMouseUp, true);
        document.addEventListener('touchmove', this.handleMouseMove, true);
        document.addEventListener('touchend', this.handleMouseUp, true);
      } else {
        document.addEventListener('onscroll', this.resetOrigin);
        document.attachEvent('onmousemove', this.handleMouseMove);
        document.attachEvent('onmouseup', this.handleMouseUp);
        document.attachEvent('ontouchmove', this.handleMouseMove);
        document.attachEvent('ontouchend', this.handleMouseUp);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (window.addEventListener) {
        window.removeEventListener('resize', this.resetOrigin, true);
      } else {
        window.detachEvent('onresize', this.resetOrigin);
      }
      if (document.removeEventListener) {
        document.removeEventListener('scroll', this.resetOrigin, true);
        document.removeEventListener('mousemove', this.handleMouseMove, true);
        document.removeEventListener('mouseup', this.handleMouseUp, true);
        document.removeEventListener('touchmove', this.handleMouseMove, true);
        document.removeEventListener('touchend', this.handleMouseUp, true);
      } else {
        document.detachEvent('onscroll', this.resetOrigin);
        document.detachEvent('onmousemove', this.handleMouseMove);
        document.detachEvent('onmouseup', this.handleMouseUp);
        document.detachEvent('ontouchmove', this.handleMouseMove);
        document.detachEvent('ontouchend', this.handleMouseUp);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          step = _props.step,
          time = _props.time,
          rotateState = _props.rotateState;
      var draging = this.state.draging;

      var prevStep = prevProps.step;
      var prevTime = prevProps.time;
      var PrevRotateState = prevProps.rotateState;
      if ((step !== prevStep || time !== prevTime || rotateState.pointerRotate !== PrevRotateState.pointerRotate) && !draging) {
        this.resetState();
      }
    }
  }, {
    key: 'initialRotationAndLength',
    value: function initialRotationAndLength() {
      var rotateState = this.props.rotateState;
      var top = rotateState.top,
          height = rotateState.height,
          pointerRotate = rotateState.pointerRotate;

      this.initialHeight = height;
      return {
        top: top,
        height: height,
        pointerRotate: pointerRotate,
        draging: false
      };
    }
  }, {
    key: 'resetState',
    value: function resetState() {
      this.setState(this.initialRotationAndLength());
    }
  }, {
    key: 'resetOrigin',
    value: function resetOrigin() {
      var centerPoint = this.pickerCenter;
      var centerPointPos = centerPoint.getBoundingClientRect();
      this.originX = centerPointPos.left + centerPoint.clientWidth / 2 + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) + _constant.POINTER_RADIUS;
      this.originY = centerPointPos.top + centerPoint.clientHeight / 2 + Math.max(document.documentElement.scrollTop, document.body.scrollTop) + _constant.POINTER_RADIUS;

      this.resetDragCenter();
    }
  }, {
    key: 'resetDragCenter',
    value: function resetDragCenter() {
      this.offsetDragCenterX = 0;
      this.offsetDragCenterY = 0;

      var dragCenterPoint = this.dragCenter;
      var dragCenterPointPos = dragCenterPoint.getBoundingClientRect();
      this.dragCenterX = dragCenterPointPos.left + dragCenterPoint.clientWidth / 2 + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
      this.dragCenterY = dragCenterPointPos.top + dragCenterPoint.clientHeight / 2 + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    }
  }, {
    key: 'getRadian',
    value: function getRadian(x, y) {
      var sRad = Math.atan2(y - this.originY, x - this.originX);
      sRad -= Math.atan2(this.startY - this.originY, this.startX - this.originX);
      if (sRad > Math.PI) {
        sRad -= Math.PI * 2;
      } else if (sRad < -Math.PI) {
        sRad += Math.PI * 2;
      }
      sRad += _drag2.default.degree2Radian(this.props.rotateState.pointerRotate);
      return sRad;
    }
  }, {
    key: 'getAbsolutePosition',
    value: function getAbsolutePosition(x, y) {
      return Math.sqrt(Math.pow(x - this.originX, 2) + Math.pow(y - this.originY, 2));
    }
  }, {
    key: 'getPointerRotate',
    value: function getPointerRotate() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var dragX = options.dragX,
          dragY = options.dragY;
      var _props2 = this.props,
          step = _props2.step,
          limitDrag = _props2.limitDrag,
          minuteStep = _props2.minuteStep;

      var sRad = this.getRadian(dragX, dragY);
      var pointerRotate = sRad * (360 / (2 * Math.PI));

      if (limitDrag) {
        var degree = sRad * (360 / (2 * Math.PI));
        var isHour = step === 0;
        var sectionCount = isHour ? 12 : 60 / minuteStep;
        var roundSeg = Math.round(degree / (360 / sectionCount));
        pointerRotate = roundSeg * (360 / sectionCount);
      }
      return pointerRotate;
    }
  }, {
    key: 'handleTimePointerChange',
    value: function handleTimePointerChange() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var dragX = options.dragX,
          dragY = options.dragY,
          _options$autoMode = options.autoMode,
          autoMode = _options$autoMode === undefined ? null : _options$autoMode,
          _options$pointerRotat = options.pointerRotate,
          pointerRotate = _options$pointerRotat === undefined ? null : _options$pointerRotat;
      var _props3 = this.props,
          step = _props3.step,
          timeMode = _props3.timeMode,
          minLength = _props3.minLength,
          maxLength = _props3.maxLength,
          minuteStep = _props3.minuteStep,
          handleTimePointerClick = _props3.handleTimePointerClick;


      var sRad = this.getRadian(dragX, dragY);

      var degree = sRad * (360 / (2 * Math.PI));
      var isHour = step === 0;
      var sectionCount = isHour ? 12 : 60 / minuteStep;
      var roundSeg = Math.round(degree / (360 / sectionCount));

      var absolutePosition = this.getAbsolutePosition(dragX, dragY);
      absolutePosition = _drag2.default.validatePosition(absolutePosition, minLength, maxLength);
      if (minLength < absolutePosition && absolutePosition < maxLength) {
        if (absolutePosition - minLength > (maxLength - minLength) / 2) {
          absolutePosition = maxLength;
        } else {
          absolutePosition = minLength;
        }
      }
      while (roundSeg > sectionCount) {
        roundSeg -= sectionCount;
      }
      var time = absolutePosition === minLength ? roundSeg : roundSeg + sectionCount;

      if (isHour) {
        if (absolutePosition === minLength && time < 0) {
          time += 12;
        } else if (absolutePosition !== minLength && time < 12) {
          time = 24 + (time - 12);
        }
        time = time === 24 ? 12 : time;
        if (time === 12 && Number(timeMode) === 12) time = 0;
      } else {
        time = time * minuteStep === 60 ? 0 : time * minuteStep;
        time = time < 0 ? 60 + time : time;
      }

      handleTimePointerClick && handleTimePointerClick({
        time: time,
        autoMode: autoMode,
        pointerRotate: pointerRotate
      });
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      if (!this.state.draging) {
        var event = e || window.event;
        event.preventDefault();
        event.stopPropagation();
        var pos = _drag2.default.mousePosition(event);
        this.startX = pos.x;
        this.startY = pos.y;

        this.resetDragCenter();
        this.offsetDragCenterX = this.dragCenterX - this.startX;
        this.offsetDragCenterY = this.dragCenterY - this.startY;

        this.setState({
          draging: true
        });
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (this.state.draging) {
        var _props4 = this.props,
            minLength = _props4.minLength,
            maxLength = _props4.maxLength;

        var pos = _drag2.default.mousePosition(e);
        var dragX = pos.x + this.offsetDragCenterX;
        var dragY = pos.y + this.offsetDragCenterY;
        if (this.originX !== dragX && this.originY !== dragY) {
          var pointerRotate = this.getPointerRotate({ dragX: dragX, dragY: dragY });

          var absolutePosition = this.getAbsolutePosition(dragX, dragY);
          var height = _drag2.default.validatePosition(absolutePosition, minLength - _constant.POINTER_RADIUS, maxLength - _constant.POINTER_RADIUS);
          var top = _constant.PICKER_RADIUS - height;
          this.setState({
            top: top,
            height: height,
            pointerRotate: pointerRotate
          });

          this.handleTimePointerChange({
            dragX: dragX,
            dragY: dragY,
            autoMode: false
          });
        }
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(e) {
      if (this.state.draging) {
        this.setState({
          draging: false
        });

        var pos = _drag2.default.mousePosition(e);
        var endX = pos.x + this.offsetDragCenterX;
        var endY = pos.y + this.offsetDragCenterY;

        var pointerRotate = this.getPointerRotate({
          dragX: endX,
          dragY: endY
        });
        var remainder = pointerRotate % 30;
        var base = Math.floor(pointerRotate / 30);
        pointerRotate = (base + (remainder >= 15 ? 1 : 0)) * 30;

        this.setState({ pointerRotate: pointerRotate });
        this.handleTimePointerChange({
          dragX: endX,
          dragY: endY,
          pointerRotate: pointerRotate
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props5 = this.props,
          time = _props5.time,
          draggable = _props5.draggable;
      var _state = this.state,
          draging = _state.draging,
          height = _state.height,
          top = _state.top,
          pointerRotate = _state.pointerRotate;

      var pickerPointerClass = draging ? 'picker_pointer' : 'picker_pointer animation';

      return _react2.default.createElement(
        'div',
        { className: 'picker_handler' },
        _react2.default.createElement(
          'div',
          {
            className: pickerPointerClass,
            style: _drag2.default.initialPointerStyle(height, top, pointerRotate)
          },
          _react2.default.createElement(
            'div',
            {
              ref: function ref(r) {
                return _this2.dragCenter = r;
              },
              className: 'pointer_drag ' + (draggable ? 'draggable' : ''),
              style: _drag2.default.rotateStyle(-pointerRotate),
              onMouseDown: draggable ? this.handleMouseDown : Function.prototype,
              onTouchStart: draggable ? this.handleMouseDown : Function.prototype
            },
            time
          )
        ),
        _react2.default.createElement('div', {
          className: 'picker_center',
          ref: function ref(p) {
            return _this2.pickerCenter = p;
          }
        })
      );
    }
  }]);

  return PickerDragHandler;
}(_react2.default.PureComponent);

PickerDragHandler.propTypes = propTypes;
PickerDragHandler.defaultProps = defaultProps;

exports.default = PickerDragHandler;