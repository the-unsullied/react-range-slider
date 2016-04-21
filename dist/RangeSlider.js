'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function maxmin(pos, min, max) {
  if (pos < min) {
    return min;
  }
  if (pos > max) {
    return max;
  }
  return pos;
}

exports.default = _react2.default.createClass({
  propTypes: function propTypes() {
    return {
      min: _react2.default.PropTypes.number,
      max: _react2.default.PropTypes.number,
      step: _react2.default.PropTypes.number,
      value: _react2.default.PropTypes.number,
      onChange: _react2.default.PropTypes.func,
      className: _react2.default.PropTypes.string,
      isDisabled: _react2.default.PropTypes.boolean
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      min: 0,
      max: 100,
      step: 1,
      value: 0,
      isDisabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      limit: 0,
      grab: 0
    };
  },
  componentDidMount: function componentDidMount() {
    this.setupSlider();
    window.addEventListener('resize', this.setupSlider);
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('resize', this.setupSlider);
  },
  setupSlider: function setupSlider() {
    var sliderPos = (0, _reactDom.findDOMNode)(this.refs.slider).offsetWidth;
    var handlePos = (0, _reactDom.findDOMNode)(this.refs.handle).offsetWidth;
    this.setState({
      limit: sliderPos - handlePos,
      grab: handlePos / 2
    });
  },
  handleSliderMouseDown: function handleSliderMouseDown(e) {
    var onChange = this.props.onChange;
    if (!onChange) return;
    var value = this.position(e);
    onChange(value);
  },
  handleKnobMouseDown: function handleKnobMouseDown() {
    document.addEventListener('mousemove', this.handleDragStart);
    document.addEventListener('touchmove', this.handleDragStart);
    document.addEventListener('mouseup', this.handleDragEnd);
    document.addEventListener('touchend', this.handleDragEnd);
  },
  handleDragStart: function handleDragStart(e) {
    var onChange = this.props.onChange;

    if (!onChange) return;
    var value = this.position(e);
    onChange(value);
  },
  handleDragEnd: function handleDragEnd() {
    document.removeEventListener('mousemove', this.handleDragStart);
    document.removeEventListener('mouseup', this.handleDragEnd);
    document.removeEventListener('touchmove', this.handleDragStart);
    document.removeEventListener('touchend', this.handleDragEnd);
  },
  handleNoop: function handleNoop(e) {
    e.stopPropagation();
    e.preventDefault();
  },
  getPositionFromValue: function getPositionFromValue(value) {
    var limit = this.state.limit;
    var _props = this.props;
    var min = _props.min;
    var max = _props.max;

    var divisor = max - min;
    var percentage = divisor !== 0 ? (value - min) / divisor : 0.5;
    return Math.round(percentage * limit);
  },
  getValueFromPosition: function getValueFromPosition(pos) {
    var limit = this.state.limit;
    var _props2 = this.props;
    var min = _props2.min;
    var max = _props2.max;
    var step = _props2.step;

    var percentage = maxmin(pos, 0, limit) / (limit || 1);
    return step * Math.round(percentage * (max - min) / step) + min;
  },
  position: function position(e) {
    var node = (0, _reactDom.findDOMNode)(this.refs.slider);
    var coordinate = e.touches ? e.touches[0].clientX : e.clientX;
    var direction = node.getBoundingClientRect()['left'];
    var pos = coordinate - direction - this.state.grab;
    return this.getValueFromPosition(pos);
  },
  coordinates: function coordinates(pos) {
    var value = this.getValueFromPosition(pos);
    var handlePos = this.getPositionFromValue(value);
    var fillPos = handlePos + this.state.grab;
    return {
      fill: fillPos,
      handle: handlePos
    };
  },
  render: function render() {

    var position = this.getPositionFromValue(this.props.value);
    var coords = this.coordinates(position);
    var fillStyle = { width: coords.fill + 'px' };
    var handleStyle = { left: coords.handle + 'px' };
    var isDisabled = this.props.max === 0 || this.props.disabled;

    return _react2.default.createElement(
      'div',
      {
        ref: 'slider',
        className: (0, _classnames2.default)('rangeslider', { 'rangeslider--disabled': isDisabled }, this.props.className) },
      _react2.default.createElement('div', {
        ref: 'fill',
        className: 'rangeslider__fill',
        style: fillStyle }),
      _react2.default.createElement('div', {
        ref: 'handle',
        className: 'rangeslider__handle',
        onMouseDown: isDisabled ? this.handleNoop : this.handleKnobMouseDown,
        onTouchStart: isDisabled ? this.handleNoop : this.handleKnobMouseDown,
        style: handleStyle })
    );
  }
});
module.exports = exports['default'];
