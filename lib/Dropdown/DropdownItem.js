"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _H = _interopRequireDefault(require("../H6"));

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
  tag: 'button'
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /** Toggles disabled CSS style. */
  disabled: _propTypes.default.bool,

  /** Toggles divider visibility. */
  divider: _propTypes.default.bool,

  /** Toggles header element display. */
  header: _propTypes.default.bool,

  /** Call specified function when on click event is triggered. */
  onClick: _propTypes.default.func,

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

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (e) {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        e.preventDefault();
        return;
      }

      if (_this.props.onClick) {
        _this.props.onClick(e);
      }

      _this.context.toggle();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTabIndex", function () {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        return '-1';
      }

      return '0';
    });

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var tabIndex = this.getTabIndex();
      /* eslint-disable prefer-const */

      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          divider = _this$props.divider,
          disabled = _this$props.disabled,
          Tag = _this$props.tag,
          header = _this$props.header,
          attributes = _objectWithoutProperties(_this$props, ["className", "cssModule", "divider", "disabled", "tag", "header"]);
      /* eslint-enable prefer-const */


      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, {
        disabled: disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);

      if (Tag === 'button') {
        if (header) {
          Tag = _H.default;
        } else if (divider) {
          Tag = 'div';
        }
      }

      return _react.default.createElement(Tag, _extends({
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }, attributes));
    }
  }]);

  return DropdownItem;
}(_react.default.Component);

_defineProperty(DropdownItem, "propTypes", propTypes);

_defineProperty(DropdownItem, "contextTypes", {
  toggle: _propTypes.default.func
});

_defineProperty(DropdownItem, "defaultProps", defaultProps);

DropdownItem.defaultProps = defaultProps;
DropdownItem.propTypes = propTypes;
/** @component */

var _default = DropdownItem;
exports.default = _default;