import { component$ } from "@builder.io/qwik";

import { Tabs } from "~/components/interface/tabs";

import styles from "./editor.module.css";
import { activities } from "./index";

/** @package */
export const Editor = component$(() => {
	return (
		<div class={styles.editor}>
			{/*	Editor */}
			<section class={styles.pane}>
				{/* Pane (main) */}
				<Tabs items={activities.map(({ name }) => name)} />
				<div>{/* Contents */}</div>
			</section>
			<div class={styles.pane}>
				{/* Pane (main) */}
				<Tabs items={[]} />
				<div>{/* Contents */}</div>
			</div>
		</div>
	);
});
