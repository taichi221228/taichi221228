import { component$ } from "@builder.io/qwik";

import styles from "./link-accordion.module.css";

/** @package */
export const LinkAccordion = component$(() => {
	return (
		<div class={styles.container}>
			<h1>Hello, scaffdog!</h1>
		</div>
	);
});
