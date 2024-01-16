import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

// StaticQuery används för att hämta data från contentful
const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPagenotfound {
        title
        description
        notfoundlink
      }
    }
  `)

  return (
    <Layout>
      <div className="noPageFoundOutContainer">
        <div className="noPageFoundContainer">
          <h1 className="noPageFoundTitle">
            {data.contentfulPagenotfound.title}
          </h1>
          <p className="noPageFoundMessage">
            {data.contentfulPagenotfound.description}
          </p>
          <Link
            to={data.contentfulPagenotfound.notfoundlink}
            className="noPageFoundLink"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
