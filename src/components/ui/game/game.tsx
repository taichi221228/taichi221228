import { component$ } from "@builder.io/qwik";

import styles from "./game.module.css";
import { Polygon } from "./polygon";
import { Button } from "../button/button";

export const Game = component$(() => {
  return (
    <div class={styles.container}>
      <div class={styles.main}>
        <Button onClick$={() => {}} variant="accent">
          start-game
        </Button>
      </div>

      <div class={styles.sub}>
        <div class={styles.help}>
          <p>use keyboard</p>
          <p>arrows to play</p>
          <div class={styles.keys}></div>
        </div>
        <div class={styles.score}></div>
      </div>

      <div class={styles.polygon}>
        <Polygon />
      </div>
    </div>
  );
});
