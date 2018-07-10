import React from "react";

const Suitcase = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M464 96H352V56c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24v40H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM192 64h128v32H192V64zM96 448H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h48v320zm288 0H128V128h256v320zm96-16c0 8.8-7.2 16-16 16h-48V128h48c8.8 0 16 7.2 16 16v288z" />
  </svg>
);

export default Suitcase;
