import { component$ } from "@builder.io/qwik";

import styles from "./food.module.css";

type Props = {
	isEaten?: boolean;
};

/** @package */
export const Food = component$<Props>(({ isEaten = false }) => {
	return <div class={[isEaten && styles.eaten, styles.food]} />;
});
