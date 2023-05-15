import React, { useEffect, useState } from "react";

import { ProjectProps } from "types";

type Props = {
  projects: ProjectProps[];
};

const Preloader: React.FC<Props> = ({ projects }) => {
  const [loaded, startLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => startLoad(true), 2000);
  }, []);
  if (!loaded) return null;
  return (
    <div
      style={{
        visibility: "hidden",
        position: "fixed",
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        opacity: 0,
      }}
    >
      {projects?.map((project) => {
        const img = project.previews?.[0]?.image;
        if (!img) return null;
        return <img src={img} />;
      })}
    </div>
  );
};

export default Preloader;
