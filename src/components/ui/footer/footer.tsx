import { component$ } from "@builder.io/qwik";

import { type Sns, SNS } from "~/constants/info";

import styles from "./footer.module.css";

export const Footer = component$(() => {
	return (
		<footer class={styles.footer}>
			<p>find me in:</p>
			{(
				(["facebook", "x", "github"] satisfies (keyof Sns)[]).map((name) => [
					name,
					SNS[name],
				]) satisfies [keyof Sns, Sns[keyof Sns]][]
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
