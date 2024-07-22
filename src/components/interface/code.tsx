import { component$, useSignal, useTask$ } from "@builder.io/qwik";

import { codeToHtml } from "shiki";

type Props = {
	text: string;
};

export const Code = component$(({ text }: Props) => {
	const html = useSignal<string>();

	useTask$(async () => {
		html.value = await codeToHtml(text, {
			lang: "ts",
			theme: "solarized-light",
		});
	});

	// biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki is a trusted source
	return <div dangerouslySetInnerHTML={html.value} />;
});
