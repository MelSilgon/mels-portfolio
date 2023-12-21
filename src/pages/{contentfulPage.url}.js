import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutTemplate from "../templates/about-template"
import DefaultTemplate from "../templates/default-template"

const Page = props => {
  const { data } = props
  const { contentfulPage } = data
  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case "about":
        return <AboutTemplate {...contentfulPage} />
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
      description {
        raw
      }
      template
    }
  }
`
export default Page
