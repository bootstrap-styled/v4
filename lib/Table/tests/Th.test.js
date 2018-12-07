"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Th = _interopRequireDefault(require("../Th"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Th component
 */
var renderComponent = function renderComponent(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement(_Th.default, props, "test")))));
};

describe('<Th />', function () {
  it('should render a <Th> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('th').length).toBe(1);
  });
  it('should have a className table-active', function () {
    var renderedComponent = renderComponent({
      color: 'active'
    });
    expect(renderedComponent.find('th').hasClass('table-active')).toBe(true);
  });
});