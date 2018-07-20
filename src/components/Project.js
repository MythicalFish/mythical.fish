import React from 'react'
import ProjectLinks from './ProjectLinks'
import ProjectTags from './ProjectTags'
import PreviewIcon from './icons/regular/Images'

const Project = props => {
  const { project } = props
  return (
    <div className='bg-grey-darkest mb-4 border-0 border-l-8 border-blue border-solid'>
      <div className='px-cozy pt-cozy flex justify-between flex-wrap'>
        <div className='self-end'>
          <TitleWrapper {...props}>
            <h3 className='my-0 mr-3 inline-block'>{project.title}</h3>
          </TitleWrapper>
        </div>
        <div className='w-full h-3 md:hidden' />
        <div>
          <ProjectTags {...props} />
        </div>
      </div>
      <div
        className='px-cozy py-6'
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
      <div className='px-cozy pb-cozy'>
        <ProjectLinks {...props} />
      </div>
    </div>
  )
}

const TitleWrapper = ({ project, showProject, children }) => {
  const { previews, key } = project
  if (previews && previews.length > 0) {
    return (
      <button onClick={() => showProject(key)} className='btn-wrapper'>
        {children}
        <PreviewIcon />
      </button>
    )
  } else {
    return children
  }
}

export default Project
