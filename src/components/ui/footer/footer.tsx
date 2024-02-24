import { component$ } from "@builder.io/qwik";

import styles from "./footer.module.css";

export const Footer = component$(() => {
  return <footer class={styles.footer}></footer>;
});
