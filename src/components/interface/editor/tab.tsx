import { component$ } from "@builder.io/qwik";

import { CloseIcon } from "~/components/interface/icons";

import styles from "./tab.module.css";

type Props = {
	item?: string | null;
};

export type TabProps = Props;

/** @package */
export const Tab = component$(({ item }: Props) => {
	return (
		<div class={styles.container}>
			{item && (
				<div class={styles.tab}>
					{item}
					<button class={styles.close} type="button">
						<CloseIcon class={styles.icon} />
					</button>
				</div>
			)}
		</div>
	);
});
