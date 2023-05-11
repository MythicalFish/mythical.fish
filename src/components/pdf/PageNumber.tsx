import React from "react";

type Props = {
  n: number;
};

const PageNumber: React.FC<Props> = ({ n }) => {
  return <div className="page-number">Page {n} of 5</div>;
};

export default PageNumber;
