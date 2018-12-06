"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _boxShadow = require("@bootstrap-styled/css-mixins/lib/box-shadow");

var _navDivider = require("@bootstrap-styled/css-mixins/lib/nav-divider");

var _hover = require("@bootstrap-styled/css-mixins/lib/hover");

var _buttonGroup = require("@bootstrap-styled/css-mixins/lib/buttonGroup");

var _conditional = require("@bootstrap-styled/css-mixins/lib/conditional");

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));

var _TetherContent = _interopRequireDefault(require("../TetherContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultTetherConfig = {
  classes: {
    element: 'dropdown',
    enabled: 'show'
  },
  classPrefix: 'bs-tether',
  constraints: [{
    to: 'scrollParent',
    attachment: 'together none'
  }, {
    to: 'window',
    attachment: 'together none'
  }]
};
var defaultProps = {
  isOpen: false,
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-gradients': false,
    '$enable-hover-media-query': false,
    '$spacer-y': '1rem',
    '$body-color': 'black',
    '$border-width': '1px',
    '$font-size-sm': '.875rem',
    '$font-weight-normal': 'normal',
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$zindex-dropdown-backdrop': '990',
    '$zindex-dropdown': '1000',
    '$component-active-color': '#fff',
    '$component-active-bg': '#0275d8',
    '$caret-width': '.3em',
    '$line-height-lg': '1.6',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-y-lg': '.75rem',
    '$dropdown-min-width': '10rem',
    '$dropdown-padding-y': '.5rem',
    '$dropdown-margin-top': '.125rem',
    '$dropdown-bg': '#fff',
    '$dropdown-border-color': '',
    '$dropdown-border-width': '',
    '$dropdown-divider-bg': '',
    '$dropdown-box-shadow': '0 .5rem 1rem rgba(#000,.175)',
    '$dropdown-link-color': '',
    '$dropdown-link-hover-color': '',
    '$dropdown-link-hover-bg': '',
    '$dropdown-link-active-color': '',
    '$dropdown-link-active-bg': '',
    '$dropdown-link-disabled-color': '',
    '$dropdown-item-padding-x': '1.5rem',
    '$dropdown-header-color': '',
    '$input-btn-border-width': '',
    // For form controls and buttons
    '$cursor-disabled': 'not-allowed',
    '$btn-padding-x': '1rem',
    '$btn-active-box-shadow': '',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-border-radius-lg': '',
    '$btn-border-radius-sm': '',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$input-height-lg': ''
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: _propTypes.default.node,

  /** Toggles disabled CSS style. */
  disabled: _propTypes.default.bool,

  /** Toggles dropdown direction. */
  dropup: _propTypes.default.bool,

  /** Toggles group CSS style. */
  group: _propTypes.default.bool,

  /** Toggles dropdown visibility. */
  isOpen: _propTypes.default.bool,

  /** Size variables. Can be small or large: */
  size: _propTypes.default.oneOf(['sm', 'lg', '']),

  /** Tether position value. Can be: */
  tether: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.bool]),

  /** Call specified function when on toggle action is triggered. */
  toggle: _propTypes.default.func,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-shadows': _propTypes.default.bool,
    '$enable-gradients': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool,
    '$spacer-y': _propTypes.default.string,
    '$body-color': _propTypes.default.string,
    '$border-width': _propTypes.default.string,
    '$font-size-sm': _propTypes.default.string,
    '$font-weight-normal': _propTypes.default.string,
    '$font-size-base': _propTypes.default.string,
    '$font-size-lg': _propTypes.default.string,
    '$zindex-dropdown-backdrop': _propTypes.default.string,
    '$zindex-dropdown': _propTypes.default.string,
    '$component-active-color': _propTypes.default.string,
    '$component-active-bg': _propTypes.default.string,
    '$caret-width': _propTypes.default.string,
    '$line-height-lg': _propTypes.default.string,
    '$border-radius-lg': _propTypes.default.string,
    '$border-radius-sm': _propTypes.default.string,
    '$input-padding-y-lg': _propTypes.default.string,
    '$dropdown-min-width': _propTypes.default.string,
    '$dropdown-padding-y': _propTypes.default.string,
    '$dropdown-margin-top': _propTypes.default.string,
    '$dropdown-bg': _propTypes.default.string,
    '$dropdown-border-color': _propTypes.default.string,
    '$dropdown-border-width': _propTypes.default.string,
    '$dropdown-divider-bg': _propTypes.default.string,
    '$dropdown-box-shadow': _propTypes.default.string,
    '$dropdown-link-color': _propTypes.default.string,
    '$dropdown-link-hover-color': _propTypes.default.string,
    '$dropdown-link-hover-bg': _propTypes.default.string,
    '$dropdown-link-active-color': _propTypes.default.string,
    '$dropdown-link-active-bg': _propTypes.default.string,
    '$dropdown-link-disabled-color': _propTypes.default.string,
    '$dropdown-item-padding-x': _propTypes.default.string,
    '$dropdown-header-color': _propTypes.default.string,
    '$input-btn-border-width': _propTypes.default.string,
    // For form controls and buttons
    '$cursor-disabled': _propTypes.default.string,
    '$btn-padding-x': _propTypes.default.string,
    '$btn-active-box-shadow': _propTypes.default.string,
    '$btn-padding-x-lg': _propTypes.default.string,
    '$btn-padding-y-lg': _propTypes.default.string,
    '$btn-border-radius-lg': _propTypes.default.string,
    '$btn-border-radius-sm': _propTypes.default.string,
    '$btn-padding-x-sm': _propTypes.default.string,
    '$btn-padding-y-sm': _propTypes.default.string,
    '$input-height-lg': _propTypes.default.string
  }),

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

var DropdownUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownUnstyled, _React$Component);

  function DropdownUnstyled() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownUnstyled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownUnstyled)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTetherConfig", function (childProps) {
      var target = function target() {
        return _this.getTetherTarget();
      };

      var vElementAttach = 'top';
      var hElementAttach = 'left';
      var vTargetAttach = 'bottom';
      var hTargetAttach = 'left';

      if (childProps.right) {
        hElementAttach = 'right';
        hTargetAttach = 'right';
      }

      if (_this.props.dropup) {
        vElementAttach = 'bottom';
        vTargetAttach = 'top';
      }

      return _objectSpread({}, defaultTetherConfig, {
        attachment: vElementAttach + ' ' + hElementAttach,
        // eslint-disable-line prefer-template
        targetAttachment: vTargetAttach + ' ' + hTargetAttach,
        // eslint-disable-line prefer-template
        target: target
      }, _this.props.tether);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addEvents", function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeEvents", function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDocumentClick", function (e) {
      var container = _reactDom.default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))); // eslint-disable-line react/no-find-dom-node


      if (container.contains(e.target) && container !== e.target) {
        return;
      }

      _this.toggle();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }

      return _this.props.toggle();
    });

    return _this;
  }

  _createClass(DropdownUnstyled, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isOpen: this.props.isOpen,
        toggle: this.props.toggle
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "getTetherTarget",
    value: function getTetherTarget() {
      var container = _reactDom.default.findDOMNode(this); // eslint-disable-line react/no-find-dom-node


      return container.querySelector('[data-toggle="dropdown"]');
    }
  }, {
    key: "handleProps",
    value: function handleProps() {
      if (this.props.tether) {
        return;
      }

      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      var _this$props = this.props,
          tether = _this$props.tether,
          children = _this$props.children,
          attrs = _objectWithoutProperties(_this$props, ["tether", "children"]);

      attrs.toggle = this.toggle;
      return _react.default.Children.map(_react.default.Children.toArray(children), function (child) {
        if (tether && child.type === _DropdownMenu.default) {
          var tetherConfig = _this2.getTetherConfig(child.props);

          return _react.default.createElement(_TetherContent.default, _extends({}, attrs, {
            tether: tetherConfig
          }), child);
        }

        return child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _cn;

      var _omit = (0, _lodash.default)(this.props, ['toggle', 'tether', 'theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          Tag = _omit.tag,
          isOpen = _omit.isOpen,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "dropup", "group", "size", "tag", "isOpen"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, (_cn = {
        'btn-group': group
      }, _defineProperty(_cn, "btn-group-".concat(size), !!size), _defineProperty(_cn, "dropdown", !group), _defineProperty(_cn, "show", isOpen), _defineProperty(_cn, "dropup", dropup), _cn)), cssModule);
      return _react.default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.renderChildren());
    }
  }]);

  return DropdownUnstyled;
}(_react.default.Component);
/**
 * Use our `<Dropdown />` blocks with dismissing menu.
 * Customize it with `<DropdownToggle />` with `caret` attribute for display icon and `<DropdownItem />` with `header`, `disabled` and `divider` attributes for customize menu.
 */


_defineProperty(DropdownUnstyled, "propTypes", propTypes);

_defineProperty(DropdownUnstyled, "childContextTypes", {
  isOpen: _propTypes.default.bool.isRequired,
  toggle: _propTypes.default.func.isRequired
});

_defineProperty(DropdownUnstyled, "defaultProps", defaultProps);

var Dropdown = (0, _styledComponents.default)(DropdownUnstyled).withConfig({
  displayName: "Dropdown",
  componentId: "sc-1dbo397-0"
})(["", ""], function (props) {
  return "\n    &.dropup,\n    &.dropdown {\n      position: relative;\n    }\n\n    & .dropdown-hide {\n      display: none;\n    }\n    \n    & .dropdown-toggle {\n      /* Generate the caret automatically */\n      &::after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: ".concat(props.theme['$caret-width'], ";\n        vertical-align: middle;\n        content: '';\n        border-top: ").concat(props.theme['$caret-width'], " solid;\n        border-right: ").concat(props.theme['$caret-width'], " solid transparent;\n        border-left: ").concat(props.theme['$caret-width'], " solid transparent;\n      }\n\n      /* Prevent the focus on the dropdown toggle when closing dropdowns */\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    &.dropup {\n      .dropdown-toggle {\n        &::after {\n          border-top: 0;\n          border-bottom: ").concat(props.theme['$caret-width'], " solid;\n        }\n      }\n    }\n\n    & .dropdown-menu {\n      clear: left;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      z-index: ").concat(props.theme['$zindex-dropdown'], ";\n      display: none; // none by default, but block on \"open\" of the menu\n      float: left;\n      min-width: ").concat(props.theme['$dropdown-min-width'], ";\n      padding: ").concat(props.theme['$dropdown-padding-y'], " 0;\n      margin: ").concat(props.theme['$dropdown-margin-top'], " 0; /* override default ul */\n      font-size: ").concat(props.theme['$font-size-base'], ";\n      color: ").concat(props.theme['$body-color'], ";\n      text-align: left; /* Ensures proper alignment if parent has it changed (e.g., modal footer) */\n      list-style: none;\n      background-color: ").concat(props.theme['$dropdown-bg'], ";\n      background-clip: padding-box;\n      border: ").concat(props.theme['$dropdown-border-width'], " solid ").concat(props.theme['$dropdown-border-color'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']), "\n      ").concat((0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$dropdown-box-shadow']), "\n    }\n\n    /* mixin from bootstrap 4, see : scss/mixins/_nav-divider.css */\n    & .dropdown-divider {\n      ").concat((0, _navDivider.navDivider)(props.theme['$spacer-y'], props.theme['$dropdown-divider-bg']), "\n    }\n\n    & .dropdown-item {\n      display: block;\n      width: 100%; /* For <button>s */\n      padding: 3px ").concat(props.theme['$dropdown-item-padding-x'], ";\n      clear: both;\n      font-weight: ").concat(props.theme['$font-weight-normal'], ";\n      color: ").concat(props.theme['$dropdown-link-color'], ";\n      text-align: inherit; /* For <button>s */\n      white-space: nowrap; /* prevent links from randomly breaking onto new lines */\n      background: none; /* For <button>s */\n      border: 0; /* For <button>s */\n\n      ").concat((0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], "\n        color: ".concat(props.theme['$dropdown-link-hover-color'], ";\n        text-decoration: none;\n        background-color: ").concat(props.theme['$dropdown-link-hover-bg'], "\n      ")), "\n\n      &.active,\n      &:active {\n        color: ").concat(props.theme['$dropdown-link-active-color'], ";\n        text-decoration: none;\n        background-color: ").concat(props.theme['$dropdown-link-active-bg'], "\n      }\n\n      &.disabled,\n      &:disabled{\n        color: ").concat(props.theme['$dropdown-link-disabled-color'], ";\n        cursor: ").concat(props.theme['$cursor-disabled'], ";\n        background-color: transparent;\n        ").concat((0, _conditional.ifThen)(props.theme['$enable-gradients'], 'background-image: none; /* Remove CSS gradient */'), "\n      }\n    }\n\n    &.show {\n      /* show the menu */\n      &>.dropdown-menu {\n        display: block;\n      }\n\n      & > a {\n        outline: 0;\n      }\n    }\n\n\n    /* Menu positioning */\n\n    /* Add extra class to .dropdown-menu to flip the alignment of the dropdown*\n    /* menu with the parent. */\n    & .dropdown-menu-right {\n      right: 0;\n      left: auto; /* Reset the default from .dropdown-menu */\n    }\n\n    & .dropdown-menu-left {\n      right: auto;\n      left: 0;\n    }\n\n    /* Dropdown section headers */\n    & .dropdown-header {\n      display: block;\n      padding: ").concat(props.theme['$dropdown-padding-y'], " ").concat(props.theme['$dropdown-item-padding-x'], ";\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ").concat(props.theme['$font-size-sm'], ";\n      color: ").concat(props.theme['$dropdown-header-color'], ";\n      white-space: nowrap; /* as with > li > a */\n    }\n    /* Dropdown section footers */\n    & .dropdown-footer {\n      display: block;\n      padding: ").concat(props.theme['$dropdown-padding-y'], " ").concat(props.theme['$dropdown-item-padding-x'], ";\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ").concat(props.theme['$font-size-sm'], ";\n      color: ").concat(props.theme['$dropdown-header-color'], ";\n      white-space: nowrap; /* as with > li > a */\n    }\n    \n\n    /* Backdrop to catch body clicks on mobile, etc. */\n    & .dropdown-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ").concat(props.theme['$zindex-dropdown-backdrop'], ";\n    }\n\n    /* Allow for dropdowns to go bottom up (aka, dropup-menu) */\n\n    /* Just add .dropup after the standard .dropdown class and you're set. */\n    /* TODO: abstract this so that the navbar fixed styles are not placed here? */\n\n    &.dropup {\n      .dropdown-menu {\n        top: auto;\n        bottom: 100%;\n        margin-bottom: ").concat(props.theme['$dropdown-margin-top'], ";\n      }\n    }\n        \n    /* Added Mixin boutonGroup to enable dropdown to beneficiate from buttonGroup classes */\n    ").concat((0, _buttonGroup.buttonGroup)(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']), "\n  ");
});
Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;
/** @component */

var _default = Dropdown;
exports.default = _default;