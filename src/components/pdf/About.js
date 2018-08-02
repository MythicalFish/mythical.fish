import React from 'react'
import jake from '../../assets/images/jake-broughton.jpg'
import { HTMLContent } from '../Content'

const About = ({ info: { about } }) => (
  <div className=''>
    <HTMLContent>{about.html}</HTMLContent>
  </div>
)

export default About
