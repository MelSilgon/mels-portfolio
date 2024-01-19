import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const PortfolioPost = ({ data }) => {
  const post = data.contentfulPortfolioPost
  const image = getImage(post.heroImage)

  return (
    <Layout>
      <h2>{post.title}</h2>
      <GatsbyImage image={image} alt={post.title}></GatsbyImage>
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
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
  }
`

export default PortfolioPost
