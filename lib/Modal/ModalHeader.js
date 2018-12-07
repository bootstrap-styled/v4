"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _H = _interopRequireDefault(require("../H4"));

var _Close = _interopRequireDefault(require("../Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultProps = {
  tag: _H.default,
  wrapTag: 'div'
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<ModalHeader />` component. */
  children: _propTypes.default.node,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func, _propTypes.default.object]),

  /** Wrapped tag variables. Can be: */
  wrapTag: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),

  /** Call specified function when on toggle action is triggered. */
  toggle: _propTypes.default.func,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      attributes = _objectWithoutProperties(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag"]);

  var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'modal-header'), cssModule);

  if (toggle) {
    closeButton = _react.default.createElement(_Close.default, {
      type: "button",
      onDismiss: toggle,
      "aria-label": "Close"
    });
  }

  return _react.default.createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), _react.default.createElement(Tag, {
    className: (0, _mapToCssModules.default)('modal-title', cssModule)
  }, children), closeButton);
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
var _default = ModalHeader;
exports.default = _default;