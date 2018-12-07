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

var _media = require("@bootstrap-styled/css-mixins/lib/media");

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
  theme: {
    '$list-inline-padding': '5px'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<Li />` component. */
  children: _propTypes.default.node,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$list-inline-padding': _propTypes.default.string
  }),

  /** Toggles disabled CSS style. */
  disabled: _propTypes.default.bool,

  /** Toggles separator CSS display. */
  separator: _propTypes.default.bool,

  /** Toggles active CSS display. */
  active: _propTypes.default.bool,

  /** Toggles inline CSS display. */
  inline: _propTypes.default.bool,

  /** Toggles media CSS style. */
  media: _propTypes.default.bool,

  /** Toggles 'dropdown-item' CSS style. */
  'dropdown-item': _propTypes.default.bool,

  /** Toggles 'dropdown-header' CSS style. */
  'dropdown-header': _propTypes.default.bool,

  /** Toggles 'dropdown-footer' CSS style. */
  'dropdown-footer': _propTypes.default.bool,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var LiUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LiUnstyled, _React$Component);

  function LiUnstyled() {
    _classCallCheck(this, LiUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(LiUnstyled).apply(this, arguments));
  }

  _createClass(LiUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          inline = _omit.inline,
          separator = _omit.separator,
          media = _omit.media,
          dropdownItem = _omit['dropdown-item'],
          dropdownHeader = _omit['dropdown-header'],
          dropdownFooter = _omit['dropdown-footer'],
          attributes = _objectWithoutProperties(_omit, ["className", "children", "inline", "separator", "media", "dropdown-item", "dropdown-header", "dropdown-footer"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, separator ? 'dropdown-divider' : false, dropdownItem ? 'dropdown-item' : false, dropdownItem ? 'dropdown-item' : false, dropdownHeader ? 'dropdown-header' : false, dropdownFooter ? 'dropdown-footer' : false, inline ? 'list-inline-item' : false, media ? 'media' : false));
      return _react.default.createElement("li", _extends({
        className: classes
      }, attributes), children);
    }
  }]);

  return LiUnstyled;
}(_react.default.Component);
/**
 * Replace or remove a className from the component.
 * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
 */


_defineProperty(LiUnstyled, "propTypes", propTypes);

_defineProperty(LiUnstyled, "defaultProps", defaultProps);

var Li = (0, _styledComponents.default)(LiUnstyled).withConfig({
  displayName: "Li",
  componentId: "sc-1knn373-0"
})(["", ""], function (props) {
  return "\n    &.list-inline-item {\n      display: inline-block;\n    \n      &:not(:last-child) {\n        margin-right: ".concat(props.theme['$list-inline-padding'], ";\n      }\n    }\n    \n    ").concat((0, _media.media)(), "\n  ");
});
Li.defaultProps = defaultProps;
Li.propTypes = propTypes;
/** @component */

var _default = Li;
exports.default = _default;