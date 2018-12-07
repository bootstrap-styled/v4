"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propTypes = {
  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /** Toggles open button dropdown. */
  isOpen: _propTypes.default.bool.isRequired,

  /** Assign function to start when dropdown opening action is trigger. */
  toggle: _propTypes.default.func.isRequired
};
exports.propTypes = propTypes;

var ButtonDropdown = function ButtonDropdown(props) {
  // eslint-disable-line arrow-body-style
  return _react.default.createElement(_Dropdown.default, _extends({}, props, {
    group: true
  }));
};

ButtonDropdown.propTypes = propTypes;
var _default = ButtonDropdown;
exports.default = _default;