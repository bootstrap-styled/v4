"use strict";

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Fieldset component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, {
    disabled: props.disabled,
    form: props.form,
    name: props.name,
    className: props.className
  }, props.children)));
};

describe('<Fieldset />', function () {
  it('should render a <fieldset> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('fieldset').length).toBe(1);
  });
  it('should have an attribute disabled without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      disabled: true
    });
    expect(renderedComponent.find('fieldset').props().disabled).toEqual(true);
  });
  it('should have an attribute disabled without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      form: 'form_1'
    });
    expect(renderedComponent.find('fieldset').props().form).toEqual('form_1');
  });
  it('should have an attribute name without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      name: 'name_1'
    });
    expect(renderedComponent.find('fieldset').props().name).toEqual('name_1');
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});