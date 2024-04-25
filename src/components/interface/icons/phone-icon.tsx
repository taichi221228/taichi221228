import { component$ } from "@builder.io/qwik";

import type { Props } from "../icons";

/** @package */
export const PhoneIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-phone-fill"]} />;
});
