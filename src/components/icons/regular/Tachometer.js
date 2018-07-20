import React from 'react'

const Tachometer = props => (
  <svg
    fill='currentColor'
    viewBox='0 0 576 512'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M288 32.012C128.759 32.012 0 161.104 0 320c0 33.683 5.785 66.012 16.414 96.054C29.977 454.389 66.251 480 106.915 480h362.17c40.664 0 76.938-25.611 90.501-63.946C570.215 386.012 576 353.683 576 320c0-158.896-128.759-287.988-288-287.988zm226.335 368.031C507.572 419.158 489.387 432 469.085 432h-362.17c-20.302 0-38.487-12.842-45.25-31.957C52.598 374.414 48 347.484 48 320 48 187.616 155.177 80.012 288 80.012c132.827 0 240 107.602 240 239.988 0 27.484-4.598 54.414-13.665 80.043zM374.668 175.884l-44.515 127.98C343.538 315.595 352 332.804 352 352c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-34.281 26.953-62.263 60.823-63.92l44.51-127.965c4.354-12.52 18.031-19.139 30.553-14.784 12.517 4.356 19.136 18.034 14.782 30.553z' />
  </svg>
)

export default Tachometer