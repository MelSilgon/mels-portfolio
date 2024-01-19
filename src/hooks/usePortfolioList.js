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
                aspectRatio: 1.5
                cropFocus: TOP
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
