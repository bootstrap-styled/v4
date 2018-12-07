"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Tr = _interopRequireDefault(require("../Tr"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Tr component
 */
var renderComponent = function renderComponent(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, null, _react.default.createElement("thead", null, _react.default.createElement(_Tr.default, props, _react.default.createElement("th", null, "test")))));
};

describe('<Tr />', function () {
  it('should render a <Tr> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('tr').length).toBe(1);
  });
  it('should have a className table-active', function () {
    var renderedComponent = renderComponent({
      color: 'active'
    });
    expect(renderedComponent.find('tr').hasClass('table-active')).toBe(true);
  });
});