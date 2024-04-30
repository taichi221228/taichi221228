import { component$, useContext, useTask$ } from "@builder.io/qwik";

import styles from "./activitybar.module.css";
import { activities, CURRENT } from "./index";

/** @package */
export const Activitybar = component$(() => {
	const current = useContext(CURRENT);

	useTask$(({ track }) => {
		track(() => current.activity);

		// biome-ignore lint/style/noNonNullAssertion: `current.activity` always takes the value of `activities[number].name`
		current.side = activities.find(({ name }) => name === current.activity)!.contents[0];
	});

	return (
		<nav class={styles.activitybar}>
			<ul>
				{activities.map(({ name, Icon }) => (
					<li key={name}>
						<button
							onClick$={() => {
								current.activity = name;
							}}
							type="button"
							disabled={name === current.activity}
						>
							<Icon class={styles.icon} />
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
});
