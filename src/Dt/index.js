/**
 * Description Term
 *
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeGridColumns } from '@bootstrap-styled/css-mixins/lib/grid-framework';

export const defaultProps = {
  theme: {
    '$dt-font-weight': 'bold',
    '$grid-columns': '12',
    '$grid-gutter-width': '30px',
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    '$enable-grid-classes': true,
  },
};
export const propTypes = {
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$dt-font-weight': PropTypes.string,
    '$grid-columns': PropTypes.string,
    '$grid-gutter-width': PropTypes.string,
    '$grid-breakpoints': PropTypes.object,
    '$enable-grid-classes': PropTypes.bool,
  }),
};

/**
 * Use our `<Dt />` component defines a term/name in a description list.
 */
const Dt = styled.dt`
  ${(props) => `
    /* Reboot Scss */
    font-weight: ${props.theme['$dt-font-weight']};
    ${makeGridColumns(
    props.theme['$enable-grid-classes'],
    props.theme['$grid-columns'],
    props.theme['$grid-gutter-width'],
    props.theme['$grid-breakpoints']
  )}
  `}
`;

Dt.defaultProps = defaultProps;
Dt.propTypes = propTypes;

/** @component */
export default Dt;
