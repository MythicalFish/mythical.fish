import React from "react";
import Envelope from "../icons/regular/At";
import Github from "../icons/brands/Github";
import Linkedin from "../icons/brands/Linkedin";
import Arrow from "../icons/regular/AngleDoubleRight";
import jake from "../../assets/images/jake-broughton.jpg";

const Header = () => {
  return (
    <div className="flex items-center">
      <div className="flex-auto flex items-center">
        <div className="rounded-full overflow-hidden leading-none mr-6 relative">
          <img
            src={jake}
            alt="Jake Broughton"
            className="w-24 h-24 m-0 block"
          />
          <div className="absolute pin shadow-custom-1 rounded-full" />
        </div>
        <div>
          <div className="text-2xl">Jake Broughton</div>
          <div className="text-1xl uppercase flex items-center leading-none alt-font font-bold">
            <Arrow className="text-blue-400 text-2xl mr-1" />
            <div className="text-blue-400">Full-stack engineer</div>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <div className="contact-details alt-font">
          <div>
            <Envelope />
            <span>jake@mythical.fish</span>
          </div>
          <div>
            <Linkedin />
            <a
              href="https://www.linkedin.com/in/jakebroughton/"
              target="_blank"
            >
              /in/jakebroughton
            </a>
          </div>
          <div>
            <Github />
            <a href="https://github.com/MythicalFish" target="_blank">
              /MythicalFish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
