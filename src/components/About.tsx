import React from "react";
import Github from "../assets/images/icons/github.svg";
import LinkedIn from "../assets/images/icons/linkedin.svg";
import jake from "../assets/images/jake-broughton-2.jpg";
import Content from "./Content";

import { InfoProps } from "types";

type Props = {
  bio: InfoProps;
};

const About: React.FC<Props> = ({ bio }) => (
  <div className="p-cozy self-center text-center max-w-35 text-zinc-900">
    <div className="inline-block rounded-full overflow-hidden leading-none mb-4 relative">
      <img src={jake} alt="Jake Broughton" className="w-32 m-0 block" />
      <div className="absolute pin shadow-custom-1 rounded-full" />
    </div>
    <div className="text-2xl mb-4">jake@mythical.fish</div>
    <div className="-m-1">
      <a
        className="btn m-1 bg-linkedin"
        href="https://www.linkedin.com/in/jakebroughton/"
        target="_blank"
      >
        <LinkedIn className="mr-2 inline-block -mt-1" width={18} />
        LinkedIn
      </a>
      <a
        className="btn m-1 bg-github"
        href="https://github.com/MythicalFish/"
        target="_blank"
      >
        <Github className="mr-2 inline-block -mt-1" width={18} />
        GitHub
      </a>
    </div>
    <div className="mt-10">
      <Content>{bio?.html}</Content>
      <ul className="mt-4">
        {bio?.itemList.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default About;
