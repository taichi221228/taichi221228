import { component$ } from "@builder.io/qwik";

import { Accordion, ContactsAccordion } from "~/components/interface/accordions";
import { ExternalLinkIcon } from "~/components/interface/icons";

import styles from "./sidebar.module.css";

/** @package */
export const Sidebar = component$(() => {
	return (
		<div class={styles.sidebar}>
			<ContactsAccordion />
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
