import { component$ } from "@builder.io/qwik";

import { PinIcon } from "~/components/interface/icons";

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
					<button class={styles.close} type="button" disabled>
						<PinIcon class={styles.icon} />
					</button>
				</div>
			)}
		</div>
	);
});
