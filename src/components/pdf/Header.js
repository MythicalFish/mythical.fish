import React from 'react'
import Envelope from '../icons/solid/Envelope'
import Github from '../icons/brands/Github'
import Linkedin from '../icons/brands/Linkedin'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='doc-title'>
        <h2 className='uppercase mb-2'>Jake Broughton</h2>
        <div className='uppercase font-bold text-grey-dark text-lg mb-2'>
          Full-stack software engineer
        </div>
        <div>
          Ruby, Rails, JS, React, React Native, Vue
        </div>
      </div>
      <div className='contact-details'>
        <div><span>jake@mythical.fish</span><Envelope /></div>
        <div>
          <a href='https://www.linkedin.com/in/jakebroughton/' target='_blank'>
            /in/jakebroughton
          </a>
          <Linkedin />
        </div>
        <div>
          <a href='https://github.com/MythicalFish' target='_blank'>
            /MythicalFish
          </a>
          <Github />
        </div>
      </div>
    </div>
  )
}

export default Header
