import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const CloseIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-close-line" {...props} />;
});
