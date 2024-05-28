import { component$ } from "@builder.io/qwik";

import { Accordion } from "~/components/interface/accordions/accordion";
import { MailIcon, PhoneIcon } from "~/components/interface/icons";
import { EMAIL, PHONE, USERNAME } from "~/constants/info";

import styles from "./contacts-accordion.module.css";

/** @package */
export const ContactsAccordion = component$(() => {
	return (
		<Accordion head="contacts" shouldOpen={true}>
			<ul class={styles.body}>
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
	);
});
