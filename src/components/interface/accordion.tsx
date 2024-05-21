import { component$, Slot, useComputed$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";

import { Poly, type PolyProps } from "~/components/function/poly";
import { TriangleIcon } from "~/components/interface/icons";

import styles from "./accordion.module.css";

type Props = {
	head: string;
	shouldOpen?: boolean;
} & PolyProps<"div" | "nav">;

export const Accordion = component$(({ shouldOpen = false, as, ...props }: Props) => {
	const isOpen = useSignal(shouldOpen);

	const container = useStore({
		ref: useSignal<HTMLDivElement>(undefined as unknown as HTMLDivElement),
		height: Number.MAX_SAFE_INTEGER,
	});
	const maxBlockSize = useComputed$(() => (isOpen.value ? container.height : 0));

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		const observer = new ResizeObserver(([entry]) => {
			container.height = (entry.target as HTMLDivElement).offsetHeight;
		});

		observer.observe(container.ref.value);

		return () => {
			observer.disconnect();
		};
	});

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
			<div class={[isOpen.value && styles.opened, styles.body]} style={{ maxBlockSize: maxBlockSize.value }}>
				<div class={styles.container} ref={container.ref}>
					<Slot />
				</div>
			</div>
		</Poly>
	);
});
