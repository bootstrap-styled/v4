"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Button component
 */
var children = _react.default.createElement("span", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('<Panel />', function () {
  it('should render an <Panel> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('DrawerUnstyled').length).toBe(1);
  });
  it('should render a <Panel> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Drawer').length).toBe(1);
  });
  it('should have drawer-top class', function () {
    var renderedComponent = renderComponentUsingTheme({
      top: '260px'
    });
    expect(renderedComponent.find('div').at(1).hasClass('drawer-top')).toBe(true);
    expect(renderedComponent.find('Drawer').props().top).toEqual('260px');
  });
  it('should have drawer-right class', function () {
    var renderedComponent = renderComponentUsingTheme({
      right: '260px'
    });
    expect(renderedComponent.find('div').at(1).hasClass('drawer-right')).toBe(true);
    expect(renderedComponent.find('Drawer').props().right).toEqual('260px');
  });
  it('should have drawer-bottom class', function () {
    var renderedComponent = renderComponentUsingTheme({
      bottom: '260px'
    });
    expect(renderedComponent.find('div').at(1).hasClass('drawer-bottom')).toBe(true);
    expect(renderedComponent.find('Drawer').props().bottom).toEqual('260px');
  });
  it('should have drawer-left class', function () {
    var renderedComponent = renderComponentUsingTheme({
      left: '260px'
    });
    expect(renderedComponent.find('div').at(1).hasClass('drawer-left')).toBe(true);
    expect(renderedComponent.find('Drawer').props().left).toEqual('260px');
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});