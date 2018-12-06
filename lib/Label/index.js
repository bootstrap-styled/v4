"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _buttons = require("@bootstrap-styled/css-mixins/lib/buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

var stringOrNumberProp = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]);

var columnProps = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.shape({
  size: stringOrNumberProp,
  push: stringOrNumberProp,
  pull: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$btn-padding-x': _propTypes.default.string,
    '$btn-padding-y': _propTypes.default.string,
    '$btn-line-height': _propTypes.default.string,
    '$btn-font-weight': _propTypes.default.string,
    '$btn-box-shadow': _propTypes.default.string,
    '$btn-focus-box-shadow': _propTypes.default.string,
    '$btn-active-box-shadow': _propTypes.default.string,
    '$btn-primary-color': _propTypes.default.string,
    '$btn-primary-bg': _propTypes.default.string,
    '$btn-primary-border': _propTypes.default.string,
    '$btn-secondary-color': _propTypes.default.string,
    '$btn-secondary-bg': _propTypes.default.string,
    '$btn-secondary-border': _propTypes.default.string,
    '$btn-info-color': _propTypes.default.string,
    '$btn-info-bg': _propTypes.default.string,
    '$btn-info-border': _propTypes.default.string,
    '$btn-success-color': _propTypes.default.string,
    '$btn-success-bg': _propTypes.default.string,
    '$btn-success-border': _propTypes.default.string,
    '$btn-warning-color': _propTypes.default.string,
    '$btn-warning-bg': _propTypes.default.string,
    '$btn-warning-border': _propTypes.default.string,
    '$btn-danger-color': _propTypes.default.string,
    '$btn-danger-bg': _propTypes.default.string,
    '$btn-danger-border': _propTypes.default.string,
    '$btn-link-disabled-color': _propTypes.default.string,
    '$btn-padding-x-sm': _propTypes.default.string,
    '$btn-padding-y-sm': _propTypes.default.string,
    '$btn-padding-x-lg': _propTypes.default.string,
    '$btn-padding-y-lg': _propTypes.default.string,
    '$btn-block-spacing-y': _propTypes.default.string,
    '$btn-border-radius': _propTypes.default.string,
    '$btn-border-radius-lg': _propTypes.default.string,
    '$btn-border-radius-sm': _propTypes.default.string,
    '$btn-transition': _propTypes.default.string,
    '$link-hover-decoration': _propTypes.default.string,
    '$enable-rounded': _propTypes.default.bool,
    '$enable-shadows': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool,
    '$enable-transitions': _propTypes.default.bool
  }),

  /** Toggles check CSS style. */
  check: _propTypes.default.bool,

  /** Specified node element will be passed as children of `<Label />` component. */
  children: _propTypes.default.node,

  /** Toggles disabled CSS style. */
  disabled: _propTypes.default.bool,

  /** `For` attribute ill be replaced with the specified one. */
  for: _propTypes.default.string,

  /** Toggles hidden CSS style. */
  hidden: _propTypes.default.bool,

  /** Toggles inline CSS style. */
  inline: _propTypes.default.bool,

  /** `size` attribute ill be replaced with the specified one. */
  size: _propTypes.default.string,

  /** Extra small columns variables. */
  xs: columnProps,

  /** Small columns variables. */
  sm: columnProps,

  /** Medium columns variables. */
  md: columnProps,

  /** Large columns variables. */
  lg: columnProps,

  /** Extra large columns variables. */
  xl: columnProps,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;
var defaultProps = {
  tag: 'label',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': true,
    '$enable-transitions': true,
    '$btn-padding-x': '1rem',
    '$btn-padding-y': '.5rem',
    '$btn-line-height': '1.25',
    '$btn-font-weight': 'normal',
    '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-primary-color': '#fff',
    '$btn-primary-bg': '#0275d8',
    '$btn-primary-border': '#0275d8',
    '$btn-secondary-color': '#292b2c',
    '$btn-secondary-bg': '#fff',
    '$btn-secondary-border': '#ccc',
    '$btn-info-color': '#fff',
    '$btn-info-bg': '#5bc0de',
    '$btn-info-border': '#5bc0de',
    '$btn-success-color': '#fff',
    '$btn-success-bg': '#5cb85c',
    '$btn-success-border': '#5cb85c',
    '$btn-warning-color': '#fff',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-warning-border': '#f0ad4e',
    '$btn-danger-color': '#fff',
    '$btn-danger-bg': '#d9534f',
    '$btn-danger-border': '#d9534f',
    '$btn-link-disabled-color': '#636c72',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-block-spacing-y': '.5rem',
    '$btn-border-radius': '.25rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$btn-transition': 'all .2s ease-in-out'
  }
};
exports.defaultProps = defaultProps;

var LabelUnstyled = function LabelUnstyled(props) {
  // eslint-disable-line
  var _omit = (0, _lodash.default)(props, ['theme']),
      className = _omit.className,
      cssModule = _omit.cssModule,
      hidden = _omit.hidden,
      Tag = _omit.tag,
      check = _omit.check,
      inline = _omit.inline,
      disabled = _omit.disabled,
      size = _omit.size,
      htmlFor = _omit.for,
      attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "hidden", "tag", "check", "inline", "disabled", "size", "for"]);

  var colClasses = [];
  colSizes.forEach(function (colSize) {
    // eslint-disable-line
    var columnProp = props[colSize];
    delete attributes[colSize];

    if (columnProp && columnProp.size) {
      var _cn;

      colClasses.push((0, _mapToCssModules.default)((0, _classnames.default)((_cn = {}, _defineProperty(_cn, "col-".concat(colSize, "-").concat(columnProp.size), columnProp.size), _defineProperty(_cn, "push-".concat(colSize, "-").concat(columnProp.push), columnProp.push), _defineProperty(_cn, "pull-".concat(colSize, "-").concat(columnProp.pull), columnProp.pull), _defineProperty(_cn, "offset-".concat(colSize, "-").concat(columnProp.offset), columnProp.offset), _cn))), cssModule);
    } else if (columnProp) {
      colClasses.push("col-".concat(colSize, "-").concat(columnProp));
    }
  });
  var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, hidden ? 'sr-only' : false, check ? "form-check-".concat(inline ? 'inline' : 'label') : false, check && inline && disabled ? 'disabled' : false, size ? "col-form-label-".concat(size) : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
  return _react.default.createElement(Tag, _extends({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
};
/**
 * `<Label />` defines a label for an <input> element.
 */


var Label = (0, _styledComponents.default)(LabelUnstyled).withConfig({
  displayName: "Label",
  componentId: "sc-1f2mnn3-0"
})(["", ""], function (props) {
  return "\n    /* Reboot Scss */\n    touch-action: manipulation;\n    /* Allow labels to use margin for spacing. */\n    display: inline-block;\n    margin-bottom: ".concat(props.theme['$label-margin-bottom'], ";\n\n    ").concat((0, _buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']), "\n ");
});
Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
/** @component */

var _default = Label;
exports.default = _default;