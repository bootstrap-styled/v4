/**
 *Definition List
 *
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeRow } from '@bootstrap-styled/css-mixins/lib/grid';

export const defaultProps = {
  theme: {
    '$grid-gutter-width': '30px',
    '$enable-grid-classes': true,
  },
};
export const propTypes = {
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$grid-gutter-width': PropTypes.string,
    '$enable-grid-classes': PropTypes.bool,
  }),
};

/**
 * `<Dl />` defines a description list.
 */
const Dl = styled.dl` 
  /* Reboot Scss */
  margin-top: 0;
  margin-bottom: 1rem;
  
  ${(props) => `
    ${makeRow(
    props.theme['$enable-grid-classes'],
    props.theme['$grid-gutter-width']
  )}
  `}
`;

Dl.defaultProps = defaultProps;
Dl.propTypes = propTypes;

/** @component */
export default Dl;
