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

var _forms = require("@bootstrap-styled/css-mixins/lib/forms");

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
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': false,
    '$enable-transitions': true,
    '$font-size-base': '1rem',
    // Assumes the browser default, typically `16px`
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$line-height-base': '1.5',
    '$border-radius': '.25rem',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-x': '.75rem',
    '$input-padding-y': '.5rem',
    '$input-bg': '#fff',
    '$input-bg-disabled': '#eceeef',
    '$input-padding-x-lg': '1.5rem',
    '$input-padding-y-lg': '.75rem',
    '$input-line-height': '1.25',
    '$input-height': '2.5rem',
    '$input-box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$input-btn-border-width': '1px',
    // For form controls and buttons
    '$input-group-addon-bg': '#eceeef',
    '$input-border-color': 'rgba(0, 0, 0, 0.15)',
    '$input-border-focus': 'hsl(207.79999999999995, 98.2%, 53.4%)',
    '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(hsl(207.79999999999995, 98.2%, 53.4%),.6)',
    '$input-color': '#464a4c',
    '$input-group-addon-border-color': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    '$input-padding-x-sm': '.5rem',
    '$input-padding-y-sm': '.25rem',
    '$input-color-placeholder': '#636c72',
    '$input-border-radius-lg': '.3rem',
    '$input-border-radius-sm': '.2rem',
    '$input-border-radius': '.25rem',
    '$input-transition': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    '$input-color-focus': '#464a4c',
    '$input-bg-focus': '#fff',
    '$cursor-disabled': 'not-allowed'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified string define the input size, small or large. */
  size: _propTypes.default.oneOf(['sm', 'lg']),

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-shadows': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool,
    '$enable-transitions': _propTypes.default.bool,
    '$font-size-base': _propTypes.default.string,
    // Assumes the browser default, typically `16px`
    '$font-size-lg': _propTypes.default.string,
    '$font-size-sm': _propTypes.default.string,
    '$font-size-xs': _propTypes.default.string,
    '$line-height-base': _propTypes.default.string,
    '$border-radius': _propTypes.default.string,
    '$border-radius-lg': _propTypes.default.string,
    '$border-radius-sm': _propTypes.default.string,
    '$input-padding-x': _propTypes.default.string,
    '$input-padding-y': _propTypes.default.string,
    '$input-bg': _propTypes.default.string,
    '$input-bg-disabled': _propTypes.default.string,
    '$input-padding-x-lg': _propTypes.default.string,
    '$input-padding-y-lg': _propTypes.default.string,
    '$input-line-height': _propTypes.default.string,
    '$input-height': _propTypes.default.string,
    '$input-box-shadow': _propTypes.default.string,
    '$input-btn-border-width': _propTypes.default.string,
    // For form controls and buttons
    '$input-group-addon-bg': _propTypes.default.string,
    '$input-border-color': _propTypes.default.string,
    '$input-border-focus': _propTypes.default.string,
    '$input-box-shadow-focus': _propTypes.default.string,
    '$input-color': _propTypes.default.string,
    '$input-group-addon-border-color': _propTypes.default.string,
    '$input-padding-x-sm': _propTypes.default.string,
    '$input-padding-y-sm': _propTypes.default.string,
    '$input-color-placeholder': _propTypes.default.string,
    '$input-border-radius-lg': _propTypes.default.string,
    '$input-border-radius-sm': _propTypes.default.string,
    '$input-border-radius': _propTypes.default.string,
    '$input-transition': _propTypes.default.string,
    '$input-color-focus': _propTypes.default.string,
    '$input-bg-focus': _propTypes.default.string,
    '$cursor-disabled': _propTypes.default.string
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var InputGroupUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputGroupUnstyled, _React$Component);

  function InputGroupUnstyled() {
    _classCallCheck(this, InputGroupUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputGroupUnstyled).apply(this, arguments));
  }

  _createClass(InputGroupUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          size = _omit.size,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "tag", "size"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'input-group', size ? "input-group-".concat(size) : null), cssModule);
      return _react.default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return InputGroupUnstyled;
}(_react.default.Component);
/**
 * Use our `<InputGroup />` component with `<InputGroupAddon />` and `<InputGroupAddon />` components.
 * You can also add `Button Dropdown` and customize `Sizing`.
 */


_defineProperty(InputGroupUnstyled, "propTypes", propTypes);

_defineProperty(InputGroupUnstyled, "defaultProps", defaultProps);

var InputGroup = (0, _styledComponents.default)(InputGroupUnstyled).withConfig({
  displayName: "InputGroup",
  componentId: "sc-8o5j9s-0"
})(["", ""], function (props) {
  return "\n    /*\n     Base styles\n    */\n   \n    &.input-group {\n      position: relative;\n      display: flex;\n      width: 100%;\n\n      .form-control {\n        /* \n          Ensure that the input is always above the *appended* addon button for\n          proper border colors.\n        */\n        \n        position: relative;\n        z-index: 2;\n        flex: 1 1 auto;\n        /* Add width 1% and flex-basis auto to ensure that button will not wrap out */\n        /* the column. Applies to IE Edge+ and Firefox. Chrome does not require this. */\n        width: 1%;\n        margin-bottom: 0;\n        \n        ".concat((0, _hover.hoverFocusActive)(props.theme['$enable-hover-media-query'], 'z-index: 3;'), "\n      }\n    }\n    \n    & .input-group-addon,\n    & .input-group-btn,\n    &.input-group .form-control {\n      /* Vertically centers the content of the addons within the input group */\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n\n\n      &:not(:first-child):not(:last-child) {\n        ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], '0'), "\n      }\n    }\n   \n    & .input-group-addon,\n    & .input-group-btn {\n\n      white-space: nowrap;\n      vertical-align: middle; /* Match the inputs */\n    }\n   \n   \n    /* Sizing options\n    Remix the default form control sizing classes into new ones for easier\n    manipulation.\n    */\n   \n    &.input-group-lg > .form-control,\n    &.input-group-lg > .input-group-addon,\n    &.input-group-lg > .input-group-btn > .btn {\n      padding: ").concat(props.theme['$input-padding-y-lg'], " ").concat(props.theme['$input-padding-x-lg'], ";\n      font-size: ").concat(props.theme['$font-size-lg'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-lg']), "\n    }\n    \n    &.input-group-sm > .form-control,\n    &.input-group-sm > .input-group-addon,\n    &.input-group-sm > .input-group-btn > .btn {\n      padding: ").concat(props.theme['$input-padding-y-sm'], " ").concat(props.theme['$input-padding-x-sm'], ";\n      font-size: ").concat(props.theme['$font-size-sm'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-sm']), "\n    }\n   \n   \n    /*\n    Text input groups\n    */\n   \n    & .input-group-addon {\n      padding: ").concat(props.theme['$input-padding-y'], " ").concat(props.theme['$input-padding-x'], ";\n      margin-bottom: 0; /* Allow use of <label> elements by overriding our default margin-bottom */\n      font-size: ").concat(props.theme['$font-size-base'], ";\n      font-weight: normal;\n      line-height: ").concat(props.theme['$input-line-height'], ";\n      color: ").concat(props.theme['$input-color'], ";\n      text-align: center;\n      background-color: ").concat(props.theme['$input-group-addon-bg'], ";\n      border: ").concat(props.theme['$input-btn-border-width'], " solid ").concat(props.theme['$input-group-addon-border-color'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius']), "\n   \n      /* \n      Nuke default margins from checkboxes and radios to vertically center within.\n      */\n      input[type=\"radio\"],\n      input[type=\"checkbox\"] {\n        margin-top: 0;\n      }\n    }\n   \n   \n    /*\n     Reset rounded corners\n    */\n   \n    &.input-group .form-control:not(:last-child),\n    & .input-group-addon:not(:last-child),\n    & .input-group-btn:not(:last-child) > .btn,\n    & .input-group-btn:not(:last-child) > .btn-group > .btn,\n    & .input-group-btn:not(:last-child) > .dropdown-toggle,\n    & .input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n    & .input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n      ").concat((0, _borderRadius.borderRightRadius)(props.theme['$enable-rounded'], '0'), "\n    }\n    & .input-group-addon:not(:last-child) {\n      border-right: 0;\n    }\n    &.input-group .form-control:not(:first-child),\n    & .input-group-addon:not(:first-child),\n    & .input-group-btn:not(:first-child) > .btn,\n    & .input-group-btn:not(:first-child) > .btn-group > .btn,\n    & .input-group-btn:not(:first-child) > .dropdown-toggle,\n    & .input-group-btn:not(:last-child) > .btn:not(:first-child),\n    & .input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n      ").concat((0, _borderRadius.borderLeftRadius)(props.theme['$enable-rounded'], '0'), "\n    }\n    & .form-control + .input-group-addon:not(:first-child) {\n      border-left: 0;\n    }\n   \n    /*\n     Button input groups\n    */\n   \n    & .input-group-btn {\n      position: relative;\n      /* Jankily prevent input button groups from wrapping with white-space and\n      font-size in combination with inline-block on buttons.\n      */\n      font-size: 0;\n      white-space: nowrap;\n   \n      /* Negative margin for spacing, position for bringing hovered/focused/actived\n      element above the siblings.\n      */\n      > .btn {\n        position: relative;\n        /* Vertically stretch the button and center its content */\n        flex: 1;\n        \n        + .btn {\n          margin-left: -").concat(props.theme['$input-btn-border-width'], ";\n        }\n        \n        /* Bring the active button to the front */\n        ").concat((0, _hover.hoverFocusActive)(props.theme['$enable-hover-media-query'], 'z-index: 3;'), "\n      }\n   \n      /* Negative margin to only have a single, shared border between the two */\n      &:not(:last-child) {\n        > .btn,\n        > .btn-group {\n          margin-right: -").concat(props.theme['$input-btn-border-width'], ";\n        }\n      }\n      &:not(:first-child) {\n        > .btn,\n        > .btn-group {\n          z-index: 2;\n          margin-left: -").concat(props.theme['$input-btn-border-width'], ";\n          /* Because specificity */\n          ").concat((0, _hover.hoverFocusActive)(props.theme['$enable-hover-media-query'], 'z-index: 3;'), "\n        }\n      }\n    }\n    \n   /* Added So that Inputs in InputGroup grab the same .form-control class as in Component Form Not Bs4 */\n   ").concat((0, _forms.formControl)(props.theme['$enable-rounded'], props.theme['$enable-transitions'], props.theme['$enable-shadows'], props.theme['$input-height'], props.theme['$input-padding-y'], props.theme['$input-padding-x'], props.theme['$font-size-base'], props.theme['$input-line-height'], props.theme['$input-color'], props.theme['$input-bg'], props.theme['$input-border-radius'], props.theme['$input-btn-border-width'], props.theme['$input-border-color'], props.theme['$input-transition'], props.theme['$input-box-shadow'], props.theme['$input-color-focus'], props.theme['$input-bg-focus'], props.theme['$input-border-focus'], props.theme['$input-box-shadow-focus'], props.theme['$input-color-placeholder'], props.theme['$input-bg-disabled'], props.theme['$cursor-disabled']), "\n  ");
});
InputGroup.defaultProps = defaultProps;
InputGroup.propTypes = propTypes;
/** @component */

var _default = InputGroup;
exports.default = _default;