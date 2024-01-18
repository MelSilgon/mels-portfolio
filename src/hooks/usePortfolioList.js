import { graphql, useStaticQuery } from "gatsby"

const usePortfolioList = () => {
  const { allContentfulPortfolioPost } = useStaticQuery(graphql`
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
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                width: 200
              )
            }
          }
        }
      }
    }
  `)

  return allContentfulPortfolioPost.edges
}

export default usePortfolioList
