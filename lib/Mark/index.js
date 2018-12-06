"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mark component
 */
var defaultProps = {
  theme: {
    '$mark-padding': '.2em',
    '$mark-bg': '#fcf8e3'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$mark-padding': _propTypes.default.string,
    '$mark-bg': _propTypes.default.string
  })
};
exports.propTypes = propTypes;

var Mark = _styledComponents.default.mark.withConfig({
  displayName: "Mark",
  componentId: "sc-19blc2i-0"
})(["", ""], function (props) {
  return "\n    /* Reboot Scss */\n    padding: ".concat(props.theme['$mark-padding'], ";\n    background-color: ").concat(props.theme['$mark-bg'], ";\n  ");
});

Mark.defaultProps = defaultProps;
Mark.propTypes = propTypes;
/** @component */

var _default = Mark;
exports.default = _default;