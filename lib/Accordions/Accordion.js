"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("../Cards/Card"));

var _CardHeader = _interopRequireDefault(require("../Cards/CardHeader"));

var _Collapse = _interopRequireDefault(require("../Collapse"));

var _H = _interopRequireDefault(require("../H5"));

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
  tag: _Card.default,
  delay: 350
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

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func, _propTypes.default.node, _propTypes.default.object]),

  /** Delay transition in milliseconds before and after collapse. Can be: */
  delay: _propTypes.default.oneOfType([_propTypes.default.shape({
    show: _propTypes.default.number,
    hide: _propTypes.default.number
  }), _propTypes.default.number]),

  /** Heading used as title for accordion. Can be: */
  heading: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),

  /** `<AccordionGroup />` define active accordion with accordion name. */
  name: _propTypes.default.string
};
exports.propTypes = propTypes;

var Accordion =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      // extract keys for div
      var _this$props = this.props,
          className = _this$props.className,
          name = _this$props.name,
          children = _this$props.children,
          heading = _this$props.heading,
          Tag = _this$props.tag,
          delay = _this$props.delay,
          attributes = _objectWithoutProperties(_this$props, ["className", "name", "children", "heading", "tag", "delay"]);

      var _this$context$accordi = this.context.accordionGroup,
          activeAccordionName = _this$context$accordi.activeAccordionName,
          onClick = _this$context$accordi.onClick,
          HeadingComponent = _this$context$accordi['heading-component'];
      var optional = {
        isOpened: false
      };

      if (typeof onClick === 'function') {
        optional.onClick = function () {
          return onClick(name);
        };
      }

      if (activeAccordionName === name) {
        optional.isOpened = true;
      }

      var accordionHeading = HeadingComponent ? _react.default.createElement(HeadingComponent, {
        onClick: optional.onClick
      }, heading) // eslint-disable-line jsx-a11y/no-static-element-interactions
      : _react.default.createElement(_CardHeader.default, {
        onClick: optional.onClick
      }, _react.default.createElement(_H.default, null, heading)) // eslint-disable-line jsx-a11y/no-static-element-interactions
      ;
      return _react.default.createElement(Tag, _extends({
        className: className
      }, attributes), accordionHeading, _react.default.createElement(_Collapse.default, {
        delay: delay,
        isOpen: optional.isOpened
      }, children));
    }
  }]);

  return Accordion;
}(_react.default.Component);

_defineProperty(Accordion, "propTypes", propTypes);

_defineProperty(Accordion, "contextTypes", {
  accordionGroup: _propTypes.default.object
});

_defineProperty(Accordion, "defaultProps", defaultProps);

Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;
/** @component */

var _default = Accordion;
exports.default = _default;