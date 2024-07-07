import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const RefreshIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-refresh-line" {...props} />;
});
