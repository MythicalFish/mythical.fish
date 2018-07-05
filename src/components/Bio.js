import React from 'react'

const Bio = () => (
  <div className="p-cozy self-center text-center max-w-35 text-grey-darker">
    <div className="text-2xl mb-3">jake@mythical.fish</div>
    <div className="-mx-1 mb-12">
      <a
        className="btn mx-1 bg-linkedin"
        href="https://www.linkedin.com/in/jakebroughton/"
        target="_blank"
      >
        <i className="fab fa-linkedin mr-2" />
        LinkedIn
      </a>
      <a
        className="btn mx-1 bg-github"
        href="https://github.com/MythicalFish/"
        target="_blank"
      >
        <i className="fab fa-github mr-2" />
        GitHub
      </a>
    </div>
    <div>
      My name is Jake Broughton; I'm a solution-finder and full-stack software
      engineer, specializing in JS, React, Vue, and Rails. I'm currently looking
      for the following:
      <ul className="mt-4">
        <li>Long-term partnerships with awesome people.</li>
        <li>
          Involvement in a cool project, preferably doing frontend or full-stack
          work.
        </li>
        <li>
          Remote work - a change of environment once in a while is invaluable to
          me.
        </li>
      </ul>
    </div>
  </div>
)

export default Bio
