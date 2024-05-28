import { component$ } from "@builder.io/qwik";

import styles from "./contacts-accordion.module.css";

/** @package */
export const ContactsAccordion = component$(() => {
	return (
		<div class={styles.container}>
			<h1>Hello, scaffdog!</h1>
		</div>
	);
});
