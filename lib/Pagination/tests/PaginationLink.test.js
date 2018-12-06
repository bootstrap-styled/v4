"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _PaginationLink = _interopRequireDefault(require("../PaginationLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our PaginationLink component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_PaginationLink.default, props, props.children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_PaginationLink.default, props, props.children)));
};

describe('<PaginationLink />', function () {
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <PaginationLink> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render previous', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_PaginationLink.default, {
      previous: true
    }));
    expect(wrapper.find('A').prop('aria-label')).toBe('Previous');
    expect(wrapper.find({
      'aria-hidden': 'true'
    }).text()).toBe("\xAB");
    expect(wrapper.find('.sr-only').text()).toBe('Previous');
  });
  it('should render next', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_PaginationLink.default, {
      next: true
    }));
    expect(wrapper.find('A').prop('aria-label')).toBe('Next');
    expect(wrapper.find({
      'aria-hidden': 'true'
    }).text()).toBe("\xBB");
    expect(wrapper.find('.sr-only').text()).toBe('Next');
  });
  it('should render custom caret', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_PaginationLink.default, {
      next: true
    }, "Yo"));
    expect(wrapper.find({
      'aria-hidden': 'true'
    }).text()).toBe('Yo');
  });
});