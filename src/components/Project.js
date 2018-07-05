import React from 'react'

const Project = project => {
  return (
    <div className="bg-grey-darkest mb-4 border-0 border-l-8 border-blue border-solid">
      <div className="px-12 pt-12 flex justify-between">
        <h4 className="mt-0">{project.title}</h4>
        <div>Thing</div>
      </div>
      <div
        className="p-12"
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
    </div>
  )
}

export default Project