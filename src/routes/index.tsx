import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <h1>Top Page</h1>;
});

export const head: DocumentHead = {
  title: "Top Page",
  meta: [
    {
      name: "description",
      content: "This is the top page.",
    },
  ],
};
