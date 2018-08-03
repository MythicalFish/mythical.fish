import React, { Fragment } from 'react'
import Project from './Project'
import PageNumber from './PageNumber'
import _ from 'lodash'

const Portfolio = ({ projects }) => {
  console.log(_.take(projects, 2))
  return (
    <Fragment>
      <div className='page p-10'>
        <h2 className='mb-6 mt-6 text-center'>Portfolio</h2>
        {_.take(projects, 2).map(project => (
          <Project key={project.key} {...{ project }} />
        ))}
        <PageNumber n={2} />
      </div>
      {_.chunk(projects, 2).map((chunk, i) => {
        if (i === 0) return null
        return (
          <div key={i} className='page p-10'>
            {chunk.map(project => (
              <Project key={project.key} {...{ project }} />
            ))}
            <PageNumber n={i + 2} />
          </div>
        )
      })}
    </Fragment>
  )
}

export default Portfolio
