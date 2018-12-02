'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('@bootstrap-styled/provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _ProgressBar = require('../ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    null,
    props.children
  ));
}; /**
    * Testing our Progress component
    */


var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _index2.default,
      null,
      props.children
    )
  ));
};

describe('<Progress />', function () {
  it('should render an <Progress> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: _react2.default.createElement(_ProgressBar2.default, null)
    });
    expect(renderedComponent.find('ProgressUnstyled').length).toBe(1);
  });
  it('should render a <Progress> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: _react2.default.createElement(_ProgressBar2.default, null)
    });
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
});