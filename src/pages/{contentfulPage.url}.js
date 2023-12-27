import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HomeTemplate from "../templates/home-template"
import AboutTemplate from "../templates/about-template"

const Page = props => {
  const { data } = props
  const { contentfulPage } = data
  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case 'home':
        return <HomeTemplate {...contentfulPage} />
        case 'about':
            return <AboutTemplate {...contentfulPage} />
      default:
        return <HomeTemplate {...contentfulPage} />
    }
  }
  return <Layout>{getTemplate(contentfulPage)}</Layout>
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      template
      description {
        description
      }
      image {
        gatsbyImage(width:250)
      }
    }
  }
`

export default Page;
