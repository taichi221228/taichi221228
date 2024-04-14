import { component$, useTask$ } from "@builder.io/qwik";

import styles from "./activitybar.module.css";
import { activities, type Current } from "../index";

type Props = {
	current: Current;
};

export const Activitybar = component$<Props>(({ current }) => {
	useTask$(({ track }) => {
		track(() => current.activity);

		// biome-ignore lint/style/noNonNullAssertion:
		current.side = activities.find(
			({ name }) => name === current.activity,
		)!.contents[0];
	});

	return (
		<nav class={styles.activitybar}>
			<ul>
				{activities.map(({ name, Icon }) => (
					<li key={name}>
						<button
							class={[name === current.activity && styles.activated]}
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
