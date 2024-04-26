import { component$ } from "@builder.io/qwik";

import styles from "./editor.module.css";

/** @package */
export const Editor = component$(() => {
	return (
		<div class={styles.editor}>
			{/*	Editor */}
			<section class={styles.pane}>
				{/* Pane (main) */}
				<ul>{/* Tabs */}</ul>
				<div>{/* Contents */}</div>
			</section>
			<div class={styles.pane}>
				{/* Pane (main) */}
				<ul>{/* Tabs */}</ul>
				<div>{/* Contents */}</div>
			</div>
		</div>
	);
});
