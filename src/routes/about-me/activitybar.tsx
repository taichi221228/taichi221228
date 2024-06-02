import { component$, useContext, useTask$ } from "@builder.io/qwik";

import { activities, CURRENT, getActivity } from "./data";

import styles from "./activitybar.module.css";

/** @package */
export const Activitybar = component$(() => {
	const current = useContext(CURRENT);

	useTask$(({ track }) => {
		track(() => current.activity);

		current.side = getActivity(current.activity).sides[0].name;
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
