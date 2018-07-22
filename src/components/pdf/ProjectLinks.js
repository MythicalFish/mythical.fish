import React from 'react'
import LinkIcon from '../icons/regular/Link'
import LockIcon from '../icons/regular/Lock'

const ProjectLinks = props => {
  const { project: { links, privateCode } } = props
  return (
    <div className='-m-2'>
      {links &&
        links.length > 0 &&
        links.map((link, index) => <Link key={index} {...props} {...link} />)}
      {privateCode &&
        <span className='project-link'>
          <LockIcon className='text-xs mr-2' />
          <span className='text-grey'>
            Code for this project is private
          </span>
        </span>}
    </div>
  )
}

export default ProjectLinks

const Link = props => {
  const { url } = props
  return (
    <a href={url} target='_blank' className='project-link'>
      <LinkIcon className='text-xs mr-2' />
      {url.split('https://')[1]}
    </a>
  )
}
