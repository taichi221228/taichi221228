import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps } from "./icon";

import styles from "./refresh-icon.module.css";

type Props = {
	isAnimating?: boolean;
} & IconProps;

/** @package */
export const RefreshIcon = component$(({ isAnimating = true, class: className, ...props }: Props) => {
	return <Icon class={[className, isAnimating && styles.spin]} type="ri-refresh-line" {...props} />;
});
