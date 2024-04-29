import { component$ } from "@builder.io/qwik";

import styles from "./tabs.module.css";

export const Tabs = component$(() => {
	return <ul class={styles.tabs} />;
});
