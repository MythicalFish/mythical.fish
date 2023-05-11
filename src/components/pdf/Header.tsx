import React from "react";

import Github from "../../assets/images/icons/github.svg";
import LinkedIn from "../../assets/images/icons/linkedin.svg";
import AtSymbol from "../../assets/images/icons/at.svg";
import Arrow from "../../assets/images/icons/angle-double-right.svg";

const Header = () => {
  return (
    <>
      <div className="mb-4">
        <div className="text-4xl">Jake Broughton</div>
        <div className="text-1xl flex items-center leading-none alt-font font-bold">
          <Arrow className="text-rose-300 text-2xl mr-1" />
          <div className="text-rose-500">FULL-STACK ENGINEER (11+ yrs)</div>
        </div>
      </div>
      <div>
        <div className="contact-details alt-font">
          <div>
            <AtSymbol width={17} className="text-slate-400" />
            <span>jake@mythical.fish</span>
          </div>
          <div>
            <LinkedIn width={16} className="text-slate-400" />
            <a
              href="https://www.linkedin.com/in/jakebroughton/"
              target="_blank"
            >
              /in/jakebroughton
            </a>
          </div>
          <div>
            <Github width={18} className="text-slate-400" />
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
