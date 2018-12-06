"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Close component
 */
var renderComponent = function renderComponent(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('<Close />', function () {
  var onDismiss;
  beforeEach(function () {
    onDismiss = jest.fn();
  });
  it('should render an <Close> tag without a theme', function () {
    var renderedComponent = renderComponent({
      onDismiss: onDismiss
    });
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', function () {
    var renderedComponent = renderComponent({
      onDismiss: onDismiss
    });
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', function () {
    var renderedComponent = renderComponent({
      onDismiss: onDismiss,
      'sr-only': true,
      closeLabel: 'Close'
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });
  it('should render an <Close> tag without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      onDismiss: onDismiss
    });
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      onDismiss: onDismiss
    });
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      onDismiss: onDismiss,
      'sr-only': true,
      closeLabel: 'Close'
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });
});