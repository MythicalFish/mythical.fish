import React from 'react'
import ProjectLinks from './ProjectLinks'
import ProjectTags from './ProjectTags'
import EyeIcon from './icons/light/Eye'

const Project = ({ project, showProject }) => {
  const { key, title, html } = project
  return (
    <div className="bg-grey-darkest mb-4 border-0 border-l-8 border-blue border-solid">
      <div className="px-cozy pt-cozy flex justify-between flex-wrap">
        <div className="self-end">
          <h3 className="my-0 mr-3 inline-block">{title}</h3>
          <EyeIcon onClick={() => showProject(key)} />
        </div>
        <div className="w-full h-3 md:hidden" />
        <div>
          <ProjectTags {...{ project }} />
        </div>
      </div>
      <div
        className="px-cozy py-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="px-cozy pb-cozy">
        <ProjectLinks {...{ project }} />
      </div>
    </div>
  )
}

export default Project
