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

var _buttons = require("@bootstrap-styled/css-mixins/lib/buttons");

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
  tag: 'input',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': false,
    '$enable-transitions': true,
    '$font-weight-normal': 'normal',
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$btn-padding-x': '1rem',
    '$btn-padding-y': '.5rem',
    '$btn-line-height': '1.25',
    '$btn-font-weight': 'normal',
    '$btn-transition': 'all .2s ease-in-out',
    '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$btn-block-spacing-y': '.5rem',
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
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$btn-border-radius': '.25rem',
    '$btn-border-radius-lg': '1.25rem',
    '$btn-border-radius-sm': '.875rem',
    '$input-btn-border-width': '1px',
    // For form controls and buttons
    '$link-color': '#0275d8',
    '$link-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
    '$link-hover-decoration': 'underline',
    '$cursor-disabled': 'not-allowed'
  },
  type: 'text'
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<Input />` component. */
  children: _propTypes.default.node,

  /** Specified string define the type of input to display. */
  type: _propTypes.default.oneOf(['button', 'checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'textarea', 'select', 'time', 'url', 'week']),

  /** Specified string define the input size, small or large. */
  size: _propTypes.default.oneOf(['sm', 'lg']),

  /** Specified string define the input state. */
  state: _propTypes.default.oneOf(['success', 'warning', 'danger']),

  /** Use that property to pass a ref callback to the native button component. */
  ref: _propTypes.default.func,

  /** Toggles static CSS style. */
  static: _propTypes.default.bool,

  /** Toggles addon CSS style. */
  addon: _propTypes.default.bool,

  /** Call specified function when `onChange` event is triggered. */
  onChange: _propTypes.default.func,

  /** Toggles indeterminate CSS style. */
  indeterminate: _propTypes.default.bool,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-shadows': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool,
    '$enable-transitions': _propTypes.default.bool,
    '$font-weight-normal': _propTypes.default.string,
    '$font-size-base': _propTypes.default.string,
    '$font-size-lg': _propTypes.default.string,
    '$font-size-sm': _propTypes.default.string,
    '$font-size-xs': _propTypes.default.string,
    '$btn-padding-x': _propTypes.default.string,
    '$btn-padding-y': _propTypes.default.string,
    '$btn-line-height': _propTypes.default.string,
    '$btn-font-weight': _propTypes.default.string,
    '$btn-transition': _propTypes.default.string,
    '$btn-box-shadow': _propTypes.default.string,
    '$btn-block-spacing-y': _propTypes.default.string,
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
    '$btn-padding-x-lg': _propTypes.default.string,
    '$btn-padding-y-lg': _propTypes.default.string,
    '$btn-padding-x-sm': _propTypes.default.string,
    '$btn-padding-y-sm': _propTypes.default.string,
    '$btn-border-radius': _propTypes.default.string,
    '$btn-border-radius-lg': _propTypes.default.string,
    '$btn-border-radius-sm': _propTypes.default.string,
    '$input-btn-border-width': _propTypes.default.string,
    // For form controls and buttons
    '$link-color': _propTypes.default.string,
    '$link-hover-color': _propTypes.default.string,
    '$link-hover-decoration': _propTypes.default.string,
    '$cursor-disabled': _propTypes.default.string
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var InputUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputUnstyled, _React$Component);

  function InputUnstyled() {
    _classCallCheck(this, InputUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputUnstyled).apply(this, arguments));
  }

  _createClass(InputUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          type = _omit.type,
          size = _omit.size,
          state = _omit.state,
          tag = _omit.tag,
          addon = _omit.addon,
          staticInput = _omit.static,
          ref = _omit.ref,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "type", "size", "state", "tag", "addon", "static", "ref"]);

      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = selectInput || textareaInput ? type : 'input';
      var formControlClass = 'form-control';

      if (staticInput) {
        formControlClass = "".concat(formControlClass, "-static");
        Tag = tag;
      } else if (fileInput) {
        formControlClass = "".concat(formControlClass, "-file");
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, state ? "form-control-".concat(state) : false, size ? "form-control-".concat(size) : false, formControlClass), cssModule);

      if (Tag === 'input') {
        attributes.type = type;
      }

      return _react.default.createElement(Tag, _extends({}, attributes, {
        ref: ref,
        className: classes
      }));
    }
  }]);

  return InputUnstyled;
}(_react.default.Component);
/**
 * `<Input />` component specifies an input field where the user can enter data.
 */


_defineProperty(InputUnstyled, "propTypes", propTypes);

_defineProperty(InputUnstyled, "defaultProps", defaultProps);

var Input = (0, _styledComponents.default)(InputUnstyled).withConfig({
  displayName: "Input",
  componentId: "wun2o8-0"
})(["", ""], function (props) {
  return "\n    /* Reboot Scss */\n    touch-action: manipulation;\n    \n    &[type=\"radio\"],\n    &[type=\"checkbox\"] {\n      box-sizing: border-box; /* 1. Add the correct box sizing in IE 10- */\n      padding: 0; /* 2. Remove the padding in IE 10- */\n      /*\n       Apply a disabled cursor for radios and checkboxes.\n       Note: Neither radios nor checkboxes can be readonly.\n      */\n   \n      &:disabled {\n        cursor: ".concat(props.theme['$cursor-disabled'], ";\n      }\n    }\n    \n    /* Normalize includes font: inherit;, so font-family. font-size, etc are */\n    /* properly inherited. However, line-height is not inherited there. */\n    line-height: inherit;\n   \n    &.disabled {\n      cursor: ").concat(props.theme['$cursor-disabled'], ";\n    }\n   \n    &[type=\"date\"],\n    &[type=\"time\"],\n    &[type=\"datetime-local\"],\n    &[type=\"month\"] {\n    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari\n       bug where setting a custom line-height prevents text from being vertically\n       centered within the input.\n       Bug report: https://github.com/twbs/bootstrap/issues/11266\n     */\n      -webkit-appearance: listbox;\n    }\n      \n    /* Correct the cursor style of increment and decrement buttons in Chrome. */\n    &[type=\"number\"]::-webkit-inner-spin-button,\n    &[type=\"number\"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n    \n    &[type=\"search\"] {\n      /* This overrides the extra rounded corners on search inputs in iOS so that our\n      .form-control class can properly style them. Note that this cannot simply\n       be added to .form-control as it is not specific enough. For details, see\n       https://github.com/twbs/bootstrap/issues/11586.\n       */\n      outline-offset: -2px; /* 2. Correct the outline style in Safari. */\n      -webkit-appearance: none;\n    }\n    \n    /* Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */\n    &[type=\"search\"]::-webkit-search-cancel-button,\n    &[type=\"search\"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n    \n    ").concat((0, _buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']), "\n ");
});
Input.defaultProps = defaultProps;
Input.propTypes = propTypes;
/** @component */

var _default = Input;
exports.default = _default;