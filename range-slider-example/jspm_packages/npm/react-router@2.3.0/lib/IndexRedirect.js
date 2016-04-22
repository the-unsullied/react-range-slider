/* */ 
(function(process) {
  'use strict';
  exports.__esModule = true;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _react = require('react');
  var _react2 = _interopRequireDefault(_react);
  var _routerWarning = require('./routerWarning');
  var _routerWarning2 = _interopRequireDefault(_routerWarning);
  var _invariant = require('invariant');
  var _invariant2 = _interopRequireDefault(_invariant);
  var _Redirect = require('./Redirect');
  var _Redirect2 = _interopRequireDefault(_Redirect);
  var _InternalPropTypes = require('./InternalPropTypes');
  var _React$PropTypes = _react2['default'].PropTypes;
  var string = _React$PropTypes.string;
  var object = _React$PropTypes.object;
  var IndexRedirect = _react2['default'].createClass({
    displayName: 'IndexRedirect',
    statics: {createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
        if (parentRoute) {
          parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
        } else {
          process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
        }
      }},
    propTypes: {
      to: string.isRequired,
      query: object,
      state: object,
      onEnter: _InternalPropTypes.falsy,
      children: _InternalPropTypes.falsy
    },
    render: function render() {
      !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
    }
  });
  exports['default'] = IndexRedirect;
  module.exports = exports['default'];
})(require('process'));
