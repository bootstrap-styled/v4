'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Tfoot = require('../Tfoot');

var _Tfoot2 = _interopRequireDefault(_Tfoot);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Tfoot component
 */

var renderComponent = function renderComponent() {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(
      _Tfoot2.default,
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'test'
        )
      )
    )
  ));
};

describe('<Tfoot />', function () {
  it('should render a <Tfoot> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('tfoot').length).toBe(1);
  });
});