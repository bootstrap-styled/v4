/**
 * Label component
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { button } from '@bootstrap-styled/css-mixins/lib/buttons';

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    size: stringOrNumberProp,
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.any,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$label-margin-bottom': PropTypes.string,
    '$btn-padding-x': PropTypes.string,
    '$btn-padding-y': PropTypes.string,
    '$btn-line-height': PropTypes.string,
    '$btn-font-weight': PropTypes.string,
    '$btn-box-shadow': PropTypes.string,
    '$btn-focus-box-shadow': PropTypes.string,
    '$btn-active-box-shadow': PropTypes.string,
    '$btn-primary-color': PropTypes.string,
    '$btn-primary-bg': PropTypes.string,
    '$btn-primary-border': PropTypes.string,
    '$btn-secondary-color': PropTypes.string,
    '$btn-secondary-bg': PropTypes.string,
    '$btn-secondary-border': PropTypes.string,
    '$btn-info-color': PropTypes.string,
    '$btn-info-bg': PropTypes.string,
    '$btn-info-border': PropTypes.string,
    '$btn-success-color': PropTypes.string,
    '$btn-success-bg': PropTypes.string,
    '$btn-success-border': PropTypes.string,
    '$btn-warning-color': PropTypes.string,
    '$btn-warning-bg': PropTypes.string,
    '$btn-warning-border': PropTypes.string,
    '$btn-danger-color': PropTypes.string,
    '$btn-danger-bg': PropTypes.string,
    '$btn-danger-border': PropTypes.string,
    '$btn-link-disabled-color': PropTypes.string,
    '$btn-padding-x-sm': PropTypes.string,
    '$btn-padding-y-sm': PropTypes.string,
    '$btn-padding-x-lg': PropTypes.string,
    '$btn-padding-y-lg': PropTypes.string,
    '$btn-block-spacing-y': PropTypes.string,
    '$btn-border-radius': PropTypes.string,
    '$btn-border-radius-lg': PropTypes.string,
    '$btn-border-radius-sm': PropTypes.string,
    '$btn-transition': PropTypes.string,
    '$link-hover-decoration': PropTypes.string,
    '$enable-rounded': PropTypes.bool,
    '$enable-shadows': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$enable-transitions': PropTypes.bool,
  }),
  /** Toggles check CSS style. */
  check: PropTypes.bool,
  /** Specified node element will be passed as children of `<Label />` component. */
  children: PropTypes.node,
  /** Toggles disabled CSS style. */
  disabled: PropTypes.bool,
  /** `For` attribute ill be replaced with the specified one. */
  for: PropTypes.string,
  /** Toggles hidden CSS style. */
  hidden: PropTypes.bool,
  /** Toggles inline CSS style. */
  inline: PropTypes.bool,
  /** `size` attribute ill be replaced with the specified one. */
  size: PropTypes.string,
  /** Extra small columns variables. */
  xs: columnProps,
  /** Small columns variables. */
  sm: columnProps,
  /** Medium columns variables. */
  md: columnProps,
  /** Large columns variables. */
  lg: columnProps,
  /** Extra large columns variables. */
  xl: columnProps,
  /** Extra extra large columns variables. */
  xxl: columnProps,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

export const defaultProps = {
  tag: 'label',
  theme: {
    '$label-margin-bottom': '.5rem',
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': true,
    '$enable-transitions': true,
    '$btn-padding-x': '1rem',
    '$btn-padding-y': '.5rem',
    '$btn-line-height': '1.25',
    '$btn-font-weight': 'normal',
    '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-primary-color': '#fff',
    '$btn-primary-bg': '#0275d8',
    '$btn-primary-border': '#0275d8',
    '$btn-secondary-color': '#292b2c',
    '$btn-secondary-bg': '#fff',
    '$btn-secondary-border': '#ccc',
    '$btn-info-color': '#fff',
    '$btn-info-bg': '#5bc0de',
    '$btn-info-border': '#5bc0de',
    '$btn-success-color': '#fff',
    '$btn-success-bg': '#5cb85c',
    '$btn-success-border': '#5cb85c',
    '$btn-warning-color': '#fff',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-warning-border': '#f0ad4e',
    '$btn-danger-color': '#fff',
    '$btn-danger-bg': '#d9534f',
    '$btn-danger-border': '#d9534f',
    '$btn-link-disabled-color': '#636c72',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-block-spacing-y': '.5rem',
    '$btn-border-radius': '.25rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$btn-transition': 'all .2s ease-in-out',
  },
};

let LabelUnstyled = (props) => {  // eslint-disable-line
  const {
    className,
    cssModule,
    hidden,
    tag: Tag,
    check,
    inline,
    disabled,
    size,
    for: htmlFor,
    ...attributes
  } = omit(props, ['theme']);

  const colClasses = [];

  colSizes.forEach(colSize => { // eslint-disable-line
    const columnProp = props[colSize];
    delete attributes[colSize];

    if (columnProp && columnProp.size) {
      colClasses.push(mapToCssModules(cn({
        [`col-${colSize}-${columnProp.size}`]: columnProp.size,
        [`push-${colSize}-${columnProp.push}`]: columnProp.push,
        [`pull-${colSize}-${columnProp.pull}`]: columnProp.pull,
        [`offset-${colSize}-${columnProp.offset}`]: columnProp.offset,
      })), cssModule);
    } else if (columnProp) {
      colClasses.push(`col-${colSize}-${columnProp}`);
    }
  });

  const classes = mapToCssModules(cn(
    className,
    hidden ? 'sr-only' : false,
    check ? `form-check-${inline ? 'inline' : 'label'}` : false,
    check && inline && disabled ? 'disabled' : false,
    size ? `col-form-label-${size}` : false,
    colClasses,
    colClasses.length ? 'col-form-label' : false
  ), cssModule);

  return (
    <Tag htmlFor={htmlFor} {...attributes} className={classes} />
  );
};
/**
 * `<Label />` defines a label for an <input> element.
 */
const Label = styled(LabelUnstyled)`
  ${(props) => `
    /* Reboot Scss */
    touch-action: manipulation;
    /* Allow labels to use margin for spacing. */
    display: inline-block;
    margin-bottom: ${props.theme['$label-margin-bottom']};

    ${button(
    props.theme['$enable-shadows'],
    props.theme['$enable-hover-media-query'],
    props.theme['$enable-transitions'],
    props.theme['$enable-rounded'],
    props.theme['$font-weight-normal'],
    props.theme['$btn-font-weight'],
    props.theme['$btn-line-height'],
    props.theme['$btn-transition'],
    props.theme['$input-btn-border-width'],
    props.theme['$btn-padding-x'],
    props.theme['$btn-padding-y'],
    props.theme['$font-size-base'],
    props.theme['$btn-border-radius'],
    props.theme['$btn-box-shadow'],
    props.theme['$btn-focus-box-shadow'],
    props.theme['$btn-active-box-shadow'],
    props.theme['$cursor-disabled'],
    props.theme['$link-color'],
    props.theme['$link-hover-color'],
    props.theme['$link-hover-decoration'],
    props.theme['$btn-link-disabled-color'],
    props.theme['$btn-padding-x-lg'],
    props.theme['$btn-padding-y-lg'],
    props.theme['$font-size-lg'],
    props.theme['$btn-border-radius-lg'],
    props.theme['$btn-padding-x-sm'],
    props.theme['$btn-padding-y-sm'],
    props.theme['$font-size-sm'],
    props.theme['$btn-border-radius-sm'],
    props.theme['$btn-block-spacing-y'],
    props.theme['$btn-primary-color'],
    props.theme['$btn-primary-bg'],
    props.theme['$btn-primary-border'],
    props.theme['$btn-secondary-color'],
    props.theme['$btn-secondary-bg'],
    props.theme['$btn-secondary-border'],
    props.theme['$btn-info-color'],
    props.theme['$btn-info-bg'],
    props.theme['$btn-info-border'],
    props.theme['$btn-success-color'],
    props.theme['$btn-success-bg'],
    props.theme['$btn-success-border'],
    props.theme['$btn-warning-color'],
    props.theme['$btn-warning-bg'],
    props.theme['$btn-warning-border'],
    props.theme['$btn-danger-color'],
    props.theme['$btn-danger-bg'],
    props.theme['$btn-danger-border'],
  )}
 `}
`;

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

/** @component */
export default Label;
