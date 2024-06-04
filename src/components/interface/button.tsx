import { component$, type QRL, Slot } from "@builder.io/qwik";

import styles from "./button.module.css";

type Props = {
	variant?: "primary" | "accent" | "ghost";
	onClick$: QRL<() => void>;
};

export const Button = component$(({ variant, onClick$ }: Props) => {
	return (
		<button class={[styles[variant ?? "primary"], styles.button]} onClick$={onClick$} type="button">
			<Slot />
		</button>
	);
});
