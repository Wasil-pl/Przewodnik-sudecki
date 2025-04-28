/**
 * @type {import('gatsby').GatsbyConfig}
 */

const plugins = [
  `gatsby-plugin-sitemap`,
  'gatsby-plugin-sass',
  'gatsby-plugin-image',
  'gatsby-plugin-sitemap',
  `gatsby-plugin-scroll-reveal`,
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png',
    },
  },
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaults: {
        formats: ['auto', 'webp', 'avif'],
        placeholder: 'blurred',
        quality: 75,
        breakpoints: [750, 1080, 1366, 1920],
        backgroundColor: 'transparent',
      },
    },
  },
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  },
  {
    resolve: 'gatsby-plugin-purgecss',
    options: {
      purgeOnly: ['src/styles/index.scss'],
    },
  },
  {
    resolve: 'gatsby-plugin-minify',
    options: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeConditionalComments: true,
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /svg/,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
];

if (process.env.ANALYZE_BUNDLE) {
  plugins.push({
    resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    options: {
      analyzerMode: 'static',
      reportFilename: 'bundle-report.html',
      openAnalyzer: true,
    },
  });
}

module.exports = {
  siteMetadata: {
    title: `Przewodnik-Sudecki`,
    siteUrl: `https://www.przewodnik-skalnemiasto.pl`,
  },
  plugins,
};

