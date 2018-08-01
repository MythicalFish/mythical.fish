import React from 'react'
import Project from './Project'

const Portfolio = ({ projects }) => (
  <div>
    <h2 className='mb-6'>Portfolio</h2>
    {projects.map(project => <Project key={project.key} {...{ project }} />)}
  </div>
)

export default Portfolio
