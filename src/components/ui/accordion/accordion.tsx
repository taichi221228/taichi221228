import { component$ } from "@builder.io/qwik";

import styles from "./accordion.module.css";

export const Accordion = component$(() => {
	return <div class={styles.accordion} />;
});
