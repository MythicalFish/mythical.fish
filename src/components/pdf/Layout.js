import React from 'react'
import Contact from './Contact'
import About from './About'
import Skills from '../Skills'
import SuperPowers from '../SuperPowers'
import Portfolio from './Portfolio'

class Layout extends React.Component {
  componentDidMount () {
    document.getElementsByTagName('html')[0].className = 'document'
  }
  render () {
    return (
      <div className='document-container'>
        <div className='page flex flex-col'>
          <div className='flex flex-auto'>
            <div className='w-1/2 flex items-center'>
              <About />
            </div>
            <div className='w-1/2 bg-grey-lighter p-cozy flex items-center text-center'>
              <div>
                <div className='mb-20'>
                  <h3 className='mb-6'>Skills</h3>
                  <Skills />
                </div>
                <div className=''>
                  <h3 className='mb-6'>Super Powers</h3>
                  <SuperPowers />
                </div>
              </div>
            </div>
          </div>
          <div className='flex-none w-full'><Contact /></div>
        </div>
        <div className='text-justify py-12 px-16'>
          <Portfolio {...this.props} />
        </div>
      </div>
    )
  }
}
export default Layout
