import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Previewer from "./Previewer";
import Project from "./Project";

import { ProjectProps } from "types";

type Props = {
  projects: ProjectProps[];
};

const Portfolio: React.FC<Props> = ({ projects }) => {
  const [previewKey, setPreviewKey] = useState(null);
  const [projectID, setProjectID] = useState(null);
  const ppID = projectID || previewKey;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    if (previewKey === null) return;
    const delay = loaded ? 400 : 0;
    setTimeout(() => {
      setProjectID(previewKey);
      setLoaded(true);
    }, delay);
  }, [previewKey]);

  const showProject = setPreviewKey;
  const getNextProject = (k?: number): ProjectProps => {
    const key = k || previewKey;
    let nextKey = key + 1;
    if (nextKey + 1 > projects?.length) nextKey = 0;
    const project = projects?.[nextKey];
    if (!project) return null;
    const previews = project?.previews;
    if (!previews?.length) return getNextProject(nextKey);
    return project;
  };
  return (
    <div className="pt-6">
      <h2 className="text-center">Portfolio</h2>
      {projects?.map((project) => (
        <Project
          key={project.key}
          project={project}
          showProject={showProject}
        />
      ))}
      <Modal
        isOpen={previewKey !== null}
        loaded={loaded}
        closeFn={() => showProject(null)}
      >
        <Previewer
          project={projects?.[ppID]}
          showProject={showProject}
          nextProject={getNextProject()}
        />
      </Modal>
    </div>
  );
};

export default Portfolio;
