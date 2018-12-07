"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _Td = _interopRequireDefault(require("../Td"));

var _index = _interopRequireDefault(require("../index"));

var _Tr = _interopRequireDefault(require("../Tr"));

var _Tbody = _interopRequireDefault(require("../Tbody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Td component
 */
var children = _react.default.createElement("span", null, "Test");

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, null, _react.default.createElement(_Tbody.default, null, _react.default.createElement(_Tr.default, null, _react.default.createElement(_Td.default, props, children))))));
};

describe('<Td />', function () {
  it('should render a <td> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('td').length).toBe(1);
    expect(renderedComponent.find('Td').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a className table-active', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'active'
    });
    expect(renderedComponent.find('td').hasClass('table-active')).toBe(true);
  });
});