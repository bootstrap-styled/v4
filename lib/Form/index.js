"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _unitUtils = _interopRequireDefault(require("@bootstrap-styled/utils/lib/unitUtils"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _forms = require("@bootstrap-styled/css-mixins/lib/forms");

var _breakpoints = require("@bootstrap-styled/css-mixins/lib/breakpoints");

var _customForms = require("@bootstrap-styled/css-mixins/lib/customForms");

var _grid = require("@bootstrap-styled/css-mixins/lib/grid");

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
  tag: 'form',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$gray-dark': '#292b2c',
    '$gray': '#464a4c',
    '$gray-light': '#636c72',
    '$gray-lighter': '#eceeef',
    '$gray-lightest': '#f7f7f9',
    '$border-width': '1px',
    '$spacer': '1rem',
    '$spacer-y': '1rem',
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$grid-gutter-width-base': '30px',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    },
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$text-muted': '#636c72',
    '$line-height-base': '1.5',
    '$line-height-lg': '1.6',
    '$line-height-sm': '1.3',
    '$border-radius': '.25rem',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-x': '.75rem',
    '$input-padding-y': '.5rem',
    '$input-line-height': '1.25',
    '$input-bg': '#fff',
    '$input-bg-disabled': '#eceeef',
    '$input-color': '#464a4c',
    '$input-border-color': 'rgba(0, 0, 0, 0.15)',
    '$input-btn-border-width': '1px',
    '$input-box-shadow': 'rgba(0, 0, 0, 0.15)',
    '$input-border-radius': '.25rem',
    '$input-border-radius-lg': '.3rem',
    '$input-border-radius-sm': '.2rem',
    '$input-bg-focus': '#fff',
    '$input-border-focus': 'hsl(207.79999999999995, 98.2%, 53.4%)',
    '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(undefined,.6)',
    '$input-color-focus': '#464a4c',
    '$input-color-placeholder': '#636c72',
    '$input-padding-x-sm': '.5rem',
    '$input-padding-y-sm': '.25rem',
    '$input-padding-x-lg': '1.5rem',
    '$input-padding-y-lg': '.75rem',
    '$input-height': '2.5rem',
    '$input-height-sm': '1.6375rem',
    '$input-height-lg': '3.5rem',
    '$input-transition': '.15s',
    '$form-text-margin-top': '.25rem',
    '$form-feedback-margin-top': '.25rem',
    '$form-check-margin-bottom': '.5rem',
    '$form-check-input-gutter': '1.25rem',
    '$form-check-input-margin-y': '.25rem',
    '$form-check-input-margin-x': '.25rem',
    '$form-check-inline-margin-x': '.75rem',
    '$form-group-margin-bottom': '1rem',
    '$input-group-addon-bg': '#eceeef',
    '$input-group-addon-border-color': 'rgba(0, 0, 0, 0.15)',
    '$cursor-disabled': 'not-allowed',
    '$custom-control-gutter': '1.5rem',
    '$custom-control-spacer-x': '1rem',
    '$custom-control-spacer-y': '.25rem',
    '$custom-control-indicator-size': '1rem',
    '$custom-control-indicator-bg': '#ddd',
    '$custom-control-indicator-bg-size': '50%',
    '$custom-control-indicator-box-shadow': 'inset 0 .25rem .25rem rgba(0, 0, 0, 0.1)',
    '$custom-control-disabled-cursor': 'not-allowed',
    '$custom-control-disabled-indicator-bg': '#eceeef',
    '$custom-control-disabled-description-color': '#636c72',
    '$custom-control-checked-indicator-color': '#fff',
    '$custom-control-checked-indicator-bg': '#0275d8',
    '$custom-control-checked-indicator-box-shadow': 'none',
    '$custom-control-focus-indicator-box-shadow': '0 0 0 1px #fff, 0 0 0 3px #0275d8',
    '$custom-control-active-indicator-color': '#fff',
    '$custom-control-active-indicator-bg': 'hsl(207.79999999999995, 98.2%, 57.7%)',
    '$custom-control-active-indicator-box-shadow': 'none',
    '$custom-checkbox-radius': '.25rem',
    '$custom-checkbox-checked-icon': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="#fff" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E\')',
    '$custom-checkbox-indeterminate-bg': '#0275d8',
    '$custom-checkbox-indeterminate-indicator-color': '#fff',
    '$custom-checkbox-indeterminate-icon': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="undefined" d="M0 2h4"/%3E%3C/svg%3E\')',
    '$custom-checkbox-indeterminate-box-shadow': 'none',
    '$custom-radio-radius': '50%',
    '$custom-radio-checked-icon': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="#fff"/%3E%3C/svg%3E\')',
    '$custom-select-padding-x': '.75rem',
    '$custom-select-padding-y': '.375rem',
    '$custom-select-indicator-padding': '1rem',
    '$custom-select-line-height': '1.25',
    '$custom-select-color': '#464a4c',
    '$custom-select-disabled-color': '#636c72',
    '$custom-select-bg': '#fff',
    '$custom-select-disabled-bg': '#eceeef',
    '$custom-select-bg-size': '8px 10px',
    '$custom-select-indicator-color': '#333',
    '$custom-select-indicator': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="#333" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E\')',
    '$custom-select-border-width': '1px',
    '$custom-select-border-color': 'rgba(0, 0, 0, 0.15)',
    '$custom-select-border-radius': '.25rem',
    '$custom-select-focus-border-color': 'hsl(207.79999999999995, 98.2%, 53.4%)',
    '$custom-select-focus-box-shadow': 'inset 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 5px rgba(hsl(207.79999999999995, 98.2%, 53.4%), .5) ',
    '$custom-select-sm-font-size': '75%',
    '$custom-file-height': '2.5rem',
    '$custom-file-width': '14rem',
    '$custom-file-focus-box-shadow': '0 0 0 .075rem #fff, 0 0 0 .2rem #0275d8',
    '$custom-file-padding-x': '.5rem',
    '$custom-file-padding-y': '1rem',
    '$custom-file-line-height': '1.5',
    '$custom-file-color': '#464a4c',
    '$custom-file-bg': '#fff',
    '$custom-file-border-width': '1px',
    '$custom-file-border-color': 'rgba(0, 0, 0, 0.15)',
    '$custom-file-border-radius': '.25rem',
    '$custom-file-box-shadow': 'inset 0 .2rem .4rem rgba(0, 0, 0, 0.05)',
    '$custom-file-button-color': '#464a4c',
    '$custom-file-button-bg': '#eceeef',
    '$custom-file-text': {
      placeholder: {
        en: 'Choose file...'
      },
      'button-label': {
        en: 'Browse'
      }
    },
    '$form-icon-success-color': '#5cb85c',
    '$form-icon-success': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="undefined" d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3E%3C/svg%3E\')',
    '$form-icon-warning-color': '#f0ad4e',
    '$form-icon-warning': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="undefined" d="M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z"/%3E%3C/svg%3E\')',
    '$form-icon-danger-color': '#d9534f',
    '$form-icon-danger': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="undefined" viewBox="-2 -2 7 7"%3E%3Cpath stroke="%23d9534f" d="M0 0l3 3m0-3L0 3"/%3E%3Ccircle r=".5"/%3E%3Ccircle cx="3" r=".5"/%3E%3Ccircle cy="3" r=".5"/%3E%3Ccircle cx="3" cy="3" r=".5"/%3E%3C/svg%3E\')'
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$brand-primary': _propTypes.default.string,
    '$brand-success': _propTypes.default.string,
    '$brand-info': _propTypes.default.string,
    '$brand-warning': _propTypes.default.string,
    '$brand-danger': _propTypes.default.string,
    '$gray-dark': _propTypes.default.string,
    '$gray': _propTypes.default.string,
    '$gray-light': _propTypes.default.string,
    '$gray-lighter': _propTypes.default.string,
    '$gray-lightest': _propTypes.default.string,
    '$border-width': _propTypes.default.string,
    '$spacer': _propTypes.default.string,
    '$spacer-y': _propTypes.default.string,
    '$grid-breakpoints': _propTypes.default.shape({
      'xs': _propTypes.default.string,
      'sm': _propTypes.default.string,
      'md': _propTypes.default.string,
      'lg': _propTypes.default.string,
      'xl': _propTypes.default.string
    }),
    '$grid-gutter-width-base': _propTypes.default.string,
    '$grid-gutter-widths': _propTypes.default.shape({
      'xs': _propTypes.default.string,
      'sm': _propTypes.default.string,
      'md': _propTypes.default.string,
      'lg': _propTypes.default.string,
      'xl': _propTypes.default.string
    }),
    '$font-size-base': _propTypes.default.string,
    '$font-size-lg': _propTypes.default.string,
    '$font-size-sm': _propTypes.default.string,
    '$font-size-xs': _propTypes.default.string,
    '$text-muted': _propTypes.default.string,
    '$line-height-base': _propTypes.default.string,
    '$line-height-lg': _propTypes.default.string,
    '$line-height-sm': _propTypes.default.string,
    '$border-radius': _propTypes.default.string,
    '$border-radius-lg': _propTypes.default.string,
    '$border-radius-sm': _propTypes.default.string,
    '$input-padding-x': _propTypes.default.string,
    '$input-padding-y': _propTypes.default.string,
    '$input-line-height': _propTypes.default.string,
    '$input-bg': _propTypes.default.string,
    '$input-bg-disabled': _propTypes.default.string,
    '$input-color': _propTypes.default.string,
    '$input-border-color': _propTypes.default.string,
    '$input-btn-border-width': _propTypes.default.string,
    '$input-box-shadow': _propTypes.default.string,
    '$input-border-radius': _propTypes.default.string,
    '$input-border-radius-lg': _propTypes.default.string,
    '$input-border-radius-sm': _propTypes.default.string,
    '$input-bg-focus': _propTypes.default.string,
    '$input-border-focus': _propTypes.default.string,
    '$input-box-shadow-focus': _propTypes.default.string,
    '$input-color-focus': _propTypes.default.string,
    '$input-color-placeholder': _propTypes.default.string,
    '$input-padding-x-sm': _propTypes.default.string,
    '$input-padding-y-sm': _propTypes.default.string,
    '$input-padding-x-lg': _propTypes.default.string,
    '$input-padding-y-lg': _propTypes.default.string,
    '$input-height': _propTypes.default.string,
    '$input-height-sm': _propTypes.default.string,
    '$input-height-lg': _propTypes.default.string,
    '$input-transition': _propTypes.default.string,
    '$form-text-margin-top': _propTypes.default.string,
    '$form-feedback-margin-top': _propTypes.default.string,
    '$form-check-margin-bottom': _propTypes.default.string,
    '$form-check-input-gutter': _propTypes.default.string,
    '$form-check-input-margin-y': _propTypes.default.string,
    '$form-check-input-margin-x': _propTypes.default.string,
    '$form-check-inline-margin-x': _propTypes.default.string,
    '$form-group-margin-bottom': _propTypes.default.string,
    '$input-group-addon-bg': _propTypes.default.string,
    '$input-group-addon-border-color': _propTypes.default.string,
    '$cursor-disabled': _propTypes.default.string,
    '$custom-control-gutter': _propTypes.default.string,
    '$custom-control-spacer-x': _propTypes.default.string,
    '$custom-control-spacer-y': _propTypes.default.string,
    '$custom-control-indicator-size': _propTypes.default.string,
    '$custom-control-indicator-bg': _propTypes.default.string,
    '$custom-control-indicator-bg-size': _propTypes.default.string,
    '$custom-control-indicator-box-shadow': _propTypes.default.string,
    '$custom-control-disabled-cursor': _propTypes.default.string,
    '$custom-control-disabled-indicator-bg': _propTypes.default.string,
    '$custom-control-disabled-description-color': _propTypes.default.string,
    '$custom-control-checked-indicator-color': _propTypes.default.string,
    '$custom-control-checked-indicator-bg': _propTypes.default.string,
    '$custom-control-checked-indicator-box-shadow': _propTypes.default.string,
    '$custom-control-focus-indicator-box-shadow': _propTypes.default.string,
    '$custom-control-active-indicator-color': _propTypes.default.string,
    '$custom-control-active-indicator-bg': _propTypes.default.string,
    '$custom-control-active-indicator-box-shadow': _propTypes.default.string,
    '$custom-checkbox-radius': _propTypes.default.string,
    '$custom-checkbox-checked-icon': _propTypes.default.string,
    '$custom-checkbox-indeterminate-bg': _propTypes.default.string,
    '$custom-checkbox-indeterminate-indicator-color': _propTypes.default.string,
    '$custom-checkbox-indeterminate-icon': _propTypes.default.string,
    '$custom-checkbox-indeterminate-box-shadow': _propTypes.default.string,
    '$custom-radio-radius': _propTypes.default.string,
    '$custom-radio-checked-icon': _propTypes.default.string,
    '$custom-select-padding-x': _propTypes.default.string,
    '$custom-select-padding-y': _propTypes.default.string,
    '$custom-select-indicator-padding': _propTypes.default.string,
    '$custom-select-line-height': _propTypes.default.string,
    '$custom-select-color': _propTypes.default.string,
    '$custom-select-disabled-color': _propTypes.default.string,
    '$custom-select-bg': _propTypes.default.string,
    '$custom-select-disabled-bg': _propTypes.default.string,
    '$custom-select-bg-size': _propTypes.default.string,
    '$custom-select-indicator-color': _propTypes.default.string,
    '$custom-select-indicator': _propTypes.default.string,
    '$custom-select-border-width': _propTypes.default.string,
    '$custom-select-border-color': _propTypes.default.string,
    '$custom-select-border-radius': _propTypes.default.string,
    '$custom-select-focus-border-color': _propTypes.default.string,
    '$custom-select-focus-box-shadow': _propTypes.default.string,
    '$custom-select-sm-font-size': _propTypes.default.string,
    '$custom-file-height': _propTypes.default.string,
    '$custom-file-width': _propTypes.default.string,
    '$custom-file-focus-box-shadow': _propTypes.default.string,
    '$custom-file-padding-x': _propTypes.default.string,
    '$custom-file-padding-y': _propTypes.default.string,
    '$custom-file-line-height': _propTypes.default.string,
    '$custom-file-color': _propTypes.default.string,
    '$custom-file-bg': _propTypes.default.string,
    '$custom-file-border-width': _propTypes.default.string,
    '$custom-file-border-color': _propTypes.default.string,
    '$custom-file-border-radius': _propTypes.default.string,
    '$custom-file-box-shadow': _propTypes.default.string,
    '$custom-file-button-color': _propTypes.default.string,
    '$custom-file-button-bg': _propTypes.default.string,
    '$custom-file-text': _propTypes.default.object,
    '$form-icon-success-color': _propTypes.default.string,
    '$form-icon-success': _propTypes.default.string,
    '$form-icon-warning-color': _propTypes.default.string,
    '$form-icon-warning': _propTypes.default.string,
    '$form-icon-danger-color': _propTypes.default.string,
    '$form-icon-danger': _propTypes.default.string
  }),

  /** Toggles inline CSS style. */
  inline: _propTypes.default.bool,

  /** Use that property to pass a ref callback to the native button component. */
  ref: _propTypes.default.func,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func]),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};

var FormUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormUnstyled, _React$Component);

  function FormUnstyled() {
    _classCallCheck(this, FormUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormUnstyled).apply(this, arguments));
  }

  _createClass(FormUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          inline = _omit.inline,
          Tag = _omit.tag,
          ref = _omit.ref,
          rest = _objectWithoutProperties(_omit, ["className", "cssModule", "inline", "tag", "ref"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, inline ? 'form-inline' : false), cssModule);
      return _react.default.createElement(Tag, _extends({
        ref: ref,
        className: classes
      }, rest));
    }
  }]);

  return FormUnstyled;
}(_react.default.Component);
/**
 * Use our `<Form />` component in order to quick create reliable Form. It use `<FormsGroup />` containing `<Label />` and `<Input />` you want to use.
 * You can also use `hidden` attribute in order to hide `<Label />` or `check` (when using checkbox).
 */


_defineProperty(FormUnstyled, "propTypes", propTypes);

_defineProperty(FormUnstyled, "defaultProps", defaultProps);

var Form = (0, _styledComponents.default)(FormUnstyled).withConfig({
  displayName: "Form",
  componentId: "sc-15bnz0c-0"
})(["  ", ""], function (props) {
  return "\n    /*\n     Textual form controls\n    */\n\n    ".concat((0, _forms.formControl)(props.theme['$enable-rounded'], props.theme['$enable-transitions'], props.theme['$enable-shadows'], props.theme['$input-height'], props.theme['$input-padding-y'], props.theme['$input-padding-x'], props.theme['$font-size-base'], props.theme['$input-line-height'], props.theme['$input-color'], props.theme['$input-bg'], props.theme['$input-border-radius'], props.theme['$input-btn-border-width'], props.theme['$input-border-color'], props.theme['$input-transition'], props.theme['$input-box-shadow'], props.theme['$input-color-focus'], props.theme['$input-bg-focus'], props.theme['$input-border-focus'], props.theme['$input-box-shadow-focus'], props.theme['$input-color-placeholder'], props.theme['$input-bg-disabled'], props.theme['$cursor-disabled']), "\n    \n    select.form-control {\n      &:focus::-ms-value {\n        /* Suppress the nested default white text on blue background highlight given to\n         the selected option text when the (still closed) <select> receives focus\n         in IE and (under certain conditions) Edge, as it looks bad and cannot be made to\n         match the appearance of the native widget.\n         See https://github.com/twbs/bootstrap/issues/19398.\n         */\n        color: ").concat(props.theme['$input-color'], ";\n        background-color: ").concat(props.theme['$input-bg'], ";\n      }\n    }\n\n    /* Make file inputs better match text inputs by forcing them to new lines. */\n    & .form-control-file,\n    .form-control-range {\n      display: block;\n    }\n\n    /*\n     Labels\n    */\n\n    /* For use with horizontal and inline forms, when you need the label text to */\n    /* align with the form controls. */\n    & .col-form-label {\n      padding-top: calc(").concat(props.theme['$input-padding-y'], " - ").concat(props.theme['$input-btn-border-width'], " *2);\n      padding-bottom: calc(").concat(props.theme['$input-padding-y'], " - ").concat(props.theme['$input-btn-border-width'], " *2);\n      margin-bottom: 0; /* Override the '<label>' default */\n    }\n\n    & .col-form-label-lg {\n      padding-top: calc(").concat(props.theme['$input-padding-y-lg'], " - ").concat(props.theme['$input-btn-border-width'], " *2);\n      padding-bottom: calc(").concat(props.theme['$input-padding-y-lg'], " - ").concat(props.theme['$input-btn-border-width'], " *2);\n      font-size: ").concat(props.theme['$font-size-lg'], ";\n    }\n\n    & .col-form-label-sm {\n      padding-top: calc(").concat(props.theme['$input-padding-y-sm'], " - ").concat(props.theme['$input-btn-border-width'], " *2);\n      padding-bottom: calc(").concat(props.theme['$input-padding-y-sm'], " - ").concat(props.theme['$input-btn-border-width'], " *2);\n      font-size: ").concat(props.theme['$font-size-sm'], ";\n    }\n\n    /*\n     Legends\n    */\n\n    /* For use with horizontal and inline forms, when you need the legend text to */\n    /* be the same size as regular labels, and to align with the form controls. */\n    & .col-form-legend {\n      padding-top: ").concat(props.theme['$input-padding-y'], ";\n      padding-bottom: ").concat(props.theme['$input-padding-y'], ";\n      margin-bottom: 0;\n      font-size: ").concat(props.theme['$font-size-base'], ";\n    }\n\n\n    /* Static form control text\n\n     Apply class to an element to make any string of text align with labels in a\n     horizontal form layout.\n    */\n\n    & .form-control-static {\n      padding-top: ").concat(props.theme['$input-padding-y'], ";\n      padding-bottom: ").concat(props.theme['$input-padding-y'], ";\n      margin-bottom: 0; /* match inputs if this class comes on inputs with default margins */\n      line-height: ").concat(props.theme['$input-line-height'], ";\n      border: solid transparent;\n      border-width: ").concat(props.theme['$input-btn-border-width'], " 0;\n\n      &.form-control-sm,\n      &.form-control-lg {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n\n\n    /* Form control sizing\n\n     Build on .form-control with modifier classes to decrease or increase the\n     height and font-size of form controls.\n\n     The .form-group-* form-control variations are sadly duplicated to avoid the\n     issue documented in https://github.com/twbs/bootstrap/issues/15074.\n    */\n\n    & .form-control-sm {\n      padding: ").concat(props.theme['$input-padding-y-sm'], " ").concat(props.theme['$input-padding-x-sm'], ";\n      font-size: ").concat(props.theme['$font-size-sm'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-sm']), "\n    }\n\n    select.form-control-sm {\n      &:not([size]):not([multiple]) {\n        height: ").concat(props.theme['$input-height-sm'], ";\n      }\n    }\n\n    & .form-control-lg {\n      padding: ").concat(props.theme['$input-padding-y-lg'], " ").concat(props.theme['$input-padding-x-lg'], ";\n      font-size: ").concat(props.theme['$font-size-lg'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-lg']), "\n    }\n\n    select.form-control-lg {\n      &:not([size]):not([multiple]) {\n        height: ").concat(props.theme['$input-height-lg'], ";\n      }\n    }\n\n\n    /* Form groups Designed to help with the organization and spacing of vertical forms. For horizontal forms, use the predefined grid classes. */\n\n    &.form-group,\n     & .form-group {\n      margin-bottom: ").concat(props.theme['$form-group-margin-bottom'], ";\n    }\n\n    & .form-text {\n      display: block;\n      margin-top: ").concat(props.theme['$form-text-margin-top'], "\n    }\n\n\n    /* Checkboxes and radios Indent the labels to position radios/checkboxes as hanging controls. */\n\n    & .form-check {\n      position: relative;\n      display: block;\n      margin-bottom: ").concat(props.theme['$form-check-margin-bottom'], ";\n\n      &.disabled {\n        .form-check-label {\n          color: ").concat(props.theme['$text-muted'], ";\n          cursor: ").concat(props.theme['$cursor-disabled'], ";\n        }\n      }\n    }\n\n    & .form-check-label {\n      padding-left: ").concat(props.theme['$form-check-input-gutter'], ";\n      margin-bottom: 0; /* Override default <label> bottom margin */\n      cursor: pointer;\n    }\n\n    & .form-check-input {\n      position: absolute;\n      margin-top: ").concat(props.theme['$form-check-input-margin-y'], ";\n      margin-left: -").concat(props.theme['$form-check-input-gutter'], ";\n\n      &:only-child {\n        position: static;\n      }\n    }\n\n    /* Radios and checkboxes on same line */\n    & .form-check-inline {\n      display: inline-block;\n      .form-check-label {\n        vertical-align: middle;\n      }\n\n      + .form-check-inline {\n        margin-left: ").concat(props.theme['$form-check-inline-margin-x'], ";\n      }\n\n      &.disabled {\n        color: ").concat(props.theme['$text-muted'], ";\n        cursor: ").concat(props.theme['$cursor-disabled'], ";\n      }\n    }\n\n\n    /* Form control feedback states Apply contextual and semantic states to individual form controls. */\n    & .form-control-feedback {\n      margin-top: ").concat(props.theme['$form-feedback-margin-top'], ";\n    }\n\n    & .form-control-success,\n    & .form-control-warning,\n    & .form-control-danger {\n      padding-right: ").concat(_unitUtils.default.math.multiply(props.theme['$input-padding-x'], 3), ";\n      background-repeat: no-repeat;\n      background-position: center right ").concat(_unitUtils.default.math.divide(props.theme['$input-height'], 4), ";\n      background-size: ").concat(_unitUtils.default.math.divide(props.theme['$input-height'], 2), " ").concat(_unitUtils.default.math.divide(props.theme['$input-height'], 2), ";\n    }\n\n    /* Form validation states */\n    & .has-success {\n      ").concat((0, _forms.formControlValidation)(props.theme['$enable-shadows'], props.theme['$brand-success'], props.theme['$box-shadow']), "\n\n      .form-control-success {\n        background-image: ").concat(props.theme['$form-icon-success'], ";\n      }\n    }\n\n    & .has-warning {\n      ").concat((0, _forms.formControlValidation)(props.theme['$enable-shadows'], props.theme['$brand-warning'], props.theme['$box-shadow']), "\n\n      .form-control-warning {\n        background-image: ").concat(props.theme['$form-icon-warning'], ";\n      }\n    }\n\n    & .has-danger {\n      ").concat((0, _forms.formControlValidation)(props.theme['$enable-shadows'], props.theme['$brand-danger'], props.theme['$box-shadow']), "\n\n      .form-control-danger {\n        background-image: ").concat(props.theme['$form-icon-danger'], ";\n      }\n    }\n\n\n    /* Inline forms\n\n     Make forms appear inline(-block) by adding the .form-inline class. Inline\n     forms begin stacked on extra small (mobile) devices and then go inline when\n     viewports reach <768px.\n\n     Requires wrapping inputs and labels with .form-group for proper display of\n     default HTML form controls and our custom form controls (e.g., input groups).\n    */\n\n    &.form-inline {\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center; /* Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height) */\n\n      & .form-check {\n         width: 100%;\n      }\n\n      /* Kick in the inline */\n      ").concat((0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], "\n          label {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-bottom: 0;\n          }\n          \n          /* Inline-block all the things for inline */\n          & .form-group {\n            display: flex;\n            flex: 0 0 auto;\n            flex-flow: row wrap;\n            margin-bottom: 0;\n          }\n      \n          /* Allow folks to *not* use .form-group */\n          & .form-control {\n            display: inline-block;\n            width: auto; /* Prevent labels from stacking above inputs in .form-group */\n            vertical-align: middle;\n          }\n      \n          /* Make static controls behave like regular ones */\n          & .form-control-static {\n            display: inline-block;\n          }\n      \n          & .input-group {\n            width: auto;\n          }\n          \n          & .form-control-label {\n             margin-bottom: 0;\n            vertical-align: middle;\n          }\n      \n          /* Remove default margin on radios/checkboxes that were used for stacking, and */\n          /*  then undo the floating of radios and checkboxes to match. */\n          & .form-check {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: auto;\n            margin-top: 0;\n            margin-bottom: 0;\n          }\n          & .form-check-label {\n            padding-left: 0;\n          }\n          & .form-check-input {\n            position: relative;\n            margin-left: 0;\n            margin-top: 0;\n            margin-right: ".concat(props.theme['$form-check-input-margin-x'], ";\n          }\n          \n          /* Custom form controls */\n          & .custom-control {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-left: 0;\n          }\n          \n          & .custom-control-indicator {\n            position: static;\n            display: inline-block;\n            margin-right: ").concat(props.theme['$form-check-input-margin-x'], "; /* Flexbox alignment means we lose our HTML space here, so we compensate. */\n            vertical-align: text-bottom;\n          }\n          \n          /* Re-override the feedback icon. */\n          & .has-feedback .form-control-feedback {\n            top: 0;\n          }\n        ")), "\n    }\n    ").concat((0, _customForms.customForms)(props.theme['$enable-rounded'], props.theme['$enable-shadows'], props.theme['$custom-control-checked-indicator-box-shadow'], props.theme['$custom-control-active-indicator-box-shadow'], props.theme['$custom-control-indicator-box-shadow'], props.theme['$custom-checkbox-indeterminate-box-shadow'], props.theme['$custom-select-focus-box-shadow'], props.theme['$custom-file-focus-box-shadow'], props.theme['$custom-file-box-shadow'], props.theme['$custom-select-border-radius'], props.theme['$custom-file-border-radius'], props.theme['$custom-checkbox-radius'], props.theme['$input-bg'], props.theme['$custom-select-line-height'], props.theme['$line-height-base'], props.theme['$custom-control-gutter'], props.theme['$custom-control-spacer-x'], props.theme['$custom-control-checked-indicator-color'], props.theme['$custom-control-checked-indicator-bg'], props.theme['$custom-control-focus-indicator-box-shadow'], props.theme['$custom-control-active-indicator-color'], props.theme['$custom-control-active-indicator-bg'], props.theme['$custom-control-disabled-cursor'], props.theme['$custom-control-disabled-indicator-bg'], props.theme['$custom-control-disabled-description-color'], props.theme['$custom-control-indicator-size'], props.theme['$custom-control-indicator-bg'], props.theme['$custom-control-indicator-bg-size'], props.theme['$custom-checkbox-checked-icon'], props.theme['$custom-checkbox-indeterminate-bg'], props.theme['$custom-checkbox-indeterminate-icon'], props.theme['$custom-radio-radius'], props.theme['$custom-radio-checked-icon'], props.theme['$custom-control-spacer-y'], props.theme['$border-width'], props.theme['$input-height'], props.theme['$custom-select-padding-y'], props.theme['$custom-select-padding-x'], props.theme['$custom-select-indicator-padding'], props.theme['$custom-select-color'], props.theme['$custom-select-bg'], props.theme['$custom-select-indicator'], props.theme['$custom-select-bg-size'], props.theme['$custom-select-border-width'], props.theme['$custom-select-border-color'], props.theme['$custom-select-focus-border-color'], props.theme['$input-color'], props.theme['$custom-select-disabled-color'], props.theme['$cursor-disabled'], props.theme['$custom-select-disabled-bg'], props.theme['$custom-select-sm-font-size'], props.theme['$custom-file-width'], props.theme['$custom-file-height'], props.theme['$custom-file-padding-x'], props.theme['$custom-file-padding-y'], props.theme['$custom-file-line-height'], props.theme['$custom-file-color'], props.theme['$custom-file-bg'], props.theme['$custom-file-border-width'], props.theme['$custom-file-border-color'], props.theme['$custom-file-button-color'], props.theme['$custom-file-button-bg'], props.theme['$custom-file-text']), "\n    & .row {\n      ").concat((0, _grid.makeRow)(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']), "\n    }\n  ");
});
Form.defaultProps = defaultProps;
Form.propTypes = propTypes;
/** @component */

var _default = Form;
exports.default = _default;
module.exports = exports["default"];