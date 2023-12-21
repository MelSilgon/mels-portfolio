const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulPortfolioPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulPortfolioPost.edges.forEach(({ node }) => {
    createPage({
      path: `/portfolio/${node.slug}`,
      component: path.resolve("./src/templates/portfolio-post.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
