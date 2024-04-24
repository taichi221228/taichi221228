import { component$ } from "@builder.io/qwik";

import { Triangle, type TriangleProps } from "~/components/interface/triangle/triangle";

import styles from "./key.module.css";

type Props = TriangleProps;

/** @package */
export const Key = component$<Props>(({ direction }) => {
	return (
		<div class={styles.key}>
			<Triangle direction={direction} />
		</div>
	);
});
