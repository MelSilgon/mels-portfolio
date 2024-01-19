import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//Import templates
import AboutTemplate from "../templates/about-template"
import PortfolioTemplate from "../templates/portfolio-template"
import ContactTemplate from "../templates/contact-template"
import DefaultTemplate from "../templates/default-template"
import ErrorTemplate from "../templates/Error-template"

const Page = props => {
  const { data } = props
  const { contentfulPage } = data
  //Template switch
  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case "about":
        return <AboutTemplate {...contentfulPage} />
      case "portfolio":
        return <PortfolioTemplate {...contentfulPage} />
      case "contact":
        return <ContactTemplate {...contentfulPage} />
      case "error":
        return <ErrorTemplate {...contentfulPage} />
      //default, "Home" template
      default:
        return <DefaultTemplate {...contentfulPage} />
    }
  }

  return <Layout>{getTemplate(contentfulPage)}</Layout>
}

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      template
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      description {
        raw
      }
    }
  }
`
export default Page
