import React from 'react'
import { tagURLs } from '../constants'

const Project = ({ project, previewProject }) => {
  const { key, title, tags, html, links } = project
  return (
    <div className="bg-grey-darkest mb-4 border-0 border-l-8 border-blue border-solid">
      <div className="px-cozy pt-cozy flex justify-between flex-wrap">
        <div className="self-end">
          <h3 className="my-0 mr-3 inline-block">{title}</h3>
        </div>
        <div className="w-full h-3 md:hidden" />
        <div className="tags">
          {tags &&
            tags.length > 0 &&
            tags.map((tagName, index) => <Tag key={index} name={tagName} />)}
        </div>
      </div>
      <div
        className="px-cozy py-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="tags px-cozy pb-cozy">
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
    <a href={url} target="_blank" className="icon-tag">
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
