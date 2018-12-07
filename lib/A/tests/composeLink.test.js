"use strict";

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _composeLink = _interopRequireDefault(require("../composeLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our composeList HoC component constructor
 */
var Link = (0, _composeLink.default)(_index.default);

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(Link, props, "test")));
};

describe('composeLink', function () {
  it('should render a Link', function () {
    var renderedComponent = renderComponentUsingTheme({
      to: 'http://test.com'
    });
    expect(renderedComponent.find('Link').length).toBe(1);
  });
});