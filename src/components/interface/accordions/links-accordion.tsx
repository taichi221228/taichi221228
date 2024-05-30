import { component$, Slot } from "@builder.io/qwik";

import { Accordion, type AccordionProps } from "./accordion";
import styles from "./links-accordion.module.css";

type Props = Pick<AccordionProps, "head">;

/** @package */
export const LinksAccordion = component$(({ head }: Props) => {
	return (
		<Accordion head={head}>
			<ul class={styles.links}>
				<Slot />
			</ul>
		</Accordion>
	);
});
