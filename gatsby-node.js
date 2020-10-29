const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulProjects.edges.forEach(({ node }) => {
    createPage({
      path: `/projekty${node.slug}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}
