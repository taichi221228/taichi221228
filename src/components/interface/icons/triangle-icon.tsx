import { component$ } from "@builder.io/qwik";

import type { Props as IconProps } from "./index";
import styles from "./triangle.module.css";

type Props = IconProps & {
	direction?: "up" | "down" | "left" | "right";
};

/** @package */
export const TriangleIcon = component$<Props>(({ class: c, direction = "up" }) => {
	return <i class={[c, styles[direction], "ri-triangle-fill"]} />;
});
