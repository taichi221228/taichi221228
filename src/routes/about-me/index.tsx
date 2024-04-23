import { type Component, component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { GamepadIcon, TerminalIcon, UserIcon } from "~/components/interface/icons";
import { NAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import { Activitybar, Sidebar } from "./components/";
import styles from "./index.module.css";

/** @package */
export const activities = [
	{
		name: "professional-info",
		Icon: TerminalIcon,
		contents: ["experience", "skills"],
	},
	{
		name: "personal-info",
		Icon: UserIcon,
		contents: ["bio", "interests", "education"],
	},
	{
		name: "hobbies",
		Icon: GamepadIcon,
		contents: ["music", "books", "games"],
	},
] as const satisfies { name: string; Icon: Component; contents: string[] }[];

/** @package */
export type Current = {
	activity: (typeof activities)[number]["name"];
	side: (typeof activities)[number]["contents"][number];
};

/** @private */
export default component$(() => {
	const current = useStore<Current>({
		activity: "personal-info",
		side: "bio",
	});

	return (
		<div class={styles.container}>
			<aside>
				<Activitybar current={current} />
				<Sidebar current={current} />
			</aside>
			<div class={styles.editor}>
				{/*	Editor */}
				<section class={styles.pane}>
					{/* Pane (main) */}
					<ul>{/* Tabs */}</ul>
					<div>{/* Contents */}</div>
				</section>
				<div class={styles.pane}>
					{/* Pane (main) */}
					<ul>{/* Tabs */}</ul>
					<div>{/* Contents */}</div>
				</div>
			</div>
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
