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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  tag: 'button',
  color: 'primary',
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
var propTypes = {
  /** Toggles active CSS color. */
  active: _propTypes.default.bool,

  /** Toggles block CSS display. */
  block: _propTypes.default.bool,

  /** Toggles disable mouse event and CSS color. */
  disabled: _propTypes.default.bool,

  /** Toggles outline CSS border and background color. */
  outline: _propTypes.default.bool,

  /** @ignore */
  className: _propTypes.default.string,

  /** Color variables. Can be: */
  color: _propTypes.default.oneOf(['link', 'primary', 'secondary', 'success', 'info', 'warning', 'danger']),

  /** Use that property to pass a ref callback to the native button component. */
  ref: _propTypes.default.func,

  /** Start specified function when on click event is trigger. */
  onClick: _propTypes.default.func,

  /** Buttons use default size base and can use different size such as: */
  size: _propTypes.default.oneOf(['sm', 'lg']),

  /** Toggles drop up CSS style. */
  dropup: _propTypes.default.bool,

  /** Replace the default component tag by the one specified. Can be: */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func]),

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

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var ButtonUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonUnstyled, _React$Component);

  function ButtonUnstyled() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ButtonUnstyled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ButtonUnstyled)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    });

    return _this;
  }

  _createClass(ButtonUnstyled, [{
    key: "render",
    value: function render() {
      var _cn;

      /* eslint-disable prefer-const */
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          active = _omit.active,
          disabled = _omit.disabled,
          block = _omit.block,
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          color = _omit.color,
          outline = _omit.outline,
          size = _omit.size,
          ref = _omit.ref,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["active", "disabled", "block", "className", "cssModule", "dropup", "color", "outline", "size", "ref", "tag"]);
      /* eslint-enable prefer-const */


      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'btn', (_cn = {
        dropup: dropup,
        active: active,
        disabled: disabled
      }, _defineProperty(_cn, "btn-".concat(size), size), _defineProperty(_cn, 'btn-block', block), _cn), "btn".concat(outline ? '-outline' : '', "-").concat(color)), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      return _react.default.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined,
        className: classes,
        ref: ref
      }, attributes, {
        onClick: this.onClick
      }));
    }
  }]);

  return ButtonUnstyled;
}(_react.default.Component);
/**
 * Use our default **link**, **colored** or **outlined** `Buttons` blocks, to emphasize part of your page.
 * You can also use different `size` or another `tag` instead of `<Button />`.
 */


_defineProperty(ButtonUnstyled, "propTypes", propTypes);

_defineProperty(ButtonUnstyled, "defaultProps", defaultProps);

var Button = (0, _styledComponents.default)(ButtonUnstyled).withConfig({
  displayName: "Button",
  componentId: "h8watj-0"
})(["", " "], function (props) {
  return "\n    ".concat((0, _buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']), "\n ");
});
Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
/** @component */

var _default = Button;
exports.default = _default;