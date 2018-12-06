"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Textarea component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('<Textarea />', function () {
  var onChange;
  beforeEach(function () {
    onChange = jest.fn();
  });
  it('should render an <Textarea> tag without a theme', function () {
    var renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });
  it('should have a value attribute without a theme', function () {
    var renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.props().value).toEqual('Insert text here');
  });
  it('should adopt a wrap attribute without a theme', function () {
    var renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.props().wrap).toEqual('wrapString');
  });
  it('should render one <Textarea> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });
  it('should render a value attribute of <Textarea> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.find('textarea').props().value).toEqual('Insert text here');
  });
  it('should render an wrap attribute of <Textarea> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.find('textarea').props().wrap).toEqual('wrapString');
  });
  it('should have content with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      onChange: onChange
    });
    expect(renderedComponent.text()).toEqual('Insert text here');
  });
});