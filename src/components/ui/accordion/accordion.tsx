import { component$, Slot, useSignal } from "@builder.io/qwik";

import { Triangle } from "~/components/ui/triangle/triangle";

import styles from "./accordion.module.css";

type Props = {
	label: string;
};

export const Accordion = component$<Props>(({ label }) => {
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
				<Triangle direction={isOpen.value ? "up" : "down"} />
				{label}
			</button>
			<div class={[styles.content, isOpen.value && styles.opened]}>
				<Slot />
			</div>
		</div>
	);
});
