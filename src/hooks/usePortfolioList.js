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
              gatsbyImage(width: 200)
            }
          }
        }
      }
    }
  `)

  return allContentfulPortfolioPost.edges
}

export default usePortfolioList
