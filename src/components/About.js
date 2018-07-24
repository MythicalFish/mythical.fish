import React from 'react'
import Github from './icons/brands/Github'
import LinkedIn from './icons/brands/Linkedin'
import jake from '../assets/images/jake-broughton.jpg'
import Bio from './Bio'

const About = () => (
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
      <Bio />
    </div>
  </div>
)

export default About
