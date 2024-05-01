import { component$, type QRL } from "@builder.io/qwik";

import { CloseIcon } from "~/components/interface/icons";

import styles from "./tab.module.css";

type Items = { name: string | null; onClick$?: QRL<() => void> }[];

type Props<T extends Items> =
	| {
			items: T;
			current: T[number]["name"];
	  }
	| {
			items?: never;
			current?: never;
	  };

export const Tab = component$(<T extends Items>({ items, current }: Props<T>) => {
	return (
		<ul class={styles.tab}>
			{items?.map(({ name, onClick$ }) => {
				return (
					<li key={name}>
						{name}
						<button class={styles.close} onClick$={onClick$} type="button">
							<CloseIcon />
						</button>
					</li>
				);
			})}
		</ul>
	);
});
