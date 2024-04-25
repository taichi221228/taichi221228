import { component$ } from "@builder.io/qwik";

import type { Props } from "../icons";

/** @package */
export const GamepadIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-gamepad-fill"]} />;
});
