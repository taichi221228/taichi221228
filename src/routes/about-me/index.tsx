import { type Component, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import {
	GamepadIcon,
	TerminalIcon,
	UserIcon,
} from "~/components/interface/icons";
import { NAME } from "~/constants/info";
import { Sidebar } from "~/routes/about-me/components/sidebar";
import { createPageTitle } from "~/utilities/create-page-title";

import styles from "./index.module.css";

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

export default component$(() => {
	const current =
		useSignal<(typeof activities)[number]["name"]>("personal-info");

	return (
		<div class={styles.container}>
			<aside>
				{/* TODO: For migration. Remove later. */}
				<nav class={styles.activitybar}>
					<ul>
						{activities.map(({ name, Icon }) => (
							<li key={name}>
								<button
									class={[current.value === name && styles.activated]}
									onClick$={() => {
										current.value = name;
									}}
									type="button"
									disabled={current.value === name}
								>
									<Icon class={styles.icon} />
								</button>
							</li>
						))}
					</ul>
				</nav>
				<Sidebar activities={activities} current={current} />
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

export const head: DocumentHead = {
	title: createPageTitle("About Me"),
	meta: [
		{
			name: "description",
			content: `This is a personal website of ${NAME}.`,
		},
	],
};
