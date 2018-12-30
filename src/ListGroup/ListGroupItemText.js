/**
 * ListGroupItemText component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const defaultProps = {
  tag: 'p',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  tag: PropTypes.any,
};

class ListGroupItemText extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;
    const classes = cn(
      className,
      'list-group-item-text'
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

ListGroupItemText.defaultProps = defaultProps;
ListGroupItemText.propTypes = propTypes;

export default ListGroupItemText;
