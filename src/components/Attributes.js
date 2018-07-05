import React from 'react'

const Attributes = () => (
  <div className="flex flex-wrap -mx-3">
    <div className="w-full md:w-1/2 px-3">
      <div className="bg-grey-darkest p-cozy">
        <h3 className="mt-0 mb-6">Skills</h3>
        <div className="mb-3">
          I’m familiar with many different languages & frameworks, but nowadays
          these areas are where I excel:
        </div>
        <ul className="list-colored">
          <li>Ruby on Rails</li>
          <li>Javascript (ES.Next)</li>
          <li>React, Redux, Immutable.js</li>
          <li>CSS (Sass, PostCSS, CSS Modules)</li>
          <li>Sketch, Photoshop, Illustrator, Premiere</li>
          <li>DevOps (AWS, Google Cloud)</li>
        </ul>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <div className="bg-grey-darkest p-cozy">
        <h3 className="mt-0 mb-6">Super powers</h3>
        <div className="mb-3">
          As well as coding skills, I have the following qualities:
        </div>
        <ul className="list-colored">
          <li>Seriously full-stack + an eye for design</li>
          <li>Adaptable, always keen to learn new things</li>
          <li>Solid communication & social skills</li>
          <li>Innately positive & proactive</li>
          <li>Creative thinker, problem solver</li>
          <li>Experienced project planner & manager</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Attributes
