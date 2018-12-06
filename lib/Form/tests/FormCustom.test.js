"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _FormCustom = _interopRequireDefault(require("../FormCustom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_FormCustom.default, props, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_FormCustom.default, props, children)));
};

describe('<FormCustom />', function () {
  it('should render an <FormCustom> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('span').length).toBe(2);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormCustom> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormCustom').length).toBe(1);
  });
  it('should have a classname custom-checkbox', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Label').hasClass('custom-checkbox'));
  });
  it('should have a classname custom-radio', function () {
    var renderedComponent = renderComponentUsingTheme({
      radio: {
        id: 'id-test',
        name: 'name-test'
      }
    });
    expect(renderedComponent.find('Label').hasClass('custom-radio'));
  });
  it('should have an id and a name on Input if radio is passed', function () {
    var renderedComponent = renderComponentUsingTheme({
      radio: {
        id: 'id-test',
        name: 'name-test'
      }
    });
    expect(renderedComponent.find('Input').props().id).toEqual('id-test');
    expect(renderedComponent.find('Input').props().name).toEqual('name-test');
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});