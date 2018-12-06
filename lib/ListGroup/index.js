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

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _hover = require("@bootstrap-styled/css-mixins/lib/hover");

var _listGroup = require("@bootstrap-styled/css-mixins/lib/list-group");

var _index = _interopRequireDefault(require("../Ul/index"));

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
  tag: _index.default,
  toggleable: 'false',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$component-active-color': '#fff',
    '$component-active-bg': '#0275d8',
    '$list-group-color': '#292b2c',
    '$list-group-bg': '#fff',
    '$list-group-border-color': 'rgba(0, 0, 0, 0.125)',
    '$list-group-border-width': '1px',
    '$list-group-border-radius': '.25rem',
    '$list-group-item-padding-x': '1.25rem',
    '$list-group-item-padding-y': '.75rem',
    '$list-group-hover-bg': '#f7f7f9',
    '$list-group-active-color': '#fff',
    '$list-group-active-bg': '#0275d8',
    '$list-group-active-border': '#0275d8',
    '$list-group-disabled-color': '#636c72',
    '$list-group-disabled-bg': '#fff',
    '$list-group-link-color': '#464a4c',
    '$list-group-link-hover-color': '#464a4c',
    '$list-group-link-active-color': '#292b2c',
    '$list-group-link-active-bg': '#eceeef',
    '$cursor-disabled': 'not-allowed',
    '$state-success-text': '#3c763d',
    '$state-success-bg': '#dff0d8',
    '$state-info-text': '#31708f',
    '$state-info-bg': '#d9edf7',
    '$state-warning-text': '#8a6d3b',
    '$state-warning-bg': '#fcf8e3',
    '$state-danger-text': '#a94442',
    '$state-danger-bg': '#f2dede'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Replace the default component tag by the one specified. Can be: */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func, _propTypes.default.object]),

  /** Toggles flush CSS style. */
  flush: _propTypes.default.bool,

  /** Toggles passed as a string. Can be `true` or `false` */
  toggleable: _propTypes.default.string,

  /** Theme variables. */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool,
    '$component-active-color': _propTypes.default.string,
    '$component-active-bg': _propTypes.default.string,
    '$list-group-color': _propTypes.default.string,
    '$list-group-bg': _propTypes.default.string,
    '$list-group-border-color': _propTypes.default.string,
    '$list-group-border-width': _propTypes.default.string,
    '$list-group-border-radius': _propTypes.default.string,
    '$list-group-item-padding-x': _propTypes.default.string,
    '$list-group-item-padding-y': _propTypes.default.string,
    '$list-group-hover-bg': _propTypes.default.string,
    '$list-group-active-color': _propTypes.default.string,
    '$list-group-active-bg': _propTypes.default.string,
    '$list-group-active-border': _propTypes.default.string,
    '$list-group-disabled-color': _propTypes.default.string,
    '$list-group-disabled-bg': _propTypes.default.string,
    '$list-group-link-color': _propTypes.default.string,
    '$list-group-link-hover-color': _propTypes.default.string,
    '$list-group-link-active-color': _propTypes.default.string,
    '$list-group-link-active-bg': _propTypes.default.string,
    '$cursor-disabled': _propTypes.default.string,
    '$state-success-text': _propTypes.default.string,
    '$state-success-bg': _propTypes.default.string,
    '$state-info-text': _propTypes.default.string,
    '$state-info-bg': _propTypes.default.string,
    '$state-warning-text': _propTypes.default.string,
    '$state-warning-bg': _propTypes.default.string,
    '$state-danger-text': _propTypes.default.string,
    '$state-danger-bg': _propTypes.default.string
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var ListGroupUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListGroupUnstyled, _React$Component);

  function ListGroupUnstyled() {
    _classCallCheck(this, ListGroupUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListGroupUnstyled).apply(this, arguments));
  }

  _createClass(ListGroupUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          flush = _omit.flush,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "tag", "flush"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
      return _react.default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return ListGroupUnstyled;
}(_react.default.Component);
/**
 * The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.
 */


_defineProperty(ListGroupUnstyled, "propTypes", propTypes);

_defineProperty(ListGroupUnstyled, "defaultProps", defaultProps);

var ListGroup = (0, _styledComponents.default)(ListGroupUnstyled).withConfig({
  displayName: "ListGroup",
  componentId: "sc-1ugap33-0"
})(["", ""], function (props) {
  return "\n    /* \n      Base class\n      Easily usable on ul, ol, or div.\n    */\n    \n    &.list-group {\n      display: flex;\n      flex-direction: column;\n      /* No need to set list-style: none; since .list-group-item is block level */\n      padding-left: 0;  /* reset padding because ul and ol */\n      margin-bottom: 0;\n    }\n    \n    \n    /* \n      Interactive list items\n      Use anchor or button elements instead of 'li's or 'div's to create interactive\n      list items. Includes an extra '.active' modifier class for selected items.\n    */\n    \n    & .list-group-item-action {\n      width: 100%; /* For 'button's (anchors become 100% by default though) */\n      color: ".concat(props.theme['$list-group-link-color'], ";\n      text-align: inherit; /* For 'button's (anchors inherit) */\n    \n      /* Hover state */\n      ").concat((0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], "\n          color: ".concat(props.theme['$list-group-link-hover-color'], ";\n          text-decoration: none;\n          background-color: ").concat(props.theme['$list-group-hover-bg'], ";\n        ")), ";\n      \n      &:active {\n        color: ").concat(props.theme['$list-group-link-active-color'], ";\n        background-color: ").concat(props.theme['$list-group-link-active-bg'], ";\n      }\n    }\n    \n    /* \n      Individual list items\n      Use on 'li's or 'div's within the '.list-group' parent.\n    */\n    \n    & .list-group-item {\n      position: relative;\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center;\n      padding: ").concat(props.theme['$list-group-item-padding-y'], " ").concat(props.theme['$list-group-item-padding-x'], ";\n      /* Place the border on the list items and negative margin up for better styling */\n      margin-bottom: -").concat(props.theme['$list-group-border-width'], ";\n      background-color: ").concat(props.theme['$list-group-bg'], ";\n      border: ").concat(props.theme['$list-group-border-width'], " solid ").concat(props.theme['$list-group-border-color'], ";\n    \n      &:first-child {\n        ").concat((0, _borderRadius.borderTopRadius)(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']), "\n      }\n\n      &:last-child {\n        margin-bottom: 0;\n        ").concat((0, _borderRadius.borderBottomRadius)(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']), "\n      }\n      \n      ").concat((0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], 'text-decoration: none;'), "\n        \n      &.disabled,\n      &:disabled {   \n        color: ").concat(props.theme['$list-group-disabled-color'], ";\n        cursor: ").concat(props.theme['$cursor-disabled'], ";\n        background-color: ").concat(props.theme['$list-group-disabled-bg'], ";\n      }\n    \n    \n      &.active {\n        z-index: 2; /* Place active items above their siblings for proper border styling */\n        color: ").concat(props.theme['$list-group-active-color'], ";\n        background-color: ").concat(props.theme['$list-group-active-bg'], ";\n        border-color: ").concat(props.theme['$list-group-active-border'], ";     \n      }\n    }\n    \n    /* \n      Flush list items\n      Remove borders and border-radius to keep list group items edge-to-edge. Most\n      useful within other components (e.g., cards).\n    */\n\n    &.list-group-flush {\n      .list-group-item {\n        border-right: 0;\n        border-left: 0;\n        border-radius: 0;\n      }\n      \n      &:first-child {\n        .list-group-item:first-child {\n          border-top: 0;\n        }\n      }\n\n      &:last-child {\n        .list-group-item:last-child {\n          border-bottom: 0;\n        }\n      }\n    }\n    \n    \n    \n    /* Contextual variants\n    \n     Add modifier classes to change text and background color on individual items.\n     Organizationally, this must come after the ':hover' states.\n    */\n    \n    ").concat((0, _listGroup.listGroupItemVariant)(props.theme['$enable-hover-media-query'], 'success', props.theme['$state-success-bg'], props.theme['$state-success-text']), "\n    ").concat((0, _listGroup.listGroupItemVariant)(props.theme['$enable-hover-media-query'], 'info', props.theme['$state-info-bg'], props.theme['$state-info-text']), "\n    ").concat((0, _listGroup.listGroupItemVariant)(props.theme['$enable-hover-media-query'], 'warning', props.theme['$state-warning-bg'], props.theme['$state-warning-text']), "\n    ").concat((0, _listGroup.listGroupItemVariant)(props.theme['$enable-hover-media-query'], 'danger', props.theme['$state-danger-bg'], props.theme['$state-danger-text']), "\n  ");
});
ListGroup.defaultProps = defaultProps;
ListGroup.propTypes = propTypes;
/** @component */

var _default = ListGroup;
exports.default = _default;