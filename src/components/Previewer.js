import React from 'react'

const Previewer = ({ project }) => {
  return (
    <div className="modal">
      <div className="p-cozy bg-white">{project.name}</div>
    </div>
  )
}

export default Previewer
