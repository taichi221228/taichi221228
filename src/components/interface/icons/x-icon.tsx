import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const XIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-twitter-x-fill" {...props} />;
});
