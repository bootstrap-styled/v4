"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  theme: {
    '$hr-border-width': '1px',
    '$hr-border-color': 'rgba(0, 0, 0, 0.1)'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$hr-border-width': _propTypes.default.string,
    '$hr-border-color': _propTypes.default.string
  })
};
exports.propTypes = propTypes;

var Hr = _styledComponents.default.hr.withConfig({
  displayName: "Hr",
  componentId: "sc-1a12p8r-0"
})(["", ""], function (props) {
  return "\n    margin-top: ".concat(props.theme['$spacer-y'], ";\n    margin-bottom: ").concat(props.theme['$spacer-y'], ";\n    border: 0;\n    border-top: ").concat(props.theme['$hr-border-width'], " solid ").concat(props.theme['$hr-border-color'], ";\n  ");
});

Hr.defaultProps = defaultProps;
Hr.propTypes = propTypes;
/** @component */

var _default = Hr;
exports.default = _default;