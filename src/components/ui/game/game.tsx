import { component$ } from "@builder.io/qwik";

import styles from "./game.module.css";

export const Game = component$(() => {
  return <div class={styles.container}></div>;
});
