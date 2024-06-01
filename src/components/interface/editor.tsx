import { type Component, component$ } from "@builder.io/qwik";

import { Tab, type TabProps } from "./editor/tab";
import styles from "./editor.module.css";

type Props = {
	panes: [{ tab?: TabProps; Content?: Component }] | [{ tab?: TabProps; Content?: Component }, { tab?: TabProps; Content?: Component }];
};

export const Editor = component$(({ panes }: Props) => {
	return (
		<div class={styles.editor}>
			{panes.map(({ tab, Content = component$(() => <></>) }) => {
				return (
					<section key={tab?.item} class={styles.pane}>
						<Tab {...tab} />
						<div class={styles.content}>
							<Content />
						</div>
					</section>
				);
			})}
		</div>
	);
});
