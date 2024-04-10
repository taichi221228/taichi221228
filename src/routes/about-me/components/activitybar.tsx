import { component$, type Signal } from "@builder.io/qwik";

import styles from "./activitybar.module.css";
import { activities } from "../index";

type Props = {
	current: Signal<(typeof activities)[number]["name"]>;
};

export const Activitybar = component$<Props>(({ current }) => {
	return (
		<nav class={styles.activitybar}>
			<ul>
				{activities.map(({ name, Icon }) => (
					<li key={name}>
						<button
							class={[current.value === name && styles.activated]}
							onClick$={() => {
								current.value = name;
							}}
							type="button"
							disabled={current.value === name}
						>
							<Icon class={styles.icon} />
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
});
