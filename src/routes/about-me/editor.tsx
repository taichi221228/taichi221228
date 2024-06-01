import { $, component$, useContext } from "@builder.io/qwik";

import { CURRENT, getSide } from "./data";
import { Pane } from "./editor/pane";

import styles from "./editor.module.css";

/** @package */
export const Editor = component$(() => {
	const current = useContext(CURRENT);

	const { Content } = getSide(current);

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
				<Content />
			</Pane>
			<Pane />
		</div>
	);
});
