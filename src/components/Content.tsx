import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Content: React.FC<Props> = ({ children, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
);

export default Content;
