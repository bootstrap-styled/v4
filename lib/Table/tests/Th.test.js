'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Th = require('../Th');

var _Th2 = _interopRequireDefault(_Th);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Th component
 */

var renderComponent = function renderComponent(props) {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          _Th2.default,
          props,
          'test'
        )
      )
    )
  ));
};

describe('<Th />', function () {
  it('should render a <Th> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('th').length).toBe(1);
  });
  it('should have a className table-active', function () {
    var renderedComponent = renderComponent({
      color: 'active'
    });
    expect(renderedComponent.find('th').hasClass('table-active')).toBe(true);
  });
});