import { component$, type JSXOutput } from "@builder.io/qwik";

import { Accordion, type AccordionProps } from "./accordion";
import styles from "./links-accordion.module.css";

type Props = {
	items: {
		key: string;
		item: JSXOutput;
	}[];
} & Pick<AccordionProps, "head">;

/** @package */
export const LinksAccordion = component$(({ items, head }: Props) => {
	return (
		<Accordion head={head}>
			<ul class={styles.links}>
				{items.map(({ key, item }) => {
					return <li key={key}>{item}</li>;
				})}
			</ul>
		</Accordion>
	);
});
