import React from 'react'
import Header from './Header'
import Bio from './Bio'
import Skills from '../Skills'
import SuperPowers from '../SuperPowers'
import Portfolio from './Portfolio'

class Layout extends React.Component {
  componentDidMount () {
    document.getElementsByTagName('html')[0].className = 'document'
  }
  render () {
    return (
      <div>
        <div className='page flex flex-col'>
          <div className='flex-none mb-10'>
            <Header />
          </div>
          <div className='w-full flex-none mb-12'>
            <Bio />
          </div>
          <div className='flex mb-8 -mx-4'>
            <div className='w-1/2 px-4'>
              <h3 className='mb-6'>Skills</h3>
              <Skills />
            </div>
            <div className='w-1/2 px-4'>
              <h3 className='mb-6'>Super Powers</h3>
              <SuperPowers />
            </div>
          </div>
        </div>
        <div className='page'>
          <div className='text-justify'>
            <Portfolio {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}
export default Layout
