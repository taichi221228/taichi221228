import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

/** @package */
export const XIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-twitter-x-fill"]} />;
});
