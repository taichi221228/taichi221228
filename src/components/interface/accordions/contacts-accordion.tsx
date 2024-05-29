import { component$ } from "@builder.io/qwik";

import { MailIcon, PhoneIcon } from "~/components/interface/icons";
import { EMAIL, PHONE, USERNAME } from "~/constants/info";

import { LinkAccordion } from "./link-accordion";

/** @package */
export const ContactsAccordion = component$(() => {
	return (
		<LinkAccordion head="contacts" shouldOpen={true}>
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
		</LinkAccordion>
	);
});
