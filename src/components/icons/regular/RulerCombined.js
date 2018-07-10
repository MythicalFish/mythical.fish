import React from "react";

const RulerCombined = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M480 288H224V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V320c0-17.67-14.33-32-32-32zM48 48h128v48h-72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h72v48h-72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h72v48h-72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h72v25.38l-128 128V48zm416 416H70.62l128-128H224v72c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-72h48v72c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-72h48v72c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-72h48v128z" />
  </svg>
);

export default RulerCombined;
