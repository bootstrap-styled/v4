import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import omit from 'lodash.omit';
import { makeContainer, makeContainerMaxWidths } from '@bootstrap-styled/css-mixins/lib/grid';

export const defaultProps = {
  theme: {
    '$grid-gutter-width': '30px',
    '$container-max-widths': {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      xxl: '1320px',
    },
    '$enable-grid-classes': true,
  },
  fluid: false,
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$grid-gutter-width': PropTypes.string,
    '$container-max-widths': PropTypes.object,
    '$enable-grid-classes': PropTypes.bool,
  }),
  /** Use a responsive container */
  fluid: PropTypes.bool,
};

class ContainerUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      className,
      fluid,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <div
        className={cn(className, {
          container: !fluid,
          'container-fluid': fluid,
        })}
        {...attributes}
      />
    );
  }
}
/**
 * Use our `<Container />` component, to affect common layout to your components.
 */
const Container = styled(ContainerUnstyled)`
  ${(props) => `
    ${makeContainer(
    props.theme['$enable-grid-classes'],
    props.theme['$grid-gutter-width']
  )}

  ${!props.fluid ? makeContainerMaxWidths(
    props.theme['$enable-grid-classes'],
    props.theme['$container-max-widths'],
    props.theme['$grid-breakpoints']
  ) : ''}
  `}
`;

Container.defaultProps = defaultProps;
Container.propTypes = propTypes;

/** @component */
export default Container;
