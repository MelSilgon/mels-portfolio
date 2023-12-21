import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const PortfolioPost = ({ data }) => {
  const post = data.contentfulPortfolioPost

  return (
    <Layout>
      <h1>{post.title}</h1>
      <GatsbyImage
        alt={post.title}
        image={post.heroImage.gatsbyImage}
      ></GatsbyImage>
      <p>{post.description.description}</p>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      heroImage {
        gatsbyImageData
      }
    }
  }
`

export default PortfolioPost
