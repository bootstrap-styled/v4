"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _ModalHeader = _interopRequireDefault(require("../ModalHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our ModalHeader component
 */
var children = _react.default.createElement("p", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_ModalHeader.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_ModalHeader.default, props)));
};

describe('<ModalHeader />', function () {
  it('should render an <ModalHeader> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ModalHeader> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('ModalHeader').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render close button', function () {
    var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_ModalHeader.default, {
      toggle: function toggle() {},
      className: "other"
    }, "Yo!"));
    expect(renderedComponent.find('div').hasClass('other')).toBe(true);
    expect(renderedComponent.find('div').hasClass('modal-header')).toBe(true);
    expect(renderedComponent.find('Close').length).toBe(1);
  });
});