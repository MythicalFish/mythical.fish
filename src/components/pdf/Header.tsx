import React from "react";

import Github from "../../assets/images/icons/github.svg";
import LinkedIn from "../../assets/images/icons/linkedin.svg";
import AtSymbol from "../../assets/images/icons/at.svg";
import Arrow from "../../assets/images/icons/angle-double-right.svg";

const Header = () => {
  return (
    <>
      <div className="mb-4">
        <div className="text-2xl">Jake Broughton</div>
        <div className="text-1xl uppercase flex items-center leading-none alt-font font-bold">
          <Arrow className="text-blue-400 text-2xl mr-1" />
          <div className="text-blue-400">Full-stack engineer</div>
        </div>
      </div>
      <div>
        <div className="contact-details alt-font">
          <div>
            <AtSymbol width={18} />
            <span>jake@mythical.fish</span>
          </div>
          <div>
            <LinkedIn width={18} />
            <a
              href="https://www.linkedin.com/in/jakebroughton/"
              target="_blank"
            >
              /in/jakebroughton
            </a>
          </div>
          <div>
            <Github width={18} />
            <a href="https://github.com/MythicalFish" target="_blank">
              /MythicalFish
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
