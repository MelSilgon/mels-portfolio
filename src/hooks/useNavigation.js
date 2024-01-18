import { graphql, useStaticQuery } from "gatsby"

const useNavigation = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: { order: ASC }) {
        edges {
          node {
            title
            url
            order
          }
        }
      }
    }
  `)
  return allContentfulPage.edges
}

export default useNavigation
