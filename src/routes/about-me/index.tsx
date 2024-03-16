import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { NAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import styles from "./index.module.css";

export default component$(() => {
	return <h1>About Me</h1>;
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
