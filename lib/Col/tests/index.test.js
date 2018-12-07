"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireWildcard(require("../index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Col component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props, children)));
};

describe('<Col />', function () {
  it('should render an <Col> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('ColUnstyled').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <div> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Col').length).toBe(1);
  });
  it('getColumnSizeClass should return empty string', function () {
    expect((0, _index.getColumnSizeClass)('xs', '', '')).toEqual('');
  });
  it('getColumnSizeClass should return col-auto', function () {
    expect((0, _index.getColumnSizeClass)('xs', '', 'auto')).toEqual('col-auto');
  });
  it('getColumnSizeClass should return col-lg-auto', function () {
    expect((0, _index.getColumnSizeClass)('', 'lg', 'auto')).toEqual('col-lg-auto');
  });
  it('getColumnSizeClass should return col-8', function () {
    expect((0, _index.getColumnSizeClass)('xs', '', '8')).toEqual('col-8');
  });
  it('getColumnSizeClass should return col-lg-8', function () {
    expect((0, _index.getColumnSizeClass)('', 'lg', '8')).toEqual('col-lg-8');
  });
  it('should have a class col-6', function () {
    var renderedComponent = renderComponentUsingTheme({
      xs: '6'
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-6')).toEqual(true);
  });
  it('should have a class col-md-6', function () {
    var renderedComponent = renderComponentUsingTheme({
      md: '6'
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-md-6')).toEqual(true);
  });
  it('should have a class col-auto', function () {
    var renderedComponent = renderComponentUsingTheme({
      xs: 'auto'
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-auto')).toEqual(true);
  });
  it('should have a class col-md-auto', function () {
    var renderedComponent = renderComponentUsingTheme({
      md: 'auto'
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-md-auto')).toEqual(true);
  });
  it('should have a classes .col .col-sm-6 .sm-push-2 .sm-pull-2 .sm-offset-2', function () {
    var renderedComponent = renderComponentUsingTheme({
      sm: {
        size: 6,
        push: 2,
        pull: 2,
        offset: 1
      }
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-sm-6')).toEqual(true);
    expect(renderedComponent.find('div').at(1).hasClass('push-sm-2')).toEqual(true);
    expect(renderedComponent.find('div').at(1).hasClass('pull-sm-2')).toEqual(true);
    expect(renderedComponent.find('div').at(1).hasClass('offset-sm-1')).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});