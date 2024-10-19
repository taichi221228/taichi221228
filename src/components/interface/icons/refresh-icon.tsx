import { component$ } from "@builder.io/qwik";

import styles from "./refresh-icon.module.css";
import { Icon, type IconProps } from "./icon";

type Props = {
	isAnimating?: boolean;
} & IconProps;

/** @package */
export const RefreshIcon = component$(({ isAnimating = false, class: className, ...props }: Props) => {
	return <Icon class={[className, isAnimating && styles.spin]} type="ri-refresh-line" {...props} />;
});
