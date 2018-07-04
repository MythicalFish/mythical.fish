import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../App.css'

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="Mythical Fish"
      meta={[
        {
          name: 'description',
          content:
            "I'm a (seriously) full-stack software engineer; I architect &amp; build apps for the web and for mobile."
        }
      ]}
    />
    <div className="">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
