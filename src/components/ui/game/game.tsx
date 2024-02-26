import { component$ } from "@builder.io/qwik";

import styles from "./game.module.css";
import { Polygon } from "./polygon";

export const Game = component$(() => {
  return (
    <div class={styles.container}>
      <div class={styles.main}></div>

      <div class={styles.sub}></div>

      <div class={styles.polygon}>
        <Polygon />
      </div>
    </div>
  );
});
