import React from 'react'
import Previewer from './Previewer'
import Project from './Project'

class Portfolio extends React.Component {
  state = { previewKey: null }
  projects = this.props.data.allMarkdownRemark.edges.map(
    ({ node: { frontmatter, ...rest } }, key) => ({
      key,
      ...frontmatter,
      ...rest
    })
  )
  previewProject = key => {
    this.setState({ previewKey: key })
    if (key === null) {
      document.body.className = ''
    } else {
      document.body.className = 'overflow-hidden fixed'
    }
  }
  render() {
    const { projects, previewProject } = this
    const { previewKey } = this.state
    return (
      <div>
        <h2 className="mb-6">Portfolio</h2>
        {projects.map(project => (
          <Project key={project.key} {...{ project, previewProject }} />
        ))}
        {previewKey !== null && (
          <Previewer
            project={projects[previewKey]}
            previewProject={previewProject}
          />
        )}
      </div>
    )
  }
}

export default Portfolio
