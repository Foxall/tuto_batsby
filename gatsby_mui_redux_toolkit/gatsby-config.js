/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-react-redux`,
      resolve: `gatsby-plugin-material-ui`,
      resolve: `@reduxjs/toolkit`,
      options: {
        pathToStylesProvider: `src/styles-provider-props`,
        pathToCreateStoreModule: './src/state/configStore',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
          ignoreFunction: true,
        },
        cleanupOnClient: true,
        windowKey: '__PRELOADED_STATE__',
      },
    },
  ],
};