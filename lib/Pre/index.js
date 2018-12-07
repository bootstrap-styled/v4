"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pre component
 */
var defaultProps = {
  theme: {
    '$code-font-size': '90%',
    '$pre-color': '#292b2c',
    '$pre-scrollable-max-height': '340px',
    '$font-family-monospace': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$code-font-size': _propTypes.default.string,
    '$pre-color': _propTypes.default.string,
    '$pre-scrollable-max-height': _propTypes.default.string,
    '$font-family-monospace': _propTypes.default.string
  })
};
exports.propTypes = propTypes;

var Pre = _styledComponents.default.pre.withConfig({
  displayName: "Pre",
  componentId: "sc-1o4cukg-0"
})(["", ""], function (props) {
  return "\n    /* Blocks of code */\n    display: block;\n    margin-top: 0;\n    margin-bottom: 1rem;\n    font-size: ".concat(props.theme['$code-font-size'], ";\n    color: ").concat(props.theme['$pre-color'], ";\n    \n    /* Enable scrollable blocks of code */\n    /* AJT This class was present in bootstrap/scss/code.scss  We must decide if this class should be a mixin or not! */\n    &.pre-scrollable {\n      max-height: ").concat(props.theme['$pre-scrollable-max-height'], ";\n      overflow-y: scroll;\n    }\n\n  \n    /* Account for some code outputs that place code tags in pre tags */\n    code {\n      padding: 0;\n      font-size: inherit;\n      color: inherit;\n      background-color: transparent;\n      border-radius: 0;\n    }\n    \n    /* Reboot Scss */\n\n    /* Remove browser default top margin */\n    margin-top: 0;\n    /* Reset browser default of '1em' to use 'rem's */\n    margin-bottom: 1rem;\n    /* Normalize v4 removed this property, causing 'pre' content to break out of wrapping code snippets */\n    overflow: auto;\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ").concat(props.theme['$font-family-monospace'], ";\n  ");
});

Pre.defaultProps = defaultProps;
Pre.propTypes = propTypes;
/** @component */

var _default = Pre;
exports.default = _default;