'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Thead = require('../Thead');

var _Thead2 = _interopRequireDefault(_Thead);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Thead component
 */

var renderComponent = function renderComponent() {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(
      _Thead2.default,
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

describe('<Thead />', function () {
  it('should render a <Thead> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('thead').length).toBe(1);
  });
});