import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

/** @package */
export const CloseIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-close-line"]} />;
});
