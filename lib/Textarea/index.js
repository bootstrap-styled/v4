"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* A Textarea (Box) */

/**
 * A Textarea tag
 */
var Textarea = _styledComponents.default.textarea.withConfig({
  displayName: "Textarea",
  componentId: "sc-1rbvijs-0"
})(["touch-action:manipulation;line-height:inherit;resize:vertical;"]);
/** @component */


var _default = Textarea;
exports.default = _default;
module.exports = exports["default"];