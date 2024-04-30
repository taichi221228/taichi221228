import { component$, type QRL } from "@builder.io/qwik";

import { CloseIcon } from "~/components/interface/icons";

import styles from "./tab.module.css";

type Items = { name: string | null; onClick$?: QRL<() => void>; onClose$?: QRL<() => void> }[];

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
			{items?.map(({ name, onClick$, onClose$ }) => {
				return (
					<li key={name}>
						<button class={styles.base} onClick$={onClick$} type="button" disabled={name === current}>
							{name}
						</button>
						<button class={styles.close} onClick$={onClose$} type="button">
							<CloseIcon class={styles.icon} />
						</button>
					</li>
				);
			})}
		</ul>
	);
});
