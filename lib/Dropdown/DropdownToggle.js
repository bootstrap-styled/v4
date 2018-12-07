"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _Button = _interopRequireDefault(require("../Button"));

var _A = _interopRequireDefault(require("../A"));

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
  'aria-haspopup': true,
  'data-toggle': 'dropdown',
  color: 'primary'
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: _propTypes.default.node,

  /** Toggles popup CSS style. */
  'aria-haspopup': _propTypes.default.bool,

  /** Toggles caret CSS style. */
  caret: _propTypes.default.bool,

  /** Change toggle content with specified string. */
  'data-toggle': _propTypes.default.string,

  /** Toggles disabled CSS style. */
  disabled: _propTypes.default.bool,

  /** Call specified function when on click event is triggered. */
  onClick: _propTypes.default.func,

  /** Toggles nav CSS style. */
  nav: _propTypes.default.bool,

  /** Toggles split CSS style. */
  split: _propTypes.default.bool,

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

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (_this.props.nav && !_this.props.tag) {
        e.preventDefault();
      }

      if (_this.props.onClick) {
        _this.props.onClick(e);
      }

      _this.context.toggle();
    });

    return _this;
  }

  _createClass(DropdownToggle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          caret = _this$props.caret,
          split = _this$props.split,
          nav = _this$props.nav,
          tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["className", "cssModule", "caret", "split", "nav", "tag"]);

      var ariaLabel = attributes['aria-label'] || 'Toggle Dropdown';
      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        active: this.context.isOpen,
        'nav-link': nav
      }), cssModule);

      var children = attributes.children || _react.default.createElement("span", {
        className: "sr-only"
      }, ariaLabel);

      var Tag;

      if (nav && !tag) {
        Tag = _A.default;
        attributes.href = '#';
      } else if (!tag) {
        Tag = _Button.default;
      } else {
        Tag = tag;
      }

      return _react.default.createElement(Tag, _extends({
        className: classes,
        onClick: this.onClick,
        "aria-haspopup": "true",
        "aria-expanded": this.context.isOpen
      }, attributes), children);
    }
  }]);

  return DropdownToggle;
}(_react.default.Component);

_defineProperty(DropdownToggle, "propTypes", propTypes);

_defineProperty(DropdownToggle, "contextTypes", {
  isOpen: _propTypes.default.bool.isRequired,
  toggle: _propTypes.default.func.isRequired
});

_defineProperty(DropdownToggle, "defaultProps", defaultProps);

DropdownToggle.defaultProps = defaultProps;
DropdownToggle.propTypes = propTypes;
/** @component */

var _default = DropdownToggle;
exports.default = _default;