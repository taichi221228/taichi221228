import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { NAME, SNS, TITLE } from "~/constants/info";

import styles from "./top-page.module.css";

export default component$(() => {
  return (
    <section>
      <div class={styles.wrapper}>
        <div class={styles.container}>
          <div class={styles.title}>
            <h2>Hi all. I am</h2>
            <h1>{NAME}</h1>
            <h3>&gt; Front-end developer</h3>
          </div>
          <div class={styles.game}></div>
          <div class={styles.description}>
            <p class={styles.comment}>
              <span class={styles.line}>//&nbsp;</span>
              <span class={styles.block}>/*&nbsp;</span>
              complete the game to continue
              <span class={styles.block}>&nbsp;*/</span>
            </p>
            <p class={styles.comment}>
              <span class={styles.line}>//&nbsp;</span>
              <span class={styles.block}>/*&nbsp;</span>
              you can also see it on my Github page
              <span class={styles.block}>&nbsp;*/</span>
            </p>
            <p class={styles.declaration}>
              <span class={styles.kind}>const</span>
              &nbsp;
              <span class={styles.identifier}>githubLink</span>
              &nbsp;=&nbsp;
              <br />
              <span class={styles.literal}>
                &quot;
                <a href={SNS.github.url} target="_blank">
                  {SNS.github.url}
                </a>
                &quot;
              </span>
              ;
            </p>
          </div>
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
      content: `This is a personal website of ${NAME}.`,
    },
  ],
};
