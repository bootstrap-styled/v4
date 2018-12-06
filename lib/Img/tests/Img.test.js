"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Img component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('<Img />', function () {
  it('should render an <Img> tag without a theme', function () {
    var renderedComponent = renderComponent({
      alt: 'test-alt',
      src: 'src-test'
    });
    expect(renderedComponent.find('ImgUnstyled').length).toBe(1);
  });
  it('should render a <Img> tag with a theme', function () {
    var renderedComponentTheme = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test'
    });
    expect(renderedComponentTheme.find('Img').length).toBe(1);
  });
  it('should have an attribute alt without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test'
    });
    expect(renderedComponent.find('Img').props().alt).toEqual('test-alt');
  });
  it('should have an attribute src without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test'
    });
    expect(renderedComponent.find('Img').props().src).toEqual('src-test');
  });
  it('should have an attribute fluid without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
      fluid: true
    });
    expect(renderedComponent.find('img').hasClass('img-fluid'));
  });
  it('should have an attribute thumbnail without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
      thumbnail: true
    });
    expect(renderedComponent.find('img').hasClass('img-thumbnail'));
  });
  it('should have an attribute figure without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
      figure: true
    });
    expect(renderedComponent.find('img').hasClass('figure-img'));
  });
});