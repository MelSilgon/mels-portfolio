import { graphql, useStaticQuery } from "gatsby"

const useSocials = () => {
  const { allContentfulSocials } = useStaticQuery(graphql`
    query {
      allContentfulSocials(sort: { order: ASC }) {
        edges {
          node {
            name
            order
            socialLink
            image {
              gatsbyImageData(
                placeholder: NONE
                layout: FIXED
                width: 25
                quality: 100
              )
            }
          }
        }
      }
    }
  `)
  return allContentfulSocials.edges
}

export default useSocials
