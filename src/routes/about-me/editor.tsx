import { $, component$, useContext } from "@builder.io/qwik";

import { Pane } from "~/routes/about-me/editor/pane";

import styles from "./editor.module.css";
import { CURRENT, sides } from "./index";

/** @package */
export const Editor = component$(() => {
	const current = useContext(CURRENT);

	const side = sides[current.activity].find(({ name }) => name === current.side) ?? { Content: () => <></> };
	const { Content } = side;

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
