import { component$ } from "@builder.io/qwik";

import styles from "./food.module.css";

type Props = {
  isEaten?: true;
};

export const Food = component$<Props>(({ isEaten }) => {
  return <div class={[styles.food, isEaten && styles.eaten]} />;
});
