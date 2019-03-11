/**
 * A Tether Content component
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Tether from 'tether-fix';
import isFunction from 'lodash.isfunction';

export const defaultProps = {
  isOpen: false,
  tetherRef: null,
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<TetherContent />` component. */
  children: PropTypes.node,
  /** Toggles opened CSS display. */
  isOpen: PropTypes.bool,
  /** Toggles disabled CSS display. */
  disabled: PropTypes.bool,
  /** Call specified function when toggle action is triggered. */
  toggle: PropTypes.func.isRequired,
  /** Tether object. Please consult [Tether documentation](http://tether.io/) for more information. */
  tether: PropTypes.object.isRequired,
  /** Tether reference. Please consult [Tether documentation](http://tether.io/) for more information. */
  tetherRef: PropTypes.func,
  /** Tether style. Please consult [Tether documentation](http://tether.io/) for more information. */
  style: PropTypes.node,
};
class TetherContent extends React.Component {// eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    this.element = document.createElement('div');
  }

  componentDidMount = () => {
    this.handleProps();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount = () => {
    this.hide();
  }

  getTarget = () => {
    const { target } = this.props.tether; // eslint-disable-line prefer-destructuring

    if (isFunction(target)) {
      return target();
    }

    return target;
  }

  getTetherConfig = () => {
    const config = {
      ...this.props.tether,
    };

    config.element = this.element;
    config.target = this.getTarget();
    return config;
  }

  handleDocumentClick = (e) => {
    const container = this.element;
    if (e.target === container || !container.contains(e.target)) {
      this.toggle();
    }
  }

  handleProps = () => {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  hide = () => {
    document.removeEventListener('click', this.handleDocumentClick, true);

    if (this.element.parentElement === document.body) {
      document.body.removeChild(this.element);
    }

    if (this.tether) {
      this.tether.destroy();
      this.tether = null;
      if (this.props.tetherRef) {
        this.props.tetherRef(this.tether);
      }
    }
  }

  show = () => {
    document.addEventListener('click', this.handleDocumentClick, true);

    this.element.className = this.props.className;
    document.body.appendChild(this.element);
    this.tether = new Tether(this.getTetherConfig());
    if (this.props.tetherRef) {
      this.props.tetherRef(this.tether);
    }
    this.tether.position();
  }

  toggle = (e) => {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  renderChildren = () => {
    const { children, style } = this.props;
    return React.cloneElement(
      children,
      { style }
    );
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return ReactDOM.createPortal(
      this.renderChildren(),
      this.element
    );
  }
}

TetherContent.defaultProps = defaultProps;
TetherContent.propTypes = propTypes;

export default TetherContent;
