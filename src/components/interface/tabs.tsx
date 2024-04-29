import { component$ } from "@builder.io/qwik";

import styles from "./tabs.module.css";

type Props = {
	items: string[];
};

export const Tabs = component$<Props>(({ items }) => {
	return (
		<ul class={styles.tabs}>
			{items.map((item) => {
				return (
					<li key={item}>
						<button type="button">{item}</button>
					</li>
				);
			})}
		</ul>
	);
});
