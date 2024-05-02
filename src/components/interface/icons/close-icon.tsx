import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const CloseIcon = component$<Props>(({ ...props }) => {
	return <Icon type="ri-close-line" {...props} />;
});
