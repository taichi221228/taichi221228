import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const PhoneIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-phone-fill" {...props} />;
});
