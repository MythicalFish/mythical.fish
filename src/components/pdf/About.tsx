import React from "react";
import Content from "../Content";

import { AllContent } from "pages";

type Props = {
  content: AllContent;
};

const About: React.FC<Props> = ({ content }) => {
  const { skillsList, about } = content.info;
  return (
    <>
      <div className="px-10 mb-4">
        <div className="box" id="bio">
          <h3>Bio</h3>
          <Content>{about.html}</Content>
        </div>
      </div>
      <div className="px-10">
        <div className="box">
          <h3>Skills</h3>
          <div className="tag-cloud">
            {skillsList?.itemList?.map((item, key) => (
              <span className="tag" key={key}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
