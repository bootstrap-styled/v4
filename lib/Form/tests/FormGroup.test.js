"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_FormGroup.default, props, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_FormGroup.default, props, children)));
};

describe('<FormGroup />', function () {
  it('should render an <FormGroup> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormGroup> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormGroup').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a class has-warning', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'warning'
    });
    expect(renderedComponent.find('div').at(1).hasClass('has-warning')).toBe(true);
  });
  it('should have a class row', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      row: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('row')).toBe(true);
  });
  it('should have a class form-check', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      check: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('form-check')).toBe(true);
  });
  it('should have a class form-check-inline', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inline: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('form-check-inline')).toBe(true);
  });
  it('should have a class disabled', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      check: true,
      disabled: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('disabled')).toBe(true);
  });
});