'use strict';

var _BootstrapProvider = require('@bootstrap-styled/provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Figure = require('../Figure');

var _Figure2 = _interopRequireDefault(_Figure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Figure component
 */
var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _Figure2.default,
    {
      className: props.className
    },
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _Figure2.default,
      {
        className: props.className
      },
      props.children
    )
  ));
};

describe('<Figure />', function () {
  it('should render an <Figure> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('FigureUnstyled').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <figure> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('figure').length).toBe(1);
    expect(renderedComponent.find('Figure').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});