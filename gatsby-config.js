require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Strony internetowe | Adrian Domański`,
    description: `Tworzenie stron internetowych na terenie Mosiny, Śremu, Poznania, okolic oraz zdalnie. Zajmuję się projektowaniem i programowaniem stron internetowych. Tworzę portfolia, strony personalne, strony firmowe, strony wizytówki, strony w oparciu o CMS lub na dowolny inny temat.`,
    author: `Adrian Domański`,
    siteUrl: `https://adrian-domanski.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Strony internetowe - Adrian Domański`,
        short_name: `Strony internetowe`,
        start_url: `/`,
        background_color: `#313131`,
        theme_color: `#ffb633`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
