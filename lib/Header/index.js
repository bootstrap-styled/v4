"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _navbar = require("@bootstrap-styled/css-mixins/lib/navbar");

var _conditional = require("@bootstrap-styled/css-mixins/lib/conditional");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$border-width': '1px',
    '$font-size-lg': '1.25rem',
    '$border-radius': '.25rem',
    '$navbar-padding-x': '1rem',
    '$navbar-padding-y': '0.5rem',
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
  /** Toggle shadow CSS style. */
  shadowHeader: _propTypes.default.bool,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool,
    '$border-width': _propTypes.default.string,
    '$font-size-lg': _propTypes.default.string,
    '$border-radius': _propTypes.default.string,
    '$navbar-padding-x': _propTypes.default.string,
    '$navbar-padding-y': _propTypes.default.string,
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
  })
};
/**
 * You can use `<Header />` with **components** or **className**.
 * Alternatively we provide **Display** header in order to give more flexibility on header sizing.
 */

exports.propTypes = propTypes;

var Header = _styledComponents.default.header.withConfig({
  displayName: "Header",
  componentId: "sc-1gwmqbb-0"
})(["", "  "], function (props) {
  return "\n    ".concat((0, _navbar.navbar)(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']), "\n    ").concat((0, _conditional.ifThen)(props.shadowHeader, 'box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);'), "\n  ");
});

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;
/** @component */

var _default = Header;
exports.default = _default;