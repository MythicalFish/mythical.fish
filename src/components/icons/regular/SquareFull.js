import React from 'react'

const SquareFull = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M0 0v512h512V0H0zm464 464H48V48h416v416z' />
  </svg>
)

export default SquareFull
