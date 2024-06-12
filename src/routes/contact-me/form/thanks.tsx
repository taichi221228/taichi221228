import { component$ } from "@builder.io/qwik";

import styles from "./thanks.module.css";

type Props = {
	text: "Hello, scaffdog!";
};

/** @package */
export const Thanks = component$(({ text }: Props) => {
	return (
		<div class={styles.container}>
			<h1>{text}</h1>
		</div>
	);
});
