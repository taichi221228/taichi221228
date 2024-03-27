import { component$, useSignal } from "@builder.io/qwik";

import styles from "./accordion.module.css";

export const Accordion = component$(() => {
	const isOpen = useSignal(false);

	return (
		<div class={styles.accordion}>
			<button
				class={styles.header}
				onClick$={() => {
					isOpen.value = !isOpen.value;
				}}
				type="button"
			>
				{isOpen.value ? "Close" : "Open"}
			</button>
			<div class={[styles.content, isOpen.value && styles.opened]}>Content</div>
		</div>
	);
});
