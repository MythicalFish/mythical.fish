import React from 'react'
import Modal from './Modal'
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
  showProject = key => {
    this.setState({ previewKey: key })
    if (key === null) {
      document.body.className = ''
    } else {
      document.body.className = 'overflow-hidden fixed'
    }
  }
  nextProjectKey = key => {
    let nextKey = (key || this.state.previewKey) + 1
    if (nextKey + 1 > this.projects.length) nextKey = 0
    const { previews } = this.projects[nextKey]
    if (previews && previews.length > 0) {
      return nextKey
    } else {
      return this.nextProjectKey(nextKey)
    }
  }
  render() {
    const { projects, showProject } = this
    const { previewKey } = this.state
    return (
      <div>
        <h2 className="mb-6">Portfolio</h2>
        {projects.map(project => (
          <Project key={project.key} {...{ project, showProject }} />
        ))}
        <Modal
          isOpen={previewKey !== null}
          closeFunc={() => this.showProject(null)}
        >
          <Previewer
            project={projects[previewKey]}
            showProject={showProject}
            nextProject={{
              ...projects[this.nextProjectKey()]
            }}
          />
        </Modal>
      </div>
    )
  }
}

export default Portfolio
