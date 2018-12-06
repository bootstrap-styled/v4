"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  /** Size variables. Can be: */
  size: _propTypes.default.oneOf(['lg', '2x', '3x', '4x', '5x']),

  /** Color variables. Can be: */
  color: _propTypes.default.oneOf(['success', 'info', 'warning', 'danger', 'white', 'gray-dark', 'primary', 'hide'])
};
exports.propTypes = propTypes;

var FaUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FaUnstyled, _React$Component);

  function FaUnstyled() {
    _classCallCheck(this, FaUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(FaUnstyled).apply(this, arguments));
  }

  _createClass(FaUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */
    value: function render() {
      var _cn;

      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          color = _this$props.color,
          attributes = _objectWithoutProperties(_this$props, ["className", "size", "color"]);

      var classes = (0, _classnames.default)(className, 'fa', (_cn = {}, _defineProperty(_cn, "text-".concat(color), color), _defineProperty(_cn, "fa-".concat(size), size), _cn));
      return _react.default.createElement("i", {
        className: (0, _classnames.default)(classes, Object.keys(attributes).map(function (key) {
          return "fa-".concat(key);
        }))
      });
    }
  }]);

  return FaUnstyled;
}(_react.default.Component);

_defineProperty(FaUnstyled, "propTypes", propTypes);

var Fa = (0, _styledComponents.default)(FaUnstyled).withConfig({
  displayName: "Fa",
  componentId: "kluax7-0"
})(["&.fa-lg{vertical-align:-2%;}"]);
Fa.propTypes = propTypes;
/** @component */

var _default = Fa;
exports.default = _default;