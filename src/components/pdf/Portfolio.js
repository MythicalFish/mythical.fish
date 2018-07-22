import React from 'react'
import Project from './Project'

class Portfolio extends React.Component {
  projects = this.props.data.allMarkdownRemark.edges.map(
    ({ node: { frontmatter, ...rest } }, key) => ({
      key,
      ...frontmatter,
      ...rest
    })
  )
  render () {
    const { projects } = this
    return (
      <div>
        <h2 className='mb-6'>Portfolio</h2>
        {projects.map(project => (
          <Project key={project.key} {...{ project }} />
        ))}
      </div>
    )
  }
}

export default Portfolio
