import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

/** @package */
export const MailIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-mail-fill"]} />;
});
