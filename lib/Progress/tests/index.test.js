"use strict";

var _index = _interopRequireDefault(require("../index"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('export Progress', function () {
  it('should export <Progress />', function () {
    expect(_index.default).toBeDefined();
  });
  it('should export <ProgressBar />', function () {
    expect(_ProgressBar.default).toBeDefined();
  });
});