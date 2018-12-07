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

var _paginations = require("@bootstrap-styled/css-mixins/lib/paginations");

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
  tag: 'ul',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$pagination-padding-x': '.75rem',
    '$pagination-padding-y': '.5rem',
    '$pagination-padding-x-sm': '.5rem',
    '$pagination-padding-y-sm': '.25rem',
    '$pagination-padding-x-lg': '1.5rem',
    '$pagination-padding-y-lg': '.75rem',
    '$pagination-line-height': '1.25',
    '$pagination-color': '#0275d8',
    '$pagination-bg': '#fff',
    '$pagination-border-width': '1px',
    '$pagination-border-color': '#ddd',
    '$pagination-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
    '$pagination-hover-bg': '#eceeef',
    '$pagination-hover-border': '#ddd',
    '$pagination-active-color': '#fff',
    '$pagination-active-bg': '#0275d8',
    '$pagination-active-border': '#0275d8',
    '$pagination-disabled-color': '#636c72',
    '$pagination-disabled-bg': '#fff',
    '$pagination-disabled-border': '#ddd'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<Pagination />` component. */
  children: _propTypes.default.node,

  /** Pagination use default size base and can use different size such as: */
  size: _propTypes.default.oneOf(['sm', 'lg']),

  /** Replace the default component tag by the one specified. Can be: */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$enable-rounded': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool,
    '$pagination-padding-x': _propTypes.default.string,
    '$pagination-padding-y': _propTypes.default.string,
    '$pagination-padding-x-sm': _propTypes.default.string,
    '$pagination-padding-y-sm': _propTypes.default.string,
    '$pagination-padding-x-lg': _propTypes.default.string,
    '$pagination-padding-y-lg': _propTypes.default.string,
    '$pagination-line-height': _propTypes.default.string,
    '$pagination-color': _propTypes.default.string,
    '$pagination-bg': _propTypes.default.string,
    '$pagination-border-width': _propTypes.default.string,
    '$pagination-border-color': _propTypes.default.string,
    '$pagination-hover-color': _propTypes.default.string,
    '$pagination-hover-bg': _propTypes.default.string,
    '$pagination-hover-border': _propTypes.default.string,
    '$pagination-active-color': _propTypes.default.string,
    '$pagination-active-bg': _propTypes.default.string,
    '$pagination-active-border': _propTypes.default.string,
    '$pagination-disabled-color': _propTypes.default.string,
    '$pagination-disabled-bg': _propTypes.default.string,
    '$pagination-disabled-border': _propTypes.default.string
  }),

  /** Color variables. Can be: */
  color: _propTypes.default.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var PaginationUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PaginationUnstyled, _React$Component);

  function PaginationUnstyled() {
    _classCallCheck(this, PaginationUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaginationUnstyled).apply(this, arguments));
  }

  _createClass(PaginationUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          size = _omit.size,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "tag", "size"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'pagination', _defineProperty({}, "pagination-".concat(size), !!size)), cssModule);
      return _react.default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return PaginationUnstyled;
}(_react.default.Component);

_defineProperty(PaginationUnstyled, "propTypes", propTypes);

_defineProperty(PaginationUnstyled, "defaultProps", defaultProps);

var Pagination = (0, _styledComponents.default)(PaginationUnstyled).withConfig({
  displayName: "Pagination",
  componentId: "sc-1ova3d6-0"
})(["", ""], function (props) {
  return "\n    ".concat((0, _paginations.pagination)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$border-radius'], props.theme['$pagination-active-color'], props.theme['$pagination-active-bg'], props.theme['$pagination-active-border'], props.theme['$pagination-disabled-color'], props.theme['$cursor-disabled'], props.theme['$pagination-disabled-bg'], props.theme['$pagination-disabled-border'], props.theme['$pagination-padding-y'], props.theme['$pagination-padding-x'], props.theme['$pagination-line-height'], props.theme['$pagination-color'], props.theme['$pagination-bg'], props.theme['$pagination-border-width'], props.theme['$pagination-border-color'], props.theme['$pagination-hover-color'], props.theme['$pagination-hover-bg'], props.theme['$pagination-hover-border'], props.theme['$pagination-padding-y-lg'], props.theme['$pagination-padding-x-lg'], props.theme['$font-size-lg'], props.theme['$line-height-lg'], props.theme['$border-radius-lg'], props.theme['$pagination-padding-y-sm'], props.theme['$pagination-padding-x-sm'], props.theme['$font-size-sm'], props.theme['$line-height-sm'], props.theme['$border-radius-sm']), "\n  ");
});
Pagination.defaultProps = defaultProps;
Pagination.propTypes = propTypes;
/** @component */

var _default = Pagination;
exports.default = _default;