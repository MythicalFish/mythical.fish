import React, { Fragment } from "react";
import { tagURLs } from "../constants";

type Props = {
  tags: string[];
};

const Tag: React.FC<{ name: string }> = ({ name }) => {
  const url = tagURLs[name];
  if (url) {
    return (
      <a href={url} target="_blank" className="tag tag-dark">
        {name}
      </a>
    );
  } else {
    return <div className="tag">{name}</div>;
  }
};
const ProjectTags: React.FC<Props> = ({ tags }) => (
  <Fragment>
    {tags?.length > 0 && (
      <div className="tags">
        {tags.map((tagName, index) => (
          <Tag key={index} name={tagName} />
        ))}
      </div>
    )}
  </Fragment>
);

export default ProjectTags;
