import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

/** @package */
export const TerminalIcon = component$(({ ...props }: Props) => {
	return <Icon type="ri-terminal-box-fill" {...props} />;
});
