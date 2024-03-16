import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Game } from "~/components/ui/game/game";
import { NAME, SITENAME, SNS } from "~/constants/info";

import styles from "./index.module.css";

export default component$(() => {
	return (
		<section>
			<div class={styles.wrapper}>
				<div class={styles.container}>
					<div class={styles.title}>
						<h2>Hi all. I am</h2>
						<h1>{NAME}</h1>
						<h3>&gt; Front-end developer</h3>
					</div>
					<div class={styles.game}>
						<Game />
					</div>
					<div class={styles.description}>
						<p class={styles.comment}>
							<span class={styles.line}>{"// "}</span>
							<span class={styles.block}>{"/* "}</span>
							complete the game to continue
							<span class={styles.block}>{" */"}</span>
						</p>
						<p class={styles.comment}>
							<span class={styles.line}>{"// "}</span>
							<span class={styles.block}>{"/* "}</span>
							you can also see it on my Github page
							<span class={styles.block}>{" */"}</span>
						</p>
						<p class={styles.declaration}>
							<span class={styles.kind}>const</span>{" "}
							<span class={styles.identifier}>githubLink</span> = <br />
							<span class={styles.literal}>
								{'"'}
								<a href={SNS.github.url} target="_blank" rel="noreferrer">
									{SNS.github.url}
								</a>
								{'"'}
							</span>
							;
						</p>
					</div>
				</div>
			</div>
		</section>
	);
});

export const head: DocumentHead = {
	title: SITENAME,
	meta: [
		{
			name: "description",
			content: `This is a personal website of ${NAME}.`,
		},
	],
};
