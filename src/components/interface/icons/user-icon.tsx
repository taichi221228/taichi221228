import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

/** @package */
export const UserIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-user-4-fill"]} />;
});
