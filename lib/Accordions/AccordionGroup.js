"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
   * Define current active accordion.
   */
  activeAccordionName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]),

  /**
   * Call specified function when `on click` event is triggered.
   */
  onChange: _propTypes.default.func,

  /**
   * Toggles heading component visibility.
   */
  'heading-component': _propTypes.default.bool
};
exports.propTypes = propTypes;

var AccordionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AccordionGroup, _React$Component);

  function AccordionGroup() {
    _classCallCheck(this, AccordionGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionGroup).apply(this, arguments));
  }

  _createClass(AccordionGroup, [{
    key: "getChildContext",
    // eslint-disable-line react/prefer-stateless-function
    value: function getChildContext() {
      var _this$props = this.props,
          activeAccordionName = _this$props.activeAccordionName,
          onChange = _this$props.onChange,
          headingComponent = _this$props['heading-component'];
      return {
        accordionGroup: {
          activeAccordionName: activeAccordionName,
          onClick: onChange,
          'heading-component': headingComponent
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = _extends({}, this.props);

      var _omit = (0, _lodash.default)(attributes, ['activeAccordionName', 'onClick', 'headingComponent']),
          restAfterChildContext = _extends({}, _omit);

      return _react.default.createElement("div", restAfterChildContext);
    }
  }]);

  return AccordionGroup;
}(_react.default.Component);

_defineProperty(AccordionGroup, "propTypes", propTypes);

_defineProperty(AccordionGroup, "childContextTypes", {
  accordionGroup: _propTypes.default.object
});

AccordionGroup.propTypes = propTypes;
/** @component */

var _default = AccordionGroup;
exports.default = _default;