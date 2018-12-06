"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lists = require("@bootstrap-styled/css-mixins/lib/lists");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Ordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */
var defaultProps = {
  theme: {
    '$list-inline-padding': '5px'
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$list-inline-padding': _propTypes.default.string
  })
};
exports.propTypes = propTypes;

var Ol = _styledComponents.default.ol.withConfig({
  displayName: "Ol",
  componentId: "kl9hp1-0"
})(["", ""], function (props) {
  return "\n    /* Type Scss */\n    &.list-unstyled {\n      ".concat((0, _lists.listUnstyled)(), "\n    }\n\n    &.list-inline {\n      ").concat((0, _lists.listInline)(), "\n    }\n\n    &.list-inline-item {\n      ").concat((0, _lists.listInlineItem)(props.theme['$list-inline-padding']), "\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ");
});

Ol.defaultProps = defaultProps;
Ol.propTypes = propTypes;
/** @component */

var _default = Ol;
exports.default = _default;