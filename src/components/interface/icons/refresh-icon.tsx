import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps as Props } from "./icon";

import styles from "./refresh-icon.module.css";

/** @package */
export const RefreshIcon = component$(({ class: className, ...props }: Props) => {
	return <Icon class={[className, styles.spin]} type="ri-refresh-line" {...props} />;
});
