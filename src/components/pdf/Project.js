import React from 'react'
import ProjectLinks from './ProjectLinks'
import ProjectTags from '../ProjectTags'

const Project = props => {
  const { project } = props
  return (
    <div className='content-box mb-4'>
      <div className='flex justify-between flex-wrap'>
        <div className='self-end'>
          <h3 className='my-0 mr-3 inline-block'>{project.title}</h3>
        </div>
        <div>
          <ProjectTags {...props} />
        </div>
      </div>
      <div
        className='py-6'
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
      <div className='pb-cozy'>
        <ProjectLinks {...props} />
      </div>
    </div>
  )
}

export default Project
