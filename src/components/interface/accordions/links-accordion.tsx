import { component$, type JSXOutput, type QwikJSX } from "@builder.io/qwik";

import styles from "./links-accordion.module.css";
import { Accordion, type AccordionProps } from "./accordion";

type Props = {
	items: ({
		item: JSXOutput;
	} & Pick<QwikJSX.IntrinsicAttributes, "key">)[];
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
