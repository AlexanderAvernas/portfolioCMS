import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HomeTemplate from "../templates/home-template"
import AboutTemplate from "../templates/about-template"
import PortfolioTemplate from "../templates/portfolio-template"
import ContactTemplate from "../templates/contact-template"


const Page = props => {
  const { data } = props
  const { contentfulPage } = data
  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case 'Home':
        return <HomeTemplate {...contentfulPage} />
        case 'About':
            return <AboutTemplate {...contentfulPage} />
        case 'Portfolio':
            return <PortfolioTemplate {...contentfulPage} />
        case 'Contact':
            return <ContactTemplate {...contentfulPage} />
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
      subtitle
      cvlink
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
