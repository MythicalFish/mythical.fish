import React from "react";
import Content from "./Content";

import { InfoProps } from "types";

type Props = {
  skills: InfoProps;
  superPowers: InfoProps;
};

const Attributes: React.FC<Props> = ({ skills, superPowers }) => (
  <div className="flex flex-wrap -mx-3 text-center">
    <div className="w-full md:w-1/2 lg:w-full xl:w-1/2 px-3 mb-3 sm:mb-6 md:mb-0 lg:mb-6 xl:mb-0 flex">
      <div className="bg-slate-800 p-cozy flex-auto">
        <h2>Skills</h2>
        <div className="mb-3">
          <Content>{skills?.html}</Content>
        </div>
        <ul className="list-colored mb-3">
          {skills?.itemList.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
        Check out my{" "}
        <a
          href="https://coggle.it/diagram/Wozs70y0TgABc5up/t/jake-broughton's-skills"
          target="_blank"
        >
          skill tree
        </a>{" "}
        if you're interested!
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-full xl:w-1/2 px-3 flex">
      <div className="bg-slate-800 p-cozy flex-auto">
        <h2>Super powers</h2>
        <div className="mb-3">
          <Content>{superPowers?.html}</Content>
        </div>
        <ul className="list-colored">
          {superPowers?.itemList.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Attributes;
