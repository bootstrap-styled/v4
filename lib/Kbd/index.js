"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _boxShadow = require("@bootstrap-styled/css-mixins/lib/box-shadow");

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
    '$enable-shadows': false,
    '$font-family-monospace': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    '$font-weight-bold': 'bold',
    '$border-radius-sm': '.2rem',
    '$code-font-size': '90%',
    '$code-padding-x': '.4rem',
    '$code-padding-y': '.2rem',
    '$kbd-color': '#fff',
    '$kbd-bg': '#292b2c',
    '$kbd-box-shadow': 'inset 0 -.1rem 0 rgba(0, 0, 0, 0.25)',
    '$nested-kbd-font-weight': 'bold'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<Kbd />` component. */
  children: _propTypes.default.node.isRequired,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-shadows': _propTypes.default.bool,
    '$font-family-monospace': _propTypes.default.string,
    '$font-weight-bold': _propTypes.default.string,
    '$border-radius-sm': _propTypes.default.string,
    '$code-font-size': _propTypes.default.string,
    '$code-padding-x': _propTypes.default.string,
    '$code-padding-y': _propTypes.default.string,
    '$kbd-color': _propTypes.default.string,
    '$kbd-bg': _propTypes.default.string,
    '$kbd-box-shadow': _propTypes.default.string,
    '$nested-kbd-font-weight': _propTypes.default.string
  })
};
exports.propTypes = propTypes;

var KbdUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(KbdUnstyled, _React$Component);

  function KbdUnstyled() {
    _classCallCheck(this, KbdUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(KbdUnstyled).apply(this, arguments));
  }

  _createClass(KbdUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          rest = _objectWithoutProperties(_omit, ["className", "children"]);

      return _react.default.createElement("kbd", _extends({
        className: className
      }, rest), children);
    }
  }]);

  return KbdUnstyled;
}(_react.default.Component);
/**
 * Replace or remove a className from the component.
 * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
 */


_defineProperty(KbdUnstyled, "propTypes", propTypes);

_defineProperty(KbdUnstyled, "defaultProps", defaultProps);

var Kbd = (0, _styledComponents.default)(KbdUnstyled).withConfig({
  displayName: "Kbd",
  componentId: "fcsgf1-0"
})(["", ""], function (props) {
  return "\n    /* User input typically entered via keyboard */\n    padding: ".concat(props.theme['$code-padding-y'], " ").concat(props.theme['$code-padding-x'], ";\n    font-size: ").concat(props.theme['$code-font-size'], ";\n    color: ").concat(props.theme['$kbd-color'], ";\n    background-color: ").concat(props.theme['$kbd-bg'], ";\n    ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius-sm']), "\n    ").concat((0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$kbd-box-shadow']), "\n    \n    & kbd {\n      padding: 0;\n      font-size: 100%;\n      font-weight: ").concat(props.theme['$nested-kbd-font-weight'], ";\n      ").concat((0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], 'none'), "\n    }\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ").concat(props.theme['$font-family-monospace'], ";\n  ");
});
Kbd.defaultProps = defaultProps;
Kbd.propTypes = propTypes;
/** @component */

var _default = Kbd;
exports.default = _default;