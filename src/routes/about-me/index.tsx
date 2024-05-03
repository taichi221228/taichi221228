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
	},
	{
		name: "personal-info",
		Icon: UserIcon,
	},
	{
		name: "hobbies",
		Icon: GamepadIcon,
	},
] as const satisfies { name: string; Icon: Component }[];

/** @package */
export const sides = {
	"professional-info": [{ name: "experience" }, { name: "skills" }],
	"personal-info": [{ name: "bio" }, { name: "interests" }, { name: "education" }],
	hobbies: [{ name: "music" }, { name: "books" }, { name: "games" }],
} as const satisfies Record<(typeof activities)[number]["name"], { name: string }[]>;

type Current = {
	activity: (typeof activities)[number]["name"];
	side: (typeof sides)[(typeof activities)[number]["name"]][number]["name"] | null;
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
