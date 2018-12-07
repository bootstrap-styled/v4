"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _basicMathUtils = require("basic-math-utils");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  valueMin: 0,
  valueMax: 100,
  valueNow: 0,
  striped: false,
  animated: false
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<ProgressBar />` component. */
  children: _propTypes.default.node,

  /** Defines the minimum value of the progress bar. */
  valueMin: _propTypes.default.number,

  /** Defines the current value of the progress bar. */
  valueNow: _propTypes.default.number,

  /** Defines the maximum value of the progress bar. */
  valueMax: _propTypes.default.number,

  /** Defines the size height. */
  height: _propTypes.default.string,

  /** Toggles striped CSS style. */
  striped: _propTypes.default.bool,

  /** Toggles animated CSS style. */
  animated: _propTypes.default.bool,

  /** Color variables. Can be: */
  color: _propTypes.default.oneOf(['success', 'info', 'warning', 'danger', '']),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProgressBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProgressBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      classNameProgress: '',
      classNameProgressBar: ''
    });

    return _this;
  }

  _createClass(ProgressBar, [{
    key: "getWidth",
    value: function getWidth(valueNow, valueMin, valueMax) {
      return "".concat(_basicMathUtils.rangeUtils.mapBetween(valueNow, valueMin, valueMax), "%");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          color = _this$props.color,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          valueNow = _this$props.valueNow,
          valueMin = _this$props.valueMin,
          valueMax = _this$props.valueMax,
          height = _this$props.height,
          striped = _this$props.striped,
          animated = _this$props.animated,
          rest = _objectWithoutProperties(_this$props, ["children", "color", "className", "cssModule", "valueNow", "valueMin", "valueMax", "height", "striped", "animated"]); // eslint-disable-line no-unused-vars


      var progressBarClasses = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'progress-bar', animated ? 'progress-bar-animated' : null, color ? "bg-".concat(color) : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
      return _react.default.createElement("div", _extends({
        className: progressBarClasses,
        style: Object.assign({
          width: this.getWidth(valueNow, valueMin, valueMax)
        }, {
          height: height
        })
      }, rest), children);
    }
  }]);

  return ProgressBar;
}(_react.default.Component);

_defineProperty(ProgressBar, "propTypes", propTypes);

_defineProperty(ProgressBar, "defaultProps", defaultProps);

ProgressBar.defaultProps = defaultProps;
ProgressBar.propTypes = propTypes;
var _default = ProgressBar;
exports.default = _default;