import { type Component, component$, createContextId, useContextProvider, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { GamepadIcon, TerminalIcon, UserIcon } from "~/components/interface/icons";
import { NAME, SITENAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import { Activitybar } from "./activitybar";
import { Editor } from "./editor";
import styles from "./index.module.css";
import { Sidebar } from "./sidebar";

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

type Current = {
	activity: (typeof activities)[number]["name"];
	side: (typeof activities)[number]["contents"][number];
};

/** @package */
export const CURRENT = createContextId<Current>([SITENAME, "about-me", "current"].join("."));

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
