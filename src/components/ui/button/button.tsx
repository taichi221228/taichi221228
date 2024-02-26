import { component$, Slot } from "@builder.io/qwik";

import styles from "./button.module.css";

export const Button = component$(() => {
  return (
    <button class={styles.button}>
      <Slot />
    </button>
  );
});
