"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

var _DropdownMenu = _interopRequireDefault(require("../DropdownMenu"));

var _DropdownToggle = _interopRequireDefault(require("../DropdownToggle"));

var _TetherContent = _interopRequireDefault(require("../../TetherContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Dropdown component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('Dropdown', function () {
  var isOpen;
  var toggle;
  var element;
  beforeEach(function () {
    isOpen = false;
    toggle = jest.fn();
    element = document.createElement('div');
    document.body.appendChild(element);
  });
  afterEach(function () {
    document.body.removeChild(element);
    element = null;
  });
  describe('<Dropdown />', function () {
    it('should render an <Dropdown> tag with a theme', function () {
      var renderedComponent = renderComponentUsingTheme({
        children: children,
        isOpen: isOpen,
        toggle: toggle
      });
      expect(renderedComponent.find('Dropdown').length).toBe(1);
    });
    it('should have children with a theme', function () {
      var renderedComponent = renderComponentUsingTheme({
        children: children,
        isOpen: isOpen,
        toggle: toggle
      });
      expect(renderedComponent.contains(children)).toEqual(true);
    });
  });
  it('should render a single child', function () {
    var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_index.default, {
      isOpen: isOpen,
      toggle: toggle
    }, "Ello world"));
    expect(renderedComponent.text()).toBe('Ello world');
    expect(renderedComponent.find('.dropdown').length).toBe(1);
  });
  it('should render children when isOpen is true', function () {
    isOpen = true;
    var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_index.default, {
      isOpen: isOpen,
      toggle: toggle
    }, _react.default.createElement(_DropdownToggle.default, null, "Toggle"), _react.default.createElement(_DropdownMenu.default, null, _react.default.createElement(_DropdownItem.default, null, "Test"))));
    expect(renderedComponent.find('.btn').text()).toBe('Toggle');
    expect(renderedComponent.find('Dropdown').length).toBe(1);
    expect(renderedComponent.find('DropdownItem').length).toBe(1);
    expect(renderedComponent.children().length).toBe(1);
  });
  it('should not call props.toggle when disabled ', function () {
    isOpen = true;
    var toggleTest = jest.fn();
    var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_index.default, {
      isOpen: isOpen,
      toggle: toggleTest,
      disabled: true
    }, _react.default.createElement(_DropdownToggle.default, null, "Toggle"), _react.default.createElement(_DropdownMenu.default, null, _react.default.createElement(_DropdownItem.default, null, "Test"))));
    renderedComponent.find('Dropdown').simulate('click');
    expect(toggleTest).not.toHaveBeenCalled();
  });
  describe('getTetherConfig', function () {
    it('should apply dropup tether values', function () {
      isOpen = true;
      var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_index.default, {
        isOpen: isOpen,
        toggle: toggle,
        tether: true,
        dropup: true
      }, _react.default.createElement(_DropdownToggle.default, null, "Toggle"), _react.default.createElement(_DropdownMenu.default, {
        right: true
      }, _react.default.createElement(_DropdownItem.default, null, "Test"))));
      expect(renderedComponent.find(_TetherContent.default).props().tether.attachment).toBe('bottom right');
      expect(renderedComponent.find(_TetherContent.default).props().tether.targetAttachment).toBe('top right');
      renderedComponent.unmount();
    });
  });
});