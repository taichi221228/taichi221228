import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

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
								type="button"
								disabled={current.value === 0}
								onClick$={() => {
									current.value = 0;
								}}
								class={[current.value === 0 && styles.activated]}
							>
								<i class="ri-terminal-box-fill" />
							</button>
						</li>
						<li>
							<button
								type="button"
								disabled={current.value === 1}
								onClick$={() => {
									current.value = 1;
								}}
								class={[current.value === 1 && styles.activated]}
							>
								<i class="ri-user-4-fill" />
							</button>
						</li>
						<li>
							<button
								type="button"
								disabled={current.value === 2}
								onClick$={() => {
									current.value = 2;
								}}
								class={[current.value === 2 && styles.activated]}
							>
								<i class="ri-gamepad-fill" />
							</button>
						</li>
					</ul>
				</nav>
				<div class={styles.sidebar}>
					{/* Sidebar */}
					<nav>
						{/* Panel (main) */}
						<button class={styles.header} type="button">
							personal-info{/* TEMP: hardcode */}
						</button>
						<ul>{/* explorer */}</ul>
					</nav>
					<nav>
						{/* Panel (sub) */}
						<button class={styles.header} type="button">
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
