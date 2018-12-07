"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Thead = _interopRequireDefault(require("../Thead"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Thead component
 */
var renderComponent = function renderComponent() {
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, null, _react.default.createElement(_Thead.default, null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "test")))));
};

describe('<Thead />', function () {
  it('should render a <Thead> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('thead').length).toBe(1);
  });
});