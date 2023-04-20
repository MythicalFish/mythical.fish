import React, { Fragment } from "react";
import Project from "./Project";
import PageNumber from "./PageNumber";
import _ from "lodash";

const Portfolio = ({ content: { projects } }) => {
  return (
    <>
      {_.chunk(projects, 2).map((chunk, i) => {
        return (
          <>
            <div key={i} className="page p-10">
              {i === 0 && <h2 className="mb-6 mt-6 text-center">Portfolio</h2>}
              {chunk.map((project) => (
                <Project key={project.key} {...{ project }} />
              ))}
              <PageNumber n={i + 2} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Portfolio;
