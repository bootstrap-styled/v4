"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _NavbarToggler = _interopRequireDefault(require("../NavbarToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our NavbarToggler component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_NavbarToggler.default, props));
};

describe('<NavbarToggler />', function () {
  it('should render an <NavbarToggler> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('NavbarToggler').length).toBe(1);
  });
  it('should render a <NavbarToggler> with class .navbar-toggler-left', function () {
    var renderedComponent = renderComponent({
      left: true
    });
    expect(renderedComponent.find('.navbar-toggler-left').length).toBe(1);
  });
  it('should render a <NavbarToggler> with class .navbar-toggler-right', function () {
    var renderedComponent = renderComponent({
      right: true
    });
    expect(renderedComponent.find('.navbar-toggler-right').length).toBe(1);
  });
});