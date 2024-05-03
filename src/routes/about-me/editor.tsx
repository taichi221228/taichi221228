import { $, component$, useContext } from "@builder.io/qwik";

import { Pane } from "~/routes/about-me/editor/pane";

import styles from "./editor.module.css";
import { CURRENT } from "./index";

/** @package */
export const Editor = component$(() => {
	const current = useContext(CURRENT);

	return (
		<div class={styles.editor}>
			<Pane
				tab={{
					item: current.side,
					onClick$: $(() => {
						current.side = null;
					}),
				}}
			>
				<h1>Hello</h1>
			</Pane>
			<Pane />
		</div>
	);
});
