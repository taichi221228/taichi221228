import { component$, Slot, useSignal } from "@builder.io/qwik";

import { Poly, type PolyProps } from "~/components/function/poly/poly";
import { Triangle } from "~/components/interface/triangle/triangle";

import styles from "./accordion.module.css";

type Props = {
	shouldOpen?: boolean;
} & PolyProps<"div" | "nav">;

export const Accordion = component$<Props>(({ as, shouldOpen = false }) => {
	const isOpen = useSignal(shouldOpen);

	return (
		<Poly class={styles.accordion} as={as}>
			<button
				class={styles.header}
				onClick$={() => {
					isOpen.value = !isOpen.value;
				}}
				type="button"
			>
				<Triangle direction={isOpen.value ? "down" : "up"} />
				<Slot name="header" />
			</button>
			<div class={[styles.content, isOpen.value && styles.opened]}>
				<div class={styles.container}>
					<Slot name="content" />
				</div>
			</div>
		</Poly>
	);
});
