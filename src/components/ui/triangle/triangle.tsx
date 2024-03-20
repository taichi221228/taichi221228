import { component$ } from "@builder.io/qwik";

import styles from "./triangle.module.css";

type Props = {
	direction?: "up" | "down" | "left" | "right";
};

export const Triangle = component$(({ direction = "up" }: Props) => {
	return <div class={[styles.triangle, styles[direction]]} />;
});
