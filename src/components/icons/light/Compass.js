import React from "react";

const Compass = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm216 248c0 118.663-96.055 216-216 216-118.663 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.663 0 216 96.055 216 216zM324 138.221L290.641 276 188 373.779 221.359 236 324 138.221m-22.072-23.17L199.287 212.83a31.997 31.997 0 0 0-9.029 15.639l-33.359 137.78c-7.573 31.278 30.369 52.424 53.173 30.7l102.641-97.779a31.997 31.997 0 0 0 9.029-15.639l33.359-137.78c4.907-20.264-10.567-39.531-31.092-39.531 1 0-11.736-1.024-22.081 8.831zM280 256c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
  </svg>
);

export default Compass;
