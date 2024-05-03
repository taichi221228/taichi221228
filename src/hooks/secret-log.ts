import { useVisibleTask$ } from "@builder.io/qwik";

import { contents } from "./secret-log/contents";

export const useSecretLog = () => {
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		const [content] = contents;
		const { art, text, styles } = content;

		[art, text].map((body) => {
			console.log(`%c${body}`, styles.join(" "));
		});
	});
};
