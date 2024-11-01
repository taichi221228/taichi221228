import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { NAME, SNSS } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";

import styles from "./index.module.css";
import { Game } from "./game";

/** @private */
export default component$(() => {
	return (
		<section class={styles.wrapper}>
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
						you can also see it on my GitHub page
						<span class={styles.block}>{" */"}</span>
					</p>
					<p class={styles.declaration}>
						<span class={styles.kind}>const</span> <span class={styles.identifier}>githubLink</span> <span class={styles.equal}>=</span> <br />
						<span class={styles.literal}>
							<span class={styles.double}>{'"'}</span>
							<span class={styles.back}>{"`"}</span>
							<a rel="noreferrer" href={SNSS.github.url} target="_blank">
								{SNSS.github.url}
							</a>
							<span class={styles.double}>{'"'}</span>
							<span class={styles.back}>{"`"}</span>
						</span>
						<span class={styles.semi}>;</span>
					</p>
				</div>
			</div>
		</section>
	);
});

/** @private */
export const head: DocumentHead = {
	title: createPageTitle(),
	meta: [
		{
			name: "description",
			content: `This is a personal website of ${NAME}.`,
		},
	],
};
