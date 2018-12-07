"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _unitUtils = _interopRequireDefault(require("@bootstrap-styled/utils/lib/unitUtils"));

var _conditional = require("@bootstrap-styled/css-mixins/lib/conditional");

var _boxShadow = require("@bootstrap-styled/css-mixins/lib/box-shadow");

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  active: false,
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': true,
    $white: '#fff',
    '$drawer-bg': '#fff',
    '$drawer-transition': 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    '$drawer-box-shadow': 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
    '$drawer-border-radius': '0px',
    '$drawer-zindex': '1030',
    '$drawer-docked-width': '55px'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Toggles open Panel. */
  active: _propTypes.default.bool.isRequired,

  /** Place Drawer at the top of screen with it's set height */
  top: _propTypes.default.string,

  /** Place Drawer at the right of screen with it's set width */
  right: _propTypes.default.string,

  /** Place Drawer at the bottom of screen with it's set height */
  bottom: _propTypes.default.string,

  /** Place Drawer at the left of screen with it's set width */
  left: _propTypes.default.string,

  /** Toggles to make Drawer part of layout rather than float above. */
  docked: _propTypes.default.bool,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-shadows': _propTypes.default.bool,
    '$drawer-bg': _propTypes.default.string,
    '$drawer-transition': _propTypes.default.string,
    '$drawer-box-shadow': _propTypes.default.string,
    '$drawer-border-radius': _propTypes.default.string,
    '$drawer-zindex': _propTypes.default.string,
    '$drawer-docked-width': _propTypes.default.string
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var DrawerUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DrawerUnstyled, _React$Component);

  function DrawerUnstyled() {
    _classCallCheck(this, DrawerUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(DrawerUnstyled).apply(this, arguments));
  }

  _createClass(DrawerUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          top = _omit.top,
          right = _omit.right,
          bottom = _omit.bottom,
          left = _omit.left,
          docked = _omit.docked,
          cssModule = _omit.cssModule,
          props = _objectWithoutProperties(_omit, ["className", "active", "top", "right", "bottom", "left", "docked", "cssModule"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, !docked ? 'drawer' : 'drawer-docked', {
        active: active,
        'drawer-top': top,
        'drawer-right': right,
        'drawer-bottom': bottom,
        'drawer-left': left
      }, cssModule));
      return _react.default.createElement("div", _extends({
        className: classes
      }, props));
    }
  }]);

  return DrawerUnstyled;
}(_react.default.Component);

_defineProperty(DrawerUnstyled, "propTypes", propTypes);

_defineProperty(DrawerUnstyled, "defaultProps", defaultProps);

var Drawer = (0, _styledComponents.default)(DrawerUnstyled).withConfig({
  displayName: "Drawer",
  componentId: "rffq8f-0"
})(["", ""], function (props) {
  return "\n    &.drawer {\n      background-color: ".concat(props.theme['$drawer-bg'], ";\n      transition: ").concat(props.theme['$drawer-transition'], ";\n      position: fixed;\n      flex: 1 0 auto;\n      z-index: ").concat(props.theme['$drawer-zindex'], ";\n      overflow-y: auto;\n      outline: none;\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$drawer-border-radius']), "\n      ").concat((0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$drawer-box-shadow']), "\n      &.drawer-top {\n        ").concat((0, _conditional.ifThen)(props.top, "\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: ".concat(props.top, ";\n            transform: translate(0px, -").concat(props.top && _unitUtils.default.math.addition(props.top, 4), ");\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ")), "\n      }\n      &.drawer-right {\n        ").concat((0, _conditional.ifThen)(props.right, "\n            bottom: 0;\n            right: 0;\n            height: 100%;\n            width: ".concat(props.right, ";\n            transform: translate(").concat(props.right && _unitUtils.default.math.addition(props.right, 4), ", 0px);\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ")), "\n      }\n      &.drawer-bottom {\n        ").concat((0, _conditional.ifThen)(props.bottom, "\n            left: 0;\n            bottom: 0;\n            width: 100%;\n            height: ".concat(props.bottom, ";\n            transform: translate(0px, ").concat(props.bottom && _unitUtils.default.math.addition(props.bottom, 4), ");\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ")), "\n      }\n      &.drawer-left {\n        ").concat((0, _conditional.ifThen)(props.left, "\n            bottom: 0;\n            left: 0;\n            height: 100%;\n            width: ".concat(props.left, ";\n            transform: translate(-").concat(props.left && _unitUtils.default.math.addition(props.left, 4), ", 0px);\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ")), "\n      }\n    }\n    &.drawer-docked { \n      flex: 0 0 auto;\n      overflow: hidden;\n      background-color: ").concat(props.theme['$drawer-bg'], ";\n      &.drawer-left {\n        ").concat((0, _conditional.ifThen)(props.left, "\n          width: ".concat(props.theme['$drawer-docked-width'], ";\n          transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;\n          &.active {\n            width: ").concat(props.left, ";\n          }\n          ")), "\n      }\n    }\n  ");
});
Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;
/** @component */

var _default = Drawer;
exports.default = _default;