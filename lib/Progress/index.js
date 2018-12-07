"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _background = require("@bootstrap-styled/css-utils/lib/background");

var _gradients = require("@bootstrap-styled/css-mixins/lib/gradients");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$progress-height': '1rem',
    '$progress-font-size': '.75rem',
    '$progress-bg': '#eceeef',
    '$progress-border-radius': '.25rem',
    '$progress-box-shadow': 'inset 0 .1rem .1rem rgba(0, 0, 0, 0.1)',
    '$progress-bar-color': '#fff',
    '$progress-bar-bg': '#0275d8',
    '$progress-bar-animation-timing': '1s linear infinite'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<Progress />` component. */
  children: _propTypes.default.node,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool,
    '$progress-height': _propTypes.default.string,
    '$progress-font-size': _propTypes.default.string,
    '$progress-bg': _propTypes.default.string,
    '$progress-border-radius': _propTypes.default.string,
    '$progress-box-shadow': _propTypes.default.string,
    '$progress-bar-color': _propTypes.default.string,
    '$progress-bar-bg': _propTypes.default.string,
    '$progress-bar-animation-timing': _propTypes.default.string
  })
};
exports.propTypes = propTypes;

var ProgressUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressUnstyled, _React$Component);

  function ProgressUnstyled() {
    _classCallCheck(this, ProgressUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressUnstyled).apply(this, arguments));
  }

  _createClass(ProgressUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          children = _omit.children,
          className = _omit.className,
          rest = _objectWithoutProperties(_omit, ["children", "className"]);

      return _react.default.createElement("div", _extends({
        className: (0, _classnames.default)('progress', className)
      }, rest), children);
    }
  }]);

  return ProgressUnstyled;
}(_react.default.Component);

_defineProperty(ProgressUnstyled, "propTypes", propTypes);

_defineProperty(ProgressUnstyled, "defaultProps", defaultProps);

var backgroundPositionKeyFrame = function backgroundPositionKeyFrame(props) {
  return (0, _styledComponents.keyframes)(["from{background-position:", " 0;}to{background-position:0 0;}"], props.theme['$progress-height']);
};

var animationRule = function animationRule(props) {
  return (0, _styledComponents.css)(["", " ", ""], backgroundPositionKeyFrame(props), props.theme['$progress-bar-animation-timing']);
};
/**
 * A classic `<Progress />` component. Can be used with **customized** value.
 * You can also control `height` and `backgrounds` colors or **multiple bars**.
 * Striped or Animated stripes.
 */


var Progress = (0, _styledComponents.default)(ProgressUnstyled).withConfig({
  displayName: "Progress",
  componentId: "l5upsd-0"
})(["", ""], function (props) {
  return "\n    \n    &.progress {\n      display: flex;\n      overflow: hidden; // force rounded corners by cropping it\n      font-size: ".concat(props.theme['$progress-font-size'], ";\n      line-height: ").concat(props.theme['$progress-height'], ";\n      text-align: center;\n      background-color: ").concat(props.theme['$progress-bg'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$progress-border-radius']), "\n      ").concat((0, _background.getBackgroundUtilities)(props.theme['$enable-hover-media-query'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest']), "\n    }\n    \n    .progress-bar {\n      height: ").concat(props.theme['$progress-height'], ";\n      line-height: ").concat(props.theme['$progress-height'], ";\n      color: ").concat(props.theme['$progress-bar-color'], ";\n      background-color: ").concat(props.theme['$progress-bar-bg'], ";\n    }\n    \n    .progress-bar-striped {\n      ").concat((0, _gradients.gradientStriped)(), "\n      background-size: ").concat(props.theme['$progress-height'], " ").concat(props.theme['$progress-height'], ";\n      background-repeat: repeat; /* Not present in bootstrap original but required to repeat the background */\n    }\n    \n    .progress-bar-animated {\n      animation: ").concat(animationRule, ";\n    }\n\n  ");
});
Progress.defaultProps = defaultProps;
Progress.propTypes = propTypes;
/** @component */

var _default = Progress;
exports.default = _default;