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
 * `<Fieldset />` component is used to group related elements in a form.
 */
const Fieldset = styled.fieldset`
  ${(props) => `
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;

    & .row {
      ${makeRow(
    props.theme['$enable-grid-classes'],
    props.theme['$grid-gutter-width'],
  )}
    }

  `}
`;

Fieldset.defaultProps = defaultProps;
Fieldset.propTypes = propTypes;

/** @component */
export default Fieldset;
