import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const MenuIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-menu-line" {...props} />;
});
