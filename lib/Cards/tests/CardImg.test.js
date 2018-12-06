"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _CardImg = _interopRequireDefault(require("../CardImg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our CardImg component
 */
var renderComponent = function renderComponent(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_CardImg.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_CardImg.default, props)));
};

describe('<CardImg />', function () {
  it('should render an <CardImg> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('img').length).toBe(1);
  });
  it('should render an <CardImg> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('CardImg').length).toBe(1);
    expect(renderedComponent.find('img').length).toBe(1);
  });
  it('should have an attribute top without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      top: true
    });
    expect(renderedComponent.find('CardImg').props().top).toBe(true);
  });
  it('should have an attribute bottom without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      bottom: true
    });
    expect(renderedComponent.find('CardImg').props().bottom).toBe(true);
  });
  it('should have a class .card-img by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('img').hasClass('card-img')).toBe(true);
  });
});