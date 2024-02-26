import { component$ } from "@builder.io/qwik";

import styles from "./game.module.css"; // eslint-disable-line @typescript-eslint/no-unused-vars

export const Game = component$(() => {
  return <div class={styles.container}></div>;
});
