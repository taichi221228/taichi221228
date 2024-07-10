import { component$, type PropsOf, Slot } from "@builder.io/qwik";

import styles from "./button.module.css";

type Props = {
	variant?: "primary" | "accent" | "ghost";
} & PropsOf<"button">;

export const Button = component$(({ variant, class: className, ...props }: Props) => {
	return (
		<button class={[className, styles[variant ?? "primary"], styles.button]} {...props}>
			<Slot />
		</button>
	);
});
