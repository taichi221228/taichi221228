import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import {
	GamepadIcon,
	TerminalIcon,
	UserIcon,
} from "~/components/interface/icons";
import { Accordion } from "~/components/ui/accordion/accordion";
import { Triangle } from "~/components/ui/triangle/triangle";
import { NAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import styles from "./index.module.css";

export default component$(() => {
	const activities = [
		{ name: "professional-info", Icon: TerminalIcon },
		{ name: "personal-info", Icon: UserIcon },
		{ name: "hobbies", Icon: GamepadIcon },
	] as const;
	const current =
		useSignal<(typeof activities)[number]["name"]>("personal-info");

	return (
		<div class={styles.container}>
			<aside>
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
									<Icon />
								</button>
							</li>
						))}
					</ul>
				</nav>
				<div class={styles.sidebar}>
					{/* Sidebar */}
					<nav>
						{/* Panel (main) */}
						{/*<button class={styles.header} type="button">*/}
						{/*	<Triangle direction="down" />*/}
						{/*	{current.value}*/}
						{/*</button>*/}
						<Accordion label={current.value}>
							<ul>
								<li>bio</li>
								<li>interests</li>
								<li>education</li>
								<li>high-school</li>
								<li>university</li>
							</ul>
						</Accordion>
					</nav>
					<nav>
						{/* Panel (sub) */}
						<button class={styles.header} type="button">
							<Triangle direction="down" />
							contacts
						</button>
						<ul>{/* contacts */}</ul>
					</nav>
				</div>
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
