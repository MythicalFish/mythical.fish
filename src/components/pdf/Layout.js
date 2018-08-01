import React from 'react'
import Contact from './Contact'
import About from './About'
import Portfolio from './Portfolio'
import Font from './Font'
import { HTMLContent } from '../Content'

class Layout extends React.Component {
  componentDidMount () {
    document.getElementsByTagName('html')[0].className = 'document'
  }
  render () {
    const { content } = this.props
    const { info: { skills, superPowers } } = content
    return (
      <div className='document-container'>
        <Font />
        <div className='page flex flex-col'>
          <div className='flex flex-auto'>
            <div className='w-1/2 flex items-center'>
              <About {...content} />
            </div>
            <div className='w-1/2 bg-grey-lighter p-cozy flex items-center text-center'>
              <div>
                <div className='mb-20'>
                  <h3 className='mb-6'>Skills</h3>
                  <div className='mb-3'>
                    <HTMLContent>{skills.html}</HTMLContent>
                  </div>
                  <ul className='list-colored'>
                    {skills.itemList.map((item, key) => (
                      <li key={key}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className=''>
                  <h3 className='mb-6'>Super Powers</h3>
                  <div className='mb-3'>
                    <HTMLContent>{superPowers.html}</HTMLContent>
                  </div>
                  <ul className='list-colored'>
                    {superPowers.itemList.map((item, key) => (
                      <li key={key}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-none w-full'><Contact /></div>
        </div>
        <div className='text-justify py-12 px-16'>
          <Portfolio {...content} />
        </div>
      </div>
    )
  }
}
export default Layout
