import React, { useState } from "react";
import Modal from "./Modal";
import Previewer from "./Previewer";
import Project from "./Project";

import { ProjectProps } from "types";

type Props = {
  projects: ProjectProps[];
};

const Portfolio: React.FC<Props> = ({ projects }) => {
  const [previewKey, setPreviewKey] = useState(null);
  const showProject = setPreviewKey;
  const getNextProject = () => {
    let nextKey = previewKey + 1;
    if (nextKey + 1 > projects?.length) nextKey = 0;
    const project = projects?.[nextKey];
    if (!project) return null;
    const { previews } = project;
    if (previews?.length > 0) {
      return project;
    } else {
      return null;
    }
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
      <Modal isOpen={previewKey !== null} closeFunc={() => showProject(null)}>
        <Previewer
          project={projects?.[previewKey]}
          showProject={showProject}
          nextProject={getNextProject()}
        />
      </Modal>
    </div>
  );
};

export default Portfolio;
