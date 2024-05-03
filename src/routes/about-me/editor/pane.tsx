import { component$ } from "@builder.io/qwik";

import styles from "./pane.module.css";

export const Pane = component$(() => {
	return <div class={styles.pane} />;
});
