import React, { Fragment } from 'react'

const Skills = () => {
  return (
    <Fragment>
      <div className='mb-3'>
        I’m familiar with a lot of tech, but nowadays this is where I excel:
      </div>
      <ul className='list-colored mb-3'>
        <li>JavaScript, Node.js, GraphQL</li>
        <li>React, Redux, Vue, SSR</li>
        <li>CSS (PostCSS, Tailwind)</li>
        <li>Ruby, Rails, SQL</li>
        <li>Bash, Vim, Git, VSCode</li>
        <li>DevOps (AWS, Google Cloud)</li>
      </ul>
    </Fragment>
  )
}

export default Skills
