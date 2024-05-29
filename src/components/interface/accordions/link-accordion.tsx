import { component$, Slot } from "@builder.io/qwik";

import { Accordion, type AccordionProps } from "./accordion";
import styles from "./link-accordion.module.css";

type Props = Pick<AccordionProps, "head" | "shouldOpen">;

/** @package */
export const LinkAccordion = component$(({ head, shouldOpen }: Props) => {
	return (
		<Accordion head={head} shouldOpen={shouldOpen}>
			<ul class={styles.body}>
				<Slot />
			</ul>
		</Accordion>
	);
});
