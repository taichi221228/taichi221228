import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import { SITENAME } from "~/constants/info";

import styles from "./header.module.css";
import { Navigation } from "./navigation";

export const Header = component$(() => {
	const location = useLocation();
	const isRoot = "/" === location.url.pathname;

	return (
		<header class={styles.header}>
			<h1 class={styles.title}>
				{isRoot ? SITENAME : <a href="/">{SITENAME}</a>}
			</h1>
			<Navigation location={location} />
		</header>
	);
});
