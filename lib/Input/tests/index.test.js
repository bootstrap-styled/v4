"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Input component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('<Input />', function () {
  it('should render an <Input> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('InputUnstyled').length).toBe(1);
  });
  it('should have an attribute type without a theme', function () {
    var renderedComponent = renderComponent({
      type: 'button'
    });
    expect(renderedComponent.props().type).toEqual('button');
  });
  it('should have an attribute placeholder without a theme', function () {
    var renderedComponent = renderComponent({
      placeholder: 'Enter your input here'
    });
    expect(renderedComponent.props().placeholder).toEqual('Enter your input here');
  });
  it('should render a <input> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('input').length).toBe(1);
    expect(renderedComponent.find('Input').length).toBe(1);
  });
  it('should have an attribute type with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      type: 'button'
    });
    expect(renderedComponent.find('input').props().type).toEqual('button');
  });
  it('should have an attribute placeholder with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      placeholder: 'Enter your input here'
    });
    expect(renderedComponent.find('input').props().placeholder).toEqual('Enter your input here');
  });
  it('should have a class form-control-file if type: file with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      type: 'file'
    });
    expect(renderedComponent.find('Input').hasClass('form-control-file'));
  });
  it('should have a class form-check-input if addon: true with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      addon: false
    });
    expect(renderedComponent.find('Input').hasClass('form-check-input'));
  });
  it('should have a class form-control-state-success with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      state: 'success'
    });
    expect(renderedComponent.find('Input').hasClass('form-control-state-success'));
  });
  it('should have a class form-control-size-sm with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'sm'
    });
    expect(renderedComponent.find('Input').hasClass('form-control-size-sm'));
  });
  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', function () {
    var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_index.default, {
      addon: true,
      type: "checkbox"
    }));
    expect(renderedComponent.hasClass('form-check-input')).toBe(false);
    expect(renderedComponent.hasClass('form-control')).toBe(false);
  });
  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', function () {
    var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_index.default, {
      addon: true,
      type: "radio"
    }));
    expect(renderedComponent.hasClass('form-check-input')).toBe(false);
    expect(renderedComponent.hasClass('form-control')).toBe(false);
  });
});