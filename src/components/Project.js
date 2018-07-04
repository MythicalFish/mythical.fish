import React from 'react'

const Project = project => {
  return (
    <div className="bg-grey-darkest">
      <div className="p-3 bg-grey-darker flex justify-between">
        <h3>{project.title}</h3>
        <div>Thing</div>
      </div>
    </div>
  )
}

export default Project
