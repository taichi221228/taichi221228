import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import { type Sns, SNSS, type Snss } from "~/constants/info";

import styles from "./footer.module.css";

export const Footer = component$(() => {
	const location = useLocation();
	const isRoot = "/" === location.url.pathname;

	return (
		<footer class={[styles.footer, /* TODO: Not a smart way. Need refactoring */ isRoot && styles.root]}>
			<p>find me in:</p>
			{((["facebook", "x", "github"] satisfies (keyof Snss)[]).map((name) => [name, SNSS[name]]) satisfies [keyof Snss, Sns][]).map(
				([name, { Logo, ...profile }]) => {
					return (
						<a key={name} class={styles[name]} rel="noreferrer" href={profile.url} target="_blank">
							{name === "github" && `@${profile.username}`}
							<Logo class={styles.icon} />
						</a>
					);
				},
			)}
		</footer>
	);
});
