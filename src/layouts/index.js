import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../assets/styles/compiled.css'
import opengraph from '../assets/images/opengraph.png'

const title = 'Mythical Fish | Jake Broughton'
const description =
  "I'm a (seriously) full-stack software engineer; I architect &amp; build apps for the web and for mobile."

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          name: 'og:url',
          content: 'https://mythical.fish'
        },
        {
          name: 'og:site_name',
          content: title
        },
        {
          name: 'og:title',
          content: title
        },
        {
          name: 'og:description',
          content: description
        },
        {
          name: 'og:image',
          content: opengraph
        }
      ]}
    />
    {children()}
    <div id='modal' />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
