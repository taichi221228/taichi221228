import { type Component, createContextId, type FunctionComponent } from "@builder.io/qwik";

import { GamepadIcon, TerminalIcon, UserIcon } from "~/components/interface/icons";
import { SITENAME } from "~/constants/info";

import Content from "./contents/content.mdx";

type Activities = typeof activities;

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

type ActivitySidesMap = {
	[ActivityName in Activities[number]["name"]]: Extract<Activities[number], { name: ActivityName }>["sides"][number]["name"];
};

/** @package */
export type Current =
	| {
			[ActivityName in keyof ActivitySidesMap]: { activity: ActivityName; side: ActivitySidesMap[ActivityName] };
	  }[keyof ActivitySidesMap]
	| { activity: keyof ActivitySidesMap; side: null };

/** @package */
export const CURRENT = createContextId<Current>([SITENAME, "about-me", "current"].join("."));
