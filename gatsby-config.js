/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Jake Broughton - Full-stack software engineer`,
    siteUrl: `https://mythical.fish`,
    twitterUsername: "MythicalFish",
    image: "/assets/images/opengraph.png",
    description:
      "11+ years professional experience. Typescript, React, Redux, GraphQL, Docker, Golang, Ruby",
  },
  plugins: [
    { resolve: "gatsby-plugin-mdx" },
    { resolve: "gatsby-transformer-remark" },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.png",
      },
    },
    { resolve: `gatsby-plugin-postcss` },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/content`,
        name: "content",
      },
      __key: "content",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
  ],
};
