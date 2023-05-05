import React, { Fragment, useCallback, useEffect, useState } from "react";

import ProjectLinks from "./ProjectLinks";
import ProjectTags from "./ProjectTags";
import Content from "./Content";

import ChevronLeft from "../assets/images/icons/chevron-left.png";
import ChevronRight from "../assets/images/icons/chevron-right.png";

import { ProjectProps } from "types";

type Props = {
  project: ProjectProps;
  nextProject: ProjectProps;
  showProject: (key: number) => void;
};

const Previewer: React.FC<Props> = ({ project, showProject, nextProject }) => {
  const [currentKey, setCurrentKey] = useState(0);

  const handleKeyPress = useCallback(
    ({ keyCode }: { keyCode: number }) => {
      const { previews } = project;
      const isNavigable = previews?.length > 1;
      if (!isNavigable) return;
      const total = previews.length;
      if (keyCode === 37) {
        // Left
        let prevKey = currentKey - 1;
        if (prevKey < 0) prevKey = total - 1;
        setCurrentKey(prevKey);
      } else if (keyCode === 39) {
        // Right
        let nextKey = currentKey + 1;
        if (nextKey + 1 > total) nextKey = 0;
        setCurrentKey(nextKey);
      }
    },
    [project.key, currentKey]
  );

  useEffect(function listenToKeyPress() {
    document.addEventListener("keydown", handleKeyPress, false);
    return function cleanUp() {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, []);

  const goLeft = () => handleKeyPress({ keyCode: 37 });
  const goRight = () => handleKeyPress({ keyCode: 39 });

  const current = project.previews[currentKey];
  const currentCount = currentKey + 1;
  const total = project.previews.length;
  return (
    <div className="previewer bg-white text-zinc-900">
      <div className="image-nav">
        {total > 1 && (
          <Fragment>
            <button className="nav-left" onClick={goLeft}>
              <img src={ChevronLeft} />
            </button>
            <button className="nav-right" onClick={goRight}>
              <img src={ChevronRight} />
            </button>
          </Fragment>
        )}
        <img src={current.image} className="block m-0" />
      </div>
      <div className="flex-auto flex flex-col justify-between">
        <div className="px-4 py-5">
          <div className="mb-5">
            <h3 className="mb-2 text-zinc-800">{project.title}</h3>
            <ProjectTags tags={project.tags} />
          </div>
          <div>
            <div className="mb-3">
              <h4 className="text-zinc-800 m-0 inline-block mr-2">
                {current.label}
              </h4>
              {total > 1 && (
                <span className="text-xs text-zinc-600">{`Image ${currentCount} of ${total}`}</span>
              )}
            </div>
            <Content className="text-sm mb-3">{current.description}</Content>
            <ProjectLinks
              project={project}
              showProject={showProject}
              hidePreviewLink
            />
          </div>
        </div>
        {nextProject && (
          <div className="px-4 py-5 text-right">
            <button
              className="btn btn-white btn-sm"
              onClick={() => showProject(nextProject.key)}
            >{`Next project: ${nextProject.title}`}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Previewer;
