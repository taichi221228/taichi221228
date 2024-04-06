import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

export const XIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-twitter-x-fill"]} />;
});
