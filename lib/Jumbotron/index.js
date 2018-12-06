"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _color = _interopRequireDefault(require("color"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _breakpoints = require("@bootstrap-styled/css-mixins/lib/breakpoints");

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
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$border-radius-lg': '.3rem',
    '$jumbotron-padding': '2rem',
    '$jumbotron-bg': '#eceeef'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Toggles disabled CSS style. */
  fluid: _propTypes.default.bool,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$grid-breakpoints': _propTypes.default.object,
    '$border-radius-lg': _propTypes.default.string,
    '$jumbotron-padding': _propTypes.default.string,
    '$jumbotron-bg': _propTypes.default.string
  }),

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func]),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var JumbotronUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JumbotronUnstyled, _React$Component);

  function JumbotronUnstyled() {
    _classCallCheck(this, JumbotronUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(JumbotronUnstyled).apply(this, arguments));
  }

  _createClass(JumbotronUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          fluid = _omit.fluid,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "tag", "fluid"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
      return _react.default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return JumbotronUnstyled;
}(_react.default.Component);
/**
 * A classic `<Jumbotron />` component.
 * You can also add `Button Dropdown` and customize `Sizing`.
 */


_defineProperty(JumbotronUnstyled, "propTypes", propTypes);

_defineProperty(JumbotronUnstyled, "defaultProps", defaultProps);

var Jumbotron = (0, _styledComponents.default)(JumbotronUnstyled).withConfig({
  displayName: "Jumbotron",
  componentId: "sc-4btr39-0"
})(["", ""], function (props) {
  return "\n    &.jumbotron {\n      padding: ".concat(props.theme['$jumbotron-padding'], " calc(").concat(props.theme['$jumbotron-padding'], " / 2);\n      margin-bottom: ").concat(props.theme['$jumbotron-padding'], ";\n      background-color: ").concat(props.theme['$jumbotron-bg'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius-lg']), "\n    \n      ").concat((0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], "padding: calc(".concat(props.theme['$jumbotron-padding'], " * 2) ").concat(props.theme['$jumbotron-padding'], ";")), "  \n    }\n\n    & .jumbotron-hr {\n      border-top-color: ").concat((0, _color.default)(props.theme['$jumbotron-bg']).darken(0.1).toString(), ";\n    }\n    \n    &.jumbotron-fluid {\n      padding-right: 0;\n      padding-left: 0;\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], '0'), "\n    }\n  ");
});
Jumbotron.defaultProps = defaultProps;
Jumbotron.propTypes = propTypes;
/** @component */

var _default = Jumbotron;
exports.default = _default;