import * as React from "react"
import { Link } from "gatsby"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioPost {
        edges {
          node {
            slug
            title
            description {
              description
            }
            heroImage {
              gatsbyImage(width: 200)
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Portfolio page</h1>

      <ul>
        {data.allContentfulPortfolioPost.edges.map(edge => {
          return (
            <li key={edge.node.id}>
              <h2>
                <Link to={`/portfolio/${edge.node.slug}/`}>
                  {edge.node.title}
                </Link>
              </h2>
              <GatsbyImage
                alt={edge.node.title}
                image={edge.node.heroImage.gatsbyImage}
              ></GatsbyImage>
              <div className="button">
                <Link to={`/portfolio/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioPage
