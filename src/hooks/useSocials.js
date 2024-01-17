import { graphql, useStaticQuery } from "gatsby"

const useSocials = () => {
  const { allContentfulSocials } = useStaticQuery(graphql`
    query {
      allContentfulSocials {
        edges {
          node {
            name
            icon
          }
        }
      }
    }
  `)
  return allContentfulSocials.edges
}

export default useSocials
