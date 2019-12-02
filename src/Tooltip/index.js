/**
 * A Tooltip tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { getTetherAttachments, tetherAttachements } from '@bootstrap-styled/utils/lib/tools';
import mapToCssModules from 'map-to-css-modules';
import TetherContent from '../TetherContent';
import { borderRadius } from '@bootstrap-styled/css-mixins/lib/border-radius';

const DEFAULT_DELAYS = {
  shape: 0,
  hide: 250,
};

const defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show',
  },
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' },
  ],
};
// propTypes need to be excluded of the tooltip class
// issue on : https://github.com/yannickcr/eslint-plugin-react/issues/203
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Tooltip placement. Please consult [Tether documentation](http://tether.io/) for more information. */
  placement: PropTypes.oneOf(tetherAttachements),
  /** Id name of the component triggering tooltip action. */
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  /** Toggles opened CSS display. */
  isOpen: PropTypes.bool,
  /** Toggles disabled CSS display. */
  disabled: PropTypes.bool,
  /** Tether object. Please consult [Tether documentation](http://tether.io/) for more information. */
  tether: PropTypes.object,
  /** Tether reference. Please consult [Tether documentation](http://tether.io/) for more information. */
  tetherRef: PropTypes.func,
  /** Call specified function when toggle action is triggered. */
  toggle: PropTypes.func,
  /** Toggles hide CSS display. */
  autohide: PropTypes.bool,
  /** Define delay before opening the tooltip. */
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  /** Theme variables. */
  theme: PropTypes.shape({
    '$zindex-tooltip': PropTypes.string,
    '$tooltip-font-family': PropTypes.string,
    '$tooltip-font-size': PropTypes.string,
    '$tooltip-font-weight': PropTypes.string,
    '$tooltip-max-width': PropTypes.string,
    '$tooltip-color': PropTypes.string,
    '$tooltip-bg': PropTypes.string,
    '$tooltip-border-radius': PropTypes.string,
    '$tooltip-opacity': PropTypes.string,
    '$tooltip-line-height': PropTypes.string,
    '$tooltip-padding-y': PropTypes.string,
    '$tooltip-padding-x': PropTypes.string,
    '$tooltip-margin': PropTypes.string,
    '$tooltip-arrow-width': PropTypes.string,
    '$tooltip-arrow-height': PropTypes.string,
    '$tooltip-arrow-color': PropTypes.string,
    '$component-active-color': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
export const defaultProps = {
  isOpen: false,
  placement: 'bottom',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: null,
  theme: {
    '$zindex-tooltip': '1070',
    '$tooltip-font-family': '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    '$tooltip-font-size': '.875rem',
    '$tooltip-font-weight': '400',
    '$tooltip-max-width': '200px',
    '$tooltip-color': '#fff',
    '$tooltip-bg': '#000',
    '$tooltip-line-height': '1.5',
    '$tooltip-border-radius': '.25rem',
    '$tooltip-opacity': '.9',
    '$tooltip-padding-y': '.25rem',
    '$tooltip-padding-x': '.5rem',
    '$tooltip-margin': '0',
    '$tooltip-arrow-width': '.8rem',
    '$tooltip-arrow-height': '.4rem',
    '$tooltip-arrow-color': '#000',
  },
};
export class TooltipUnstyled extends React.Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  state = {
    focus: false,
  }

  componentDidMount = () => {
    this.target = this.getTarget();
    this.addTargetEvents();
  }

  componentWillUnmount = () => {
    this.removeTargetEvents();
  }

  onMouseOverTooltip = () => {
    if (this.hideTimeout) {
      this.clearHideTimeout();
    }
    this.showTimeout = setTimeout(this.show, this.getDelay('show'));
  }

  onMouseLeaveTooltip = () => {
    if (this.showTimeout) {
      this.clearShowTimeout();
    }
    this.hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
  }

  onMouseOverTooltipContent = () => {
    if (this.props.autohide) {
      return;
    }
    if (this.hideTimeout) {
      this.clearHideTimeout();
    }
  }

  onMouseLeaveTooltipContent = () => {
    if (this.props.autohide) {
      return;
    }
    if (this.showTimeout) {
      this.clearShowTimeout();
    }
    this.hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
  }

  getDelay = (key) => {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key]; // eslint-disable-line no-restricted-globals
    }
    return delay;
  }

  getTarget = () => {
    const { target } = this.props;
    if (typeof target === 'object') {
      return target;
    }
    return document.getElementById(target);
  }

  getTetherConfig = () => {
    const attachments = getTetherAttachments(this.props.placement);
    return {
      ...defaultTetherConfig,
      ...attachments,
      target: this.getTarget,
      ...this.props.tether,
    };
  }

  show = () => {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.toggle();
    }
  }

  hide = () => {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.toggle();
    }
  }

  clearShowTimeout = () => {
    clearTimeout(this.showTimeout);
    this.showTimeout = undefined;
  }

  clearHideTimeout = () => {
    clearTimeout(this.hideTimeout);
    this.hideTimeout = undefined;
  }

  handleDocumentClick = (e) => {
    if (e.target === this.target || this.target.contains(e.target)) {
      if (this.hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents = () => {
    if (this.target) {
      this.target.addEventListener('mouseover', this.onMouseOverTooltip, true);
      this.target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
      document.addEventListener('click', this.handleDocumentClick, true);
    }
  }

  removeTargetEvents = () => {
    if (this.target) {
      this.target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
      this.target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }

  toggle = (e) => {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }
    if (this.props.toggle) {
      return this.props.toggle();
    }
    return null;
  }

  handleFocus = () => {
    this.setState({
      focus: true,
    });
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const attributes = omit(this.props, Object.keys(propTypes));

    const classes = mapToCssModules(cn(
      'tooltip',
      this.props.className
    ), this.props.cssModule);

    const tetherConfig = this.getTetherConfig();

    const optional = {};
    if (this.state.focus === true) {
      optional.onFocus = this.handleFocus;
    }
    return (
      <TetherContent
        className={classes}
        tether={tetherConfig}
        tetherRef={this.props.tetherRef}
        isOpen={this.props.isOpen}
        toggle={this.toggle}
      >
        <div
          {...attributes}
          className="tooltip-inner"
          onMouseOver={this.onMouseOverTooltipContent}
          onMouseLeave={this.onMouseLeaveTooltipContent}
          onFocus={this.handleFocus}
          tabIndex="-1"
          {...optional}
        />
      </TetherContent>
    );
  }
}

const Tooltip = styled(TooltipUnstyled)`
  ${(props) => `
    &.tooltip {
      position: absolute;
      z-index: ${props.theme['$zindex-tooltip']};
      display: block;
      margin: ${props.theme['$tooltip-margin']};
      font-family: ${props.theme['$tooltip-font-family']};
      font-size: ${props.theme['$tooltip-font-size']};
      font-style: normal;
      font-weight: ${props.theme['$tooltip-font-weight']};
      letter-spacing: normal;
      line-break: auto;
      line-height: ${props.theme['$tooltip-line-height']};
      text-align: left;
      text-align: start;
      text-decoration: none;
      text-shadow: none;
      text-transform: none;
      white-space: normal;
      word-break: normal;
      word-spacing: normal;
      // Allow breaking very long words so they don't overflow the tooltip's bounds
      word-wrap: break-word;
      opacity: 0;
    }
    
    &.tooltip.show {
      opacity: ${props.theme['$tooltip-opacity']};
    }
    
    &.tooltip.bs-tether-element-attached-bottom,
    &.tooltip.tooltip-top {
      padding: 5px 0;
      margin-top: -3px;
    }
    
    &.tooltip.bs-tether-element-attached-bottom .tooltip-inner:before,
    &.tooltip.tooltip-top .tooltip-inner:before {
      bottom: 0;
      left: 50%;
      margin-left: -5px;
      content: "";
      border-width: 5px 5px 0;
      border-top-color: ${props.theme['$tooltip-arrow-color']};
    }
    
    &.tooltip.bs-tether-element-attached-left,
    &.tooltip.tooltip-right {
      padding: 0 5px;
      margin-left: 3px;
    }
    
    &.tooltip.bs-tether-element-attached-left .tooltip-inner:before,
    &.tooltip.tooltip-right .tooltip-inner:before {
      top: 50%;
      left: 0;
      margin-top: -5px;
      content: "";
      border-width: 5px 5px 5px 0;
      border-right-color: ${props.theme['$tooltip-arrow-color']};
    }
    
    &.tooltip.bs-tether-element-attached-top,
    &.tooltip.tooltip-bottom {
      padding: 5px 0;
      margin-top: 3px;
    }
    
    &.tooltip.bs-tether-element-attached-top .tooltip-inner:before,
    &.tooltip.tooltip-bottom .tooltip-inner:before {
      top: 0;
      left: 50%;
      margin-left: -5px;
      content: "";
      border-width: 0 5px 5px;
      border-bottom-color: ${props.theme['$tooltip-arrow-color']};
    }
    
    &.tooltip.bs-tether-element-attached-right,
    &.tooltip.tooltip-left {
      padding: 0 5px;
      margin-left: -3px;
    }
    
    &.tooltip.bs-tether-element-attached-right .tooltip-inner:before,
    &.tooltip.tooltip-left .tooltip-inner:before {
      top: 50%;
      right: 0;
      margin-top: -5px;
      content: "";
      border-width: 5px 0 5px 5px;
      border-left-color: ${props.theme['$tooltip-arrow-color']};
    }
    
    // Wrapper for the tooltip content
    & .tooltip-inner {
      max-width: ${props.theme['$tooltip-max-width']};
      padding: ${props.theme['$tooltip-padding-y']} ${props.theme['$tooltip-padding-x']};
      color: ${props.theme['$tooltip-color']};
      text-align: center;
      background-color: ${props.theme['$tooltip-bg']};
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$tooltip-border-radius'])};
    }
    
    & .tooltip-inner:before {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
    }
  `}
`;

Tooltip.defaultProps = defaultProps;
Tooltip.propTypes = propTypes;

/** @component */
export default Tooltip;
