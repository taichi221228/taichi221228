import { component$, useContext, useTask$ } from "@builder.io/qwik";

import styles from "./activitybar.module.css";
import { activities, CURRENT, getActivity } from "./index";

/** @package */
export const Activitybar = component$(() => {
	const current = useContext(CURRENT);

	useTask$(({ track }) => {
		track(() => current.activity);

		current.side = getActivity(current).sides[0].name;
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
