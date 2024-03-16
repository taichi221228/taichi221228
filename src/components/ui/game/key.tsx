import { component$ } from "@builder.io/qwik";

import styles from "./key.module.css";

type Props = {
	direction: "up" | "down" | "left" | "right";
};

export const Key = component$<Props>(({ direction }) => {
	return (
		<div class={styles.key}>
			<span class={styles[direction]} />
		</div>
	);
});
