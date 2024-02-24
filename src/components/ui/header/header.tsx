import { component$ } from "@builder.io/qwik";

import styles from "./header.module.css";

const items = ["hello", "about-me", "projects", "blog", "contact-me"];

export const Header = component$(() => {
  return (
    <header class={styles.header}>
      <h1 class={styles.title}>taichi-fukuda</h1>
      <nav class={styles.navigation}>
        <ul>
          {items.map((item) => {
            return (
              <li class={styles.li} key={item}>
                <a href={`/${item === "hello" ? "" : item}`}>_{item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
});
