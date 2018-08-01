import React from 'react'
import jake from '../../assets/images/jake-broughton.jpg'
import { HTMLContent } from '../Content'

const About = ({ info: { bio } }) => (
  <div className='p-cozy self-center text-center max-w-35 text-grey-darker'>
    <div className='inline-block rounded-full overflow-hidden leading-none mb-4 relative'>
      <img src={jake} alt='Jake Broughton' className='w-32 h-32 m-0 block' />
      <div className='absolute pin shadow-custom-1 rounded-full' />
    </div>
    <div className='text-2xl mb-4'>Jake Broughton</div>
    <div className='inline-block bg-blue px-4 py-3 text-white text-bold uppercase'>
      Full-stack software engineer
    </div>
    <div className='mt-10'>
      <HTMLContent>{bio.html}</HTMLContent>
      <ul className='mt-4'>
        {bio.itemList.map((item, key) => <li key={key}>{item}</li>)}
      </ul>
    </div>
  </div>
)

export default About
