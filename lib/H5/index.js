"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _typography = require("@bootstrap-styled/css-mixins/lib/typography");

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
    '$font-size-h5': '1.25rem',
    '$headings-margin-bottom': '0.5rem',
    '$headings-font-family': 'inherit',
    '$headings-font-weight': '500',
    '$headings-line-height': '1.1',
    '$headings-color': 'inherit',
    '$display1-size': '6rem',
    '$display2-size': '5.5rem',
    '$display3-size': '4.5rem',
    '$display4-size': '3.5rem',
    '$display1-weight': '300',
    '$display2-weight': '300',
    '$display3-weight': '300',
    '$display4-weight': '300',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$link-color': _propTypes.default.string,
    '$font-size-h5': _propTypes.default.string,
    '$headings-margin-bottom': _propTypes.default.string,
    '$headings-font-family': _propTypes.default.string,
    '$headings-font-weight': _propTypes.default.string,
    '$headings-line-height': _propTypes.default.string,
    '$headings-color': _propTypes.default.string,
    '$display1-size': _propTypes.default.string,
    '$display2-size': _propTypes.default.string,
    '$display3-size': _propTypes.default.string,
    '$display4-size': _propTypes.default.string,
    '$display1-weight': _propTypes.default.string,
    '$display2-weight': _propTypes.default.string,
    '$display3-weight': _propTypes.default.string,
    '$display4-weight': _propTypes.default.string,
    '$lead-font-size': _propTypes.default.string,
    '$lead-font-weight': _propTypes.default.string
  }),

  /** Color variables. Can be: */
  color: _propTypes.default.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),

  /** Toggles lead CSS style. */
  lead: _propTypes.default.bool,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var H5Unstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(H5Unstyled, _React$Component);

  function H5Unstyled() {
    _classCallCheck(this, H5Unstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(H5Unstyled).apply(this, arguments));
  }

  _createClass(H5Unstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = _objectWithoutProperties(_omit, ["className", "color", "children", "cssModule", "lead"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, lead ? 'lead' : false, color ? "text-".concat(color) : false), cssModule);
      return _react.default.createElement("h5", _extends({
        className: classes
      }, attributes), children);
    }
  }]);

  return H5Unstyled;
}(_react.default.Component);

_defineProperty(H5Unstyled, "propTypes", propTypes);

_defineProperty(H5Unstyled, "defaultProps", defaultProps);

var H5 = (0, _styledComponents.default)(H5Unstyled).withConfig({
  displayName: "H5",
  componentId: "dz5a7l-0"
})(["", ""], function (props) {
  return "\n    font-size: ".concat(props.theme['$font-size-h5'], ";\n    ").concat((0, _typography.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']), "\n \n    &.lead {\n     font-size: ").concat(props.theme['$lead-font-size'], ";\n     font-weight: ").concat(props.theme['$lead-font-weight'], ";\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ");
});
H5.defaultProps = defaultProps;
H5.propTypes = propTypes;
/** @component */

var _default = H5;
exports.default = _default;