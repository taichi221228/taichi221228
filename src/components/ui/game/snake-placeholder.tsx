import { component$ } from "@builder.io/qwik";

import styles from "./snake-placeholder.module.css";

export const SnakePlaceholder = component$(() => {
  return <div class={styles.snake}></div>;
});
