import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import { TITLE } from "~/constants/info";

import styles from "./header.module.css";
import { Navigation } from "./navigation";

export const Header = component$(() => {
  const location = useLocation();
  const isRoot = "/" === location.url.pathname;

  return (
    <header class={styles.header}>
      <h1 class={styles.title}>{isRoot ? TITLE : <a href="/">{TITLE}</a>}</h1>
      <Navigation location={location} />
    </header>
  );
});
