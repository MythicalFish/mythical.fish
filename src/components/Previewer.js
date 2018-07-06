import React from 'react'

class Previewer extends React.Component {
  state = { currentKey: 0 }
  isNavigable = () => this.props.project.previews.length > 1
  handleKeyPress = ({ keyCode }) => {
    if (!this.isNavigable()) return
    const {
      project: { previews }
    } = this.props
    const total = previews.length
    const { currentKey } = this.state
    let nextKey = currentKey + 1
    if (nextKey + 1 > total) nextKey = 0
    let prevKey = currentKey - 1
    if (prevKey < 0) prevKey = total - 1
    if (keyCode === 37) {
      // Left
      this.setState({ currentKey: prevKey })
    } else if (keyCode === 39) {
      // Right
      this.setState({ currentKey: nextKey })
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false)
  }
  render() {
    const {
      project: { previews }
    } = this.props
    const { currentKey } = this.state
    const current = previews[currentKey]
    return (
      <div className="modal">
        <div className="bg-white text-grey-darker flex">
          <div className="w-2/3 nav-image">
            <img src={current.image} />
          </div>
          <div className="w-1/3 p-4">{current.description}</div>
        </div>
      </div>
    )
  }
}

export default Previewer
