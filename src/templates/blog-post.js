import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from '../components/layout';


export const query = graphql`
  query ($slug: String!) {
    contentfulProfileItem(slug: { eq: $slug }) {
        title
        techniques
        description {
          description
        }
        itemImage {
          gatsbyImage(width:250)
        }
      }
    }
`;

const BlogPost = (props) => {
  return (
    <Layout>
      <Link to="/portfolio/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulProfileItem.title}</h1>
        <GatsbyImage alt="props.data.contentfulProfileItem.title" image={props.data.contentfulProfileItem.itemImage.gatsbyImage} ></GatsbyImage>
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
    </Layout>
  );
};

export default BlogPost;
