import React from "react";

const Chess = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M507.097 436.404L488 422.398V396c0-6.627-5.373-12-12-12h-3.765c-9.459-40.997-10.598-79.938-10.698-99.584l30.03-24.399a12 12 0 0 0 4.433-9.313V184c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v66.703c0 3.614 1.628 7.035 4.433 9.313l30.031 24.4c-.098 19.622-1.234 58.518-10.702 99.583H292c-6.627 0-12 5.373-12 12v26.398l-19.097 14.006A11.997 11.997 0 0 0 256 446.08v-.117a12 12 0 0 0-4.942-9.705L232 422.398V396c0-6.627-5.373-12-12-12h-15.893c-16.967-48.115-14.182-103.907-14.182-127.813V256H216c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12h-21.942l31.537-96.548C230.663 111.938 219.102 96 202.782 96h-48.983V68.766h19.792a5.98 5.98 0 0 0 5.979-5.98V40.363a5.98 5.98 0 0 0-5.979-5.98h-28.388V5.98A5.98 5.98 0 0 0 139.224 0H116.8a5.979 5.979 0 0 0-5.979 5.98v28.403H82.4a5.98 5.98 0 0 0-5.979 5.98v22.424a5.98 5.98 0 0 0 5.979 5.98h19.824V96H53.211c-16.321 0-27.882 15.939-22.813 31.453L61.941 224H40c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h26.074v.187c0 22.898 2.903 79.292-14.177 127.813H36c-6.627 0-12 5.373-12 12v26.398l-19.058 13.86A12.002 12.002 0 0 0 0 445.963V500c0 6.627 5.373 12 12 12h231.999c6.627 0 12-5.373 12-12H256c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12v-53.919c0-3.823-1.821-7.416-4.903-9.677zM64.241 128h127.511l-31.357 96h-64.79l-31.364-96zm33.833 128.187V256h59.852v.187c0 26.289-2.342 78.07 12.525 127.813H85.544c15.021-50.385 12.53-102.299 12.53-127.813zM223.999 480H32v-23.853l24-17.454V416h144v22.693l24 17.454-.001 23.853zM304 241.185V192h24v32h32v-32h48v32h32v-32h24v49.185l-34.436 27.979-.026 7.582c-.053 15.602-.201 59.202 9.925 107.255h-110.93c10.14-48.128 9.984-91.677 9.929-107.258l-.027-7.58L304 241.185zM479.999 480H288v-23.853l24-17.454V416h144v22.693l24 17.454-.001 23.853zm-77.538-125.538h-36.922v-38.77c0-9.176 7.439-16.615 16.615-16.615h3.692c9.176 0 16.615 7.439 16.615 16.615v38.77z" />
  </svg>
);

export default Chess;
