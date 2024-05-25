import { component$ } from "@builder.io/qwik";

import styles from "./sidebar.module.css";

/** @package */
export const Sidebar = component$(() => {
	return (
		<div class={styles.container}>
			<p>Hello, scaffdog!</p>
		</div>
	);
});
