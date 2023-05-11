import React from "react";

import Github from "../../assets/images/icons/github.svg";
import LinkedIn from "../../assets/images/icons/linkedin.svg";
import AtSymbol from "../../assets/images/icons/at.svg";
import Arrow from "../../assets/images/icons/angle-double-right.svg";

const Header = () => {
  return (
    <>
      <div className="mb-4">
        <div className="text-4xl mb-2">Jake Broughton</div>
        <div className="text-xl flex items-center leading-none alt-font font-bold">
          <div className="text-slate-600">
            FULL-STACK ENGINEER{" "}
            <span className="text-slate-400">(11+ yrs)</span>
          </div>
        </div>
      </div>
      <div>
        <div className="contact-details alt-font text-slate-600">
          <div>
            <AtSymbol width={17} className="text-rose-500" />
            <span>jake@mythical.fish</span>
          </div>
          <div>
            <LinkedIn width={16} className="text-rose-500" />
            <a
              href="https://www.linkedin.com/in/jakebroughton/"
              target="_blank"
            >
              /in/jakebroughton
            </a>
          </div>
          <div>
            <Github width={18} className="text-rose-500" />
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
