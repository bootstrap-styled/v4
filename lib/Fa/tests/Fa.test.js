"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Fa component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('<Fa />', function () {
  it('should render an <Fa> tag without a theme', function () {
    var renderedComponent = renderComponent({
      trash: true
    });
    expect(renderedComponent.find('FaUnstyled').length).toEqual(1);
  });
  it('should have class .fa-trash', function () {
    var renderedComponent = renderComponentUsingTheme({
      trash: true
    });
    expect(renderedComponent.find('i').hasClass('fa-trash')).toBe(true);
  });
  it('should not have attribute trash', function () {
    var renderedComponent = renderComponentUsingTheme({
      trash: true
    });
    expect(renderedComponent.find('i').find('[trash]').length).toBe(0);
  });
  it('should render an <Fa> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      trash: true
    });
    expect(renderedComponent.find('Fa').length).toEqual(1);
  });
  it('should render an <Fa> tag with a className fa-lgwith a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'lg'
    });
    expect(renderedComponent.find('i').hasClass('fa-lg')).toBe(true);
  });
});