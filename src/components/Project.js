import React from 'react'

const Project = project => {
  return (
    <div className="bg-grey-darkest text-white">
      <div className="p-3 flex justify-between">
        <h3>{project.title}</h3>
        <div>Thing</div>
      </div>
    </div>
  )
}

export default Project
