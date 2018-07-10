import React from "react";

const Briefcase = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M464 96H352V56c0-13.255-10.745-24-24-24H184c-13.255 0-24 10.745-24 24v40H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.51-21.49-48-48-48zM192 64h128v32H192V64zm288 368c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V288h160v40c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24v-40h160v144zM224 288h64v32h-64v-32zM32 256V144c0-8.822 7.178-16 16-16h416c8.822 0 16 7.178 16 16v112H32z" />
  </svg>
);

export default Briefcase;
