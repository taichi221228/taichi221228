import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

/** @package */
export const MarkdownIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-markdown-fill"]} />;
});
