import React from 'react'

const SquareFull = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M480 32v448H32V32h448m32-32H0v512h512V0z' />
  </svg>
)

export default SquareFull
