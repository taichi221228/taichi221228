import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import { SITENAME } from "~/constants/info";

import { Navigation } from "./header/navigation";

import styles from "./header.module.css";

export const Header = component$(() => {
	const location = useLocation();
	const isRoot = "/" === location.url.pathname;

	return (
		<header class={[styles.header, /* TODO: Not a smart way. Need refactoring */ isRoot && styles.root]}>
			<h1 class={styles.title}>
				<Link class={styles.link} aria-current={isRoot && "page"} href="/">
					{SITENAME}
				</Link>
			</h1>
			<Navigation location={location} />
		</header>
	);
});
