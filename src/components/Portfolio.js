import React from "react";
import Modal from "./Modal";
import Previewer from "./Previewer";
import Project from "./Project";

class Portfolio extends React.Component {
  state = { previewKey: null };
  showProject = (key) => this.setState({ previewKey: key });
  nextProject = () => {
    const {
      props: { projects },
      state,
    } = this;
    let nextKey = state.previewKey + 1;
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
  render() {
    const {
      props: { projects },
      showProject,
    } = this;
    const { previewKey } = this.state;
    return (
      <div className="pt-6">
        <h2 className="text-center">Portfolio</h2>
        {projects?.map((project) => (
          <Project key={project.key} {...{ project, showProject }} />
        ))}
        <Modal
          isOpen={previewKey !== null}
          closeFunc={() => this.showProject(null)}
        >
          <Previewer
            project={projects?.[previewKey]}
            showProject={showProject}
            nextProject={this.nextProject()}
          />
        </Modal>
      </div>
    );
  }
}

export default Portfolio;
