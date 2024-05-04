import { type Component, component$, createContextId, type FunctionComponent, useContextProvider, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { GamepadIcon, TerminalIcon, UserIcon } from "~/components/interface/icons";
import { NAME, SITENAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import { Activitybar } from "./activitybar";
import Content from "./contents/content.mdx";
import { Editor } from "./editor";
import styles from "./index.module.css";
import { Sidebar } from "./sidebar";

/** @package */
export const activities = [
	{
		name: "professional-info",
		Icon: TerminalIcon,
		sides: [
			{ name: "experience", Content },
			{ name: "skills", Content },
		],
	},
	{
		name: "personal-info",
		Icon: UserIcon,
		sides: [
			{ name: "bio", Content },
			{ name: "interests", Content },
			{ name: "education", Content },
		],
	},
	{
		name: "hobbies",
		Icon: GamepadIcon,
		sides: [
			{ name: "music", Content },
			{ name: "books", Content },
			{ name: "games", Content },
		],
	},
] as const satisfies { name: string; Icon: Component; sides: { name: string; Content: FunctionComponent }[] }[];

/** @package */
export const sides = {
	"professional-info": [
		{ name: "experience", Content },
		{ name: "skills", Content },
	],
	"personal-info": [
		{ name: "bio", Content },
		{ name: "interests", Content },
		{ name: "education", Content },
	],
	hobbies: [
		{ name: "music", Content },
		{ name: "books", Content },
		{ name: "games", Content },
	],
} as const satisfies Record<(typeof activities)[number]["name"], { name: string; Content: FunctionComponent }[]>;

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
