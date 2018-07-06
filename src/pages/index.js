import React from 'react'
import Bio from '../components/Bio'
import Attributes from '../components/Attributes'
import Portfolio from '../components/Portfolio'

class IndexPage extends React.Component {
  projects = this.props.data.allMarkdownRemark.edges.map(
    ({ node: { html, frontmatter } }) => ({
      ...frontmatter,
      html
    })
  )
  render() {
    return (
      <div className="flex flex-wrap lg:h-screen lg:overflow-hidden">
        <div className="w-full lg:w-2/5 flex justify-center lg:overflow-y-scroll">
          <Bio />
        </div>
        <div className="w-full lg:w-3/5 dark-theme lg:overflow-y-scroll p-3 sm:p-6 lg:p-10 xl:p-16">
          <Attributes />
          <div className="pt-10">
            <Portfolio projects={this.projects} />
          </div>
        </div>
      </div>
    )
  }
}

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
            links {
              label
              url
            }
          }
        }
      }
    }
  }
`
