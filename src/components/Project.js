import React from "react";
import ProjectLinks from "./ProjectLinks";
import ProjectTags from "./ProjectTags";
import Content from "./Content";
import PreviewIcon from "./icons/regular/Images";

const Project = (props) => {
  const { project } = props;
  return (
    <div className="bg-slate-900 mb-4 sm:border-l-8 border-blue-400 border-solid rounded xl:p-8">
      <div className="px-cozy pt-cozy flex justify-between flex-wrap">
        <div className="self-end">
          <TitleWrapper {...props}>
            <h3 className="my-0 mr-3 inline-block">{project.title}</h3>
          </TitleWrapper>
          {!!project.date && (
            <div className="pt-2 text-zinc-500 text-sm">{project.date}</div>
          )}
        </div>
        <div className="w-full h-3 md:hidden" />
        <div>
          <ProjectTags {...props} />
        </div>
      </div>
      <Content className="px-cozy py-6 lg:text-justify">{project.html}</Content>
      <div className="px-cozy pb-cozy">
        <ProjectLinks {...props} />
      </div>
    </div>
  );
};

const TitleWrapper = ({ project, showProject, children }) => {
  const { previews, key } = project;
  if (previews && previews.length > 0) {
    return (
      <button onClick={() => showProject(key)} className="btn-wrapper">
        {children}
        <PreviewIcon />
      </button>
    );
  } else {
    return children;
  }
};

export default Project;
