import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { TITLE } from "~/constants/info";

import styles from "./top-page.module.css"; // eslint-disable-line @typescript-eslint/no-unused-vars

export default component$(() => {
  return <section></section>;
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
