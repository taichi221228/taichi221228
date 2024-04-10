import { component$, type Signal } from "@builder.io/qwik";

import { Accordion } from "~/components/interface/accordion/accordion";
import { FolderIcon, MailIcon, PhoneIcon } from "~/components/interface/icons";
import { EMAIL, PHONE, USERNAME } from "~/constants/info";

import styles from "./sidebar.module.css";
import type { activities } from "../index";

type Props = {
	activities: typeof activities;
	current: Signal<(typeof activities)[number]["name"]>;
};

export const Sidebar = component$<Props>(({ activities, current }) => {
	return (
		<div class={styles.sidebar}>
			<Accordion as="nav" shouldOpen={true}>
				<span q:slot="head">{current.value}</span>
				<ul q:slot="body">
					{(
						activities.find(({ name }) => name === current.value)?.contents ??
						[]
					).map((content, i) => {
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
					})}
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
