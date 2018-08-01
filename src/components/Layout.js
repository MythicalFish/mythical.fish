import React from 'react'
import About from './About'
import Attributes from './Attributes'
import Portfolio from './Portfolio'

const Layout = ({ content }) => {
  return (
    <div className='flex flex-wrap lg:h-screen lg:overflow-hidden'>
      <div className='w-full lg:w-2/5 flex justify-center lg:overflow-y-scroll'>
        <About {...content} />
      </div>
      <div className='dark-theme w-full lg:w-3/5 lg:overflow-y-scroll'>
        <div className='bg-mirage'>
          <div className='max-w-2xl p-3 sm:p-6 lg:p-10 xl:p-16'>
            <Attributes {...content} />
          </div>
        </div>
        <div className='p-3 sm:p-6 lg:p-10 xl:p-16'>
          <Portfolio {...content} />
        </div>
      </div>
    </div>
  )
}

export default Layout
