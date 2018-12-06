"use strict";

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _enzyme = require("enzyme");

var _FigCaption = _interopRequireDefault(require("../FigCaption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our FigCaption component
 */
var children = 'Test';

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_FigCaption.default, props, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_FigCaption.default, props, children)));
};

describe('<FigCaption />', function () {
  it('should render an <FigCaption> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('FigCaptionUnstyled').length).toBe(1);
  });
  it('should contain children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <figcaption> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('figcaption').length).toBe(1);
    expect(renderedComponent.find('FigCaption').length).toBe(1);
  });
  it('should render a <figcaption> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      right: true
    });
    expect(renderedComponent.find('FigCaption').props().right).toBe(true);
  });
});