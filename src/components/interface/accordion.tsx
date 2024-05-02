import { component$, Slot, useSignal } from "@builder.io/qwik";

import { Poly, type PolyProps } from "~/components/function/poly";
import { TriangleIcon } from "~/components/interface/icons";

import styles from "./accordion.module.css";

type Props = {
	shouldOpen?: boolean;
} & PolyProps<"div" | "nav">;

export const Accordion = component$(({ as, shouldOpen = false }: Props) => {
	const isOpen = useSignal(shouldOpen);

	return (
		<Poly class={styles.accordion} as={as}>
			<button
				class={styles.head}
				onClick$={() => {
					isOpen.value = !isOpen.value;
				}}
				type="button"
			>
				<TriangleIcon class={styles.icon} direction={isOpen.value ? "down" : "up"} />
				<Slot name="head" />
			</button>
			<div class={[isOpen.value && styles.opened, styles.body]}>
				<div class={styles.container}>
					<Slot name="body" />
				</div>
			</div>
		</Poly>
	);
});
