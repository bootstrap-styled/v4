"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Output component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, {
    className: props.className,
    htmlFor: props.htmlFor,
    form: props.form,
    name: props.name
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, {
    className: props.className,
    htmlFor: props.htmlFor,
    form: props.form,
    name: props.name
  })));
};

describe('<Output />', function () {
  it('should render an <Output> tag without a theme', function () {
    var renderedComponent = renderComponent({});
    expect(renderedComponent.find('OutputUnstyled').length).toBe(1);
  });
  it('should render an <Output> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({});
    expect(renderedComponent.find('output').length).toBe(1);
    expect(renderedComponent.find('Output').length).toBe(1);
  });
  it('should have an attribute htmlFor with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      htmlFor: 'a b'
    });
    expect(renderedComponent.find('output').props().htmlFor).toBe('a b');
  });
  it('should have an attribute form with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      form: 'form-test'
    });
    expect(renderedComponent.find('output').props().form).toBe('form-test');
  });
  it('should have an attribute name with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      name: 'name-test'
    });
    expect(renderedComponent.find('output').props().name).toBe('name-test');
  });
});