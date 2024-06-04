import { component$, type QRL, Slot } from "@builder.io/qwik";

import styles from "./button.module.css";

type Props = {
	onClick$: QRL<() => void>;
	variant?: "primary" | "accent" | "ghost";
};

export const Button = component$(({ onClick$, variant }: Props) => {
	return (
		<button class={[styles[variant ?? "primary"], styles.button]} onClick$={onClick$} type="button">
			<Slot />
		</button>
	);
});
