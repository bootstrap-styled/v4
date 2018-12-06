"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _unitUtils = _interopRequireDefault(require("@bootstrap-styled/utils/lib/unitUtils"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _tableRow = require("@bootstrap-styled/css-mixins/lib/table-row");

var _hover = require("@bootstrap-styled/css-mixins/lib/hover");

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
  tag: 'table',
  responsiveTag: 'div',
  theme: {
    '$body-bg': '#fff',
    '$table-cell-padding': '.75rem',
    '$table-sm-cell-padding': '.3rem',
    '$table-bg': 'transparent',
    '$table-inverse-bg': '#292b2c',
    '$table-inverse-bg-accent': 'rgba(255, 255, 255, 0.05)',
    '$table-inverse-bg-hover': 'rgba(0, 0, 0, 0.075)',
    '$table-inverse-color': '#fff',
    '$table-inverse-border': 'hsl(200, 3.5%, 17.9%)',
    '$table-bg-accent': 'rgba(0, 0, 0, 0.05)',
    '$table-bg-hover': 'rgba(0, 0, 0, 0.075)',
    '$table-bg-active': 'rgba(0, 0, 0, 0.075)',
    '$table-head-bg': '#eceeef',
    '$table-head-color': '#464a4c',
    '$table-border-width': '1px',
    '$table-border-color': '#eceeef',
    '$state-success-bg': '#dff0d8',
    '$state-info-bg': '#d9edf7',
    '$state-warning-bg': '#fcf8e3',
    '$state-danger-bg': '#f2dede'
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

  /** Change tab size with specified one. Can be: `sm` */
  size: _propTypes.default.string,

  /** Toggles bordered CSS style. */
  bordered: _propTypes.default.bool,

  /** Toggles striped CSS style. */
  striped: _propTypes.default.bool,

  /** Toggles inverse CSS style. */
  inverse: _propTypes.default.bool,

  /** Toggles hover CSS style. */
  hover: _propTypes.default.bool,

  /** Toggles reflow CSS style. */
  reflow: _propTypes.default.bool,

  /** Toggles responsive CSS display. */
  responsive: _propTypes.default.bool,

  /** Replace the responsive component tag by the one specified. Can be: */
  responsiveTag: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$body-bg': _propTypes.default.string,
    '$table-cell-padding': _propTypes.default.string,
    '$table-sm-cell-padding': _propTypes.default.string,
    '$table-bg': _propTypes.default.string,
    '$table-inverse-bg': _propTypes.default.string,
    '$table-inverse-bg-accent': _propTypes.default.string,
    '$table-inverse-bg-hover': _propTypes.default.string,
    '$table-inverse-color': _propTypes.default.string,
    '$table-inverse-border': _propTypes.default.string,
    '$table-bg-accent': _propTypes.default.string,
    '$table-bg-hover': _propTypes.default.string,
    '$table-bg-active': _propTypes.default.string,
    '$table-head-bg': _propTypes.default.string,
    '$table-head-color': _propTypes.default.string,
    '$table-border-width': _propTypes.default.string,
    '$table-border-color': _propTypes.default.string,
    '$state-success-bg': _propTypes.default.string,
    '$state-info-bg': _propTypes.default.string,
    '$state-warning-bg': _propTypes.default.string,
    '$state-danger-bg': _propTypes.default.string
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var TableUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableUnstyled, _React$Component);

  function TableUnstyled() {
    _classCallCheck(this, TableUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableUnstyled).apply(this, arguments));
  }

  _createClass(TableUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          size = _omit.size,
          bordered = _omit.bordered,
          striped = _omit.striped,
          inverse = _omit.inverse,
          hover = _omit.hover,
          reflow = _omit.reflow,
          responsive = _omit.responsive,
          Tag = _omit.tag,
          ResponsiveTag = _omit.responsiveTag,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "size", "bordered", "striped", "inverse", "hover", "reflow", "responsive", "tag", "responsiveTag"]);

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, 'table', size ? 'table-' + size : false, // eslint-disable-line
      bordered ? 'table-bordered' : false, striped ? 'table-striped' : false, inverse ? 'table-inverse' : false, hover ? 'table-hover' : false, reflow ? 'table-reflow' : false), cssModule);

      var table = _react.default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));

      if (responsive) {
        return _react.default.createElement(ResponsiveTag, {
          className: "table-responsive"
        }, table);
      }

      return table;
    }
  }]);

  return TableUnstyled;
}(_react.default.Component);
/**
 * A classic `<Table />` component.
 * **Inverse**, **head** options, **striped rows**, **bordered** table, **contextual classes**, **colored** with global background utilities and **responsive tables**.
 * **Hoverable rows**
 * Add `.table-hover` to enable a hover state on table rows within a `<Tbody>`.
 * **Small table**
 * Add `.table-sm` to make tables more compact by cutting cell padding in half.
 */


_defineProperty(TableUnstyled, "propTypes", propTypes);

_defineProperty(TableUnstyled, "defaultProps", defaultProps);

var Table = (0, _styledComponents.default)(TableUnstyled).withConfig({
  displayName: "Table",
  componentId: "oyilxr-0"
})(["", ""], function (props) {
  return "\n    /*\n     Basic Bootstrap table\n    */\n    &.table {\n      width: 100%;\n      max-width: 100%;\n      margin-bottom: ".concat(props.theme['$spacer'], ";\n      background-color: ").concat(props.theme['$table-bg'], ";\n\n      th,\n      td {\n        padding: ").concat(props.theme['$table-cell-padding'], ";\n        vertical-align: top;\n        border-top: ").concat(props.theme['$table-border-width'], " solid ").concat(props.theme['$table-border-color'], ";\n      }\n    \n      thead th {\n        vertical-align: bottom;\n        border-bottom: ").concat(_unitUtils.default.math.multiply(props.theme['$table-border-width'], 2), " solid ").concat(props.theme['$table-border-color'], ";\n      }\n    \n      tbody + tbody {\n        border-top: ").concat(_unitUtils.default.math.multiply(props.theme['$table-border-width'], 2), " solid ").concat(props.theme['$table-border-color'], ";\n      }\n    \n      .table {\n        background-color: ").concat(props.theme['$body-bg'], ";\n      }\n    }\n    \n    \n    /*\n     Condensed table w/ half padding\n    */\n    \n    &.table-sm {\n      th,\n      td {\n        padding: ").concat(props.theme['$table-sm-cell-padding'], ";\n      }\n    }\n    \n    \n    /* Bordered version\n     Add borders all around the table and between all the columns.\n    */\n    &.table-bordered {\n      border: ").concat(props.theme['$table-border-width'], " solid ").concat(props.theme['$table-border-color'], ";\n    \n      th,\n      td {\n        border: ").concat(props.theme['$table-border-width'], " solid ").concat(props.theme['$table-border-color'], ";\n      }\n    \n      thead {\n        th,\n        td {\n          border-bottom-width: ").concat(_unitUtils.default.math.multiply(2, props.theme['$table-border-width']), ";\n        }\n      }\n    }\n    \n    \n    /* Zebra-striping\n     Default zebra-stripe styles (alternating gray and transparent backgrounds)\n    */\n    \n    &.table-striped {\n      tbody tr:nth-of-type(odd) {\n        background-color: ").concat(props.theme['$table-bg-accent'], ";\n      }\n    }\n    \n    \n    /* \n    Hover effect Placed here since it has to come after the potential zebra striping\n    */\n\n    \n    &.table-hover {\n      tbody tr {\n        ").concat((0, _hover.hover)("\n          background-color: ".concat(props.theme['$table-bg-hover'], ";\n        ")), "\n      }\n    }\n    \n    /* Table backgrounds\n    Exact selectors below required to override '.table-striped' and prevent\n    inheritance to nested tables.\n    */\n        \n    /* Generate the contextual variants */\n    ").concat((0, _tableRow.tableRowVariant)('active', props.theme['$table-bg-active']), "\n    ").concat((0, _tableRow.tableRowVariant)('success', props.theme['$state-success-bg']), "\n    ").concat((0, _tableRow.tableRowVariant)('info', props.theme['$state-info-bg']), "\n    ").concat((0, _tableRow.tableRowVariant)('warning', props.theme['$state-warning-bg']), "\n    ").concat((0, _tableRow.tableRowVariant)('danger', props.theme['$state-danger-bg']), "\n     \n    \n    /* Inverse styles\n    Same table markup, but inverted color scheme: dark background and light text.\n    */ \n    \n    & thead.thead-inverse {\n      th {\n        color: ").concat(props.theme['$table-inverse-color'], ";\n        background-color: ").concat(props.theme['$table-inverse-bg'], ";\n      }\n    }\n    \n    \n    & thead.thead-default {\n      th {\n        color: ").concat(props.theme['$table-head-color'], ";\n        background-color: ").concat(props.theme['$table-head-bg'], ";\n      }\n    }\n    \n    &.table-inverse {\n      color: ").concat(props.theme['$table-inverse-color'], ";\n      background-color: ").concat(props.theme['$table-inverse-bg'], ";\n    \n      th,\n      td,\n      thead th {\n        border-color: ").concat(props.theme['$table-inverse-border'], ";\n      }\n    \n      &.table-bordered {\n        border: 0;\n      }\n      \n      &.table-striped {\n        tbody tr:nth-of-type(odd) {\n        background-color: ").concat(props.theme['$table-inverse-bg-accent'], ";\n        }\n      }\n      \n      &.table-hover {\n        tbody tr {\n          ").concat((0, _hover.hover)("\n            background-color: ".concat(props.theme['$table-inverse-bg-hover'], ";\n          ")), "\n        }\n      }\n    }\n    \n    /* Responsive tables\n     Wrap your tables in '.table-responsive' and we'll make them mobile friendly\n     by enabling horizontal scrolling. Only applies <768px. Everything above that\n     will display normally.\n     */\n    \n    &.table-responsive {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      -ms-overflow-style: -ms-autohiding-scrollbar; /* See https://github.com/twbs/bootstrap/pull/10057 */\n      &.table-bordered {\n        border: 0;\n      }\n    }\n    \n    &.table-reflow {\n    \n      /* added bs4 missing tfoot rule */\n      thead, tfoot {\n        float: left;\n      }\n    \n      tbody {\n        display: block;\n        white-space: nowrap;\n      }\n    \n      th,\n      td {\n        border-top: ").concat(props.theme['$table-border-width'], " solid ").concat(props.theme['$table-border-color'], ";\n        border-left: ").concat(props.theme['$table-border-width'], " solid ").concat(props.theme['$table-border-color'], ";\n    \n        &:last-child {\n          border-right: ").concat(props.theme['$table-border-width'], " solid ").concat(props.theme['$table-border-color'], ";\n        }\n      }\n    \n      thead,\n      tbody,\n      tfoot {\n        &:last-child {\n          tr:last-child th,\n          tr:last-child td {\n            border-bottom: ").concat(props.theme['$table-border-width'], " solid ").concat(props.theme['$table-border-color'], ";\n          }\n        }\n      }\n    \n      tr {\n        float: left;\n    \n        th,\n        td {\n          display: block !important;\n          border: ").concat(props.theme['$table-border-width'], " solid ").concat(props.theme['$table-border-color'], ";\n        }\n      }\n    }\n    \n    /* from reboot.scss */\n    th {\n      /* Centered by default, but left-align-ed to match the tds below. */\n      text-align: left;\n    }\n      \n    /* Reboot Scss */\n    /* No longer part of Normalize since v4 */\n    border-collapse: collapse;\n    /*  Reset for nesting within parents with 'background-color'. */\n    background-color: ").concat(props.theme['$table-bg'], ";    \n    \n  ");
});
Table.defaultProps = defaultProps;
Table.propTypes = propTypes;
/** @component */

var _default = Table;
exports.default = _default;