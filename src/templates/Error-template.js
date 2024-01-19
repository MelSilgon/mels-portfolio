import React from "react"
import { Link } from "gatsby"
import RichTextRender from "../components/richtextRender"
import { Col, Row, Container } from "react-bootstrap"

const ErrorTemplate = contentfulPage => {
  return (
    <>
      <Container>
        <Row className="justify-content-center pt-5">
          <Col xs={12} md={8} lg={6} className="pt-5">
            {/* Error 404 Content */}
            <h2>{contentfulPage.title}</h2>
            <div>
              <h4>
                {/* description.raw text gets rendered here*/}
                <RichTextRender richTextNode={contentfulPage.description} />
              </h4>
              <h5>
                <Link to="/">Go back to the start page.</Link>
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ErrorTemplate
