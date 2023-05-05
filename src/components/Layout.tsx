import React from "react";
import About from "./About";
import Attributes from "./Attributes";
import Portfolio from "./Portfolio";

import { AllContent } from "pages";

type Props = {
  content: AllContent;
};

const Layout: React.FC<Props> = ({ content }) => {
  return (
    <>
      <div className="flex flex-wrap lg:overflow-hidden">
        <div className="w-full lg:w-2/5 flex justify-center lg:overflow-y-auto lg:h-screen">
          <About bio={content.info.bio} />
        </div>
        <div className="dark-theme w-full lg:w-3/5 lg:overflow-y-scroll lg:h-screen">
          <div className="bg-slate-900">
            <div className="p-3 sm:p-6 xl:p-20">
              <Attributes
                skills={content.info.skills}
                superPowers={content.info.superPowers}
              />
            </div>
          </div>
          <div className="sm:p-6 xl:p-20">
            <Portfolio projects={content.projects} />
          </div>
        </div>
      </div>
      <div id="modal" />
    </>
  );
};

export default Layout;
