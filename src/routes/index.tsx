import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { SNS, TITLE } from "~/constants/info";

import styles from "./top-page.module.css";

export default component$(() => {
  return (
    <section>
      <div class={styles.wrapper}>
        <div class={styles.container}>
          <div class={styles.title}>
            <h2>Hi all. I am</h2>
            <h1>Taichi Fukuda</h1>
            <h3>&gt; Front-end developer</h3>
          </div>
          <div class={styles.game}></div>
          <div class={styles.description}></div>
        </div>
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
