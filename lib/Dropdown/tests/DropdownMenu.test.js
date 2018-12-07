"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _DropdownMenu = _interopRequireDefault(require("../DropdownMenu"));

var _NavDropdown = _interopRequireDefault(require("../../Navbar/NavDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Dropdown component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_NavDropdown.default, {
    isOpen: false,
    toggle: jest.fn()
  }, _react.default.createElement(_DropdownMenu.default, null, children))));
};

describe('<DropdownMenu />', function () {
  it('should render an <DropdownMenu> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownMenu').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});