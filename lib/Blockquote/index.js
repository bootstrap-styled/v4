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
  tag: 'blockquote',
  theme: {
    '$blockquote-small-color': '#636c72',
    '$blockquote-font-size': '1.25rem',
    '$blockquote-border-color': '#eceeef',
    '$blockquote-border-width': '.25rem'
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
    '$blockquote-small-color': _propTypes.default.string,
    '$blockquote-font-size': _propTypes.default.string,
    '$blockquote-border-color': _propTypes.default.string,
    '$blockquote-border-width': _propTypes.default.string
  }),

  /** Toggles content to display on left or right. */
  reverse: _propTypes.default.bool,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var BlockquoteUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlockquoteUnstyled, _React$Component);

  function BlockquoteUnstyled() {
    _classCallCheck(this, BlockquoteUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlockquoteUnstyled).apply(this, arguments));
  }

  _createClass(BlockquoteUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          reverse = _omit.reverse,
          Tag = _omit.tag,
          cssModule = _omit.cssModule,
          attributes = _objectWithoutProperties(_omit, ["className", "reverse", "tag", "cssModule"]);

      return _react.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules.default)((0, _classnames.default)(className, 'blockquote', {
          'blockquote-reverse': reverse
        }), cssModule)
      }, attributes));
    }
  }]);

  return BlockquoteUnstyled;
}(_react.default.Component);
/**
 * A quoting blocks component. Wrap `<Blockquote />` around any html node or element as the quote.
 */


_defineProperty(BlockquoteUnstyled, "propTypes", propTypes);

_defineProperty(BlockquoteUnstyled, "defaultProps", defaultProps);

var Blockquote = (0, _styledComponents.default)(BlockquoteUnstyled).withConfig({
  displayName: "Blockquote",
  componentId: "sc-1lvysn5-0"
})(["  ", " "], function (props) {
  return "\n    &.blockquote {\n      padding: ".concat(props.theme['$spacer-halved'], " ").concat(props.theme['$spacer'], ";\n      margin-bottom: ").concat(props.theme['$spacer'], ";\n      font-size: ").concat(props.theme['$blockquote-font-size'], ";\n      border-left: ").concat(props.theme['$blockquote-border-width'], " solid ").concat(props.theme['$blockquote-border-color'], ";\n      \n      .blockquote-footer {\n        display: block;\n        font-size: 80%; \n        color: ").concat(props.theme['$blockquote-small-color'], ";\n        &::before {\n          content: '\\2014 \\00A0';\n        }\n      }\n    }\n\n    &.blockquote-reverse {\n      padding-right: ").concat(props.theme['$spacer'], ";\n      padding-left: 0;\n      text-align: right;\n      border-right: ").concat(props.theme['$blockquote-border-width'], " solid ").concat(props.theme['$blockquote-border-color'], ";\n      border-left: 0;\n      \n      .blockquote-footer {\n        display: block;\n        font-size: 80%; \n        color: ").concat(props.theme['$blockquote-small-color'], ";\n        &::before {\n          content: \"\";\n        }\n        &::after {\n          content: '\\00A0 \\2014';\n        }\n      }\n    }\n    \n    /* Reboot from bootstrap v4 */\n    margin: 0 0 1rem;\n ");
});
Blockquote.defaultProps = defaultProps;
Blockquote.propTypes = propTypes;
/** @component */

var _default = Blockquote;
exports.default = _default;