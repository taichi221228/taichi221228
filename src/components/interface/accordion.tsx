import { component$, Slot, useSignal } from "@builder.io/qwik";

import { Poly, type PolyProps } from "~/components/function/poly";
import { TriangleIcon } from "~/components/interface/icons";

import styles from "./accordion.module.css";

type Props = {
	head: string;
	shouldOpen?: boolean;
} & PolyProps<"div" | "nav">;

export const Accordion = component$(({ as, shouldOpen = false, ...props }: Props) => {
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
				{
					props.head
					/* BUG: There is a bug in a component with multiple intersecting reactivities where destructuring primitive Signals
					    received in Props does not trigger a re-render for that Node only. */
				}
			</button>
			<div class={[isOpen.value && styles.opened, styles.body]}>
				<div class={styles.container}>
					<Slot />
				</div>
			</div>
		</Poly>
	);
});
