import React from "react";

const Eraser = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512.001 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M497.942 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.746-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48 48 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H339.883l158.059-158.059zM304 80l160 160-103.029 103.029-160-160L304 80zM144 432l-96-96 119.03-119.029 160 160L272 432H144z" />
  </svg>
);

export default Eraser;
