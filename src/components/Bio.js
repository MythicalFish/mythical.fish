import React from 'react'
import Github from './icons/brands/Github'
import LinkedIn from './icons/brands/Linkedin'
import jake from '../assets/images/jake-broughton.jpg'

const Bio = () => (
  <div className='p-cozy self-center text-center max-w-35 text-grey-darker'>
    <div className='inline-block rounded-full overflow-hidden leading-none mb-4 relative'>
      <img src={jake} alt='Jake Broughton' className='w-32 m-0 block' />
      <div className='absolute pin shadow-custom-1 rounded-full' />
    </div>
    <div className='text-2xl mb-4'>jake@mythical.fish</div>
    <div className='-m-1'>
      <a
        className='btn m-1 bg-linkedin'
        href='https://www.linkedin.com/in/jakebroughton/'
        target='_blank'
      >
        <LinkedIn className='mr-2' />
        LinkedIn
      </a>
      <a
        className='btn m-1 bg-github'
        href='https://github.com/MythicalFish/'
        target='_blank'
      >
        <Github className='mr-2' />
        GitHub
      </a>
    </div>
    <div className='mt-10'>
      <p>
        My name is Jake Broughton; I'm a solution-finder and full-stack software
        engineer, specializing in JavaScript and Ruby.
      </p>
      I'm currently looking for the following:
      <ul className='mt-4'>
        <li>Awesome people</li>
        <li>Awesome projects</li>
        <li>Cool tech</li>
        <li>100% remote work</li>
        <li>Senior/Lead position</li>
        <li>Long-term involvement</li>
      </ul>
    </div>
  </div>
)

export default Bio
