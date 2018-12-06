"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _FaStacked = _interopRequireDefault(require("../FaStacked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our FaStacked component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_FaStacked.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_FaStacked.default, props)));
};

describe('<FaStacked />', function () {
  it('should render an <FaStacked> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('span').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a class fa-stacked by defaultwithout a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('span').hasClass('fa-stack')).toBe(true);
  });
  it('should render an <FaStacked> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FaStacked').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a className fa-lgwith a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'lg'
    });
    expect(renderedComponent.find('span').hasClass('fa-lg')).toBe(true);
  });
});