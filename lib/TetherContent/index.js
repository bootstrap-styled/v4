"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _tetherFix = _interopRequireDefault(require("tether-fix"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  isOpen: false,
  tetherRef: null
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /** Specified node element will be passed as children of `<TetherContent />` component. */
  children: _propTypes.default.node,

  /** Toggles opened CSS display. */
  isOpen: _propTypes.default.bool,

  /** Toggles disabled CSS display. */
  disabled: _propTypes.default.bool,

  /** Call specified function when toggle action is triggered. */
  toggle: _propTypes.default.func.isRequired,

  /** Tether object. Please consult [Tether documentation](http://tether.io/) for more information. */
  tether: _propTypes.default.object.isRequired,

  /** Tether reference. Please consult [Tether documentation](http://tether.io/) for more information. */
  tetherRef: _propTypes.default.func,

  /** Tether style. Please consult [Tether documentation](http://tether.io/) for more information. */
  style: _propTypes.default.node
};
exports.propTypes = propTypes;

var TetherContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TetherContent, _React$Component);

  function TetherContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TetherContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TetherContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.handleProps();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function (prevProps) {
      if (_this.props.isOpen !== prevProps.isOpen) {
        _this.handleProps();
      } else if (_this.element) {
        // rerender
        _this.renderIntoSubtree();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      _this.hide();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTarget", function () {
      var target = _this.props.tether.target;

      if ((0, _lodash.default)(target)) {
        return target();
      }

      return target;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTetherConfig", function () {
      var config = _objectSpread({}, _this.props.tether);

      config.element = _this.element;
      config.target = _this.getTarget();
      return config;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDocumentClick", function (e) {
      var container = _this.element;

      if (e.target === container || !container.contains(e.target)) {
        _this.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleProps", function () {
      if (_this.props.isOpen) {
        _this.show();
      } else {
        _this.hide();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hide", function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);

      if (_this.element) {
        document.body.removeChild(_this.element);

        _reactDom.default.unmountComponentAtNode(_this.element);

        _this.element = null;
      }

      if (_this.tether) {
        _this.tether.destroy();

        _this.tether = null;

        if (_this.props.tetherRef) {
          _this.props.tetherRef(_this.tether);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "show", function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
      _this.element = document.createElement('div');
      _this.element.className = _this.props.className;
      document.body.appendChild(_this.element);

      _this.renderIntoSubtree();

      _this.tether = new _tetherFix.default(_this.getTetherConfig());

      if (_this.props.tetherRef) {
        _this.props.tetherRef(_this.tether);
      }

      _this.tether.position();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }

      return _this.props.toggle();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderIntoSubtree", function () {
      _reactDom.default.unstable_renderSubtreeIntoContainer(_assertThisInitialized(_assertThisInitialized(_this)), _this.renderChildren(), _this.element);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChildren", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          style = _this$props.style;
      return _react.default.cloneElement(children, {
        style: style
      });
    });

    return _this;
  }

  _createClass(TetherContent, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return TetherContent;
}(_react.default.Component);

_defineProperty(TetherContent, "propTypes", propTypes);

_defineProperty(TetherContent, "defaultProps", defaultProps);

TetherContent.defaultProps = defaultProps;
TetherContent.propTypes = propTypes;
var _default = TetherContent;
exports.default = _default;