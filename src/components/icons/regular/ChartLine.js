import React from 'react'

const ChartLine = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M500 400c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v324h452zM468 96H332c-10.7 0-16 12.9-8.5 20.5l52 52L288 256l-64-64L79 334.1l34 33.9 111-110.1 64 62.1 120.8-118.2 50.7 50.7c7.6 7.6 20.5 2.2 20.5-8.5V108c0-6.6-5.4-12-12-12z' />
  </svg>
)

export default ChartLine
