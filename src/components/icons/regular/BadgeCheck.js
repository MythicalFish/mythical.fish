import React from "react";

const BadgeCheck = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M512 256c0-36.46-18.835-68.355-46.716-86.695 6.789-32.893-2.642-68.702-28.265-94.324-25.659-25.658-61.477-35.045-94.324-28.265C324.246 18.667 292.255 0 256 0c-36.286 0-68.263 18.692-86.695 46.716-32.907-6.789-68.705 2.647-94.324 28.265-25.658 25.657-35.044 61.478-28.265 94.324C18.635 187.777 0 219.78 0 256c0 36.284 18.689 68.261 46.716 86.695-6.79 32.894 2.645 68.704 28.265 94.324 25.628 25.628 61.226 35.08 94.326 28.268C187.774 493.36 219.779 512 256 512c36.402 0 68.326-18.792 86.693-46.713 33.117 6.816 68.712-2.653 94.326-28.268 25.656-25.656 35.044-61.477 28.265-94.324C493.363 324.226 512 292.22 512 256zm-108.182 61.232c9.072 19.989 30.301 54.807-.74 85.846-28.085 28.088-55.336 14.589-85.846.739C309.513 424.375 299.912 464 256 464c-45.324 0-54.71-42.814-61.232-60.183-21.078 9.568-54.909 30.2-85.846-.739-32.039-32.037-8.405-68.957-.74-85.846C87.624 309.513 48 299.912 48 256c0-45.324 42.812-54.71 60.182-61.232-9.072-19.989-30.301-54.807.74-85.846 32.037-32.038 68.939-8.414 85.847-.74C202.488 87.624 212.088 48 256 48c45.324 0 54.709 42.813 61.231 60.182 19.989-9.073 54.808-30.302 85.847.74 32.039 32.037 8.405 68.957.74 85.846C424.376 202.487 464 212.088 464 256c0 45.324-42.812 54.71-60.182 61.232zM387.82 201.315L215.232 372.519c-4.706 4.667-12.303 4.637-16.971-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.668 4.706 4.637 12.304-.068 16.971z" />
  </svg>
);

export default BadgeCheck;
