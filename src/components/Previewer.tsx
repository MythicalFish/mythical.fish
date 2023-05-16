import React, { Fragment, useCallback, useEffect, useState } from "react";

import ProjectLinks from "./ProjectLinks";
import ProjectTags from "./ProjectTags";
import Content from "./Content";

import ChevronLeft from "../assets/images/icons/chevron-left.svg";
import ChevronRight from "../assets/images/icons/chevron-right.svg";

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
    <div className="previewer">
      <div className="previewer-img">
        {total > 1 && (
          <>
            <button className="nav-left" onClick={goLeft}>
              <ChevronLeft width={18} />
            </button>
            <button className="nav-right" onClick={goRight}>
              <ChevronRight width={18} />
            </button>
          </>
        )}
        <img src={current.image} className="block m-0" />
      </div>
      <div className="previewer-body">
        <div className="previewer-panel">
          <div className="mb-6">
            <h3 className="mb-2">{project.title}</h3>
            <ProjectTags tags={project.tags} />
            <div className="mt-6 mb-2 text-sm text-zinc-400">
              <span className="mr-1">{current.label}</span>
              <span className="text-zinc-400">{`(Image ${currentCount} of ${total})`}</span>
            </div>
            {!!current.description && (
              <Content className="text-xs mb-6">{current.description}</Content>
            )}
            <ProjectLinks
              project={project}
              showProject={showProject}
              hidePreviewLink
            />
          </div>
          {nextProject && (
            <div className="pt-6 text-right">
              <button
                className="btn btn-sm"
                onClick={() => showProject(nextProject.key)}
              >{`Next project: ${nextProject.title}`}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Previewer;
