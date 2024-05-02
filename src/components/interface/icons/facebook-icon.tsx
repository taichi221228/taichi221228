import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const FacebookIcon = component$<Props>(({ ...props }) => {
	return <Icon type="ri-facebook-fill" {...props} />;
});
