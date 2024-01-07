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
          >
             <h3>{props.data.contentfulProfileItem.title}</h3>
          </a>
        </p>

        </div>
        {/* <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>

        {props.data.contentfulBlogPost.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        )} */}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
