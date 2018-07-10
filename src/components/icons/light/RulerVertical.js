import React from "react";

const RulerVertical = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 256 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M224 0H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM32 480V32h192v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64H32z" />
  </svg>
);

export default RulerVertical;
