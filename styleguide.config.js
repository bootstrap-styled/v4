const { createConfig } = require('@rollup-umd/documentation');
const pkg = require('./package.json');

const config = createConfig({
  assetsDir: '',
  pagePerSection: true,
});

/**
 * We generally make the modules aliased for having nice example, but in this case
 * we use the module itself for the documentation and to prevent multiple version of
 * styled-components, we must disable the alias
 */
delete config.webpackConfig.resolve.alias[pkg.name];

module.exports = config;
