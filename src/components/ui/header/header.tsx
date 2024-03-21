import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import { SITENAME } from "~/constants/info";

import styles from "./header.module.css";
import { Navigation } from "./navigation";

export const Header = component$(() => {
	const location = useLocation();
	const isRoot = "/" === location.url.pathname;

	return (
		<header class={styles.header}>
			<h1 class={styles.title}>
				<Link
					href="/"
					class={[styles.link, isRoot && styles.disabled]}
					aria-current={isRoot && "page"}
					tabIndex={isRoot ? -1 : 0}
				>
					{SITENAME}
				</Link>
			</h1>
			<Navigation location={location} />
		</header>
	);
});
