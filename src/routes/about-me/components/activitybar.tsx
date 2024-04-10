import { component$ } from "@builder.io/qwik";

import styles from "./activitybar.module.css";
import { activities, type Current } from "../index";

type Props = {
	current: Current;
};

export const Activitybar = component$<Props>(({ current }) => {
	return (
		<nav class={styles.activitybar}>
			<ul>
				{activities.map(({ name, Icon }) => (
					<li key={name}>
						<button
							class={[current.activity === name && styles.activated]}
							onClick$={() => {
								current.activity = name;
							}}
							type="button"
							disabled={current.activity === name}
						>
							<Icon class={styles.icon} />
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
});
