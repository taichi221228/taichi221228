import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { NAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import { Activitybar } from "./activitybar";
import { CURRENT, type Current } from "./data";
import { Editor } from "./editor";
import styles from "./index.module.css";
import { Sidebar } from "./sidebar";

/** @private */
export default component$(() => {
	const current = useStore<Current>({
		activity: "personal-info",
		side: "bio",
	});

	useContextProvider(CURRENT, current);

	return (
		<div class={styles.container}>
			<aside>
				<Activitybar />
				<Sidebar />
			</aside>
			<Editor />
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
