import { component$ } from "@builder.io/qwik";

import styles from "./content.module.css";

/** @package */
export const Content = component$(() => {
	return (
		<div class={styles.container}>
			<h1>Hello, scaffdog!</h1>
		</div>
	);
});
