import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

export const TerminalIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-terminal-box-fill"]} />;
});
