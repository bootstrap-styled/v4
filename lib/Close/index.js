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

var _hover = require("@bootstrap-styled/css-mixins/lib/hover");

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
    '$close-color': '#000',
    '$close-font-size': '1.5rem',
    '$close-font-weight': '#bold',
    '$close-text-shadow': '0 1px 0 #fff',
    '$enable-hover-media-query': false
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

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool
  }),

  /** Replace close label with any string. */
  closeLabel: _propTypes.default.string,

  /** Call function when dismiss is trigger. */
  onDismiss: _propTypes.default.func.isRequired,

  /** Toggles screen-reader only CSS display. */
  'sr-only': _propTypes.default.bool,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var CloseUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CloseUnstyled, _React$Component);

  function CloseUnstyled() {
    _classCallCheck(this, CloseUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloseUnstyled).apply(this, arguments));
  }

  _createClass(CloseUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          srOnly = _omit['sr-only'],
          onDismiss = _omit.onDismiss,
          closeLabel = _omit.closeLabel,
          cssModule = _omit.cssModule,
          attributes = _objectWithoutProperties(_omit, ["className", "sr-only", "onDismiss", "closeLabel", "cssModule"]);

      return _react.default.createElement("button", _extends({
        className: (0, _mapToCssModules.default)((0, _classnames.default)(className, 'close', {
          'sr-only': srOnly
        }), cssModule),
        type: "button",
        onClick: onDismiss
      }, attributes), closeLabel, _react.default.createElement("span", null, "\xD7"));
    }
  }]);

  return CloseUnstyled;
}(_react.default.Component);

_defineProperty(CloseUnstyled, "propTypes", propTypes);

_defineProperty(CloseUnstyled, "defaultProps", defaultProps);

var Close = (0, _styledComponents.default)(CloseUnstyled).withConfig({
  displayName: "Close",
  componentId: "gim324-0"
})(["", ""], function (props) {
  return "\n    float: right;\n    font-size: ".concat(props.theme['$close-font-size'], ";\n    font-weight: ").concat(props.theme['$close-font-weight'], ";\n    line-height: 1;\n    color: ").concat(props.theme['$close-color'], ";\n    text-shadow: ").concat(props.theme['$close-text-shadow'], ";\n    opacity: .2;\n    \n    &:focus {outline:0;}\n    \n    ").concat((0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], "\n        color: ".concat(props.theme['$close-color'], ";\n        text-decoration: none;\n        cursor: pointer;\n        opacity: .5;\n      ")), "\n    \n    /* Additional properties for button version\n     iOS requires the button element instead of an anchor tag.\n     If you want the anchor version, it requires 'href=\"#\"'.\n     See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n     */\n    \n    /* scss-lint:disable QualifyingElement */\n    &.close {\n      padding: 0;\n      cursor: pointer;\n      background: transparent;\n      border: 0;\n      -webkit-appearance: none;\n    }\n    /* scss-lint:enable QualifyingElement */\n  ");
});
Close.defaultProps = defaultProps;
Close.propTypes = propTypes;
/** @component */

var _default = Close;
exports.default = _default;