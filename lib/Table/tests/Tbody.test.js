'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Tbody = require('../Tbody');

var _Tbody2 = _interopRequireDefault(_Tbody);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Tbody component
 */

var renderComponent = function renderComponent() {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(
      _Tbody2.default,
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'test'
        )
      )
    )
  ));
};

describe('<Tbody />', function () {
  it('should render a <Tbody> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('tbody').length).toBe(1);
  });
});