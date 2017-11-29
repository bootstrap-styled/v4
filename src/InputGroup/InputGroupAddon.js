/**
 * InputGroup Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

const defaultProps = {
  tag: 'div',
};


class InputGroupAddon extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    cssModule: PropTypes.object,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'input-group-addon'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
