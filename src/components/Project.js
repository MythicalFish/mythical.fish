import React from 'react'
import { tagURLs } from '../constants'

const Project = ({ title, tags, html, links }) => {
  return (
    <div className="bg-grey-darkest mb-4 border-0 border-l-8 border-blue border-solid">
      <div className="px-12 pt-12 flex justify-between">
        <h4 className="m-0 self-end">{title}</h4>
        <div className="tags">
          {tags &&
            tags.length > 0 &&
            tags.map((tagName, index) => <Tag key={index} name={tagName} />)}
        </div>
      </div>
      <div className="px-12 py-6" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="project-links px-12 pb-12">
        {links &&
          links.length > 0 &&
          links.map((link, index) => <Link key={index} {...link} />)}
      </div>
    </div>
  )
}

const Tag = ({ name }) => {
  const url = tagURLs[name]
  if (url) {
    return (
      <a href={url} target="_blank" className="tag">
        {name}
      </a>
    )
  } else {
    return <div className="tag">{tagName}</div>
  }
}

const Link = ({ label, url }) => {
  return (
    <a href={url} target="_blank" className="project-link">
      <span>
        <span>
          <i className="fas fa-link" />
        </span>
        <span>{label}</span>
      </span>
    </a>
  )
}

export default Project
