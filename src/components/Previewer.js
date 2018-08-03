import React, { Fragment } from 'react'
import ProjectLinks from './ProjectLinks'
import ProjectTags from './ProjectTags'
import ChevronLeft from '../assets/images/icons/chevron-left.png'
import ChevronRight from '../assets/images/icons/chevron-right.png'

class Previewer extends React.Component {
  state = { currentKey: 0 }
  isNavigable = () => this.props.project.previews.length > 1
  handleKeyPress = ({ keyCode }) => {
    if (!this.isNavigable()) return
    const { project: { previews }, showProject } = this.props
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
    }
  }
  goLeft = () => this.handleKeyPress({ keyCode: 37 })
  goRight = () => this.handleKeyPress({ keyCode: 39 })

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress, false)
  }
  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress, false)
  }
  render () {
    const { project, showProject, nextProject } = this.props
    const { currentKey } = this.state
    const current = project.previews[currentKey] || {}
    const currentCount = currentKey + 1
    const total = project.previews.length
    return (
      <div className='previewer bg-white text-grey-darker'>
        <div className='image-nav'>
          {total > 1 &&
            <Fragment>
              <button className='nav-left' onClick={this.goLeft}>
                <img src={ChevronLeft} />
              </button>
              <button className='nav-right' onClick={this.goRight}>
                <img src={ChevronRight} />
              </button>
            </Fragment>}
          <img src={current.image} className='block m-0' />
        </div>
        <div className='flex-auto flex flex-col justify-between'>
          <div className='px-4 py-5'>
            <div className='mb-5'>
              <h3 className='mb-2 text-grey-dark'>{project.title}</h3>
              <ProjectTags {...{ project }} />
            </div>
            <div>
              <div className='mb-3'>
                <h4 className='text-grey-dark m-0 inline-block mr-2'>
                  {current.label}
                </h4>
                {total > 1 &&
                  <span className='text-xs text-grey'>{`Image ${currentCount} of ${total}`}</span>}
              </div>
              <div
                className='text-sm mb-3'
                dangerouslySetInnerHTML={{ __html: current.description }}
              />
              <ProjectLinks {...{ project }} hidePreviewLink />
            </div>
          </div>
          {nextProject &&
            <div className='px-4 py-5 text-right'>
              <button
                className='btn btn-white btn-sm'
                onClick={() => showProject(nextProject.key)}
              >{`Next project: ${nextProject.title}`}</button>
            </div>}
        </div>
      </div>
    )
  }
}

export default Previewer
