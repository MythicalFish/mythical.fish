import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ children, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
)

const Content = ({ children, className }) => (
  <div className={className}>{children}</div>
)

Content.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}

HTMLContent.propTypes = Content.propTypes

export default Content
