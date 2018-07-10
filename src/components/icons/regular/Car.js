import React from "react";

const Car = props => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M152 311.958c0 17.673-30.327 16-48 16s-32-14.327-32-32 14.327-32 32-32 48 30.326 48 48zm256-48c-17.673 0-48 30.327-48 48s30.327 16 48 16 32-14.327 32-32-14.327-32-32-32zm103.375-96.163l-8 24A12 12 0 0 1 491.991 200h-27.99C483.43 214.595 496 237.829 496 264v72c0 15.254-6.107 29.076-16 39.176V424c0 13.255-10.745 24-24 24h-32c-13.255 0-24-10.745-24-24v-32H112v32c0 13.255-10.745 24-24 24H56c-13.255 0-24-10.745-24-24v-48.824c-9.893-10.1-16-23.922-16-39.176v-72c0-26.171 12.57-49.404 31.999-64h-27.99a12 12 0 0 1-11.384-8.205l-8-24C-1.965 160.024 3.818 152 12.009 152H58.46l6.544-15.271A119.867 119.867 0 0 1 175.302 64h161.396a119.864 119.864 0 0 1 110.297 72.73L453.54 152h46.451c8.191 0 13.974 8.024 11.384 15.795zM96.968 184h318.063l-12.155-28.362A71.917 71.917 0 0 0 336.698 112H175.302a71.92 71.92 0 0 0-66.179 43.638L96.968 184zM456 264c0-22.056-17.944-40-40-40H96c-22.056 0-40 17.944-40 40v72c0 8.822 7.176 15.999 15.998 16h368.005c8.821-.001 15.998-7.178 15.998-16v-72zm-126 16H182a6 6 0 0 0-6 6v10c0 13.255 10.745 24 24 24h112c13.255 0 24-10.745 24-24v-10a6 6 0 0 0-6-6z" />
  </svg>
);

export default Car;
