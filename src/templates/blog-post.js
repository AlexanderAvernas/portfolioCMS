import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

export const query = graphql`
  query ($slug: String!) {
    contentfulProfileItem(slug: { eq: $slug }) {
      title
      techniques
      itemlink
      singleitemdescription
      description {
        description
      }
      itemImage {
        gatsbyImage(width: 250)
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <div className="singleItemContainer">
        <div className="singleItemContentContainer">
        <h1>{props.data.contentfulProfileItem.title}</h1>
        <GatsbyImage
        className="singleItemImage"
          alt="props.data.contentfulProfileItem.title"
          image={props.data.contentfulProfileItem.itemImage.gatsbyImage}
        ></GatsbyImage>


        <div className="innerItemContent">
        <p>{props.data.contentfulProfileItem.singleitemdescription}</p>
        <p>
          <a
            href={props.data.contentfulProfileItem.itemlink}
            target="_blank"
            rel="noopener noreferrer"
            className="singleItemLink"
          >
             <h4>{props.data.contentfulProfileItem.title}</h4>
          </a>
        </p>

        </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
