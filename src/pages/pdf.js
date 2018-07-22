import React from 'react'
import Layout from '../components/pdf/Layout'

const PdfPage = props => <Layout {...props} />

export default PdfPage

export const pdfQuery = graphql`
  query pdfQuery {
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
