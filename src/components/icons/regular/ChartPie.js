import React from "react";

const ChartPie = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 544 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M280 48c101.6 0 184 82.4 184 184H280V48m-48 48v184l130.1 130.1C328.8 443.4 282.8 464 232 464c-101.6 0-184-82.4-184-184S130.4 96 232 96m264 184c0 49.9-19 99.8-57.1 137.9L301 280h195M232 12v36C103.9 48 0 151.8 0 280c0 128.1 103.8 232 232 232 62.1 0 120.7-24.6 164.1-67.9l.6-.6 8.3 8.3 25.5 25.5c4.7 4.7 12.3 4.7 17 0l25.5-25.5c46-46 71.2-107.6 71.2-171.8v-36c0-6.6-5.4-12-12-12h-20c0-31.3-6.1-61.7-18.3-90.3C471 87.8 427.5 42.4 370.3 18.3 341.7 6.1 311.3 0 280 0h-36c-6.6 0-12 5.4-12 12z" />
  </svg>
);

export default ChartPie;
