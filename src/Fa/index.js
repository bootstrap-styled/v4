import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Font awesome component
 */
export default class Fa extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    /** @ignore */
    className: PropTypes.string,
    /** Size variables. Can be: */
    size: PropTypes.oneOf([
      'xs',
      'sm',
      'lg',
      '2x',
      '3x',
      '4x',
      '5x',
      '7x',
      '10x',
    ]),
    /** Color variables. Can be: */
    color: PropTypes.oneOf([
      'success',
      'info',
      'warning',
      'danger',
      'white',
      'gray-dark',
      'primary',
      'hide',
    ]),
  };

  static defaultProps = {
    size: null,
    color: null,
  };

  render() {
    const {
      className,
      size,
      color,
      ...attributes
    } = this.props;

    const classes = cn(className, 'fa', {
      [`text-${color}`]: color,
      [`fa-${size}`]: size,
    });

    return (
      <i
        className={cn(classes, Object.keys(attributes).map((key) => `fa-${key}`))}
      />
    );
  }
}
