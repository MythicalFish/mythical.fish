import React from "react";

const ChartArea = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M500 400c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v324h452zM372 128.7l-84 56-85.1-85.1c-5.5-5.5-14.8-4.4-18.8 2.3L96 256v96h384l-90.3-218.1c-3-6.9-11.5-9.4-17.7-5.2zM144 269.3l57.5-103.2 80.4 80.4c71.8-47.9 8.2-5.4 80.7-53.8L407.2 304H144v-34.7z" />
  </svg>
);

export default ChartArea;
