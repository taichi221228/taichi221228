import { type Component, component$ } from "@builder.io/qwik";

import { Pane } from "~/components/interface/editor/pane";

import styles from "./editor.module.css";

import type { TabProps } from "~/components/interface/tab";

type Props = {
	panes: [{ tab?: TabProps; Content?: Component }] | [{ tab?: TabProps; Content?: Component }, { tab?: TabProps; Content?: Component }];
};

export const Editor = component$(({ panes }: Props) => {
	return (
		<div class={styles.editor}>
			{panes.map(({ tab, Content = component$(() => <></>) }) => {
				return (
					<Pane key={tab?.item} tab={{ ...tab }}>
						<Content />
					</Pane>
				);
			})}
		</div>
	);
});
