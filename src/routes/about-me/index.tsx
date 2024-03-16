import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { NAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import styles from "./index.module.css";

export default component$(() => {
	return (
		<div>
			<aside>
				<nav>
					<ul>{/* Activitybar */}</ul>
				</nav>
				<div>
					{/* Sidebar */}
					<nav>
						{/* Panel (main) */}
						<div>{/* header */}</div>
						<ul>{/* explorer */}</ul>
					</nav>
					<nav>
						{/* Panel (sub) */}
						<div>{/* header */}</div>
						<ul>{/* contacts */}</ul>
					</nav>
				</div>
			</aside>
			<div>
				<section>
					{/* Pane (main) */}
					<ul>{/* Tabs */}</ul>
					<div>{/* Editor */}</div>
				</section>
				<div>
					{/* Pane (main) */}
					<ul>{/* Tabs */}</ul>
					<div>{/* Editor */}</div>
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
