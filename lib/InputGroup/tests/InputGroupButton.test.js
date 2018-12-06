"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _InputGroupButton = _interopRequireDefault(require("../InputGroupButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our InputGroupButton component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_InputGroupButton.default, null, props.children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_InputGroupButton.default, null, props.children)));
};

describe('<InputGroupButton />', function () {
  it('should render an <InputGroupButton> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <InputGroupButton> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('InputGroupButton').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have class input-group-btn', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('div').at(1).hasClass('input-group-btn')).toBe(true);
  });
  describe('Shorthand usage', function () {
    it('should render a child Button', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_InputGroupButton.default, null, "Yo!"));
      expect(wrapper.find('Button').length).toBe(1);
    });
    it('should render the string provided in the child Button', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_InputGroupButton.default, null, "Yo!"));
      expect(wrapper.find('button').prop('children')).toBe('Yo!');
    });
    it('should render additional props on the child Button', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_InputGroupButton.default, {
        color: "primary"
      }, "Yo!"));
      expect(wrapper.find('Button').prop('color')).toBe('primary');
    });
    it('should render additional classes on the child Button', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_InputGroupButton.default, {
        className: "yo"
      }, "Yo!"));
      expect(wrapper.find('Button').hasClass('yo')).toBe(true);
    });
    it('should render groupClassName as additional classes on the input-group-btn wrapper', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_InputGroupButton.default, {
        groupClassName: "other"
      }, "Yo!"));
      expect(wrapper.find('div').hasClass('other')).toBe(true);
      expect(wrapper.find('div').hasClass('input-group-btn')).toBe(true);
    });
    it('should render groupAttributes as additional attributes on the input-group-btn wrapper', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_InputGroupButton.default, {
        groupAttributes: {
          style: {
            textAlign: 'left'
          }
        }
      }, "Yo!"));
      expect(wrapper.find('div').prop('style').textAlign).toBe('left');
    });
  });
});