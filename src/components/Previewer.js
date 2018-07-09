import React from 'react'
import ProjectLinks from './ProjectLinks'
import ProjectTags from './ProjectTags'

class Previewer extends React.Component {
  state = { currentKey: 0 }
  isNavigable = () => this.props.project.previews.length > 1
  handleKeyPress = ({ keyCode }) => {
    if (!this.isNavigable()) return
    const {
      project: { previews },
      previewProject
    } = this.props
    const total = previews.length
    const { currentKey } = this.state
    if (keyCode === 37) {
      // Left
      let prevKey = currentKey - 1
      if (prevKey < 0) prevKey = total - 1
      this.setState({ currentKey: prevKey })
    } else if (keyCode === 39) {
      // Right
      let nextKey = currentKey + 1
      if (nextKey + 1 > total) nextKey = 0
      this.setState({ currentKey: nextKey })
    } else if (keyCode === 27) {
      // ESC
      previewProject(null)
    }
  }
  goLeft = () => this.handleKeyPress({ keyCode: 37 })
  goRight = () => this.handleKeyPress({ keyCode: 39 })
  escape = () => this.handleKeyPress({ keyCode: 27 })
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false)
  }
  render() {
    const { project } = this.props
    const { currentKey } = this.state
    const current = project.previews[currentKey]
    return (
      <div className="modal">
        <div className="previewer">
          <div className="">
            <img src={current.image} className="block m-0" />
          </div>
          <div className="p-3">
            <div className="mb-4">
              <h3 className="">{project.title}</h3>
              <ProjectTags {...{ project }} />
            </div>
            <div>{current.label}</div>
            <div className="pt-4">{current.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Previewer
