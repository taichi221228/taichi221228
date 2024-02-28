import { component$ } from "@builder.io/qwik";

import styles from "./food.module.css";

type Props = {
  isEaten?: boolean;
};

export const Food = component$<Props>(({ isEaten = false }) => {
  return <div class={[styles.food, isEaten && styles.eaten]} />;
});
