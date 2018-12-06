"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

var _index = _interopRequireDefault(require("../index"));

var _DropdownToggle = _interopRequireDefault(require("../DropdownToggle"));

var _DropdownMenu = _interopRequireDefault(require("../DropdownMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Dropdown component
 */
var children = _react.default.createElement("h1", null, "Test");

var dropdownOpen;
var toggle;
var onClick;

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, {
    isOpen: dropdownOpen,
    toggle: toggle
  }, _react.default.createElement(_DropdownToggle.default, {
    caret: true
  }, "Dropdown"), _react.default.createElement(_DropdownMenu.default, null, _react.default.createElement(_DropdownItem.default, props, children)))));
};

describe('<DropdownItem />', function () {
  beforeEach(function () {
    dropdownOpen = false;
    toggle = jest.fn();
    onClick = jest.fn();
  });
  it('should render an <DropdownItem> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownItem').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  describe('header', function () {
    it('should render h6 tag heading', function () {
      var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_DropdownItem.default, {
        header: true
      }, "Heading"));
      expect(renderedComponent.find('h6').length).toBe(1);
      expect(renderedComponent.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(renderedComponent.text()).toBe('Heading');
    });
  });
  describe('header', function () {
    it('should render h6 tag heading', function () {
      var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_DropdownItem.default, {
        header: true
      }, "Heading"));
      expect(renderedComponent.find('h6').length).toBe(1);
      expect(renderedComponent.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(renderedComponent.text()).toBe('Heading');
    });
  });
  describe('divider', function () {
    it('should render a divider element', function () {
      var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_DropdownItem.default, {
        divider: true
      }));
      expect(renderedComponent.find('.dropdown-divider').length).toBe(1);
    });
  });
  describe('onClick', function () {
    it('should not be called when disabled', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_DropdownItem.default, {
        disabled: true
      }, "Item"));
      renderedComponent.find('button').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });
    it('should not be called when divider is set', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_DropdownItem.default, {
        divider: true
      }));
      renderedComponent.find('div').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });
    it('should not be called when header item', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_DropdownItem.default, {
        header: true
      }, "Header"));
      renderedComponent.find('h6').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });
    it('should call toggle', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_DropdownItem.default, null, "Click me"), {
        context: {
          toggle: functionTest
        }
      });
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });
    it('should call onClick', function () {
      var renderedComponent = renderComponentUsingTheme({
        children: children,
        onClick: onClick
      });
      renderedComponent.find('button').at(1).simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });
});