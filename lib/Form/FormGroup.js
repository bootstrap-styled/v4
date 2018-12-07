"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

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
  tag: 'div'
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: _propTypes.default.node,

  /** Toggles input radio or checkbox check. */
  check: _propTypes.default.bool,

  /** Color variables. Can be: */
  color: _propTypes.default.oneOf(['success', 'warning', 'danger', '']),

  /** Toggles disabled check of input radio or checkbox. */
  disabled: _propTypes.default.bool,

  /** Use that property to pass a ref callback to the native button component. */
  ref: _propTypes.default.func,

  /** Toggles inline CSS display. */
  inline: _propTypes.default.bool,

  /** Toggles row CSS display. */
  row: _propTypes.default.bool,

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
exports.propTypes = propTypes;

var FormGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormGroup, _React$Component);

  function FormGroup() {
    _classCallCheck(this, FormGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormGroup).apply(this, arguments));
  }

  _createClass(FormGroup, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          row = _this$props.row,
          disabled = _this$props.disabled,
          inline = _this$props.inline,
          color = _this$props.color,
          check = _this$props.check,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["className", "cssModule", "row", "disabled", "inline", "color", "check", "tag"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, color ? "has-".concat(color) : false, row ? 'row' : false, check ? 'form-check' : 'form-group', check && disabled ? 'disabled' : false, inline ? 'form-check-inline' : false), cssModule);
      return _react.default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return FormGroup;
}(_react.default.Component);

_defineProperty(FormGroup, "propTypes", propTypes);

_defineProperty(FormGroup, "defaultProps", defaultProps);

FormGroup.defaultProps = defaultProps;
FormGroup.propTypes = propTypes;
/** @component */

var _default = FormGroup;
exports.default = _default;