"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _media = require("@bootstrap-styled/css-mixins/lib/media");

var _A = _interopRequireDefault(require("../A"));

var _Img = _interopRequireDefault(require("../Img"));

var _Ul = _interopRequireDefault(require("../Ul"));

var _H = _interopRequireDefault(require("../H4"));

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

var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<Media />` component. */
  children: _propTypes.default.node,

  /** Toggles body CSS style. */
  body: _propTypes.default.bool,

  /** Toggles body CSS style. */
  bottom: _propTypes.default.bool,

  /** Toggles heading CSS style. */
  heading: _propTypes.default.bool,

  /** Toggles left CSS display. */
  left: _propTypes.default.bool,

  /** Toggles list CSS style. */
  list: _propTypes.default.bool,

  /** Toggles middle CSS style. */
  middle: _propTypes.default.bool,

  /** Toggles object CSS style. */
  object: _propTypes.default.bool,

  /** Toggles right CSS style. */
  right: _propTypes.default.bool,

  /** . */
  tag: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),

  /** Toggles top CSS style. */
  top: _propTypes.default.bool,

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
/**
 * A classic `<Media />` component.
 * The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.
 * Use Nesting with Media objects can be infinitely nested, though we suggest you stop at some point. Place nested Media within the .media-body of a parent media object.
 * Or alignment Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your .media-body content.
 */

exports.propTypes = propTypes;

var MediaUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MediaUnstyled, _React$Component);

  function MediaUnstyled() {
    _classCallCheck(this, MediaUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(MediaUnstyled).apply(this, arguments));
  }

  _createClass(MediaUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _this$props = this.props,
          body = _this$props.body,
          bottom = _this$props.bottom,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          heading = _this$props.heading,
          left = _this$props.left,
          list = _this$props.list,
          middle = _this$props.middle,
          object = _this$props.object,
          right = _this$props.right,
          tag = _this$props.tag,
          top = _this$props.top,
          attributes = _objectWithoutProperties(_this$props, ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"]);

      var defaultTag;

      if (heading) {
        defaultTag = _H.default;
      } else if (left || right) {
        defaultTag = _A.default;
      } else if (object) {
        defaultTag = _Img.default;
      } else if (list) {
        defaultTag = _Ul.default;
      } else {
        defaultTag = 'div';
      }

      var Tag = tag || defaultTag;
      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, {
        'media-body': body,
        'media-heading': heading,
        'media-left': left,
        'media-right': right,
        'media-top': top,
        'media-bottom': bottom,
        'media-middle': middle,
        'media-object': object,
        'media-list': list,
        media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
      }), cssModule);
      return _react.default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return MediaUnstyled;
}(_react.default.Component);

_defineProperty(MediaUnstyled, "propTypes", propTypes);

var Media = (0, _styledComponents.default)(MediaUnstyled).withConfig({
  displayName: "Media",
  componentId: "sc-1pt808a-0"
})(["&.media,& .media{display:flex;align-items:flex-start;}& .media-body{flex:1 1 0%}", ""], (0, _media.media)());
Media.propTypes = propTypes;
/** @component */

var _default = Media;
exports.default = _default;