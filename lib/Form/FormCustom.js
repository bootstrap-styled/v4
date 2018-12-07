"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _Label = _interopRequireDefault(require("../Label"));

var _Input = _interopRequireDefault(require("../Input"));

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

var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: _propTypes.default.node,

  /** Specified id and name will be attributed to input of type radio. */
  radio: _propTypes.default.shape({
    id: _propTypes.default.string,
    name: _propTypes.default.string
  }),

  /** Toggles default checked input of type radio or checkbox. */
  defaultChecked: _propTypes.default.bool,

  /** Toggles checked input of type radio or checkbox. */
  checked: _propTypes.default.bool,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var FormCustom =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormCustom, _React$Component);

  function FormCustom() {
    _classCallCheck(this, FormCustom);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormCustom).apply(this, arguments));
  }

  _createClass(FormCustom, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          radio = _this$props.radio,
          children = _this$props.children,
          checked = _this$props.checked,
          defaultChecked = _this$props.defaultChecked,
          attributes = _objectWithoutProperties(_this$props, ["className", "cssModule", "radio", "children", "checked", "defaultChecked"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'custom-control', radio ? 'custom-radio' : 'custom-checkbox'), cssModule);
      var CustomInput = radio ? _react.default.createElement(_Input.default, {
        defaultChecked: defaultChecked,
        checked: checked,
        type: "radio",
        id: radio.id,
        name: radio.name,
        className: "custom-control-input"
      }) : _react.default.createElement(_Input.default, {
        defaultChecked: defaultChecked,
        checked: checked,
        type: "checkbox",
        className: "custom-control-input"
      });
      return _react.default.createElement(_Label.default, _extends({
        className: classes
      }, attributes), CustomInput, _react.default.createElement("span", {
        className: "custom-control-indicator"
      }), _react.default.createElement("span", {
        className: "custom-control-description"
      }, children));
    }
  }]);

  return FormCustom;
}(_react.default.Component);

_defineProperty(FormCustom, "propTypes", propTypes);

FormCustom.propTypes = propTypes;
/** @component */

var _default = FormCustom;
exports.default = _default;