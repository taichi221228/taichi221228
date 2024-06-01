import { $, component$, useContextProvider, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Editor } from "~/components/interface/editor";
import { NAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import { Activitybar } from "./activitybar";
import { CURRENT, type Current, getSide } from "./data";
import { Sidebar } from "./sidebar";

import styles from "./index.module.css";

/** @private */
export default component$(() => {
	const current = useStore<Current>({
		activity: "personal-info",
		side: "bio",
	});

	const { Content } = getSide(current);

	useContextProvider(CURRENT, current);

	return (
		<div class={styles.container}>
			<aside>
				<Activitybar />
				<Sidebar />
			</aside>
			<Editor
				panes={[
					{
						tab: {
							item: current.side,
							onClick$: $(() => {
								current.side = null;
							}),
						},
						Content,
					},
				]}
			/>
		</div>
	);
});

/** @private */
export const head: DocumentHead = {
	title: createPageTitle("About Me"),
	meta: [
		{
			name: "description",
			content: `This is a personal website of ${NAME}.`,
		},
	],
};
