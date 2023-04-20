import React from "react";
import Content from "../Content";

const About = ({ content }) => {
  const { skillsList, about } = content.info;
  return (
    <>
      <div className="px-10 mb-4">
        <div className="box">
          <h3>Bio</h3>
          <Content>{about.html}</Content>
        </div>
      </div>
      <div className="px-10">
        <div className="box">
          <h3>Skills</h3>
          {skillsList?.itemList?.map((item, key) => (
            <span className="tag" key={key}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
