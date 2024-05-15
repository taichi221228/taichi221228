import { component$, useContext } from "@builder.io/qwik";

import { Accordion } from "~/components/interface/accordion";
import { FolderIcon, MailIcon, MarkdownIcon, PhoneIcon } from "~/components/interface/icons";
import { EMAIL, PHONE, USERNAME } from "~/constants/info";

import { CURRENT, getActivity } from "./data";
import styles from "./sidebar.module.css";

/** @package */
export const Sidebar = component$(() => {
	const current = useContext(CURRENT);

	return (
		<div class={styles.sidebar}>
			<Accordion as="nav" head={current.activity} shouldOpen={true}>
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
			<Accordion as="nav" head="contacts" shouldOpen={true}>
				<ul>
					<li>
						<a href={`mailto:${EMAIL}`}>
							<MailIcon />
							{USERNAME}
						</a>
					</li>
					<li>
						<a href={`tel:${PHONE}`}>
							<PhoneIcon />
							{PHONE}
						</a>
					</li>
				</ul>
			</Accordion>
		</div>
	);
});
