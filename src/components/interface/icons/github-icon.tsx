import { component$ } from "@builder.io/qwik";

import type { Props } from "../icons";

/** @package */
export const GitHubIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-github-fill"]} />;
});
