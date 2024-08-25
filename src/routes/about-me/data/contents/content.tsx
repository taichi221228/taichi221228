import { component$, Slot } from "@builder.io/qwik";

import styles from "./content.module.css";

/** @package */
export const Content = component$(() => {
	return (
		<div class={styles.container}>
			<Slot />
		</div>
	);
});
