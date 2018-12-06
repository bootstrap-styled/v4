"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Table component
 */
var children = _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Th1"), _react.default.createElement("th", null, "Th2"), _react.default.createElement("th", null, "Th3")));

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('<Table />', function () {
  it('should render an <Table /> tag', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Table').length).toBe(1);
  });
  it('should have children', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Table /> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Table').length).toBe(1);
    expect(renderedComponent.find('table').length).toBe(1);
  });
  it('should have a class .table by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('table').hasClass('table')).toBe(true);
  });
  it('should have a class .table-sm with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      size: 'sm'
    });
    expect(renderedComponent.find('table').hasClass('table-sm')).toBe(true);
  });
  it('should have a class .table-bordered with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      bordered: true
    });
    expect(renderedComponent.find('table').hasClass('table-bordered')).toBe(true);
  });
  it('should have a class .table-striped with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      striped: true
    });
    expect(renderedComponent.find('table').hasClass('table-striped')).toBe(true);
  });
  it('should have a class .table-inverse with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inverse: true
    });
    expect(renderedComponent.find('table').hasClass('table-inverse')).toBe(true);
  });
  it('should have a class .table-hover with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      hover: true
    });
    expect(renderedComponent.find('table').hasClass('table-hover')).toBe(true);
  });
  it('should have a class .table-reflow with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      reflow: true
    });
    expect(renderedComponent.find('table').hasClass('table-reflow')).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});