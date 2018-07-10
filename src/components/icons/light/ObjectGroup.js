import React from "react";

const ObjectGroup = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M404 192h-84v-52c0-6.627-5.373-12-12-12H108c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12h84v52c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12V204c0-6.627-5.373-12-12-12zm-276-32h160v128H128V160zm256 192H224v-32h84c6.627 0 12-5.373 12-12v-84h64v128zm116-224c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v20H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h20v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-20h320v20c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-20V128h20zm-52 256h-20c-6.627 0-12 5.373-12 12v20H96v-20c0-6.627-5.373-12-12-12H64V128h20c6.627 0 12-5.373 12-12V96h320v20c0 6.627 5.373 12 12 12h20v256zM64 64v32H32V64h32m416 0v32h-32V64h32M64 416v32H32v-32h32m416 0v32h-32v-32h32" />
  </svg>
);

export default ObjectGroup;
