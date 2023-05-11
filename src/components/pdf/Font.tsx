import React, { Fragment } from 'react'

/* This is a bit unconventional, I know. The reason I'm doing it this way is
that I only want this font imported when this component is rendered. This is
just for the PDF page; the server which produces the PDF from HTML doesn't have
nice fonts installed. */

const Font = () => {
  return (
    <Fragment>
      <style>
        {`@font-face {
          font-family: 'Avenir Next';
          src: url('/assets/fonts/AvenirNext/UltraLight.eot');
          src: url('/assets/fonts/AvenirNext/UltraLight.eot?#iefix')
              format('embedded-opentype'),
            url('/assets/fonts/AvenirNext/UltraLight.woff') format('woff');
          font-weight: 300;
          font-style: normal;
        }
        @font-face {
          font-family: 'Avenir Next';
          src: url('/assets/fonts/AvenirNext/Regular.eot');
          src: url('/assets/fonts/AvenirNext/Regular.eot?#iefix')
              format('embedded-opentype'),
            url('/assets/fonts/AvenirNext/Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Avenir Next';
          src: url('/assets/fonts/AvenirNext/DemiBold.eot');
          src: url('/assets/fonts/AvenirNext/DemiBold.eot?#iefix')
              format('embedded-opentype'),
            url('/assets/fonts/AvenirNext/DemiBold.woff') format('woff');
          font-weight: 600;
          font-style: normal;
        }
        @font-face {
          font-family: 'Avenir Next';
          src: url('/assets/fonts/AvenirNext/Bold.eot');
          src: url('/assets/fonts/AvenirNext/Bold.eot?#iefix')
              format('embedded-opentype'),
            url('/assets/fonts/AvenirNext/Bold.woff') format('woff');
          font-weight: 700;
          font-style: normal;
      }`}
      </style>
      <link
        href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700'
        rel='stylesheet'
      />

    </Fragment>
  )
}

export default Font
