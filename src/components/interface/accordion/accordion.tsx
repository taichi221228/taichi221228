import { component$, Slot, useSignal } from "@builder.io/qwik";

import { Poly, type PolyProps } from "~/components/function/poly/poly";
import { Triangle } from "~/components/interface/triangle/triangle";

import styles from "./accordion.module.css";

type Props = {
	label: string;
} & PolyProps<"div" | "nav">;

export const Accordion = component$<Props>(({ as, label }) => {
	const isOpen = useSignal(false);

	return (
		<Poly class={styles.accordion} as={as}>
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
				<div class={styles.container}>
					<Slot />
				</div>
			</div>
		</Poly>
	);
});
