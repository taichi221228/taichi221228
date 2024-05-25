import { component$ } from "@builder.io/qwik";

import { Accordion } from "~/components/interface/accordion";
import { MailIcon, PhoneIcon } from "~/components/interface/icons";
import { EMAIL, PHONE, USERNAME } from "~/constants/info";

import styles from "./sidebar.module.css";

/** @package */
export const Sidebar = component$(() => {
	return (
		<div class={styles.sidebar}>
			<Accordion head="contacts" shouldOpen={true}>
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
