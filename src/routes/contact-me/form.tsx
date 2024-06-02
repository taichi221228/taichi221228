import { component$ } from "@builder.io/qwik";

import styles from "./form.module.css";

/** @package */
export const Form = component$(() => {
	return (
		<div class={styles.container}>
			<h1>Hello, scaffdog!</h1>
		</div>
	);
});
