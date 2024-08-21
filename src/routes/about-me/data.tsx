import { type Component, component$, createContextId, type JSXOutput } from "@builder.io/qwik";

import { GamepadIcon, TerminalIcon, UserIcon } from "~/components/interface/icons";
import { SITENAME } from "~/constants/info";

import Content_ from "./contents/content.mdx";
import Music_ from "./contents/music.mdx";

/* TODO: MDX is processed as `WrappedMdxContent`, which is compiled directly using `_jsxC`.
    Since the QRL is not resolved via `componentQrl`, I need to change it is needed to be serializable. */
const Content = component$(() => <Content_ />);
const Music = component$(() => <Music_ />);

type Activities = typeof activities;

/** @package */
export const activities = [
	{
		name: "professional-info",
		Icon: TerminalIcon,
		sides: [
			{
				name: "experience",
				content: <Content />,
			},
			{
				name: "skills",
				content: <Content />,
			},
		],
	},
	{
		name: "personal-info",
		Icon: UserIcon,
		sides: [
			{
				name: "bio",
				content: <Content />,
			},
			{
				name: "interests",
				content: <Content />,
			},
			{
				name: "education",
				content: <Content />,
			},
		],
	},
	{
		name: "hobbies",
		Icon: GamepadIcon,
		sides: [
			{
				name: "music",
				content: <Music />,
			},
			{
				name: "books",
				content: <Content />,
			},
			{
				name: "games",
				content: <Content />,
			},
		],
	},
] as const satisfies { name: string; Icon: Component; sides: { name: string; content: JSXOutput }[] }[];

/** @package */
export const getActivity = (activity: Current["activity"]) => {
	// biome-ignore lint/style/noNonNullAssertion:
	return activities.find(({ name }) => name === activity)!;
};

/** @package */
export const getSide = ({ activity, side }: Current) => {
	return getActivity(activity).sides.find(({ name }) => name === side) ?? { name: null, content: <></> };
};

type ActivitySidesMap = {
	[ActivityName in Activities[number]["name"]]: Extract<Activities[number], { name: ActivityName }>["sides"][number]["name"];
};

/** @package */
export type Current = {
	[ActivityName in keyof ActivitySidesMap]: { activity: ActivityName; side: ActivitySidesMap[ActivityName] };
}[keyof ActivitySidesMap];

/** @package */
export const CURRENT = createContextId<Current>([SITENAME, "about-me", "current"].join("."));
