import React from 'react'
import Header from './Header'
import Portfolio from './Portfolio'
import PageNumber from './PageNumber'
import Font from './Font'
import Content from '../Content'

class Layout extends React.Component {
  componentDidMount () {
    document.getElementsByTagName('html')[0].className = 'document'
  }
  render () {
    const { content } = this.props
    const { info: { skills, superPowers, about } } = content
    return (
      <div className='document-container'>
        <Font />
        <div className='page flex flex-col'>
          <div className='flex-none w-full p-10'><Header /></div>
          <div className='flex-none w-full px-10'>
            <div className='box text-justify'>
              <h3>Bio</h3>
              <Content>{about.html}</Content>
            </div>
          </div>
          <div className='flex-auto p-10'>
            <div className='flex -mx-4 text-center'>
              <div className='w-1/2 px-4'>
                <h3>Skills</h3>
                {skills.itemList.map((item, key) => (
                  <div className='list-item' key={key}>{item}</div>
                ))}
              </div>
              <div className='w-1/2 px-4'>
                <h3>Super Powers</h3>
                {superPowers.itemList.map((item, key) => (
                  <div className='list-item' key={key}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          <PageNumber n={1} />
        </div>
        <Portfolio {...content} />
      </div>
    )
  }
}
export default Layout
