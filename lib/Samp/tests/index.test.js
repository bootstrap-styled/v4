'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = 'Test'; /**
                        * Testing our Samp component
                        */


var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    null,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(
      _index2.default,
      null,
      props.children
    )
  ));
};

describe('<Samp />', function () {
  it('should render an <Samp> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('samp').length).toBe(1);
  });
  it('should render a <abbr> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('samp').length).toBe(1);
  });
});