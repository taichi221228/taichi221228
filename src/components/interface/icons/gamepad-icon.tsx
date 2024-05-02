import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const GamepadIcon = component$<Props>(({ ...props }) => {
	return <Icon type="ri-gamepad-fill" {...props} />;
});
