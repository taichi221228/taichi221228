import { component$ } from "@builder.io/qwik";
import type { RouteLocation } from "@builder.io/qwik-city";

import { Link } from "~/components/functional/link/link";

import styles from "./navigation.module.css";

const items = ["hello", "about-me", "projects", "blog", "contact-me"];

type Props = {
	location: RouteLocation;
};

export const Navigation = component$<Props>(({ location }) => {
	return (
		<nav class={styles.navigation}>
			<ul>
				{items.map((item) => {
					const text = `_${item}`;
					const pathname = item === "hello" ? "/" : `/${item}/`;
					const isCurrent = pathname === location.url.pathname;

					return (
						<li key={item}>
							<Link
								href={pathname}
								isDisabled={isCurrent}
								class={[styles.link, isCurrent && styles.activated]}
							>
								{text}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
});
