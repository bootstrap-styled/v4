"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TooltipUnstyled = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _tools = require("@bootstrap-styled/utils/lib/tools");

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _TetherContent = _interopRequireDefault(require("../TetherContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_DELAYS = {
  shape: 0,
  hide: 250
};
var defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show'
  },
  constraints: [{
    to: 'scrollParent',
    attachment: 'together none'
  }, {
    to: 'window',
    attachment: 'together none'
  }]
}; // propTypes need to be excluded of the tooltip class
// issue on : https://github.com/yannickcr/eslint-plugin-react/issues/203

var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Tooltip placement. Please consult [Tether documentation](http://tether.io/) for more information. */
  placement: _propTypes.default.oneOf(_tools.tetherAttachements),

  /** Id name of the component triggering tooltip action. */
  target: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,

  /** Toggles opened CSS display. */
  isOpen: _propTypes.default.bool,

  /** Toggles disabled CSS display. */
  disabled: _propTypes.default.bool,

  /** Tether object. Please consult [Tether documentation](http://tether.io/) for more information. */
  tether: _propTypes.default.object,

  /** Tether reference. Please consult [Tether documentation](http://tether.io/) for more information. */
  tetherRef: _propTypes.default.func,

  /** Call specified function when toggle action is triggered. */
  toggle: _propTypes.default.func,

  /** Toggles hide CSS display. */
  autohide: _propTypes.default.bool,

  /** Define delay before opening the tooltip. */
  delay: _propTypes.default.oneOfType([_propTypes.default.shape({
    show: _propTypes.default.number,
    hide: _propTypes.default.number
  }), _propTypes.default.number]),

  /** Theme variables. */
  theme: _propTypes.default.shape({
    '$zindex-tooltip': _propTypes.default.string,
    '$tooltip-max-width': _propTypes.default.string,
    '$tooltip-color': _propTypes.default.string,
    '$tooltip-bg': _propTypes.default.string,
    '$tooltip-opacity': _propTypes.default.string,
    '$tooltip-padding-y': _propTypes.default.string,
    '$tooltip-padding-x': _propTypes.default.string,
    '$tooltip-margin': _propTypes.default.string,
    '$tooltip-arrow-width': _propTypes.default.string,
    '$tooltip-arrow-color': _propTypes.default.string,
    '$component-active-color': _propTypes.default.string
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;
var defaultProps = {
  isOpen: false,
  placement: 'bottom',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: null,
  theme: {
    '$zindex-tooltip': '1070',
    '$tooltip-max-width': '200px',
    '$tooltip-color': '#fff',
    '$tooltip-bg': '#000',
    '$tooltip-opacity': '.9',
    '$tooltip-padding-y': '3px',
    '$tooltip-padding-x': '8px',
    '$tooltip-margin': '3px',
    '$tooltip-arrow-width': '5px',
    '$tooltip-arrow-color': '#000'
  }
};
exports.defaultProps = defaultProps;

var TooltipUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TooltipUnstyled, _React$Component);

  function TooltipUnstyled() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TooltipUnstyled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TooltipUnstyled)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focus: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.target = _this.getTarget();

      _this.addTargetEvents();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      _this.removeTargetEvents();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOverTooltip", function () {
      if (_this.hideTimeout) {
        _this.clearHideTimeout();
      }

      _this.showTimeout = setTimeout(_this.show, _this.getDelay('show'));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeaveTooltip", function () {
      if (_this.showTimeout) {
        _this.clearShowTimeout();
      }

      _this.hideTimeout = setTimeout(_this.hide, _this.getDelay('hide'));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOverTooltipContent", function () {
      if (_this.props.autohide) {
        return;
      }

      if (_this.hideTimeout) {
        _this.clearHideTimeout();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeaveTooltipContent", function () {
      if (_this.props.autohide) {
        return;
      }

      if (_this.showTimeout) {
        _this.clearShowTimeout();
      }

      _this.hideTimeout = setTimeout(_this.hide, _this.getDelay('hide'));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDelay", function (key) {
      var delay = _this.props.delay;

      if (_typeof(delay) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTarget", function () {
      var target = _this.props.target;

      if (_typeof(target) === 'object') {
        return target;
      }

      return document.getElementById(target);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTetherConfig", function () {
      var attachments = (0, _tools.getTetherAttachments)(_this.props.placement);
      return _objectSpread({}, defaultTetherConfig, attachments, {
        target: _this.getTarget
      }, _this.props.tether);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "show", function () {
      if (!_this.props.isOpen) {
        _this.clearShowTimeout();

        _this.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hide", function () {
      if (_this.props.isOpen) {
        _this.clearHideTimeout();

        _this.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearShowTimeout", function () {
      clearTimeout(_this.showTimeout);
      _this.showTimeout = undefined;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearHideTimeout", function () {
      clearTimeout(_this.hideTimeout);
      _this.hideTimeout = undefined;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDocumentClick", function (e) {
      if (e.target === _this.target || _this.target.contains(e.target)) {
        if (_this.hideTimeout) {
          _this.clearHideTimeout();
        }

        if (!_this.props.isOpen) {
          _this.toggle();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addTargetEvents", function () {
      if (_this.target) {
        _this.target.addEventListener('mouseover', _this.onMouseOverTooltip, true);

        _this.target.addEventListener('mouseout', _this.onMouseLeaveTooltip, true);

        document.addEventListener('click', _this.handleDocumentClick, true);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeTargetEvents", function () {
      if (_this.target) {
        _this.target.removeEventListener('mouseover', _this.onMouseOverTooltip, true);

        _this.target.removeEventListener('mouseout', _this.onMouseLeaveTooltip, true);

        document.removeEventListener('click', _this.handleDocumentClick, true);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }

      if (_this.props.toggle) {
        return _this.props.toggle();
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFocus", function () {
      _this.setState({
        focus: true
      });
    });

    return _this;
  }

  _createClass(TooltipUnstyled, [{
    key: "render",
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = (0, _lodash.default)(this.props, Object.keys(propTypes));
      var classes = (0, _mapToCssModules.default)((0, _classnames.default)('tooltip', this.props.className), this.props.cssModule);
      var tetherConfig = this.getTetherConfig();
      var optional = {};

      if (this.state.focus === true) {
        optional.onFocus = this.handleFocus;
      }

      return _react.default.createElement(_TetherContent.default, {
        className: classes,
        tether: tetherConfig,
        tetherRef: this.props.tetherRef,
        isOpen: this.props.isOpen,
        toggle: this.toggle
      }, _react.default.createElement("div", _extends({}, attributes, {
        className: 'tooltip-inner',
        onMouseOver: this.onMouseOverTooltipContent,
        onMouseLeave: this.onMouseLeaveTooltipContent,
        onFocus: this.handleFocus,
        tabIndex: "-1"
      }, optional)));
    }
  }]);

  return TooltipUnstyled;
}(_react.default.Component);

exports.TooltipUnstyled = TooltipUnstyled;

_defineProperty(TooltipUnstyled, "propTypes", propTypes);

_defineProperty(TooltipUnstyled, "defaultProps", defaultProps);

var Tooltip = (0, _styledComponents.default)(TooltipUnstyled).withConfig({
  displayName: "Tooltip",
  componentId: "l83az1-0"
})(["", ""], function (props) {
  return "\n    &.tooltip {\n      position: absolute;\n      z-index: ".concat(props.theme['$zindex-tooltip'], ";\n      display: block;\n      font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;\n      font-style: normal;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-break: auto;\n      line-height: 1.5;\n      text-align: left;\n      text-align: start;\n      text-decoration: none;\n      text-shadow: none;\n      text-transform: none;\n      white-space: normal;\n      word-break: normal;\n      word-spacing: normal;\n      font-size: .875rem;\n      word-wrap: break-word;\n      opacity: 0\n    }\n    \n    &.tooltip.show {\n      opacity: ").concat(props.theme['$tooltip-opacity'], "\n    }\n    \n    &.tooltip.bs-tether-element-attached-bottom,\n    &.tooltip.tooltip-top {\n      padding: 5px 0;\n      margin-top: -3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-bottom .tooltip-inner:before,\n    &.tooltip.tooltip-top .tooltip-inner:before {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: \"\";\n      border-width: 5px 5px 0;\n      border-top-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-left,\n    &.tooltip.tooltip-right {\n      padding: 0 5px;\n      margin-left: 3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-left .tooltip-inner:before,\n    &.tooltip.tooltip-right .tooltip-inner:before {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      content: \"\";\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-top,\n    &.tooltip.tooltip-bottom {\n      padding: 5px 0;\n      margin-top: 3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-top .tooltip-inner:before,\n    &.tooltip.tooltip-bottom .tooltip-inner:before {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: \"\";\n      border-width: 0 5px 5px;\n      border-bottom-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-right,\n    &.tooltip.tooltip-left {\n      padding: 0 5px;\n      margin-left: -3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-right .tooltip-inner:before,\n    &.tooltip.tooltip-left .tooltip-inner:before {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      content: \"\";\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000\n    }\n    \n    & .tooltip-inner {\n      max-width: ").concat(props.theme['$tooltip-max-width'], ";\n      padding: ").concat(props.theme['$tooltip-padding-y'], " ").concat(props.theme['$tooltip-padding-x'], ";\n      color: ").concat(props.theme['$tooltip-color'], ";\n      text-align: center;\n      background-color: ").concat(props.theme['$tooltip-bg'], ";\n      border-radius: .25rem\n    }\n    \n    & .tooltip-inner:before {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-color: transparent;\n      border-style: solid\n    }\n  ");
});
Tooltip.defaultProps = defaultProps;
Tooltip.propTypes = propTypes;
/** @component */

var _default = Tooltip;
exports.default = _default;