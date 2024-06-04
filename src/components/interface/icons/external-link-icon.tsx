import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const ExternalLinkIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-external-link-line" {...props} />;
});
