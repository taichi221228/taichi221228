import { type QRL, Slot, component$ } from "@builder.io/qwik";

import styles from "./button.module.css";

type Props = {
	onClick$: QRL<() => void>;
	variant?: "accent" | "ghost";
};

export const Button = component$<Props>(({ onClick$, variant }) => {
	return (
		<button
			onClick$={onClick$}
			type="button"
			class={[styles.button, styles[variant ?? "primary"]]}
		>
			<Slot />
		</button>
	);
});
