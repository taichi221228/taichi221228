import { component$ } from "@builder.io/qwik";
import { Link, type RouteLocation } from "@builder.io/qwik-city";

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
								class={isCurrent && styles.activated}
								aria-current={isCurrent && "page"}
								href={pathname}
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
