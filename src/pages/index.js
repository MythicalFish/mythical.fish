import React from 'react'

const pad = 'p-3 sm:p-8 md:p-12 lg:p-16'

const IndexPage = () => (
  <div className="flex flex-wrap min-h-screen">
    <div className="w-full lg:w-1/3 flex justify-center">
      <div className={`${pad} self-center`}>
        jake@mythical.fish
        <div>
          My name is Jake Broughton; I'm a solution-finder and full-stack
          software engineer, specializing in JS, React, Vue, and Rails. I'm
          currently looking for the following:
        </div>
      </div>
    </div>
    <div className={`w-full lg:w-2/3 bg-black ${pad}`}>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3">
          <div className={`bg-grey-darkest ${pad}`}>
            <h3 className="text-white">Skills</h3>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <div className={`bg-grey-darkest ${pad}`}>Power</div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
