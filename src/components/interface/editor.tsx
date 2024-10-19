import { component$, type JSXOutput } from "@builder.io/qwik";

import styles from "./editor.module.css";
import { Tab, type TabProps } from "./editor/tab";

type Props = {
	panes: [{ tab?: TabProps; content?: JSXOutput }] | [{ tab?: TabProps; content?: JSXOutput }, { tab?: TabProps; content?: JSXOutput }];
};

export const Editor = component$(({ panes }: Props) => {
	return (
		<div class={styles.editor}>
			{panes.map(({ tab, content = <></> }) => {
				return (
					<section key={tab?.item} class={styles.pane}>
						<Tab {...tab} />
						<div class={styles.content}>{content}</div>
					</section>
				);
			})}
		</div>
	);
});
