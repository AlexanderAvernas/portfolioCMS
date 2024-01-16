import { useStaticQuery, graphql } from "gatsby"

// Anpassad hook för att hämta portfoliodata med hjälp av GraphQL-fråga
const usePortfolio = () => {
    // Använder useStaticQuery-hook för att utföra en GraphQL-request
  const { allContentfulProfileItem } = useStaticQuery(graphql`
    query {
      allContentfulProfileItem(sort: { title: DESC }) {
        edges {
          node {
            title
            techniques
            description {
              description
            }
            itemImage {
              gatsbyImage(width: 250)
            }
            slug
          }
        }
      }
    }
  `)
  return allContentfulProfileItem.edges
}

export default usePortfolio
