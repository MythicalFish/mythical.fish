import React from "react";

const ChessBoard = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M0 0v512h512V0H0zm464 464H48V48h416v416zm-336-16H64v-64h64v64zm64-64h64v64h-64v-64zm128 0h64v64h-64v-64zm-128 0h-64v-64h64v64zm128-64v64h-64v-64h64zm64 64v-64h64v64h-64zM128 256v64H64v-64h64zm128 64h-64v-64h64v64zm64-64h64v64h-64v-64zm-128 0h-64v-64h64v64zm64 0v-64h64v64h-64zm128 0v-64h64v64h-64zM128 128v64H64v-64h64zm64 64v-64h64v64h-64zm128 0v-64h64v64h-64zm-128-64h-64V64h64v64zm128 0h-64V64h64v64zm128 0h-64V64h64v64z" />
  </svg>
);

export default ChessBoard;
