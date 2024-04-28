import { component$ } from "@builder.io/qwik";

import styles from "./tab.module.css";

export const Tab = component$(() => {
	return <ul class={styles.tab} />;
});
