"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _FormText = _interopRequireDefault(require("../FormText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_FormText.default, props, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_FormText.default, props, children)));
};

describe('<FormText />', function () {
  it('should render an <FormText> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('small').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormText> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormText').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a class text-info', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'success'
    });
    expect(renderedComponent.find('small').hasClass('text-success')).toBe(true);
  });
  it('should NOT have a class form-text', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inline: true
    });
    expect(renderedComponent.find('small').hasClass('form-text')).toBe(false);
  });
});