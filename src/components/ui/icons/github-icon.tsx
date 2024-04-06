import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

export const GitHubIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-github-fill"]} />;
});
