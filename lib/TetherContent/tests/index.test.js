"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our TetherContent component
 */
var children = _react.default.createElement("p", null, "Test");

var functionTest = jest.fn();
var tetherConfig = {};

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, {
    className: props.className,
    tether: tetherConfig,
    tetherRef: props.tetherRef,
    isOpen: props.isOpen,
    toggle: functionTest
  }, children));
};

describe('<TetherContent />', function () {
  it('should render an <Output> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});