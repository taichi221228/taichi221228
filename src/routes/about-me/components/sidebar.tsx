import { component$ } from "@builder.io/qwik";

import { Accordion } from "~/components/interface/accordion/accordion";
import { FolderIcon, MailIcon, PhoneIcon } from "~/components/interface/icons";
import { EMAIL, PHONE, USERNAME } from "~/constants/info";

import styles from "./sidebar.module.css";
import { activities, type Current } from "../index";

type Props = {
	current: Current;
};

export const Sidebar = component$<Props>(({ current }) => {
	return (
		<div class={styles.sidebar}>
			<Accordion as="nav" shouldOpen={true}>
				<span q:slot="head">{current.activity}</span>
				<ul q:slot="body">
					{
						// biome-ignore lint/style/noNonNullAssertion:
						activities
							.find(({ name }) => name === current.activity)!
							.contents.map((content, i) => {
								return (
									<li key={content}>
										<button
											class={i === 0 && styles.activated}
											type="button"
											disabled={i === 0}
										>
											<FolderIcon
												variant={
													i === 0 ? 1 : i % 2 === 0 ? 3 : i % 3 === 0 ? 1 : 2
												}
											/>
											{content}
										</button>
									</li>
								);
							})
					}
				</ul>
			</Accordion>
			<Accordion as="nav" shouldOpen={true}>
				<span q:slot="head">contacts</span>
				<ul q:slot="body">
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
