import { type QRL, component$, Slot } from "@builder.io/qwik";

import styles from "./button.module.css";

type Props = {
  onClick$: QRL<() => void>;
  variant?: "primary" | "accent" | "ghost";
};

export const Button = component$<Props>(({ onClick$, variant = "primary" }) => {
  return (
    <button onClick$={onClick$} class={[styles.button, styles[variant]]}>
      <Slot />
    </button>
  );
});
