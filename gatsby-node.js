const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
        allContentfulProfileItem {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  response.data.allContentfulProfileItem.edges.forEach((edge) => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};

