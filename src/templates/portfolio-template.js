import React from "react"
import { Link } from "gatsby"
import { Row, Col, Card } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import hook
import usePortfolioList from "../hooks/usePortfolioList"

const PortfolioTemplate = contentfulPage => {
  //use hook
  const portfolioList = usePortfolioList()

  // Function - cut description
  const descrCut = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."
    } else {
      return text
    }
  }

  return (
    <div class="container-center">
      {/* ALL PORTFOLIO POSTS */}
      <h2>{contentfulPage.title}</h2>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="justify-content-center g-4 pt-5 mx-lg-3 mx-xl-5"
      >
        {/* .map out the portfolio items */}
        {portfolioList.map(edge => (
          <Col key={edge.node.id} className="md-4 mb-4">
            <Card>
              <Link to={`/portfolio/${edge.node.slug}/`}>
                <Card.Img
                  variant="top"
                  as={GatsbyImage}
                  image={getImage(edge.node.heroImage)}
                  alt={edge.node.title}
                />
              </Link>
              <Card.Body>
                <Card.Title>
                  <Link to={`/portfolio/${edge.node.slug}/`}>
                    {edge.node.title}
                  </Link>
                </Card.Title>
                <Card.Text>
                  {descrCut(edge.node.description.description, 60)}
                </Card.Text>
                <Card.Link as={Link} to={`/portfolio/${edge.node.slug}/`}>
                  Read more
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PortfolioTemplate
