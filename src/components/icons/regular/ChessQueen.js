import React from "react";

const ChessQueen = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M64 500v-24c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12zm191.579-388c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56 25.072 56 56 56zM112 448L6.986 190.552a12 12 0 0 1 5.51-15.145l39.179-20.679c5.642-2.978 12.634-1.027 15.899 4.453 10.608 17.8 23.735 38.025 44.425 38.025 28.753 0 30.635-19.898 31.688-57.539.182-6.493 5.5-11.667 11.995-11.667h41.005c5.175 0 9.754 3.328 11.388 8.238 8.89 26.709 26.074 40.992 47.925 40.992s39.034-14.283 47.924-40.992c1.634-4.91 6.213-8.238 11.388-8.238h41.006c6.494 0 11.812 5.172 11.995 11.664 1.062 37.738 2.973 57.542 31.686 57.542 21.318 0 35.449-22.285 44.065-37.802 3.166-5.702 10.314-7.815 16.082-4.77l39.357 20.773a12 12 0 0 1 5.51 15.145L400 448H112zM77.96 237.46L144.26 400h223.48l66.304-162.55c-37.654 17.908-91.742 6.272-107.557-44.594-37.73 43.31-103.293 43.247-140.969.005-15.977 51.33-70.334 62.305-107.558 44.599z" />
  </svg>
);

export default ChessQueen;
