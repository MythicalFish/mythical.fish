import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../App.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mythical Fish | Jake Broughton"
      meta={[
        {
          name: 'description',
          content:
            "I'm a (seriously) full-stack software engineer; I architect &amp; build apps for the web and for mobile."
        }
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
