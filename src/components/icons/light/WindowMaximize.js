import React from "react";

const WindowMaximize = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V192h448v240zM32 160V80c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v80H32z" />
  </svg>
);

export default WindowMaximize;
