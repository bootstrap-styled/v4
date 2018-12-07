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
  tag: 'a',
  theme: {
    '$code-font-size': '90%',
    '$code-padding-x': '.4rem',
    '$code-padding-y': '.2rem',
    '$code-color': '#bd4147',
    '$code-bg': '#f7f7f9',
    '$enable-rounded': false
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$code-font-size': _propTypes.default.string,
    '$code-padding-x': _propTypes.default.string,
    '$code-padding-y': _propTypes.default.string,
    '$code-color': _propTypes.default.string,
    '$code-bg': _propTypes.default.string,
    '$enable-rounded': _propTypes.default.bool
  })
};
exports.propTypes = propTypes;

var CodeUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CodeUnstyled, _React$Component);

  function CodeUnstyled() {
    _classCallCheck(this, CodeUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(CodeUnstyled).apply(this, arguments));
  }

  _createClass(CodeUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["className", "children", "tag"]);

      return _react.default.createElement(Tag, _extends({
        className: className
      }, attributes), children);
    }
  }]);

  return CodeUnstyled;
}(_react.default.Component);

_defineProperty(CodeUnstyled, "propTypes", propTypes);

_defineProperty(CodeUnstyled, "defaultProps", defaultProps);

var Code = (0, _styledComponents.default)(CodeUnstyled).withConfig({
  displayName: "Code",
  componentId: "sc-72e29r-0"
})(["", ""], function (props) {
  return "\n    /* Inline code */\n    padding: ".concat(props.theme['$code-padding-y'], " ").concat(props.theme['$code-padding-x'], ";\n    font-size: ").concat(props.theme['$code-font-size'], ";\n    color: ").concat(props.theme['$code-color'], ";\n    background-color: ").concat(props.theme['$code-bg'], ";\n    ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']), ";\n    \n    /* Streamline the style when inside anchors to avoid broken underline and more */\n    a > & {\n      padding: 0;\n      color: inherit;\n      background-color: inherit;\n    }\n    \n    /* Bootstrap 4 does not place this css rule straight into Code tag see: bootstrap/scss/code.scss */\n    font-family: ").concat(props.theme['$font-family-monospace'], ";\n  ");
});
Code.defaultProps = defaultProps;
Code.propTypes = propTypes;
/** @component */

var _default = Code;
exports.default = _default;