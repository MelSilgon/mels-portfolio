import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import usePortfolioList from "../hooks/usePortfolioList"

const PortfolioTemplate = contentfulPage => {
  //usePortfolioList hook
  const portfolioList = usePortfolioList()

  return (
    <div>
      <h2>{contentfulPage.title}</h2>

      <ul>
        {portfolioList.map(edge => {
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
    </div>
  )
}

export default PortfolioTemplate
