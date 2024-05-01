import { component$, type QRL } from "@builder.io/qwik";

import { CloseIcon } from "~/components/interface/icons";

import styles from "./tab.module.css";

type Props =
	| {
			item: string | null;
			onClick$: QRL<() => void>;
	  }
	| {
			item?: never;
			onClick$?: never;
	  };

export const Tab = component$<Props>(({ item, onClick$ }) => {
	return (
		<div class={styles.container}>
			{item && (
				<div class={styles.tab}>
					{item}
					<button class={styles.close} onClick$={onClick$} type="button">
						<CloseIcon class={styles.icon} />
					</button>
				</div>
			)}
		</div>
	);
});
