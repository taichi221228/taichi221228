import { component$ } from "@builder.io/qwik";

import { type Snss, SNSS, type Sns } from "~/constants/info";

import styles from "./footer.module.css";

export const Footer = component$(() => {
	return (
		<footer class={styles.footer}>
			<p>find me in:</p>
			{(
				(["facebook", "x", "github"] satisfies (keyof Snss)[]).map((name) => [
					name,
					SNSS[name],
				]) satisfies [keyof Snss, Sns][]
			).map(([name, { Logo, ...profile }]) => {
				return (
					<a
						key={name}
						class={styles[name]}
						rel="noreferrer"
						href={profile.url}
						target="_blank"
					>
						{name === "github" && `@${profile.username}`}
						<Logo />
					</a>
				);
			})}
		</footer>
	);
});
