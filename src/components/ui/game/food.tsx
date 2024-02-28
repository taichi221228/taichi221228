import { component$ } from "@builder.io/qwik";

import styles from "./food.module.css";

export const Food = component$(() => {
  return <div class={styles.food} />;
});
