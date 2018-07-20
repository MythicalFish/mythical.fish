import React from 'react'

const Sign = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M504 64H96V8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v56H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h56v408c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h96v48h-16c-17.7 0-32 14.3-32 32v176c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32h-16V96h56c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8zm-40 288H176V176h288v176zm-48-208H224V96h192v48z' />
  </svg>
)

export default Sign
