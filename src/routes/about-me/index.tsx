import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { GamepadIcon, TerminalIcon, UserIcon } from "~/components/ui/icons";
import { Triangle } from "~/components/ui/triangle/triangle";
import { NAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import styles from "./index.module.css";

export default component$(() => {
	const current = useSignal<0 | 1 | 2>(0);

	return (
		<div class={styles.container}>
			<aside>
				<nav class={styles.activitybar}>
					<ul>
						<li>
							<button
								class={[current.value === 0 && styles.activated]}
								onClick$={() => {
									current.value = 0;
								}}
								type="button"
								disabled={current.value === 0}
							>
								<TerminalIcon />
							</button>
						</li>
						<li>
							<button
								class={[current.value === 1 && styles.activated]}
								onClick$={() => {
									current.value = 1;
								}}
								type="button"
								disabled={current.value === 1}
							>
								<UserIcon />
							</button>
						</li>
						<li>
							<button
								class={[current.value === 2 && styles.activated]}
								onClick$={() => {
									current.value = 2;
								}}
								type="button"
								disabled={current.value === 2}
							>
								<GamepadIcon />
							</button>
						</li>
					</ul>
				</nav>
				<div class={styles.sidebar}>
					{/* Sidebar */}
					<nav>
						{/* Panel (main) */}
						<button class={styles.header} type="button">
							<Triangle direction="down" />
							personal-info{/* TEMP: hardcode */}
						</button>
						<ul>{/* explorer */}</ul>
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
