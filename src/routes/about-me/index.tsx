import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { NAME } from "~/constants/info";
import { Editor } from "~/components/interface/editor";
import { createPageTitle } from "~/utilities/create-page-title";

import styles from "./index.module.css";
import { Activitybar } from "./activitybar";
import { CURRENT, type Current, getSide } from "./data";
import { Sidebar } from "./sidebar";

/** @private */
export default component$(() => {
	const current = useStore<Current>({
		activity: "personal-info",
		side: "bio",
	});

	const { content } = getSide(current);

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
						tab: { item: current.side },
						content,
					},
					{},
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
