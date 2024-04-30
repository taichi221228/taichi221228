import { $, component$, useContext } from "@builder.io/qwik";

import { Tab } from "~/components/interface/tab";

import styles from "./editor.module.css";
import { CURRENT } from "./index";

/** @package */
export const Editor = component$(() => {
	const current = useContext(CURRENT);

	return (
		<div class={styles.editor}>
			{/*	Editor */}
			<section class={styles.pane}>
				{/* Pane (main) */}
				<Tab
					items={[
						{
							name: current.side,
							onClose$: $(() => {
								current.side = null;
							}),
						},
					]}
					current={current.side}
				/>
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
