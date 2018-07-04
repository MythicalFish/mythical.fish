import React from 'react'
import Project from '../components/Project'

const pad = 'p-3 sm:p-8 md:p-12 lg:p-16'

class IndexPage extends React.Component {
  projects = this.props.data.allMarkdownRemark.edges.map(
    ({ node }) => node.frontmatter
  )
  render() {
    return (
      <div className="flex flex-wrap min-h-screen">
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className={`${pad} self-center text-center`}>
            <div className="text-2xl mb-3">jake@mythical.fish</div>
            <div className="-mx-1 mb-8">
              <a
                className="btn mx-1"
                href="https://www.linkedin.com/in/jakebroughton/"
                target="_blank"
              >
                <i className="fab fa-linkedin mr-2" />
                LinkedIn
              </a>
              <a
                className="btn mx-1"
                href="https://github.com/MythicalFish/"
                target="_blank"
              >
                <i className="fab fa-github mr-2" />
                Github
              </a>
            </div>
            <div>
              My name is Jake Broughton; I'm a solution-finder and full-stack
              software engineer, specializing in JS, React, Vue, and Rails. I'm
              currently looking for the following:
              <ul className="mt-4">
                <li>Long-term partnerships with awesome people.</li>
                <li>
                  Involvement in a cool project, preferably doing frontend or
                  full-stack work.
                </li>
                <li>
                  Remote work - a change of environment once in a while is
                  invaluable to me.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`w-full lg:w-2/3 bg-black ${pad}`}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <div className={`bg-grey-darkest ${pad}`}>
                <h3 className="text-white">Skills</h3>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className={`bg-grey-darkest ${pad}`}>Power</div>
            </div>
          </div>
          {this.projects.map((attributes, index) => (
            <Project key={index} {...attributes} />
          ))}
        </div>
      </div>
    )
  }
}

export default IndexPage

export const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            tags {
              label
              url
            }
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
