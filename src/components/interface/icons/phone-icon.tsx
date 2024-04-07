import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

export const PhoneIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-phone-fill"]} />;
});
