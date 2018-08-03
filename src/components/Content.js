import React from 'react'
import PropTypes from 'prop-types'

const Content = ({ children, ...rest }) => (
  <div {...rest} dangerouslySetInnerHTML={{ __html: children }} />
)

Content.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}

export default Content
