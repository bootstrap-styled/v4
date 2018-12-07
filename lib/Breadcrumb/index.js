"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _clearfix = require("@bootstrap-styled/css-mixins/lib/clearfix");

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
  tag: 'ol',
  theme: {
    '$breadcrumb-padding-y': '.75rem',
    '$breadcrumb-padding-x': '1rem',
    '$breadcrumb-item-padding': '.5rem',
    '$breadcrumb-bg': '#eceeef',
    '$breadcrumb-divider-color': '#636c72',
    '$breadcrumb-active-color': '#636c72',
    '$breadcrumb-divider': '"/"',
    '$enable-rounded': false
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

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$breadcrumb-padding-y': _propTypes.default.string,
    '$breadcrumb-padding-x': _propTypes.default.string,
    '$breadcrumb-item-padding': _propTypes.default.string,
    '$breadcrumb-bg': _propTypes.default.string,
    '$breadcrumb-divider-color': _propTypes.default.string,
    '$breadcrumb-active-color': _propTypes.default.string,
    '$breadcrumb-divider': _propTypes.default.string,
    '$enable-rounded': _propTypes.default.bool
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var BreadcrumbUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BreadcrumbUnstyled, _React$Component);

  function BreadcrumbUnstyled() {
    _classCallCheck(this, BreadcrumbUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(BreadcrumbUnstyled).apply(this, arguments));
  }

  _createClass(BreadcrumbUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "tag"]);

      return _react.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules.default)((0, _classnames.default)(className, 'breadcrumb'), cssModule)
      }, attributes));
    }
  }]);

  return BreadcrumbUnstyled;
}(_react.default.Component);
/**
 * Use our **default** `Breadcrumb` blocks, to emphasize part of your page.
 * You can also use another `tag` without list markup.
 */


_defineProperty(BreadcrumbUnstyled, "propTypes", propTypes);

_defineProperty(BreadcrumbUnstyled, "defaultProps", defaultProps);

var Breadcrumb = (0, _styledComponents.default)(BreadcrumbUnstyled).withConfig({
  displayName: "Breadcrumb",
  componentId: "sc-15mocrt-0"
})(["", ""], function (props) {
  return "\n    &.breadcrumb {\n      padding: ".concat(props.theme['$breadcrumb-padding-y'], " ").concat(props.theme['$breadcrumb-padding-x'], ";\n      margin-bottom: ").concat(props.theme['$spacer-y'], ";\n      list-style: none;\n      background-color: ").concat(props.theme['$breadcrumb-bg'], ";\n \n      ").concat((0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']), "\n            \n      ").concat((0, _clearfix.clearfix)(), "\n    }\n\n    & .breadcrumb-item {\n      float: left;\n    \n      /* The separator between breadcrumbs (by default, a forward-slash: \"/\") */\n      + .breadcrumb-item::before {\n        display: inline-block; /* Suppress underlining of the separator in modern browsers */\n        padding-right: ").concat(props.theme['$breadcrumb-item-padding'], ";\n        padding-left: ").concat(props.theme['$breadcrumb-item-padding'], ";\n        color: ").concat(props.theme['$breadcrumb-divider-color'], ";\n        content: ").concat(props.theme['$breadcrumb-divider'], ";\n      }\n  \n      /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\n       without 'ul's. The '::before' pseudo-element generates an element\n       *within* the .breadcrumb-item and thereby inherits the 'text-decoration'.\n      \n       To trick IE into suppressing the underline, we give the pseudo-element an\n       underline and then immediately remove it.\n      */\n      \n      + .breadcrumb-item:hover::before {\n        text-decoration: underline;\n      }\n      + .breadcrumb-item:hover::before {\n        text-decoration: none;\n      }\n    \n      &.active {\n        color: ").concat(props.theme['$breadcrumb-active-color'], ";\n      }\n    }\n  ");
});
Breadcrumb.defaultProps = defaultProps;
Breadcrumb.propTypes = propTypes;
/** @component */

var _default = Breadcrumb;
exports.default = _default;