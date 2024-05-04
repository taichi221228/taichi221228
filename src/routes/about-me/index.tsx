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
export const getActivity = (activity: Current["activity"]) => {
	// biome-ignore lint/style/noNonNullAssertion:
	return activities.find(({ name }) => name === activity)!;
};

/** @package */
export const getSide = ({ activity, side }: Current) => {
	return getActivity(activity).sides.find(({ name }) => name === side) ?? { name: null, Content: () => <></> };
};

type ActivitySidePairs = {
	[P in (typeof activities)[number]["name"]]: Extract<(typeof activities)[number], { name: P }>["sides"][number]["name"];
};

type Current =
	| {
			[P in keyof ActivitySidePairs]: { activity: P; side: ActivitySidePairs[P] };
	  }[keyof ActivitySidePairs]
	| { activity: keyof ActivitySidePairs; side: null };

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
