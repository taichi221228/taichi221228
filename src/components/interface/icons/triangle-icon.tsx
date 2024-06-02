import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps } from "./icon";

import styles from "./triangle-icon.module.css";

type Props = {
	direction?: "up" | "down" | "left" | "right";
} & IconProps;

/** @package */
export const TriangleIcon = component$(({ class: className, direction = "up", ...props }: Props) => {
	return <Icon class={[className, styles[direction]]} type="ri-triangle-fill" {...props} />;
});
