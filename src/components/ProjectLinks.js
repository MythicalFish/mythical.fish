import React, { Fragment } from 'react'

const ProjectLinks = ({ project: { links } }) => (
  <Fragment>
    {links &&
      links.length > 0 && (
        <div className="tags px-cozy pb-cozy">
          {links.map((link, index) => <Link key={index} {...link} />)}
        </div>
      )}
  </Fragment>
)

export default ProjectLinks

const Link = ({ label, url }) => {
  let icon = 'fas fa-link'
  if (url.includes('github.com')) icon = 'fab fa-github'
  return (
    <a href={url} target="_blank" className="icon-tag">
      <span>
        <span>
          <i className={icon} />
        </span>
        <span>{label}</span>
      </span>
    </a>
  )
}
