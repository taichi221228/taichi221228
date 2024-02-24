import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { TITLE } from "~/constants/info";

export default component$(() => {
  return <h1>Top Page</h1>;
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
