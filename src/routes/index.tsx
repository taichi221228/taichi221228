import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { TITLE } from "~/constants/info";

import styles from "./top-page.module.css";

export default component$(() => {
  return (
    <section>
      <div class={styles.wrapper}>
        <div class={styles.container}></div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: TITLE,
  meta: [
    {
      name: "description",
      content: "This is a personal website of Taichi Fukuda.",
    },
  ],
};
