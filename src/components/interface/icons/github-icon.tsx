import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps } from "./icon";

/** @package */
export const GitHubIcon = component$<IconProps>(({ ...props }) => {
	return <Icon type="ri-github-fill" {...props} />;
});
