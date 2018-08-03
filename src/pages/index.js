import React from 'react'
import Layout from '../components/Layout'
import PDFLayout from '../components/pdf/Layout'

const parseData = data => {
  const projects = data.projects.edges.map(
    ({ node: { frontmatter, ...rest } }, key) => ({
      ...frontmatter,
      ...rest,
      key
    })
  )
  const info = {}
  data.info.edges.forEach(({ node: { frontmatter, html } }) => {
    info[frontmatter.key] = { html, ...frontmatter }
  })
  return { projects, info }
}

const IndexPage = ({ data, location }) => {
  const props = { content: parseData(data) }
  if (['/pdf', '/pdf/'].includes(location.pathname)) { return <PDFLayout {...props} /> }
  return <Layout {...props} />
}

export default IndexPage

export const indexQuery = graphql`
  query indexQuery {
    info: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "info" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            key
            itemList
          }
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___position] }
      filter: { frontmatter: { visible: { eq: true } type: { eq: "project" } } }
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
