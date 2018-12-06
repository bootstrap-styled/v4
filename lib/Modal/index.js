"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPortal = require("react-portal");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _tools = require("@bootstrap-styled/utils/lib/tools");

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _transition = require("@bootstrap-styled/css-mixins/lib/transition");

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _boxShadow = require("@bootstrap-styled/css-mixins/lib/box-shadow");

var _breakpoints = require("@bootstrap-styled/css-mixins/lib/breakpoints");

var _transition2 = require("@bootstrap-styled/css-utils/lib/transition");

var _reboot = _interopRequireDefault(require("@bootstrap-styled/css-utils/lib/reboot"));

var _Fade = _interopRequireWildcard(require("./Fade"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FadePropTypes = _propTypes.default.shape(_Fade.propTypes);

var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$grid-breakpoints': _propTypes.default.object,
    '$modal-md': _propTypes.default.string,
    '$modal-dialog-sm-up-margin-': _propTypes.default.string,
    '$enable-shadows': _propTypes.default.bool,
    '$modal-content-sm-up-box-shadow': _propTypes.default.string,
    '$modal-sm': _propTypes.default.string,
    '$modal-lg': _propTypes.default.string,
    '$zindex-modal': _propTypes.default.string,
    '$zindex-modal-backdrop': _propTypes.default.string,
    '$enable-transitions': _propTypes.default.bool,
    '$transition-fade': _propTypes.default.string,
    '$modal-transition': _propTypes.default.string,
    '$modal-dialog-margin': _propTypes.default.string,
    '$font-family-base': _propTypes.default.string,
    '$font-size-base': _propTypes.default.string,
    '$font-weight-base': _propTypes.default.string,
    '$line-height-base': _propTypes.default.string,
    '$body-color': _propTypes.default.string,
    '$body-bg': _propTypes.default.string,
    '$$modal-content-bg': _propTypes.default.string,
    '$modal-content-border-width': _propTypes.default.string,
    '$modal-content-border-color': _propTypes.default.string,
    '$enable-rounded': _propTypes.default.bool,
    '$border-radius-lg': _propTypes.default.string,
    '$modal-content-xs-box-shadow': _propTypes.default.string,
    '$modal-backdrop-bg': _propTypes.default.string,
    '$modal-backdrop-opacity': _propTypes.default.string,
    '$modal-header-padding': _propTypes.default.string,
    '$modal-header-border-width': _propTypes.default.string,
    '$modal-header-border-color': _propTypes.default.string,
    '$modal-title-line-height': _propTypes.default.string,
    '$modal-inner-padding': _propTypes.default.string,
    '$modal-footer-border-color': _propTypes.default.string
  }),

  /** Toggles opened CSS style. */
  isOpen: _propTypes.default.bool,

  /** Toggles auto focus CSS style. */
  autoFocus: _propTypes.default.bool,

  /** Modal use default size base and can use different size such as: */
  size: _propTypes.default.oneOf(['sm', 'lg', '']),

  /** Call specified function when on toggle action is triggered. */
  toggle: _propTypes.default.func,

  /** Toggles keyboard events. */
  keyboard: _propTypes.default.bool,

  /** Define role with specified one. */
  role: _propTypes.default.string,

  /** Define labelledBy with specified one. */
  labelledBy: _propTypes.default.string,

  /** Toggles backdrop action. */
  backdrop: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['static'])]),

  /** Call specified function when entering modal is triggered. */
  onEnter: _propTypes.default.func,

  /** Call specified function when exiting modal is triggered. */
  onExit: _propTypes.default.func,

  /** Call specified function when opened modal is triggered. */
  onOpened: _propTypes.default.func,

  /** Call specified function when closed modal is triggered. */
  onClosed: _propTypes.default.func,

  /** Specified node element will be passed as children of `<Modal />`. */
  children: _propTypes.default.node,

  /** Define document's className with specified one. */
  documentClassName: _propTypes.default.string,

  /** Define modal's className with specified one. */
  modalClassName: _propTypes.default.string,

  /** Define backdrop's className with specified one. */
  backdropClassName: _propTypes.default.string,

  /** Define content's className with specified one. */
  contentClassName: _propTypes.default.string,

  /** Toggles fade transition. */
  fade: _propTypes.default.bool,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object,

  /** Define z-index with specified one. */
  zIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Define backdrop transition with specified one. */
  backdropTransition: FadePropTypes,

  /** Define modal transition with specified one. */
  modalTransition: FadePropTypes
};
exports.propTypes = propTypes;
var defaultProps = {
  isOpen: false,
  autoFocus: true,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 2000,
  theme: {
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1452px'
    },
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-transitions': true,
    '$modal-dialog-sm-up-margin-y': '30px',
    '$modal-content-sm-up-box-shadow': '0 5px 15px lightgray',
    '$modal-sm': '300px',
    '$modal-md': '500px',
    '$modal-lg': '800px',
    '$zindex-modal': '2050',
    '$zindex-modal-backdrop': '2040',
    '$transition-fade': 'opacity .15s linear',
    '$modal-transition': 'transform .3s ease-out',
    '$modal-dialog-margin': '10px',
    '$font-family-base': '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    '$font-size-base': '1rem',
    '$font-weight-base': 'normal',
    '$line-height-base': '1.5',
    '$body-color': '#292b2c',
    '$body-bg': '#fff',
    '$$modal-content-bg': '#fff',
    '$modal-content-border-width': '1px',
    '$modal-content-border-color': '#eceeef',
    '$border-radius-lg': '.3rem',
    '$modal-content-xs-box-shadow': '0 3px 9px #eceeef',
    '$modal-backdrop-bg': '#000',
    '$modal-backdrop-opacity': '.5',
    '$modal-header-padding': '15px',
    '$modal-header-border-width': '#eceeef',
    '$modal-header-border-color': '#eceeef',
    '$modal-title-line-height': '1.5',
    '$modal-inner-padding': '15px',
    '$modal-footer-border-color': '#eceeef'
  },
  fade: true,
  onOpened: null,
  onClosed: null,
  modalTransition: {
    timeout: 300
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: 150 // uses standard fade transition

  }
};
exports.defaultProps = defaultProps;

var ModalUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalUnstyled, _React$Component);

  function ModalUnstyled(props) {
    var _this;

    _classCallCheck(this, ModalUnstyled);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalUnstyled).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpened", function (node, isAppearing) {
      if (_this.props.onOpened) {
        _this.props.onOpened();
      }

      if (_this.props.modalTransition.onEntered) {
        _this.props.modalTransition.onEntered(node, isAppearing);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClosed", function (node) {
      // so all methods get called before it is unmounted
      if (_this.props.onClosed) {
        _this.props.onClosed();
      }

      if (_this.props.modalTransition.onEntered) {
        _this.props.modalTransition.onExited(node);
      }

      _this.destroy();

      if (_this._isMounted) {
        _this.setState({
          isOpen: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBackdropClick", function (e) {
      e.stopPropagation();
      if (!_this.props.isOpen || _this.props.backdrop !== true) return;
      var container = _this._dialog;

      if (e.target && !container.contains(e.target) && _this.props.toggle) {
        _this.props.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEscape", function (e) {
      if (_this.props.isOpen && _this.props.keyboard && e.keyCode === 27 && _this.props.toggle) {
        _this.props.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "destroy", function () {
      document.body.removeChild(_this._element);
      _this._element = null; // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var classes = document.body.className.replace(/(^| )overflow( |$)/, ' ');
      document.body.className = (0, _mapToCssModules.default)((0, _classnames.default)(classes).trim(), _this.props.cssModule);
      (0, _tools.setScrollbarWidth)(_this.originalBodyPadding);
    });

    _this.originalBodyPadding = null;
    _this.state = {
      isOpen: props.isOpen
    };

    if (props.isOpen) {
      _this.init();
    }

    return _this;
  }

  _createClass(ModalUnstyled, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onEnter) {
        this.props.onEnter();
      }

      if (this.state.isOpen && this.props.autoFocus) {
        this.setFocus();
      }

      this._isMounted = true;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && !this.props.isOpen) {
        this.setState({
          isOpen: nextProps.isOpen
        });
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.isOpen && !this.state.isOpen) {
        this.init();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onExit) {
        this.props.onExit();
      }

      if (this.state.isOpen) {
        this.destroy();
      }

      this._isMounted = false;
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var classes = document.body.className;
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this.originalBodyPadding = (0, _tools.getOriginalBodyPadding)();
      (0, _tools.conditionallyUpdateScrollbar)();
      document.body.appendChild(this._element);
      document.body.className = (0, _mapToCssModules.default)((0, _classnames.default)(classes, 'overflow'), this.props.cssModule);
    }
  }, {
    key: "renderModalDialog",
    value: function renderModalDialog() {
      var _this2 = this;

      var attributes = (0, _lodash.default)(this.props, ['theme', 'isOpen', 'autoFocus', 'size', 'toggle', 'keyboard', 'role', 'labelledBy', 'backdrop', 'onEnter', 'onExit', 'onOpened', 'onClosed', 'children', 'className', 'documentClassName', 'modalClassName', 'backdropClassName', 'contentClassName', 'fade', 'cssModule', 'zIndex', 'backdropTransition', 'modalTransition']);
      return _react.default.createElement("div", _extends({
        className: (0, _mapToCssModules.default)((0, _classnames.default)('modal-dialog', this.props.documentClassName, _defineProperty({}, "modal-".concat(this.props.size), this.props.size)), this.props.cssModule),
        role: "document",
        ref: function ref(c) {
          _this2._dialog = c;
        }
      }, attributes), _react.default.createElement("div", {
        className: (0, _mapToCssModules.default)((0, _classnames.default)('modal-content', this.props.contentClassName), this.props.cssModule)
      }, this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isOpen) {
        var _this$props = this.props,
            modalClassName = _this$props.modalClassName,
            backdropClassName = _this$props.backdropClassName,
            cssModule = _this$props.cssModule,
            isOpen = _this$props.isOpen,
            backdrop = _this$props.backdrop,
            role = _this$props.role,
            labelledBy = _this$props.labelledBy;
        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onKeyUp: this.handleEscape,
          style: {
            display: 'block'
          },
          'aria-labelledby': labelledBy,
          role: role,
          tabIndex: '-1'
        };
        var hasTransition = this.props.fade;

        var modalTransition = _objectSpread({}, _Fade.defaultProps, this.props.modalTransition, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });

        var backdropTransition = _objectSpread({}, _Fade.defaultProps, this.props.backdropTransition, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });

        return _react.default.createElement(_reactPortal.Portal, {
          node: this._element
        }, _react.default.createElement("div", {
          className: (0, _mapToCssModules.default)(this.props.className)
        }, _react.default.createElement(_Fade.default, _extends({}, modalAttributes, modalTransition, {
          in: isOpen,
          onEntered: this.onOpened,
          onExited: this.onClosed,
          cssModule: cssModule,
          className: (0, _mapToCssModules.default)((0, _classnames.default)('modal', modalClassName), cssModule)
        }), this.renderModalDialog()), _react.default.createElement(_Fade.default, _extends({}, backdropTransition, {
          in: isOpen && !!backdrop,
          cssModule: cssModule,
          className: (0, _mapToCssModules.default)((0, _classnames.default)('modal-backdrop', backdropClassName), cssModule)
        }))));
      }

      return null;
    }
  }]);

  return ModalUnstyled;
}(_react.default.Component);
/**
 * Modal element
 */


_defineProperty(ModalUnstyled, "propTypes", propTypes);

_defineProperty(ModalUnstyled, "defaultProps", defaultProps);

var Modal = (0, _styledComponents.default)(ModalUnstyled).withConfig({
  displayName: "Modal",
  componentId: "sc-68tm7q-0"
})(["", ""], function (props) {
  return "\n    & .modal {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ".concat(props.theme['$zindex-modal'], ";\n      display: none;\n      outline: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      \n      ").concat((0, _transition2.fade)(props.theme['$enable-transitions'], props.theme['$transition-fade']), "\n      &.fade {\n        .modal-dialog {\n          ").concat((0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$modal-transition']), "\n          transform: translate(0, -25%);\n        }\n      }\n      &.show {\n        .modal-dialog {\n          transform: translate(0, 0);\n        }\n      }\n    }\n    \n    & .modal-dialog {\n      position: relative;\n      width: auto;\n      margin: ").concat(props.theme['$modal-dialog-margin'], ";\n      ").concat(_reboot.default.body(props.theme['$font-family-base'], props.theme['$font-size-base'], props.theme['$font-weight-base'], props.theme['$line-height-base'], props.theme['$body-color'], props.theme['$body-bg']), "\n    }\n    \n    \n    & .modal-content {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ").concat(props.theme['$modal-content-bg'], ";\n      background-clip: padding-box;\n      border: ").concat(props.theme['$modal-content-border-width'], " solid ").concat(props.theme['$modal-content-border-color'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius-lg']), "\n      ").concat((0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$modal-content-xs-box-shadow']), "\n      outline: 0;\n    }\n    \n    & .modal-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ").concat(props.theme['$zindex-modal-backdrop'], ";\n      background-color: ").concat(props.theme['$modal-backdrop-bg'], ";\n      &.fade {\n        opacity: 0;\n        ").concat((0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$transition-fade']), ";\n      }\n      &.show {\n        opacity: ").concat(props.theme['$modal-backdrop-opacity'], ";\n      }\n    }\n      \n        \n    & .modal-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: ").concat(props.theme['$modal-header-padding'], ";\n      border-bottom: ").concat(props.theme['$modal-header-border-width'], " solid ").concat(props.theme['$modal-header-border-color'], ";\n    }\n    \n    & .modal-title {\n      margin-bottom: 0;\n      line-height: ").concat(props.theme['$modal-title-line-height'], ";\n    }\n    \n    & .modal-body {\n      position: relative;\n      flex: 1 1 auto;\n      padding: ").concat(props.theme['$modal-inner-padding'], ";\n    }\n    \n    & .modal-footer {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      padding: ").concat(props.theme['$modal-inner-padding'], ";\n      border-top: ").concat(props.theme['$modal-footer-border-width'], " solid ").concat(props.theme['$modal-footer-border-color'], ";\n      // Easily place margin between footer elements\n      > :not(:first-child) { margin-left: .25rem; }\n      > :not(:last-child) { margin-right: .25rem; }\n    }\n    \n\n  \n    // Scale up the modal\n    ").concat((0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], "\n        & .modal-dialog {\n          max-width: ".concat(props.theme['$modal-md'], ";\n          margin: ").concat(props.theme['$modal-dialog-sm-up-margin-y'], " auto;\n        }\n      \n        & .modal-content {\n          ").concat((0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$modal-content-sm-up-box-shadow']), "\n        }\n      \n        & .modal-sm {\n          max-width: ").concat(props.theme['$modal-sm'], ";\n        }\n      ")), "\n  \n\n    ").concat((0, _breakpoints.mediaBreakpointUp)('lg', props.theme['$grid-breakpoints'], "\n        & .modal-lg {\n           max-width:  ".concat(props.theme['$modal-lg'], "; \n         }\n      ")), "\n  ");
});
Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;
/** @component */

var _default = Modal;
exports.default = _default;