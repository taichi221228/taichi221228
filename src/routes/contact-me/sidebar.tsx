import { component$ } from "@builder.io/qwik";

import { Accordion } from "~/components/interface/accordion";
import { ExternalLinkIcon, MailIcon, PhoneIcon } from "~/components/interface/icons";
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
			<Accordion head="find-me-also-in" shouldOpen={true}>
				<ul>
					<li>
						<a rel="noreferrer" href="https://youtube.com" target="_blank">
							<ExternalLinkIcon />
							YouTube channel
						</a>
					</li>
					<li>
						<a rel="noreferrer" href="https://gurushots.com" target="_blank">
							<ExternalLinkIcon />
							GuruShots profile
						</a>
					</li>
					<li>
						<a rel="noreferrer" href="https://instagram.com" target="_blank">
							<ExternalLinkIcon />
							Instagram account
						</a>
					</li>
					<li>
						<a rel="noreferrer" href="https://twitch.tv" target="_blank">
							<ExternalLinkIcon />
							Twitch profile
						</a>
					</li>
				</ul>
			</Accordion>
		</div>
	);
});
