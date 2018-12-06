"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _AccordionGroup = _interopRequireDefault(require("../AccordionGroup"));

var _Accordion = _interopRequireDefault(require("../Accordion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Abbr component
 */
var children = _react.default.createElement(_Accordion.default, {
  heading: "Collapsible Group Item #1",
  name: "Accordion1"
}, "hey!");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_AccordionGroup.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_AccordionGroup.default, props)));
};

describe('<AccordionGroup />', function () {
  var renderedComponent;
  var renderedComponentTheme;
  beforeEach(function () {
    renderedComponent = renderComponent({
      children: children
    });
    renderedComponent.setState({
      activeName: 'Accordion2'
    });
    renderedComponentTheme = renderComponentUsingTheme({
      children: children
    });
    renderedComponent.setState({
      activeName: 'Accordion2'
    });
  });
  it('should render an <AccordionGroup> tag without a theme', function () {
    expect(renderedComponent.find('div').length).toBe(4);
  });
  it('should have children without a theme', function () {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <AccordionGroup> tag with a theme', function () {
    expect(renderedComponentTheme.find('AccordionGroup').length).toBe(1);
  });
  it('should have children with a theme', function () {
    expect(renderedComponentTheme.contains(children)).toEqual(true);
  });
});