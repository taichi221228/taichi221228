import { component$ } from "@builder.io/qwik";

import { Tab } from "~/components/interface/tab";

import styles from "./editor.module.css";
import type { Current } from "./index";

type Props = {
	current: Current;
};

/** @package */
export const Editor = component$<Props>(({ current }) => {
	return (
		<div class={styles.editor}>
			{/*	Editor */}
			<section class={styles.pane}>
				{/* Pane (main) */}
				<Tab items={[current.side]} current={current.side} />
				<div>{/* Contents */}</div>
			</section>
			<div class={styles.pane}>
				{/* Pane (main) */}
				<Tab />
				<div>{/* Contents */}</div>
			</div>
		</div>
	);
});
