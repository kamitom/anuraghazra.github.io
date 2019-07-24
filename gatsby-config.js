module.exports = {
  siteMetadata: {
    title: `Anurag Hazra | Creative Web Designer`,
    description: `Creative Web Designer\`s Portfolio`,
    author: `@anuraghazra`,
  },
  plugins: [
    // JSON
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/static/images`,
      },
    },

    // manifest & helmet
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#6D83F2`,
        theme_color: `#6D83F2`,
        display: `minimal-ui`,
        icon: `src/static/images/gatsby-icon.png`,
      },
    },

    // others
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}