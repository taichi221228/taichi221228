import { component$ } from "@builder.io/qwik";

import styles from "./polygon.module.css";

export const Polygon = component$(() => {
  const blurMargin = 500;
  const [polygonWidth, polygonHeight] = [780, 681];
  const [width, height] = [
    polygonWidth + blurMargin * 2,
    polygonHeight + blurMargin * 2,
  ];
  const viewBox = [blurMargin * -1, blurMargin * -1, width, height].join(" ");

  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none">
      <g class={styles.polygon1}>
        <path d="M549.946 680.705L336.032 629.318L246.663 564.654L273.226 394.142L448.649 374.576L447.041 252.833L649.309 198.577L779.602 229.876L697.165 495.982L569.892 529.172L549.946 680.705Z" />
      </g>
      <g class={styles.polygon2}>
        <path d="M499.469 83.6671L515.984 303.046L481.759 407.911L311.295 434.783L239.003 273.755L123.588 312.528L10.0585 136.554L-5.74887e-05 2.93161L278.567 0.012974L349.099 111.032L499.469 83.6671Z" />
      </g>
    </svg>
  );
});
