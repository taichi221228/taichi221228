import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { NAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import styles from "./index.module.css";

export default component$(() => {
	return (
		<div class={styles.container}>
			<aside>
				<nav class={styles.activitybar}>
					<ul>{/* Activitybar */}</ul>
				</nav>
				<div class={styles.sidebar}>
					{/* Sidebar */}
					<nav>
						{/* Panel (main) */}
						<div>{/* header */}</div>
						<ul>{/* explorer */}</ul>
					</nav>
					<nav>
						{/* Panel (sub) */}
						<div>{/* header */}</div>
						<ul>{/* contacts */}</ul>
					</nav>
				</div>
			</aside>
			<section class={styles.pane}>
				{/* Pane (main) */}
				<ul>{/* Tabs */}</ul>
				<div>{/* Editor */}</div>
			</section>
			<div class={styles.pane}>
				{/* Pane (main) */}
				<ul>{/* Tabs */}</ul>
				<div>{/* Editor */}</div>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: createPageTitle("About Me"),
	meta: [
		{
			name: "description",
			content: `This is a personal website of ${NAME}.`,
		},
	],
};
