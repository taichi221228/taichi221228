import { component$, type QRL, Slot } from "@builder.io/qwik";

import styles from "./button.module.css";

type Props = {
	onClick$: QRL<() => void>;
	variant?: "accent" | "ghost";
};

export const Button = component$<Props>(({ onClick$, variant }) => {
	return (
		<button
			class={[styles[variant ?? "primary"], styles.button]}
			onClick$={onClick$}
			type="button"
		>
			<Slot />
		</button>
	);
});
