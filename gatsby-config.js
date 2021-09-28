module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Hope & Future",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    "gatsby-background-image",
    {
      resolve: "gatsby-source-filesystem", 
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
