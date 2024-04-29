import { component$ } from "@builder.io/qwik";

import styles from "./tab.module.css";

type Props = {
	items: string[];
};

export const Tab = component$<Props>(({ items }) => {
	return (
		<ul class={styles.tab}>
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
