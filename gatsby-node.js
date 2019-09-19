/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPost = path.resolve("./src/templates/blog-post.js")
// }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
