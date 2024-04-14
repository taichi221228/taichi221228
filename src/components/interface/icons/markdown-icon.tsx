import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

export const MarkdownIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-markdown-fill"]} />;
});