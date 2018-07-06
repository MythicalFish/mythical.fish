import React from 'react'

const Attributes = () => (
  <div className="flex flex-wrap -mx-3 text-center">
    <div className="w-full md:w-1/2 lg:w-full xl:w-1/2 px-3 mb-3 sm:mb-6 md:mb-0 lg:mb-6 xl:mb-0 flex">
      <div className="bg-grey-darkest p-cozy flex-auto">
        <h2 className="mt-0 mb-6">Skills</h2>
        <div className="mb-3">
          I’m familiar with a lot of tech, but nowadays this is where I excel:
        </div>
        <ul className="list-colored mb-3">
          <li>JavaScript, Node.js, GraphQL</li>
          <li>React, Redux, Vue, SSR</li>
          <li>CSS (PostCSS, Tailwind)</li>
          <li>Ruby, Rails, SQL</li>
          <li>Bash, Vim, Git, VSCode</li>
          <li>DevOps (AWS, Google Cloud)</li>
        </ul>
        Check out my{' '}
        <a
          href="https://coggle.it/diagram/Wozs70y0TgABc5up/t/jake-broughton's-skills"
          target="_blank"
        >
          skill tree
        </a>{' '}
        if you're interested!
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-full xl:w-1/2 px-3 flex">
      <div className="bg-grey-darkest p-cozy flex-auto">
        <h2 className="mt-0 mb-6">Super powers</h2>
        <div className="mb-3">
          As well as coding skills, I have the following qualities:
        </div>
        <ul className="list-colored">
          <li>
            <u>Seriously</u> full-stack + an eye for design
          </li>
          <li>Experienced project planner & manager</li>
          <li>Always learning</li>
          <li>Solid communication & social skills</li>
          <li>Innately positive & proactive</li>
          <li>Creative thinker, problem solver</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Attributes
