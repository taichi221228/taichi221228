import { component$ } from "@builder.io/qwik";

import { Food } from "./food";
import styles from "./game.module.css";
import { Key } from "./key";
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
          <ul>
            <li />
            <li>
              <Key direction="up" />
            </li>
            <li />
            <li>
              <Key direction="left" />
            </li>
            <li>
              <Key direction="down" />
            </li>
            <li>
              <Key direction="right" />
            </li>
          </ul>
        </div>
        <div class={styles.score}>
          <p>food left</p>
          <ul>
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}>
                <Food isEaten={i >= 7} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class={styles.polygon}>
        <Polygon />
      </div>
    </div>
  );
});
