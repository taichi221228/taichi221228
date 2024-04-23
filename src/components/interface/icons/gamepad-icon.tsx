import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

/** @package */
export const GamepadIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-gamepad-fill"]} />;
});
