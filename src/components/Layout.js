import React from "react";
import About from "./About";
import Attributes from "./Attributes";
import Portfolio from "./Portfolio";

const Layout = ({ content }) => {
  return (
    <>
      <div className="flex flex-wrap lg:overflow-hidden">
        <div className="w-full lg:w-2/5 flex justify-center lg:overflow-y-auto lg:h-screen">
          <About {...content} />
        </div>
        <div className="dark-theme w-full lg:w-3/5 lg:overflow-y-scroll lg:h-screen">
          <div className="bg-slate-900">
            <div className="p-3 sm:p-6 xl:p-20">
              <Attributes {...content} />
            </div>
          </div>
          <div className="sm:p-6 xl:p-20">
            <Portfolio {...content} />
          </div>
        </div>
      </div>
      <div id="modal" />
    </>
  );
};

export default Layout;
