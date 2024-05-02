import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const GitHubIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-github-fill" {...props} />;
});
