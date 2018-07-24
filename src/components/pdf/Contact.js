import React from 'react'
import Envelope from '../icons/solid/Envelope'
import Github from '../icons/brands/Github'
import Linkedin from '../icons/brands/Linkedin'

const Contact = () => {
  return (
    <div className='contact-footer flex items-center'>
      <div className='w-1/2 text-right text-3xl pr-4 text-grey'>
        Get in touch:
      </div>
      <div className='w-1/2 pl-4'>
        <div className='contact-details'>
          <div><Envelope /><span>jake@mythical.fish</span></div>
          <div>
            <Linkedin />
            <a
              href='https://www.linkedin.com/in/jakebroughton/'
              target='_blank'
            >
              /in/jakebroughton
            </a>
          </div>
          <div>
            <Github />
            <a href='https://github.com/MythicalFish' target='_blank'>
              /MythicalFish
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
