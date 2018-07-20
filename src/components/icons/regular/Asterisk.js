import React from 'react'

const Asterisk = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M479.31 357.216L303.999 256l175.31-101.215c5.74-3.314 7.706-10.653 4.392-16.392l-12-20.785c-3.314-5.74-10.653-7.706-16.392-4.392L280 214.431V12c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v202.431L56.69 113.215c-5.74-3.314-13.079-1.347-16.392 4.392l-12 20.785c-3.314 5.74-1.347 13.079 4.392 16.392L208 256 32.69 357.216c-5.74 3.314-7.706 10.653-4.392 16.392l12 20.784c3.314 5.739 10.653 7.706 16.392 4.392L232 297.569V500c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V297.569l175.31 101.215c5.74 3.314 13.078 1.347 16.392-4.392l12-20.784c3.314-5.739 1.347-13.079-4.392-16.392z' />
  </svg>
)

export default Asterisk