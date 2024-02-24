import { component$ } from "@builder.io/qwik";

import styles from "./header.module.css";

export const Header = component$(() => {
  return <header class={styles.header}>Header</header>;
});
