"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Tbody = _interopRequireDefault(require("../Tbody"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Tbody component
 */
var renderComponent = function renderComponent() {
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, null, _react.default.createElement(_Tbody.default, null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "test")))));
};

describe('<Tbody />', function () {
  it('should render a <Tbody> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('tbody').length).toBe(1);
  });
});