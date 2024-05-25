import { component$ } from "@builder.io/qwik";

import styles from "./index.module.css";

/** @private */
export default component$(() => {
	return (
		<div class={styles.container}>
			<p>Hello, scaffdog!</p>
		</div>
	);
});
