import { fromJS } from 'immutable';
import { defaultProps, makeGridColumns } from '../grid-framework';

describe('bootstrap grid-framework mixins', function () {
  it('makeGridColumns should return an empty css', function () {
    var css = makeGridColumns(defaultProps['$enable-flex'], !defaultProps['$enable-grid-classes'], defaultProps['$grid-columns'], defaultProps['$grid-gutter-widths'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(788434458);
  });
  it('makeGridColumns should return a css with flex', function () {
    var css = makeGridColumns(!defaultProps['$enable-flex'], defaultProps['$enable-grid-classes'], defaultProps['$grid-columns'], defaultProps['$grid-gutter-widths'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(764036161);
  });
  it('makeGridColumns should return a css without flex', function () {
    var css = makeGridColumns(defaultProps['$enable-flex'], defaultProps['$enable-grid-classes'], defaultProps['$grid-columns'], defaultProps['$grid-gutter-widths'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-36627792);
  });
});