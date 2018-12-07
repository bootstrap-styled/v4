"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _Accordion = _interopRequireDefault(require("../Accordion"));

var _AccordionGroup = _interopRequireDefault(require("../AccordionGroup"));

var _Card = _interopRequireDefault(require("../../Cards/Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Abbr component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsAccordionGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_AccordionGroup.default, propsAccordionGroup, _react.default.createElement(_Accordion.default, props)));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsAccordionGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_AccordionGroup.default, propsAccordionGroup, _react.default.createElement(_Accordion.default, props), _react.default.createElement(_Accordion.default, {
    name: "Accordion2",
    tag: _Card.default
  }, children))));
};

describe('<Accordion />', function () {
  var renderedComponent;
  var renderedComponentTheme;
  var onChange;
  beforeEach(function () {
    onChange = jest.fn();
    renderedComponent = renderComponent({
      name: 'Accordion1',
      children: children,
      tag: _Card.default
    }, {
      activeAccordionName: 'Accordion2',
      onChange: onChange
    });
    renderedComponent.setState({
      activeName: 'Accordion2'
    });
    renderedComponentTheme = renderComponentUsingTheme({
      children: children,
      tag: _Card.default
    }, {
      activeAccordionName: 'Accordion2',
      onChange: onChange
    });
    renderedComponent.setState({
      activeName: 'Accordion2'
    });
  });
  it('should render an <Accordion> tag without a theme', function () {
    expect(renderedComponent.find('Accordion').length).toBe(1);
  });
  it('should have an attribute heading without a theme', function () {
    renderedComponent = renderComponent({
      heading: 'heading-test',
      tag: _Card.default,
      children: children
    });
    expect(renderedComponent.find(_Accordion.default).props().heading).toEqual('heading-test');
  });
  it('should have children without a theme', function () {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have 1 or more <Accordion>', function () {
    expect(renderedComponentTheme.find('Accordion').length > 0).toBe(true);
  });
  it('should have children with a theme', function () {
    expect(renderedComponentTheme.contains(children)).toEqual(true);
  });
  it('should handle onClick on header', function () {
    renderedComponent.simulate('change', 'Accordion2');
    expect(onChange).toHaveBeenCalled();
  });
  it('should have children without a theme', function () {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});