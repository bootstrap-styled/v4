"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _NavDropdown = _interopRequireDefault(require("../NavDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our NavDropdown component
 */
var children = _react.default.createElement("span", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_NavDropdown.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_NavDropdown.default, props)));
};

describe('<NavDropdown />', function () {
  it('should render an <NavDropdown> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      toggle: jest.fn(),
      isOpen: false
    });
    expect(renderedComponent.find('span').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      toggle: jest.fn(),
      isOpen: false
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavDropdown> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      toggle: jest.fn(),
      isOpen: false
    });
    expect(renderedComponent.find('NavDropdown').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      toggle: jest.fn(),
      isOpen: false
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});