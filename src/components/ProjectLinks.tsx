import React from "react";
import LinkIcon from "./icons/light/Link";
import Github from "./icons/brands/Github";
import PreviewIcon from "./icons/regular/Images";
import LockIcon from "./icons/light/Lock";

import { ProjectProps } from "types";

type Props = {
  project: ProjectProps;
  showProject: (key: number) => void;
  hidePreviewLink?: boolean;
};

const ProjectLinks: React.FC<Props> = ({
  project: { links, previews, key, privateCode },
  showProject,
  hidePreviewLink,
}) => (
  <div className="tags">
    {!hidePreviewLink && previews && previews.length > 0 && (
      <Link onClick={() => showProject(key)} label="Preview" />
    )}
    {links &&
      links.length > 0 &&
      links.map((link, index) => <Link key={index} {...link} />)}
    {privateCode && (
      <span className="icon-tag icon-tag-subtle">
        <span>
          <span>
            <LockIcon />
          </span>
          <span>Code is private</span>
        </span>
      </span>
    )}
  </div>
);

export default ProjectLinks;

type LinkProps = {
  url?: string;
  label: string;
  onClick?: () => void;
};

const Link: React.FC<LinkProps> = (props) => {
  const { url, label, onClick } = props;
  return (
    <LinkWrapper url={url} onClick={onClick}>
      <span>
        <span>
          {url ? (
            url.includes("github.com") ? (
              <Github />
            ) : (
              <LinkIcon />
            )
          ) : (
            <PreviewIcon />
          )}
        </span>
        <span>{label}</span>
      </span>
    </LinkWrapper>
  );
};

type LinkWrapperProps = {
  url?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const LinkWrapper: React.FC<LinkWrapperProps> = ({
  url,
  onClick,
  children,
}) => {
  if (url) {
    return (
      <a href={url} target="_blank" className="icon-tag">
        {children}
      </a>
    );
  } else {
    return (
      <button className="icon-tag" onClick={onClick}>
        {children}
      </button>
    );
  }
};
