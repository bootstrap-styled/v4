"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<IssueIcon />', function () {
  it('should render a SVG', function () {
    var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_index.default, null));
    expect(renderedComponent.find('svg').length).toEqual(1);
  });
});