"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _hover = require("@bootstrap-styled/css-mixins/lib/hover");

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _badge = require("@bootstrap-styled/css-mixins/lib/badge");

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
  color: 'default',
  pill: false,
  tag: 'span',
  theme: {
    '$badge-default-bg': '#636c72',
    '$badge-primary-bg': '#0275d8',
    '$badge-success-bg': '#5cb85c',
    '$badge-info-bg': '#5bc0de',
    '$badge-warning-bg': '#f0ad4e',
    '$badge-danger-bg': '#d9534f',
    '$badge-color': '#fff',
    '$badge-link-hover-color': '#fff',
    '$badge-font-size': '75%',
    '$badge-font-weight': 'bold',
    '$badge-padding-x': '.4em',
    '$badge-padding-y': '.25em',
    '$badge-pill-padding-x': '.6em',
    '$badge-pill-border-radius': '10rem',
    '$enable-rounded': true,
    '$enable-hover-media-query': false
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Color variables. Can be: */
  color: _propTypes.default.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),

  /**
   * Change badge border radius.
   */
  pill: _propTypes.default.bool,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$badge-default-bg': _propTypes.default.string,
    '$badge-primary-bg': _propTypes.default.string,
    '$badge-success-bg': _propTypes.default.string,
    '$badge-info-bg': _propTypes.default.string,
    '$badge-warning-bg': _propTypes.default.string,
    '$badge-danger-bg': _propTypes.default.string,
    '$badge-color': _propTypes.default.string,
    '$badge-link-hover-color': _propTypes.default.string,
    '$badge-font-size': _propTypes.default.string,
    '$badge-font-weight': _propTypes.default.string,
    '$badge-padding-x': _propTypes.default.string,
    '$badge-padding-y': _propTypes.default.string,
    '$badge-pill-padding-x': _propTypes.default.string,
    '$badge-pill-border-radius': _propTypes.default.string,
    '$link-hover-decoration': _propTypes.default.string,
    '$enable-rounded': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var BadgeUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BadgeUnstyled, _React$Component);

  function BadgeUnstyled() {
    _classCallCheck(this, BadgeUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(BadgeUnstyled).apply(this, arguments));
  }

  _createClass(BadgeUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          pill = _omit.pill,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "color", "pill", "tag"]);

      return _react.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules.default)((0, _classnames.default)(className, 'badge', _defineProperty({
          'badge-pill': pill
        }, "badge-".concat(color), color)), cssModule)
      }, attributes));
    }
  }]);

  return BadgeUnstyled;
}(_react.default.Component);

_defineProperty(BadgeUnstyled, "propTypes", propTypes);

_defineProperty(BadgeUnstyled, "defaultProps", defaultProps);

var Badge = (0, _styledComponents.default)(BadgeUnstyled).withConfig({
  displayName: "Badge",
  componentId: "sc-4ja24t-0"
})(["", ""], function (props) {
  return "\n    \n    /* Base class */\n    /* Requires one of the contextual, color modifier classes for 'color' and */\n    /* 'background-color'. */\n    \n    &.badge {\n      display: inline-block;\n      padding: ".concat(props.theme['$badge-padding-y'], " ").concat(props.theme['$badge-padding-x'], ";\n      font-size: ").concat(props.theme['$badge-font-size'], ";\n      font-weight: ").concat(props.theme['$badge-font-weight'], ";\n      line-height: 1;\n      color: ").concat(props.theme['$badge-color'], ";\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']), "\n    \n      /* Empty tags collapse automatically */\n      &:empty {\n        display: none;\n      }\n    }\n    \n    \n    /* scss-lint:disable QualifyingElement */\n    /* Add hover effects, but only for links */\n    &a {\n      ").concat((0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], "\n        color: ".concat(props.theme['$badge-link-hover-color'], ";\n        text-decoration: none;\n        cursor: pointer;\n      ")), "\n    }\n    /* scss-lint:enable QualifyingElement */\n    \n    /* Pill tags */\n    /* Make them extra rounded with a modifier to replace v3s badges. */\n    \n    &.badge-pill {\n      padding-right: ").concat(props.theme['$badge-pill-padding-x'], ";\n      padding-left: ").concat(props.theme['$badge-pill-padding-x'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$badge-pill-border-radius']), "\n    }\n    \n    /* Colors */\n    /* Contextual variations (linked tags get darker on :hover). */\n    \n    &.badge-default {\n      ").concat((0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-default-bg']), "\n    }     \n    \n    &.badge-primary {\n      ").concat((0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-primary-bg']), "\n    }\n    \n    &.badge-success {\n      ").concat((0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-success-bg']), "\n    }\n    \n    &.badge-info {\n      ").concat((0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-info-bg']), "\n    }\n    \n    &.badge-warning {\n      ").concat((0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-warning-bg']), "\n    }\n    \n    &.badge-danger {\n      ").concat((0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-danger-bg']), "\n    }\n  ");
});
/**
 * Badges can be used as link and buttons and also in order to provide a counter.
 */

Badge.defaultProps = defaultProps;
Badge.propTypes = propTypes;
/** @component */

var _default = Badge;
exports.default = _default;