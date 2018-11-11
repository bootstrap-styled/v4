'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Tr = require('../Tr');

var _Tr2 = _interopRequireDefault(_Tr);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Tr component
 */

var renderComponent = function renderComponent(props) {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        _Tr2.default,
        props,
        _react2.default.createElement(
          'th',
          null,
          'test'
        )
      )
    )
  ));
};

describe('<Tr />', function () {
  it('should render a <Tr> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('tr').length).toBe(1);
  });
  it('should have a className table-active', function () {
    var renderedComponent = renderComponent({
      color: 'active'
    });
    expect(renderedComponent.find('tr').hasClass('table-active')).toBe(true);
  });
});