import React from "react";
import { chunk } from "lodash";

import Project from "./Project";
import PageNumber from "./PageNumber";

import { AllContent } from "pages";

type Props = {
  content: AllContent;
};

const Portfolio: React.FC<Props> = ({ content: { projects } }) => {
  return (
    <>
      {chunk(projects, 2).map((chunk, i) => {
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
