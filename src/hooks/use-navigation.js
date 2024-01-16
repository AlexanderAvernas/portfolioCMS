import { useStaticQuery, graphql } from "gatsby"

// Anpassad hook för att hämta navigeringsdata med hjälp av GraphQL-fråga
const useNavigation = () => {
    // Använder useStaticQuery-hook för att utföra en GraphQL-request
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: { createdAt: ASC }) {
        edges {
          node {
            template
            url
          }
        }
      }
    }
  `)
  return allContentfulPage.edges
}

export default useNavigation
