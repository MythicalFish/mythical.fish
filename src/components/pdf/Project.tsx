import React from "react";
import ProjectLinks from "./ProjectLinks";
import ProjectTags from "../ProjectTags";
import { ProjectProps } from "types";

type Props = {
  project: ProjectProps;
};

const Project: React.FC<Props> = (props) => {
  const { project } = props;
  return (
    <div className="box mb-4">
      <div className="flex justify-between flex-wrap">
        <div className="">
          <h3 className="my-0 mr-3 inline-block">{project.title}</h3>
          {!!project.date && (
            <div className="pt-1 text-zinc-500 text-sm">{project.date}</div>
          )}
        </div>
        <div className="alt-font">
          <ProjectTags tags={project.tags} />
        </div>
      </div>
      <div
        className="py-6"
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
      <ProjectLinks {...props} />
    </div>
  );
};

export default Project;
