"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Progress component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, null, props.children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, null, props.children)));
};

describe('<Progress />', function () {
  it('should render an <Progress> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: _react.default.createElement(_ProgressBar.default, null)
    });
    expect(renderedComponent.find('ProgressUnstyled').length).toBe(1);
  });
  it('should render a <Progress> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: _react.default.createElement(_ProgressBar.default, null)
    });
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
});