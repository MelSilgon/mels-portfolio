import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const PortfolioPost = ({ data }) => {
  const post = data.contentfulPortfolioPost
  const image = getImage(post.heroImage)

  return (
    <Layout>
      {/* Single Portfolio Post */}
      <Container className="px-5">
        <div class="container-center">
          <h2>{post.title}</h2>
          <Container class="post-image-container">
            <GatsbyImage image={image} alt={post.title}></GatsbyImage>
          </Container>
          {/* TODO: Change to richtext */}
          <p>{post.description.description}</p>
        </div>
      </Container>
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
