import React from 'react'
import ProjectLinks from './ProjectLinks'
import ProjectTags from '../ProjectTags'

const Project = props => {
  const { project } = props
  return (
    <div className='box mb-4'>
      <div className='flex justify-between flex-wrap'>
        <div className='self-end'>
          <h3 className='my-0 mr-3 inline-block'>{project.title}</h3>
        </div>
        <div className='alt-font'>
          <ProjectTags {...props} />
        </div>
      </div>
      <div
        className='py-6'
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
      <ProjectLinks {...props} />
    </div>
  )
}

export default Project
