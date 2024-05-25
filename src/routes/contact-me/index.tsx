import { component$ } from "@builder.io/qwik";

import styles from "./index.module.css";
import { Sidebar } from "./sidebar";

/** @private */
export default component$(() => {
	return (
		<div class={styles.container}>
			<aside>
				<Sidebar />
			</aside>
			<p>Hello, scaffdog!</p>
		</div>
	);
});
