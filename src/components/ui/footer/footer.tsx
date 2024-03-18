import { component$ } from "@builder.io/qwik";

import { SNS } from "~/constants/info";

import styles from "./footer.module.css";

export const Footer = component$(() => {
	return (
		<footer class={styles.footer}>
			<p>find me in:</p>
			{(
				Object.entries(SNS) as [
					keyof typeof SNS,
					(typeof SNS)[keyof typeof SNS],
				][]
			).map(([name, profile]) => {
				return (
					<a
						key={name}
						href={profile.url}
						target="_blank"
						rel="noreferrer"
						class={styles[name]}
					>
						{name === "github" && `@${profile.username}`}
						<i class={`ri-${name}-fill`} />
					</a>
				);
			})}
		</footer>
	);
});
