"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Tfoot = _interopRequireDefault(require("../Tfoot"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Tfoot component
 */
var renderComponent = function renderComponent() {
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, null, _react.default.createElement(_Tfoot.default, null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "test")))));
};

describe('<Tfoot />', function () {
  it('should render a <Tfoot> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('tfoot').length).toBe(1);
  });
});