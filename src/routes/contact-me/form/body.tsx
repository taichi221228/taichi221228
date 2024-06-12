import { component$ } from "@builder.io/qwik";

import styles from "./body.module.css";

/** @package */
export const Body = component$(() => {
	return (
		<div class={styles.container}>
			<h1>Hello, scaffdog!</h1>
		</div>
	);
});
