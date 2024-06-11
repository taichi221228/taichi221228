import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const PinIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-pushpin-line" {...props} />;
});
