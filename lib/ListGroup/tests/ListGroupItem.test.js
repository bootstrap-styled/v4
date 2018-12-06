"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _ListGroupItem = _interopRequireDefault(require("../ListGroupItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our ListGroupItem component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_ListGroupItem.default, props, props.children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_ListGroupItem.default, props, props.children)));
};

describe('<ListGroupItem />', function () {
  it('should render an <ListGroupItem> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ListGroupItem> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('li').length).toBe(1);
    expect(renderedComponent.find('ListGroupItem').length).toBe(1);
  });
  it('should have a class active with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      active: true
    });
    expect(renderedComponent.find('li').hasClass('active'));
  });
  it('should have a class disabled with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      disabled: true
    });
    expect(renderedComponent.find('li').hasClass('disabled'));
  });
  it('should have a class list-group-item-action with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      action: true
    });
    expect(renderedComponent.find('li').hasClass('list-group-item-action'));
  });
  it('should have a class list-group-item-success with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'success'
    });
    expect(renderedComponent.find('li').hasClass('list-group-item-success'));
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should prevent click event when disabled is passed', function () {
    var onDisableClick = jest.fn();
    var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_ListGroupItem.default, {
      disabled: true,
      onClick: onDisableClick
    }, "Yo!"));
    renderedComponent.find('li').simulate('click');
    expect(onDisableClick).not.toHaveBeenCalled();
  });
});