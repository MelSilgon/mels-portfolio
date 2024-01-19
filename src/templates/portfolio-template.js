import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import usePortfolioList from "../hooks/usePortfolioList"

const PortfolioTemplate = contentfulPage => {
  //usePortfolioList hook
  const portfolioList = usePortfolioList()

  return (
    <div className="container">
      <h2>{contentfulPage.title}</h2>

      <div className="row">
        {portfolioList.map(edge => (
          <div key={edge.node.id} className="col-md-4 mb-4">
            <h2>
              <Link to={`/portfolio/${edge.node.slug}/`}>
                {edge.node.title}
              </Link>
            </h2>
            <GatsbyImage
              alt={edge.node.title}
              image={getImage(edge.node.heroImage)}
            ></GatsbyImage>
            <div className="button">
              <Link to={`/portfolio/${edge.node.slug}/`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioTemplate
