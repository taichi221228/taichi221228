import { component$ } from "@builder.io/qwik";

import { Tab, type TabProps } from "~/components/interface/tab";

import styles from "./pane.module.css";

type Props = { tab?: TabProps };

export const Pane = component$(({ tab }: Props) => {
	return (
		<section class={styles.pane}>
			<Tab {...tab} />
		</section>
	);
});
