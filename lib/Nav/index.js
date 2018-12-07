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

var _nav = require("@bootstrap-styled/css-mixins/lib/nav");

var _navbar = require("@bootstrap-styled/css-mixins/lib/navbar");

var _Ul = _interopRequireDefault(require("../Ul"));

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
  tag: _Ul.default,
  toggleable: 'false',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$border-width': '1px',
    '$font-size-lg': '1.25rem',
    '$body-bg': '#fff',
    '$component-active-bg': '#0275d8',
    '$component-active-color': '#fff',
    '$border-radius': '.25rem',
    '$navbar-padding-x': '1rem',
    '$navbar-padding-y': '0.5rem',
    '$nav-link-padding': '.5em 1em',
    '$nav-disabled-link-color': '#636c72',
    '$nav-tabs-border-color': '#ddd',
    '$nav-tabs-border-width': '1px',
    '$nav-tabs-border-radius': '.5em 1em',
    '$nav-tabs-link-hover-border-color': '#eceeef',
    '$nav-tabs-active-link-hover-color': '#464a4c',
    '$nav-tabs-active-link-hover-bg': '#fff',
    '$nav-tabs-active-link-hover-border-color': '#ddd',
    '$nav-pills-border-radius': '.25rem',
    '$nav-pills-active-link-color': '#fff',
    '$nav-pills-active-link-bg': '#0275d8',
    '$cursor-disabled': 'not-allowed',
    '$zindex-navbar': '1000',
    '$zindex-navbar-fixed': '1030',
    '$zindex-navbar-sticky': '1030',
    '$navbar-brand-padding-y': '.25rem',
    '$navbar-divider-padding-y': '.425rem',
    '$navbar-toggler-padding-y': '.5rem',
    '$navbar-toggler-padding-x': '.75rem',
    '$navbar-toggler-font-size': '1.25rem',
    '$navbar-toggler-border-radius': '.25rem',
    '$navbar-light-active-color': 'rgba(0,0,0,.9)',
    '$navbar-light-color': 'rgba(0,0,0,.5)',
    '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
    '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
    '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
    '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
    '$navbar-inverse-color': 'rgba(255,255,255,.5)',
    '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
    '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
    '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Toggles passed as a string. Can be `true` or `false` */
  toggleable: _propTypes.default.string,

  /** Toggles inline CSS style. */
  inline: _propTypes.default.bool,

  /** Toggles vertical CSS style. */
  vertical: _propTypes.default.bool,

  /** Toggles justified CSS style. */
  justified: _propTypes.default.bool,

  /** Toggles fill CSS style. */
  fill: _propTypes.default.bool,

  /** Toggles tabs CSS style. */
  tabs: _propTypes.default.bool,

  /** Toggles pills CSS style. */
  pills: _propTypes.default.bool,

  /** Toggles stacked CSS style. */
  stacked: _propTypes.default.bool,

  /** Toggles navbar CSS style. */
  navbar: _propTypes.default.bool,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func, _propTypes.default.object]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$border-width': _propTypes.default.string,
    '$font-size-lg': _propTypes.default.string,
    '$body-bg': _propTypes.default.string,
    '$component-active-bg': _propTypes.default.string,
    '$component-active-color': _propTypes.default.string,
    '$border-radius': _propTypes.default.string,
    '$navbar-padding-x': _propTypes.default.string,
    '$navbar-padding-y': _propTypes.default.string,
    '$nav-link-padding': _propTypes.default.string,
    '$nav-disabled-link-color': _propTypes.default.string,
    '$nav-tabs-border-color': _propTypes.default.string,
    '$nav-tabs-border-width': _propTypes.default.string,
    '$nav-tabs-border-radius': _propTypes.default.string,
    '$nav-tabs-link-hover-border-color': _propTypes.default.string,
    '$nav-tabs-active-link-hover-color': _propTypes.default.string,
    '$nav-tabs-active-link-hover-bg': _propTypes.default.string,
    '$nav-tabs-active-link-hover-border-color': _propTypes.default.string,
    '$nav-pills-border-radius': _propTypes.default.string,
    '$nav-pills-active-link-color': _propTypes.default.string,
    '$nav-pills-active-link-bg': _propTypes.default.string,
    '$cursor-disabled': _propTypes.default.string,
    '$zindex-navbar': _propTypes.default.string,
    '$zindex-navbar-fixed': _propTypes.default.string,
    '$zindex-navbar-sticky': _propTypes.default.string,
    '$navbar-brand-padding-y': _propTypes.default.string,
    '$navbar-divider-padding-y': _propTypes.default.string,
    '$navbar-toggler-padding-y': _propTypes.default.string,
    '$navbar-toggler-padding-x': _propTypes.default.string,
    '$navbar-toggler-font-size': _propTypes.default.string,
    '$navbar-toggler-border-radius': _propTypes.default.string,
    '$navbar-light-active-color': _propTypes.default.string,
    '$navbar-light-color': _propTypes.default.string,
    '$navbar-light-hover-color': _propTypes.default.string,
    '$navbar-light-toggler-border': _propTypes.default.string,
    '$navbar-light-disabled-color': _propTypes.default.string,
    '$navbar-light-toggler-bg': _propTypes.default.string,
    '$navbar-inverse-active-color': _propTypes.default.string,
    '$navbar-inverse-color': _propTypes.default.string,
    '$navbar-inverse-hover-color': _propTypes.default.string,
    '$navbar-inverse-toggler-border': _propTypes.default.string,
    '$navbar-inverse-toggler-bg': _propTypes.default.string,
    '$navbar-inverse-disabled-color': _propTypes.default.string
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
  /** Toggles disabled CSS style. */

};
exports.propTypes = propTypes;

var NavUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavUnstyled, _React$Component);

  function NavUnstyled() {
    _classCallCheck(this, NavUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavUnstyled).apply(this, arguments));
  }

  _createClass(NavUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          tabs = _omit.tabs,
          pills = _omit.pills,
          fill = _omit.fill,
          inline = _omit.inline,
          stacked = _omit.stacked,
          vertical = _omit.vertical,
          justified = _omit.justified,
          navbar = _omit.navbar,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "tabs", "pills", "fill", "inline", "stacked", "vertical", "justified", "navbar", "tag"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, navbar ? 'navbar-nav' : 'nav', {
        'nav-tabs': tabs,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-inline': inline,
        'nav-stacked': stacked,
        'nav-justified': justified,
        'flex-column': vertical
      }), cssModule);
      return _react.default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return NavUnstyled;
}(_react.default.Component);
/**
 * A classic `<Nav />` component.
 * Use **list** or **link based**, with **horizontal** or **vertical** alignment.
 * you can also use `tabs` or `pills` attributes with `justified` and `fill` attributes.
 * It also work well with with **flex utilities** and you can even add `<Dropdown />` menu.
 */


_defineProperty(NavUnstyled, "propTypes", propTypes);

_defineProperty(NavUnstyled, "defaultProps", defaultProps);

var Nav = (0, _styledComponents.default)(NavUnstyled).withConfig({
  displayName: "Nav",
  componentId: "ggw7qv-0"
})(["", ""], function (props) {
  return "\n    ".concat((0, _nav.nav)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']), "\n    \n    ").concat((0, _navbar.navbar)(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']), "\n  ");
});
Nav.defaultProps = defaultProps;
Nav.propTypes = propTypes;
/** @component */

var _default = Nav;
exports.default = _default;