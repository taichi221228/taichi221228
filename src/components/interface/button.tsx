import { component$, type PropsOf, Slot } from "@builder.io/qwik";

import styles from "./button.module.css";

type Props = {
	variant?: "primary" | "accent" | "ghost";
} & PropsOf<"button">;

export const Button = component$(({ variant, type = "button", onClick$ }: Props) => {
	return (
		<button class={[styles[variant ?? "primary"], styles.button]} onClick$={onClick$} type={type}>
			<Slot />
		</button>
	);
});
