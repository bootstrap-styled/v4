"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our ProgressBar component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, null, _react.default.createElement(_ProgressBar.default, props, props.children)));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, null, _react.default.createElement(_ProgressBar.default, props, props.children))));
};

describe('<ProgressBar />', function () {
  it('should render an <ProgressBar> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('ProgressBar').length).toBe(1);
  });
  it('should have an attribute value without a theme', function () {
    var renderedComponent = renderComponent({
      valueNow: 42
    });
    expect(renderedComponent.find('ProgressBar').props().valueNow).toEqual(42);
  });
  it('should have an attribute max without a theme', function () {
    var renderedComponent = renderComponent({
      valueMax: 420
    });
    expect(renderedComponent.find('ProgressBar').props().valueMax).toEqual(420);
  });
  it('should render a <Progress> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('ProgressBar').length).toBe(1);
  });
  it('should have class .progress-bar by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('.progress-bar').length).toEqual(1);
  });
  it('should have class .progress-bar-animated with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      animated: true
    });
    expect(renderedComponent.find('.progress-bar-animated').length).toEqual(1);
  });
  it('should have class bg-info with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      color: 'info'
    });
    expect(renderedComponent.find('.bg-info').length).toEqual(1);
  });
  it('should have class .progress-bar-striped with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      striped: true
    });
    expect(renderedComponent.find('.progress-bar-striped').length).toEqual(1);
  });
  it('should render a <Progress> tag with children and a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: _react.default.createElement("span", null, "hello")
    });
    expect(renderedComponent.find('ProgressBar').children().length).toBe(1);
  });
});