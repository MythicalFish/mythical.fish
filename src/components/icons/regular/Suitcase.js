import React from 'react'

const Suitcase = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM176 80h160v48H176V80zM48 432V176h80v256H48zm128 0V176h160v256H176zm288 0h-80V176h80v256z' />
  </svg>
)

export default Suitcase