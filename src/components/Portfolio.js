import React from 'react'
import Project from '../components/Project'

const Portfolio = ({ projects }) => {
  return (
    <div>
      <h2 className="mt-0 mb-6">Portfolio</h2>
      {projects.map((attributes, index) => (
        <Project key={index} {...attributes} />
      ))}
    </div>
  )
}

export default Portfolio
