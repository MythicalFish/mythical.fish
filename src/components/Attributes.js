import React from 'react'
import Skills from './Skills'
import SuperPowers from './SuperPowers'

const Attributes = () => (
  <div className='flex flex-wrap -mx-3 text-center'>
    <div className='w-full md:w-1/2 lg:w-full xl:w-1/2 px-3 mb-3 sm:mb-6 md:mb-0 lg:mb-6 xl:mb-0 flex'>
      <div className='bg-grey-darkest p-cozy flex-auto'>
        <h2 className='mb-6'>Skills</h2>
        <Skills />
        Check out my{' '}
        <a
          href="https://coggle.it/diagram/Wozs70y0TgABc5up/t/jake-broughton's-skills"
          target='_blank'
        >
          skill tree
        </a>{' '}
        if you're interested!
      </div>
    </div>
    <div className='w-full md:w-1/2 lg:w-full xl:w-1/2 px-3 flex'>
      <div className='bg-grey-darkest p-cozy flex-auto'>
        <h2 className='mb-6'>Super powers</h2>
        <SuperPowers />
      </div>
    </div>
  </div>
)

export default Attributes
