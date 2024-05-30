import { component$, type JSXOutput, QwikJSX } from "@builder.io/qwik";

import { Accordion, type AccordionProps } from "./accordion";
import styles from "./links-accordion.module.css";

import IntrinsicAttributes = QwikJSX.IntrinsicAttributes;

type Props = {
	items: ({
		item: JSXOutput;
	} & Pick<IntrinsicAttributes, "key">)[];
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
