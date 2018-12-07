"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

var _index = _interopRequireDefault(require("../index"));

var _DropdownToggle = _interopRequireDefault(require("../DropdownToggle"));

var _DropdownMenu = _interopRequireDefault(require("../DropdownMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var children = _react.default.createElement("h1", null, "Test");

var isOpen;
var toggle;
var onClick;

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, {
    isOpen: isOpen,
    toggle: toggle
  }, _react.default.createElement(_DropdownToggle.default, _extends({
    onClick: onClick
  }, props), children), _react.default.createElement(_DropdownMenu.default, null, _react.default.createElement(_DropdownItem.default, null, children)))));
};

describe('<DropdownToggle />', function () {
  beforeEach(function () {
    isOpen = false;
    onClick = jest.fn();
    toggle = jest.fn();
  });
  it('should render an <DropdownToggle> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownToggle').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a caret', function () {
    var renderedComponent = renderComponentUsingTheme({
      caret: true
    });
    expect(renderedComponent.find('Button').hasClass('dropdown-toggle')).toBe(true);
  });
  it('should render a split', function () {
    var renderedComponent = renderComponentUsingTheme({
      split: true
    });
    expect(renderedComponent.find('Button').hasClass('dropdown-toggle-split')).toBe(true);
  });
});