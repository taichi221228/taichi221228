import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const MarkdownIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-markdown-fill" {...props} />;
});
