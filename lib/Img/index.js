"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _image = require("@bootstrap-styled/css-mixins/lib/image");

var _boxShadow = require("@bootstrap-styled/css-mixins/lib/box-shadow");

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _transition = require("@bootstrap-styled/css-mixins/lib/transition");

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
  tag: 'img',
  theme: {
    '$enable-rounded': true,
    '$enable-transitions': true,
    '$enable-shadows': false,
    '$spacer-halved': '0.5rem',
    '$border-width': '1px',
    '$border-radius': '.25rem',
    '$thumbnail-padding': '.25rem',
    '$thumbnail-bg': '#fff',
    '$thumbnail-border-width': '1px',
    '$thumbnail-border-color': '#ddd',
    '$thumbnail-border-radius': '.25rem',
    '$thumbnail-box-shadow': '0 1px 2px rgba(0, 0, 0, 0.75)',
    '$thumbnail-transition': 'all .2s ease-in-out',
    '$figure-caption-font-size': '90%',
    '$figure-caption-color': '#636c72'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),

  /** Toggles fluid responsive CSS display. */
  fluid: _propTypes.default.bool,

  /** Toggles figure CSS style. */
  figure: _propTypes.default.bool,

  /** Image source. */
  src: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,

  /** Image alt description. */
  alt: _propTypes.default.string.isRequired,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-transitions': _propTypes.default.bool,
    '$enable-shadows': _propTypes.default.bool,
    '$spacer-halved': _propTypes.default.string,
    '$border-width': _propTypes.default.string,
    '$border-radius': _propTypes.default.string,
    '$thumbnail-padding': _propTypes.default.string,
    '$thumbnail-bg': _propTypes.default.string,
    '$thumbnail-border-width': _propTypes.default.string,
    '$thumbnail-border-color': _propTypes.default.string,
    '$thumbnail-border-radius': _propTypes.default.string,
    '$thumbnail-box-shadow': _propTypes.default.string,
    '$thumbnail-transition': _propTypes.default.string,
    '$figure-caption-font-size': _propTypes.default.string,
    '$figure-caption-color': _propTypes.default.string
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var ImgUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImgUnstyled, _React$Component);

  function ImgUnstyled() {
    _classCallCheck(this, ImgUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImgUnstyled).apply(this, arguments));
  }

  _createClass(ImgUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          src = _omit.src,
          alt = _omit.alt,
          fluid = _omit.fluid,
          figure = _omit.figure,
          thumbnail = _omit.thumbnail,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["className", "src", "alt", "fluid", "figure", "thumbnail", "cssModule", "tag"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, fluid ? 'img-fluid' : false, thumbnail ? 'img-thumbnail' : false, figure ? 'figure-img' : false), cssModule);
      return _react.default.createElement(Tag, _extends({
        className: classes,
        src: src,
        alt: alt
      }, attributes));
    }
  }]);

  return ImgUnstyled;
}(_react.default.Component);
/**
 * Use our `<Image />` component, to emphasize part of your pages.
 * You can also use `thumbnails` attribute, **aligning images** and add `<Figure />` components.
 */


_defineProperty(ImgUnstyled, "propTypes", propTypes);

_defineProperty(ImgUnstyled, "defaultProps", defaultProps);

var Img = (0, _styledComponents.default)(ImgUnstyled).withConfig({
  displayName: "Img",
  componentId: "sc-10y4zbe-0"
})(["", ""], function (props) {
  return "\n    \n    /* \n      Responsive images (ensure images does not scale beyond their parents)\n      This is purposefully opt-in via an explicit class rather than being the default for all <img>.\n      We previously tried the \"images are responsive by default\" approach in Bootstrap v2,\n      and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n      which we are not expecting the images within themselves to be involuntarily resized.\n      See also https://github.com/twbs/bootstrap/issues/18178\n    */\n    \n    &.img-fluid {\n      ".concat((0, _image.imgFluid)(), "\n    }\n    \n    \n     /* Image thumbnails */ \n    &.img-thumbnail {\n      padding: ").concat(props.theme['$thumbnail-padding'], ";\n      background-color: ").concat(props.theme['$thumbnail-bg'], ";\n      border: ").concat(props.theme['$thumbnail-border-width'], " solid ").concat(props.theme['$thumbnail-border-color'], ";\n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$thumbnail-border-radius']), "\n      ").concat((0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$thumbnail-transition']), "\n      ").concat((0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$thumbnail-box-shadow']), "\n      /* Keep them at most 100% wide */\n      ").concat((0, _image.imgFluid)(), "\n    }\n   \n    &.figure-img {\n      margin-bottom: ").concat(props.theme['$spacer-halved'], ";\n      line-height: 1;\n    }\n    \n    /* Reboot Scss */\n    \n    /*\n     By default, <img> are inline-block. This assumes that, and vertically\n     centers them. This will not apply should you reset them to block level.\n    */\n    vertical-align: middle;\n    /*\n     Note: <img> are deliberately not made responsive by default.\n     For the rationale behind this, see the comments on the .img-fluid class.\n    */\n  ");
});
Img.defaultProps = defaultProps;
Img.propTypes = propTypes;
/** @component */

var _default = Img;
exports.default = _default;