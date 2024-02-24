import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import styles from "./header.module.css";

const items = ["hello", "about-me", "projects", "blog", "contact-me"];

export const Header = component$(() => {
  const location = useLocation();

  return (
    <header class={styles.header}>
      <h1 class={styles.title}>taichi-fukuda</h1>
      <nav class={styles.navigation}>
        <ul>
          {items.map((item) => {
            const pathname = `/${item === "hello" ? "" : item}`;
            const isCurrent = pathname === location.url.pathname;

            return (
              <li key={item} class={isCurrent ? styles.locked : ""}>
                <a href={pathname} tabIndex={isCurrent ? -1 : 0}>
                  _{item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
});
