import { component$, useContext } from "@builder.io/qwik";

import { Accordion, ContactsAccordion } from "~/components/interface/accordions";
import { FolderIcon, MarkdownIcon } from "~/components/interface/icons";

import { CURRENT, getActivity } from "./data";

import styles from "./sidebar.module.css";

/** @package */
export const Sidebar = component$(() => {
	const current = useContext(CURRENT);

	return (
		<div class={styles.sidebar}>
			<Accordion shouldOpen head={current.activity} as="nav">
				<ul>
					{getActivity(current.activity).sides.map(({ name }, i) => {
						return (
							<li key={name}>
								<button
									onClick$={() => {
										current.side = name;
									}}
									type="button"
									disabled={name === current.side}
								>
									<FolderIcon variant={i === 0 ? 1 : i % 2 === 0 ? 3 : i % 3 === 0 ? 1 : 2} />
									{name}
								</button>

								<ul>
									<li>
										<button
											onClick$={() => {
												current.side = name;
											}}
											type="button"
											disabled={name === current.side}
										>
											<MarkdownIcon />
											index.md
										</button>
									</li>
								</ul>
							</li>
						);
					})}
				</ul>
			</Accordion>
			<ContactsAccordion />
		</div>
	);
});
