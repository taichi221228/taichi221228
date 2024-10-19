import { component$ } from "@builder.io/qwik";

import { EMAIL, PHONE, USERNAME } from "~/constants/info";
import { MailIcon, PhoneIcon } from "~/components/interface/icons";

import { LinksAccordion } from "./links-accordion";

/** @package */
export const ContactsAccordion = component$(() => {
	return (
		<LinksAccordion
			head="contacts"
			items={[
				{
					key: "mail",
					item: (
						<a href={`mailto:${EMAIL}`}>
							<MailIcon />
							{USERNAME}
						</a>
					),
				},
				{
					key: "phone",
					item: (
						<a href={`tel:${PHONE}`}>
							<PhoneIcon />
							{PHONE}
						</a>
					),
				},
			]}
		/>
	);
});
