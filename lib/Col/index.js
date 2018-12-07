"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = exports.getColumnSizeClass = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _gridFramework = require("@bootstrap-styled/css-mixins/lib/grid-framework");

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];

var stringOrNumberProp = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]);

var columnProps = _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number, _propTypes.default.string, _propTypes.default.shape({
  size: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number, _propTypes.default.string]),
  push: stringOrNumberProp,
  pull: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? '' : "col-".concat(colWidth);
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-".concat(colWidth, "-auto");
  }

  return isXs ? "col-".concat(colSize) : "col-".concat(colWidth, "-").concat(colSize);
};

exports.getColumnSizeClass = getColumnSizeClass;
var defaultProps = {
  tag: 'div',
  widths: colWidths,
  theme: {
    '$enable-grid-classes': true,
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$grid-columns': '12',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    }
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
  tag: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),

  /** Extra small columns variables. */
  xs: columnProps,

  /** Small columns variables. */
  sm: columnProps,

  /** Medium columns variables. */
  md: columnProps,

  /** Large columns variables. */
  lg: columnProps,

  /** Extra large columns variables. */
  xl: columnProps,

  /** Widths size variables. */
  widths: _propTypes.default.array,

  /** Theme variables. */
  theme: _propTypes.default.shape({}),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var ColUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ColUnstyled, _React$Component);

  function ColUnstyled() {
    _classCallCheck(this, ColUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColUnstyled).apply(this, arguments));
  }

  _createClass(ColUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _this = this;

      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          widths = _omit.widths,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "widths", "tag"]);

      var colClasses = [];
      widths.forEach(function (colWidth, i) {
        var columnProp = _this.props[colWidth];

        if (!i && columnProp === undefined) {
          columnProp = true;
        }

        delete attributes[colWidth];

        if (!columnProp) {
          return;
        }

        var isXs = !i;
        var colClass;

        if (_typeof(columnProp) === 'object') {
          var _cn;

          var colSizeInterfix = isXs ? '-' : "-".concat(colWidth, "-");
          colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
          colClasses.push((0, _mapToCssModules.default)((0, _classnames.default)((_cn = {}, _defineProperty(_cn, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_cn, "push".concat(colSizeInterfix).concat(columnProp.push), columnProp.push), _defineProperty(_cn, "pull".concat(colSizeInterfix).concat(columnProp.pull), columnProp.pull), _defineProperty(_cn, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset), _cn))), cssModule);
        } else {
          colClass = getColumnSizeClass(isXs, colWidth, columnProp);
          colClasses.push(colClass);
        }
      });
      return _react.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules.default)((0, _classnames.default)(className, colClasses), cssModule)
      }, attributes));
    }
  }]);

  return ColUnstyled;
}(_react.default.Component);
/**
 * Column component to use inside a `<Row />` component.
 */


_defineProperty(ColUnstyled, "propTypes", propTypes);

_defineProperty(ColUnstyled, "defaultProps", defaultProps);

var Col = (0, _styledComponents.default)(ColUnstyled).withConfig({
  displayName: "Col",
  componentId: "sc-14ninbu-0"
})(["", ""], function (props) {
  return "\n    ".concat((0, _gridFramework.makeGridColumns)(props.theme['$enable-grid-classes'], props.theme['$grid-columns'], props.theme['$grid-gutter-widths'], props.theme['$grid-breakpoints']), "\n  ");
});
Col.defaultProps = defaultProps;
Col.propTypes = propTypes;
/** @component */

var _default = Col;
exports.default = _default;