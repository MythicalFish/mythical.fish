import React from 'react'

const Chalkboard = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 640 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M632 448h-24V64c0-17.67-14.33-32-32-32H64c-17.67 0-32 14.33-32 32v384H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h624c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-344 0v-64h192v64H288zm224 0v-64c0-17.67-14.33-32-32-32H288c-17.67 0-32 14.33-32 32v64H64V64h512v384h-64z' />
  </svg>
)

export default Chalkboard
