import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const MailIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-mail-fill" {...props} />;
});
