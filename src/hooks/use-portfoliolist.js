import { useStaticQuery, graphql } from "gatsby"

const usePortfolio = () => {
    const {allContentfulProfileItem} = useStaticQuery(graphql`
    query {
        allContentfulProfileItem {
            edges {
              node{
                title
                techniques
                description {
                  description
                }
                itemImage {
                  gatsbyImage(width:250)
                }
                slug
              }
            }
          }
    }
  `)
  return allContentfulProfileItem.edges;
}

export default usePortfolio;
