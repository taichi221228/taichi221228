import { component$ } from "@builder.io/qwik";

import { CloseIcon } from "~/components/interface/icons";

import styles from "./tab.module.css";

type Props<T extends string[]> =
	| {
			items: T;
			current: T[number];
	  }
	| {
			items?: never;
			current?: never;
	  };

export const Tab = component$(<T extends string[]>({ items, current }: Props<T>) => {
	return (
		<ul class={styles.tab}>
			{items?.map((item) => {
				return (
					<li key={item}>
						<button type="button" disabled={item === current}>
							{item} <CloseIcon class={styles.icon} />
						</button>
					</li>
				);
			})}
		</ul>
	);
});
