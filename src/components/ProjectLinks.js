import React, { Fragment } from 'react'
import LinkIcon from './icons/light/Link'
import Github from './icons/brands/Github'

const ProjectLinks = ({ project: { links } }) => (
  <Fragment>
    {links &&
      links.length > 0 && (
      <div className='tags '>
        {links.map((link, index) => <Link key={index} {...link} />)}
      </div>
    )}
  </Fragment>
)

export default ProjectLinks

const Link = ({ label, url }) => (
  <a href={url} target='_blank' className='icon-tag'>
    <span>
      <span>{url.includes('github.com') ? <Github /> : <LinkIcon />}</span>
      <span>{label}</span>
    </span>
  </a>
)
