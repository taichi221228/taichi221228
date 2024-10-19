import { component$ } from "@builder.io/qwik";

import styles from "./triangle-icon.module.css";
import { Icon, type IconProps } from "./icon";

type Props = {
	direction?: "up" | "down" | "left" | "right";
} & IconProps;

/** @package */
export const TriangleIcon = component$(({ direction = "up", class: className, ...props }: Props) => {
	return <Icon class={[className, styles[direction]]} type="ri-triangle-fill" {...props} />;
});
