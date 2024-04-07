import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Accordion } from "~/components/interface/accordion/accordion";
import {
	GamepadIcon,
	MailIcon,
	PhoneIcon,
	TerminalIcon,
	UserIcon,
} from "~/components/interface/icons";
import { EMAIL, NAME, PHONE, USERNAME } from "~/constants/info";
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
									<Icon class={styles.icon} />
								</button>
							</li>
						))}
					</ul>
				</nav>
				<div class={styles.sidebar}>
					{/* Sidebar */}
					{/* Panel (main) */}
					<Accordion as="nav" label={current.value}>
						<ul>
							<li>bio</li>
							<li>interests</li>
							<li>education</li>
							<li>high-school</li>
							<li>university</li>
						</ul>
					</Accordion>
					<Accordion as="nav" label="contacts" shouldOpen={true}>
						<ul>
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
