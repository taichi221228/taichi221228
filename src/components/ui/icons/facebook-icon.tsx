import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

export const FacebookIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-facebook-fill"]} />;
});
