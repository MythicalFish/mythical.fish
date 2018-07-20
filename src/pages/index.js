import React from 'react'
import Layout from '../components/Layout'

const IndexPage = props => <Layout {...props} />

export default IndexPage

export const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___position] }
      filter: { frontmatter: { visible: { eq: true } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            tags
            privateCode
            links {
              label
              url
            }
            previews {
              label
              description
              image
            }
          }
        }
      }
    }
  }
`
