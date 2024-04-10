import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Accordion } from "~/components/interface/accordion/accordion";
import {
	FolderIcon,
	GamepadIcon,
	MailIcon,
	PhoneIcon,
	TerminalIcon,
	UserIcon,
} from "~/components/interface/icons";
import { EMAIL, NAME, PHONE, USERNAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import styles from "./index.module.css";

const activities = [
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
] as const;

export default component$(() => {
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
									<Icon class={styles.icon} />
								</button>
							</li>
						))}
					</ul>
				</nav>
				<div class={styles.sidebar}>
					<Accordion as="nav" shouldOpen={true}>
						<span q:slot="head">{current.value}</span>
						<ul q:slot="body">
							{(
								activities.find(({ name }) => name === current.value)
									?.contents ?? []
							).map((content, i) => {
								return (
									<li key={content}>
										<button
											class={i === 0 && styles.activated}
											type="button"
											disabled={i === 0}
										>
											<FolderIcon
												variant={
													i === 0 ? 1 : i % 2 === 0 ? 3 : i % 3 === 0 ? 1 : 2
												}
											/>
											{content}
										</button>
									</li>
								);
							})}
						</ul>
					</Accordion>
					<Accordion as="nav" shouldOpen={true}>
						<span q:slot="head">contacts</span>
						<ul q:slot="body">
							<li>
								<a href={`mailto:${EMAIL}`}>
									<MailIcon />
									{USERNAME}
								</a>
							</li>
							<li>
								<a href={`tel:${PHONE}`}>
									<PhoneIcon />
									{PHONE}
								</a>
							</li>
						</ul>
					</Accordion>
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
