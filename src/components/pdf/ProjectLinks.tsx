import React from "react";

import LinkIcon from "../../assets/images/icons/link.svg";
import LockIcon from "../../assets/images/icons/lock.svg";
import Github from "../../assets/images/icons/github.svg";

import { ProjectProps } from "types";

type Props = {
  project: ProjectProps;
};

const Link: React.FC<{ url: string; label: string }> = (props) => {
  const { url, label } = props;
  return (
    <a href={url} target="_blank" className="project-link">
      {url.includes("github.com") ? (
        <Github
          width={15}
          className="mr-2 text-rose-500"
          style={{ position: "relative", top: "-1px" }}
        />
      ) : (
        <LinkIcon
          width={16}
          className="mr-2 text-rose-500"
          style={{ position: "relative", top: "-1px" }}
        />
      )}
      {label}
    </a>
  );
};

const ProjectLinks: React.FC<Props> = (props) => {
  const {
    project: { links, privateCode },
  } = props;

  return (
    <div className="-m-2">
      {links &&
        links.length > 0 &&
        links.map((link, index) => <Link key={index} {...props} {...link} />)}
      {privateCode && (
        <span className="project-link text-zinc-600">
          <LockIcon
            className="mr-2 opacity-90"
            width={16}
            style={{ position: "relative", top: "-2px" }}
          />
          <span>Code for this project is private</span>
        </span>
      )}
    </div>
  );
};

export default ProjectLinks;
