"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* A Caption (Box) */
var defaultProps = {
  theme: {
    '$table-cell-padding': '.75rem',
    '$text-muted': '#636c72'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$table-cell-padding': _propTypes.default.string,
    '$text-muted': _propTypes.default.string
  })
};
/**
 * A `<Caption />` tag component in order to add description title to a `<Table />` component.

 */

exports.propTypes = propTypes;

var Caption = _styledComponents.default.caption.withConfig({
  displayName: "Caption",
  componentId: "sc-1miu1rz-0"
})(["", ""], function (props) {
  return "\n    padding-top: ".concat(props.theme['$table-cell-padding'], ";\n    padding-bottom: ").concat(props.theme['$table-cell-padding'], ";\n    color: ").concat(props.theme['$text-muted'], ";\n    text-align: left;\n    caption-side: top;\n  ");
});

Caption.defaultProps = defaultProps;
Caption.propTypes = propTypes;
/** @component */

var _default = Caption;
exports.default = _default;