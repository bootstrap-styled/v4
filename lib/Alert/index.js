"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _alert = require("@bootstrap-styled/css-mixins/lib/alert");

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _tools = require("@bootstrap-styled/utils/lib/tools");

var _Fade = _interopRequireWildcard(require("../Modal/Fade"));

var _Close = _interopRequireDefault(require("../Close"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  theme: {
    '$alert-padding-x': '1.25rem',
    '$alert-padding-y': '.75rem',
    '$alert-margin-bottom': '1rem',
    '$alert-border-radius': '.25rem',
    '$alert-link-font-weight': 'bold',
    '$alert-border-width': '1px',
    '$alert-success-bg': '#dff0d8',
    '$alert-success-text': '#3c763d',
    '$alert-success-border': '#3c763d',
    '$alert-info-bg': '#d9edf7',
    '$alert-info-text': '#31708f',
    '$alert-info-border': '#31708f',
    '$alert-warning-bg': '#fcf8e3',
    '$alert-warning-text': '#8a6d3b',
    '$alert-warning-border': '#8a6d3b',
    '$alert-danger-bg': '#f2dede',
    '$alert-danger-text': '#a94442',
    '$alert-danger-border': '#a94442',
    '$enable-rounded': true
  },
  uncontrolled: false,
  autoHideDuration: null,
  transition: _objectSpread({}, _Fade.defaultProps, {
    unmountOnExit: true
  })
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<Alert />` component. */
  children: _propTypes.default.node,

  /** Color variables. */
  color: _propTypes.default.oneOf(['success', 'info', 'warning', 'danger']),

  /**
   * Toggles dismissal of an alert.
   */
  isOpen: _propTypes.default.bool,

  /**
   * @ignore
   * Used for Close component.
   */
  toggle: _propTypes.default.func,

  /**
   * Call specified function when `on click` event is triggered.
   */
  onClick: _propTypes.default.func,

  /**
   * Toggles onClick event.
   */
  initializeIsOpen: _propTypes.default.func,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),

  /**
   * Transition used to dismiss alert.
   */
  transition: _propTypes.default.shape({
    FadeProptypes: _propTypes.default.object,
    unmountOnExit: _propTypes.default.bool
  }),

  /**
   * Transition's duration used to dismiss alert automatically.
   */
  autoHideDuration: _propTypes.default.number,

  /** Theme variables. */
  theme: _propTypes.default.shape({
    '$alert-padding-x': _propTypes.default.string,
    '$alert-padding-y': _propTypes.default.string,
    '$alert-margin-bottom': _propTypes.default.string,
    '$alert-border-radius': _propTypes.default.string,
    '$alert-link-font-weight': _propTypes.default.string,
    '$alert-border-width': _propTypes.default.string,
    '$alert-success-bg': _propTypes.default.string,
    '$alert-success-text': _propTypes.default.string,
    '$alert-success-border': _propTypes.default.string,
    '$alert-info-bg': _propTypes.default.string,
    '$alert-info-text': _propTypes.default.string,
    '$alert-info-border': _propTypes.default.string,
    '$alert-warning-bg': _propTypes.default.string,
    '$alert-warning-text': _propTypes.default.string,
    '$alert-warning-border': _propTypes.default.string,
    '$alert-danger-bg': _propTypes.default.string,
    '$alert-danger-text': _propTypes.default.string,
    '$alert-danger-border': _propTypes.default.string,
    '$enable-rounded': _propTypes.default.bool
  }),

  /**
   * Toggles inner alert state so that you don't have to write your own state or closing function.
   */
  uncontrolled: _propTypes.default.bool,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var AlertUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AlertUnstyled, _React$Component);

  function AlertUnstyled() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AlertUnstyled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AlertUnstyled)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      uncontrolledOpen: true,
      exited: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAutoHideTimer", function (autoHideDuration) {
      if (!_this.props.autoHideDuration) {
        return;
      }

      clearTimeout(_this.timerAutoHide);
      _this.timerAutoHide = setTimeout(function () {
        if (_this.props.autoHideDuration) {
          _this.toggle();
        }
      }, autoHideDuration || _this.props.autoHideDuration);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "timerAutoHide", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initializeIsOpen", function (props) {
      return _this.setState({
        uncontrolledOpen: props.isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function (e) {
      if (_this.props.onClick) {
        _this.props.onClick(e);
      } else {
        _this.setState({
          uncontrolledOpen: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleExited", function () {
      _this.setState({
        exited: true
      });
    });

    return _this;
  }

  _createClass(AlertUnstyled, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.initializeIsOpen(this.props);

      if (this.props.uncontrolled) {
        if (this.state.uncontrolledOpen) {
          this.setState({
            exited: true
          });
        }

        return;
      }

      if (!this.props.isOpen) {
        this.setState({
          exited: true
        });
      }
    }
    /* eslint-disable no-console */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoHideDuration) {
        this.setAutoHideTimer();
      }
    }
    /* eslint-enable no-console */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen) {
        this.setState({
          exited: false
        });
      }

      if (nextProps.isOpen !== this.props.isOpen) {
        this.initializeIsOpen(nextProps);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isOpen !== this.props.isOpen) {
        if (this.props.isOpen) {
          this.setAutoHideTimer();
        } else {
          clearTimeout(this.timerAutoHide);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHide);
    } // Timer that controls delay before snackbar auto hides

  }, {
    key: "render",
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme', 'autoHideDuration', 'toggle']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          color = _omit.color,
          isOpen = _omit.isOpen,
          onClick = _omit.onClick,
          children = _omit.children,
          onExited = _omit.onExited,
          transition = _omit.transition,
          uncontrolled = _omit.uncontrolled,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "tag", "color", "isOpen", "onClick", "children", "onExited", "transition", "uncontrolled"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'alert', "alert-".concat(color), {
        'alert-dismissible': uncontrolled || onClick
      }), cssModule);

      if (!isOpen && this.state.exited) {
        return null;
      }

      var transitionProps = {
        in: uncontrolled ? this.state.uncontrolledOpen : isOpen,
        appear: true,
        onExited: (0, _tools.createChainedFunction)(this.handleExited, onExited)
      };
      return _react.default.createElement(_Fade.default, _extends({
        tag: Tag,
        className: classes,
        in: uncontrolled ? this.state.uncontrolledOpen : isOpen,
        role: "alert"
      }, attributes, transition, transitionProps), (uncontrolled || onClick) && _react.default.createElement(_Close.default, {
        onDismiss: this.toggle
      }), children);
    }
  }]);

  return AlertUnstyled;
}(_react.default.Component);
/**
 * Alert component.
 */


_defineProperty(AlertUnstyled, "propTypes", propTypes);

_defineProperty(AlertUnstyled, "defaultProps", defaultProps);

var Alert = (0, _styledComponents.default)(AlertUnstyled).withConfig({
  displayName: "Alert",
  componentId: "sc-16i3bf4-0"
})(["", ""], function (props) {
  return "\n    /*\n    Base styles\n    */\n    \n    &.alert {\n      padding: ".concat(props.theme['$alert-padding-y'], " ").concat(props.theme['$alert-padding-x'], ";\n      margin-bottom: ").concat(props.theme['$alert-margin-bottom'], ";\n      border: ").concat(props.theme['$alert-border-width'], " solid transparent;\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$alert-border-radius']), "\n    }\n    \n    /* Headings for larger alerts */\n    &.alert-heading {\n      /* Specified to prevent conflicts of changing $headings-color */\n      color: inherit;\n    }\n    \n    /* Provide class for links that match alerts */\n    & .alert-link { \n      font-weight: ").concat(props.theme['$alert-link-font-weight'], ";\n    }\n    \n    /* Dismissible alerts Expand the right padding and account for the close buttons positioning. */\n    \n    &.alert-dismissible {    \n      /* Adjust close link position */\n      & .close {\n        position: relative;\n        top: -").concat(props.theme['$alert-padding-y'], ";\n        right: -").concat(props.theme['$alert-padding-x'], ";\n        padding: ").concat(props.theme['$alert-padding-y'], " ").concat(props.theme['$alert-padding-x'], ";\n        color: inherit;\n      }\n    }\n    /* Alternate styles Generate contextual modifier classes for colorizing the alert. */\n\n    &.alert-success {\n      ").concat((0, _alert.alertVariant)(props.theme['$alert-success-bg'], props.theme['$alert-success-border'], props.theme['$alert-success-text']), "    \n    }\n    &.alert-info {\n      ").concat((0, _alert.alertVariant)(props.theme['$alert-info-bg'], props.theme['$alert-info-border'], props.theme['$alert-info-text']), "\n    } \n    &.alert-warning {\n      ").concat((0, _alert.alertVariant)(props.theme['$alert-warning-bg'], props.theme['$alert-warning-border'], props.theme['$alert-warning-text']), " \n    }\n    &.alert-danger {\n      ").concat((0, _alert.alertVariant)(props.theme['$alert-danger-bg'], props.theme['$alert-danger-border'], props.theme['$alert-danger-text']), " \n    }\n  ");
});
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
/** @component */

var _default = Alert;
exports.default = _default;