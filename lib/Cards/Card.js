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

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _cards = require("@bootstrap-styled/css-mixins/lib/cards");

var _conditional = require("@bootstrap-styled/css-mixins/lib/conditional");

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
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$brand-inverse': '#292b2c',
    '$card-spacer-x': '1.25rem',
    '$card-spacer-y': '.75rem',
    '$card-border-width': '1px',
    '$card-border-radius': '.25rem',
    '$card-border-color': 'rgba(0, 0, 0, 0.125)',
    '$card-border-radius-inner': '',
    '$card-cap-bg': '$gray-lightest',
    '$card-bg': '$white',
    '$card-link-hover-color': '$white',
    '$card-img-overlay-padding': '1.25rem',
    '$card-margin-y-halved': '((rmUnit(], UNIT.REM) / 2) + UNIT.REM',
    '$card-margin-x-halved': '((rmUnit(], UNIT.REM) / 2) + UNIT.REM',
    '$card-columns-count-md': '2',
    '$card-columns-gap-md': '1rem',
    '$card-columns-margin-md': '$card-spacer-y',
    '$card-columns-count-lg': '2',
    '$card-columns-gap-lg': '1.15rem',
    '$card-columns-margin-lg': '$card-spacer-y',
    '$card-columns-count-xl': '2',
    '$card-columns-gap-xl': '1.25rem',
    '$card-columns-margin-xl': '$card-spacer-y',
    '$card-columns-count-xxl': '3',
    '$card-columns-gap-xxl': '1.25rem',
    '$card-columns-margin-xxl': '$card-spacer-y',
    '$card-deck-margin': '(r, detectedUnit) / 2) + detectedUni',
    '$btn-primary-bg': '$brand-primary',
    '$btn-secondary-border': '#ccc',
    '$btn-info-bg': '$brand-info',
    '$btn-success-bg': '$brand-success',
    '$btn-warning-bg': '$brand-warning',
    '$btn-danger-bg': '$brand-danger',
    '$enable-rounded': false,
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
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$brand-primary': _propTypes.default.string,
    '$brand-success': _propTypes.default.string,
    '$brand-info': _propTypes.default.string,
    '$brand-warning': _propTypes.default.string,
    '$brand-danger': _propTypes.default.string,
    '$brand-inverse': _propTypes.default.string,
    '$card-spacer-x': _propTypes.default.string,
    '$card-spacer-y': _propTypes.default.string,
    '$card-border-width': _propTypes.default.string,
    '$card-border-radius': _propTypes.default.string,
    '$card-border-color': _propTypes.default.string,
    '$card-border-radius-inner': _propTypes.default.string,
    '$card-cap-bg': _propTypes.default.string,
    '$card-bg': _propTypes.default.string,
    '$card-link-hover-color': _propTypes.default.string,
    '$card-img-overlay-padding': _propTypes.default.string,
    '$card-margin-y-halved': _propTypes.default.string,
    '$card-margin-x-halved': _propTypes.default.string,
    '$card-columns-count-md': _propTypes.default.string,
    '$card-columns-gap-md': _propTypes.default.string,
    '$card-columns-margin-md': _propTypes.default.string,
    '$card-columns-count-lg': _propTypes.default.string,
    '$card-columns-gap-lg': _propTypes.default.string,
    '$card-columns-margin-lg': _propTypes.default.string,
    '$card-columns-count-xl': _propTypes.default.string,
    '$card-columns-gap-xl': _propTypes.default.string,
    '$card-columns-margin-xl': _propTypes.default.string,
    '$card-columns-count-xxl': _propTypes.default.string,
    '$card-columns-gap-xxl': _propTypes.default.string,
    '$card-columns-margin-xxl': _propTypes.default.string,
    '$card-deck-margin': _propTypes.default.string,
    '$btn-primary-bg': _propTypes.default.string,
    '$btn-secondary-border': _propTypes.default.string,
    '$btn-info-bg': _propTypes.default.string,
    '$btn-success-bg': _propTypes.default.string,
    '$btn-warning-bg': _propTypes.default.string,
    '$btn-danger-bg': _propTypes.default.string,
    '$link-color': _propTypes.default.string,
    '$link-decoration': _propTypes.default.string,
    '$link-hover-color': _propTypes.default.string,
    '$link-hover-decoration': _propTypes.default.string,
    '$enable-rounded': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool
  }),

  /** Color variables. Can be: */
  color: _propTypes.default.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'white']),

  /** Toggles inverse CSS color. */
  inverse: _propTypes.default.bool,

  /** Toggles block CSS display. */
  block: _propTypes.default.bool,

  /** Toggles outline CSS styles. */
  outline: _propTypes.default.bool,

  /** Width size in percent. */
  width: _propTypes.default.string,

  /** Use different background color with valid CSS. */
  backgroundColor: _propTypes.default.string,

  /** Use different border color with valid CSS. */
  borderColor: _propTypes.default.string,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var CardUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardUnstyled, _React$Component);

  function CardUnstyled() {
    _classCallCheck(this, CardUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardUnstyled).apply(this, arguments));
  }

  _createClass(CardUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _cn;

      var _omit = (0, _lodash.default)(this.props, ['theme', 'backgroundColor', 'borderColor', 'width']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          block = _omit.block,
          inverse = _omit.inverse,
          outline = _omit.outline,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "color", "block", "inverse", "outline", "tag"]);

      return _react.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules.default)((0, _classnames.default)(className, 'card', (_cn = {
          inverse: inverse,
          'card-block': block
        }, _defineProperty(_cn, "card-".concat(color), color), _defineProperty(_cn, "card-".concat(outline ? '-outline' : '', "-").concat(color), outline), _cn)), cssModule)
      }, attributes));
    }
  }]);

  return CardUnstyled;
}(_react.default.Component);
/**
 * Use our `<Card />` blocks with `<CardImg />`, `<CardBlock />`, `<CardTitle />`, `<CardSubtitle />` and `<CardText />` components  to emphasize part of your page.
 * You can also use `width` attribute.
 */


_defineProperty(CardUnstyled, "propTypes", propTypes);

_defineProperty(CardUnstyled, "defaultProps", defaultProps);

var Card = (0, _styledComponents.default)(CardUnstyled).withConfig({
  displayName: "Card",
  componentId: "sc-18qyd5o-0"
})(["", ""], function (props) {
  return "\n    \n    /*\n    Base styles\n    */\n    &.card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ".concat(props.theme['$card-bg'], ";\n      border: ").concat(props.theme['$card-border-width'], " solid ").concat(props.theme['$card-border-color'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius']), "\n      \n      ").concat((0, _conditional.ifThen)(props.width, "width: ".concat(props.width, ";")), "\n      ").concat((0, _conditional.ifThen)(props.backgroundColor, "background-color: ".concat(props.backgroundColor, ";")), "\n      ").concat((0, _conditional.ifThen)(props.borderColor, "border-color: ".concat(props.borderColor, ";")), "\n    }\n    \n    &.card-block,\n    & .card-block {\n      flex: 1 1 auto;\n      padding: ").concat(props.theme['$card-spacer-x'], ";\n    }\n    \n    & .card-title {\n      margin-bottom: ").concat(props.theme['$card-spacer-y'], ";\n    }\n    \n    & .card-subtitle {\n      margin-top: -").concat(props.theme['$card-margin-y-halved'], ";\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ").concat((0, _hover.hover)("\n        text-decoration: none;\n      "), "\n    \n      + .card-link {\n        margin-left: ").concat(props.theme['$card-spacer-x'], ";\n      }\n    }\n    \n    &.card {\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ").concat((0, _borderRadius.borderTopRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius']), "\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ").concat((0, _borderRadius.borderBottomRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius']), "\n        }\n      }\n    }\n    \n    \n    /*\n     Optional textual caps\n    */\n    \n    & .card-header {\n      padding: ").concat(props.theme['$card-spacer-y'], " ").concat(props.theme['$card-spacer-x'], ";\n      margin-bottom: 0; /* Removes the default margin-bottom of <hN> */\n      background-color: ").concat(props.theme['$card-cap-bg'], ";\n      border-bottom: ").concat(props.theme['$card-border-width'], " solid ").concat(props.theme['$card-border-color'], ";\n    \n      &:first-child {\n        ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner'], '0', '0'), "\n      }\n    }\n    \n    & .card-footer {\n      padding: ").concat(props.theme['$card-spacer-y'], " ").concat(props.theme['$card-spacer-x'], ";\n      background-color: ").concat(props.theme['$card-cap-bg'], ";\n      border-top: ").concat(props.theme['$card-border-width'], " solid ").concat(props.theme['$card-border-color'], ";\n    \n      &:last-child {\n        ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], '0', '0', props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner']), "\n      }\n    }\n    \n    \n    /*\n     Header navs\n    */\n    \n    & .card-header-tabs {\n      margin-right: -").concat(props.theme['$card-margin-x-halved'], ";\n      margin-bottom: -").concat(props.theme['$card-spacer-y'], ";\n      margin-left: -").concat(props.theme['$card-margin-x-halved'], ";\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -").concat(props.theme['$card-margin-x-halved'], ";\n      margin-left: -").concat(props.theme['$card-margin-x-halved'], ";\n    }\n    \n    \n    /*\n     Background variations\n    */\n    \n    &.card-primary {\n      ").concat((0, _cards.cardVariant)(props.theme['$brand-primary'], props.theme['$brand-primary']), "\n    }\n    &.card-success {\n      ").concat((0, _cards.cardVariant)(props.theme['$brand-success'], props.theme['$brand-success']), "\n    }\n    &.card-info {\n      ").concat((0, _cards.cardVariant)(props.theme['$brand-info'], props.theme['$brand-info']), "\n    }\n    &.card-warning {\n      ").concat((0, _cards.cardVariant)(props.theme['$brand-warning'], props.theme['$brand-warning']), "\n    }\n    &.card-danger {\n      ").concat((0, _cards.cardVariant)(props.theme['$brand-danger'], props.theme['$brand-danger']), "\n    }\n    \n    /* Remove all backgrounds */\n    &.card-outline-primary {\n      ").concat((0, _cards.cardOutlineVariant)(props.theme['$btn-primary-bg']), "\n    }\n    &.card-outline-secondary {\n      ").concat((0, _cards.cardOutlineVariant)(props.theme['$btn-secondary-border']), "\n    }\n    &.card-outline-info {\n      ").concat((0, _cards.cardOutlineVariant)(props.theme['$btn-info-bg']), "\n    }\n    &.card-outline-success {\n      ").concat((0, _cards.cardOutlineVariant)(props.theme['$btn-success-bg']), "\n    }\n    &.card-outline-warning {\n      ").concat((0, _cards.cardOutlineVariant)(props.theme['$btn-warning-bg']), "\n    }\n    &.card-outline-danger {\n      ").concat((0, _cards.cardOutlineVariant)(props.theme['$btn-danger-bg']), "\n    }\n    \n    /*\n     Inverse text within a card for use with dark backgrounds\n    */\n    \n    &.card-inverse {\n      ").concat((0, _cards.cardInverse)(props.theme['$enable-hover-media-query'], props.theme['$card-link-hover-color']), "\n    }\n    \n    /*\n     Blockquote\n    */\n    \n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    /* Card image */\n    & .card-img {\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']), "\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ").concat(props.theme['$card-img-overlay-padding'], ";\n    }\n    \n    \n    \n    /* Card image caps */\n    & .card-img-top {\n      ").concat((0, _borderRadius.borderTopRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']), "\n    }\n    \n    & .card-img-bottom {\n      ").concat((0, _borderRadius.borderBottomRadius)(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']), "\n    }\n  ");
});
Card.defaultProps = defaultProps;
Card.propTypes = propTypes;
/** @component */

var _default = Card;
exports.default = _default;