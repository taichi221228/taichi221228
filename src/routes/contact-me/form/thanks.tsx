import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/interface/button";

import styles from "./thanks.module.css";

/** @package */
export const Thanks = component$(() => {
	return (
		<div class={styles.container}>
			<div class={styles.thanks}>
				<h1>Thank you! 🤘</h1>
				<p>Your message has been accepted. You will receive answer really soon!</p>
				<Button type="button" onClick$={() => {}}>
					send-new-message
				</Button>
			</div>
		</div>
	);
});
