import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import styles from "./header.module.css";

const title = "taichi-fukuda";
const items = ["hello", "about-me", "projects", "blog", "contact-me"];

export const Header = component$(() => {
  const location = useLocation();
  const comparePath = (pathname: string) => pathname === location.url.pathname;
  const isRoot = comparePath("/");

  return (
    <header class={styles.header}>
      <h1 class={styles.title}>{isRoot ? title : <a href="/">{title}</a>}</h1>
      <nav class={styles.navigation}>
        <ul>
          {items.map((item) => {
            const pathname = `/${item === "hello" ? "" : item}`;
            const isCurrent = comparePath(pathname);

            return (
              <li key={item}>
                {isCurrent ? (
                  <span>_{item}</span>
                ) : (
                  <a href={pathname}>_{item}</a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
});
