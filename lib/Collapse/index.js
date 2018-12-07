"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _parseTransition = _interopRequireDefault(require("@bootstrap-styled/utils/lib/parseTransition"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SHOW = 'SHOW';
var SHOWN = 'SHOWN';
var HIDE = 'HIDE';
var HIDDEN = 'HIDDEN';
var defaultProps = {
  isOpen: false,
  theme: {
    '$transition-collapse': 'height .35s ease'
  },
  tag: 'div',
  delay: {
    show: 350,
    hide: 350
  },
  onOpened: null,
  onClosed: null
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func]),

  /** Delay transition in milliseconds before and after collapse. Can be: */
  delay: _propTypes.default.oneOfType([_propTypes.default.shape({
    show: _propTypes.default.number,
    hide: _propTypes.default.number
  }), _propTypes.default.number]),

  /** Toggles collapse open or close action. */
  isOpen: _propTypes.default.bool,

  /** Toggles nav bar CSS display. */
  navbar: _propTypes.default.bool,

  /** Call specified function when opened collapse action is triggered. */
  onOpened: _propTypes.default.func,

  /** Call specified function when closed collapse action is triggered. */
  onClosed: _propTypes.default.func,

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$transition-collapse': _propTypes.default.string
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      collapse: HIDDEN,
      height: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", null);

    return _this;
  }

  _createClass(Collapse, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.updateVisibility({
        collapse: this.props.isOpen ? SHOWN : HIDDEN
      });
      this.updateTransition({
        delay: this.props.delay,
        theme: this.props.theme
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var willOpen = nextProps.isOpen;
      var collapse = this.state.collapse;

      if (willOpen && collapse === HIDDEN) {
        // will open
        this.setState({
          collapse: SHOW
        }, function () {
          // the height transition will work after class "collapsing" applied
          _this2.setState({
            height: _this2.getHeight()
          });

          _this2.transitionTag = setTimeout(function () {
            _this2.setState({
              collapse: SHOWN,
              height: null
            });
          }, _this2.getDelay('show'));
        });
      } else if (!willOpen && collapse === SHOWN) {
        // will hide
        this.setState({
          height: this.getHeight()
        }, function () {
          _this2.setState({
            collapse: HIDE,
            height: _this2.getHeight()
          }, function () {
            _this2.setState({
              height: 0
            });
          });
        });
        this.transitionTag = setTimeout(function () {
          _this2.setState({
            collapse: HIDDEN,
            height: null
          });
        }, this.getDelay('hide'));
      } // else: do nothing.


      if (nextProps.theme['$transition-collapse'] !== this.props.theme['$transition-collapse'] || nextProps.delay.show !== this.props.delay.show || nextProps.delay.hide !== this.props.delay.hide) {
        this.updateTransition({
          delay: nextProps.delay,
          theme: nextProps.theme
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.collapse === SHOWN && prevState && prevState.collapse !== SHOWN) {
        if (this.props.onOpened) {
          this.props.onOpened();
        }
      }

      if (this.state.collapse === HIDDEN && prevState && prevState.collapse !== HIDDEN) {
        if (this.props.onClosed) {
          this.props.onClosed();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTag);
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.state.delay;

      if (_typeof(delay) === 'object') {
        return delay[key];
      }

      return delay;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.element.scrollHeight;
    }
  }, {
    key: "updateTransition",
    value: function updateTransition(_ref) {
      var delay = _ref.delay,
          theme = _ref.theme;
      var transition = (0, _parseTransition.default)(theme['$transition-collapse'])[0];
      var newDelay = {
        show: delay.show !== undefined ? delay.show : transition.duration,
        hide: delay.hide !== undefined ? delay.hide : transition.duration
      };

      if (_typeof(delay) !== 'object' && delay !== undefined) {
        newDelay = {
          show: delay,
          hide: delay
        };
      }

      this.setState({
        delay: newDelay
      });
    }
  }, {
    key: "updateVisibility",
    value: function updateVisibility(_ref2) {
      var collapse = _ref2.collapse;
      this.setState({
        collapse: collapse
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _omit = (0, _lodash.default)(this.props, ['isOpen', 'theme', 'delay', 'onOpened', 'onClosed']),
          navbar = _omit.navbar,
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["navbar", "className", "cssModule", "tag"]);

      var _this$state = this.state,
          collapse = _this$state.collapse,
          height = _this$state.height;
      var collapseClass;

      if (collapse === SHOW || collapse === HIDE) {
        collapseClass = 'collapsing';
      } else if (collapse === SHOWN) {
        collapseClass = 'collapse show';
      } else if (collapse === HIDDEN) {
        collapseClass = 'collapse';
      }

      var classes = (0, _mapToCssModules.default)((0, _classnames.default)(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = height === null ? null : {
        height: height
      };
      return _react.default.createElement(Tag, _extends({}, attributes, {
        style: _objectSpread({}, attributes.style, style),
        className: classes,
        ref: function ref(c) {
          _this3.element = c;
        }
      }));
    }
  }]);

  return Collapse;
}(_react.Component);

_defineProperty(Collapse, "propTypes", propTypes);

_defineProperty(Collapse, "defaultProps", defaultProps);

Collapse.defaultProps = defaultProps;
Collapse.propTypes = propTypes;
/** @component */

var _default = Collapse;
exports.default = _default;