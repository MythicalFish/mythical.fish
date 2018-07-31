import React from 'react'
import About from './About'
import Attributes from './Attributes'
import Portfolio from './Portfolio'

const Layout = props => {
  return (
    <div className='flex flex-wrap lg:h-screen lg:overflow-hidden'>
      <div className='w-full lg:w-2/5 flex justify-center lg:overflow-y-scroll'>
        <About />
      </div>
      <div className='dark-theme w-full lg:w-3/5 lg:overflow-y-scroll'>
        <div className='bg-mirage'>
          <div className='max-w-2xl p-3 sm:p-6 lg:p-10 xl:p-16'>
            <Attributes />
          </div>
        </div>
        <div className='p-3 sm:p-6 lg:p-10 xl:p-16'>
          <Portfolio {...props} />
        </div>
      </div>
    </div>
  )
}

export default Layout
