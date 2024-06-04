import { component$, type QRL, Slot } from "@builder.io/qwik";

import styles from "./button.module.css";

type Props = {
	variant?: "primary" | "accent" | "ghost";
} & (
	| {
			type?: "button";
			onClick$: QRL<() => void>;
	  }
	| {
			type: "submit";
			onClick$?: QRL<() => void>;
	  }
);

export const Button = component$(({ variant, type = "button", onClick$ }: Props) => {
	return (
		<button class={[styles[variant ?? "primary"], styles.button]} onClick$={onClick$} type={type}>
			<Slot />
		</button>
	);
});
