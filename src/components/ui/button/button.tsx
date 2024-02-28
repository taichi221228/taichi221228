import { type QRL, component$, Slot } from "@builder.io/qwik";

import styles from "./button.module.css";

type Props = {
  onClick$: QRL<() => void>;
  variant?: "accent" | "ghost";
};

export const Button = component$<Props>(({ onClick$, variant }) => {
  return (
    <button
      onClick$={onClick$}
      class={[styles.button, styles[variant ?? "primary"]]}
    >
      <Slot />
    </button>
  );
});
