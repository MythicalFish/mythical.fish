import React from 'react'

const Briefcase = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M464 96H352V80c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v16H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.51-21.49-48-48-48zM208 80h96v16h-96V80zM48 150a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v106H48V150zm416 276a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V304h144v36c0 6.627 5.373 12 12 12h104c6.627 0 12-5.373 12-12v-36h144v122z' />
  </svg>
)

export default Briefcase