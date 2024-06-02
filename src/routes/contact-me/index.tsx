import { component$ } from "@builder.io/qwik";

import { Editor } from "~/components/interface/editor";

import { Form } from "./form";
import styles from "./index.module.css";
import { Sidebar } from "./sidebar";

/** @private */
export default component$(() => {
	return (
		<div class={styles.container}>
			<aside>
				<Sidebar />
			</aside>
			<Editor
				panes={[
					{
						tab: { item: "contact-me" },
						content: <Form />,
					},
					{},
				]}
			/>
		</div>
	);
});
