import { component$ } from "@builder.io/qwik";

import { MailIcon, PhoneIcon } from "~/components/interface/icons";
import { EMAIL, PHONE, USERNAME } from "~/constants/info";

import type { AccordionProps } from "./accordion";
import { LinkAccordion } from "./link-accordion";

type Props = Pick<AccordionProps, "shouldOpen">;

/** @package */
export const ContactsAccordion = component$(({ shouldOpen }: Props) => {
	return (
		<LinkAccordion head="contacts" shouldOpen={shouldOpen}>
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
