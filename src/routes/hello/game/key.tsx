import { component$ } from "@builder.io/qwik";

import { TriangleIcon } from "~/components/interface/icons";

import styles from "./key.module.css";

type Props = {
	direction?: "up" | "down" | "left" | "right";
};

/** @package */
export const Key = component$(({ direction }: Props) => {
	return (
		<div class={styles.key}>
			<TriangleIcon class={styles.icon} direction={direction} />
		</div>
	);
});
