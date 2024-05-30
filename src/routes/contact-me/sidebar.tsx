import { component$ } from "@builder.io/qwik";

import { ContactsAccordion, LinksAccordion } from "~/components/interface/accordions";
import { ExternalLinkIcon } from "~/components/interface/icons";

import styles from "./sidebar.module.css";

/** @package */
export const Sidebar = component$(() => {
	return (
		<div class={styles.sidebar}>
			<ContactsAccordion />
			<LinksAccordion
				head="find-me-also-in"
				items={[
					{
						key: "youtube",
						item: (
							<a rel="noreferrer" href="https://youtube.com" target="_blank">
								<ExternalLinkIcon />
								YouTube channel
							</a>
						),
					},
					{
						key: "gurushots",
						item: (
							<a rel="noreferrer" href="https://gurushots.com" target="_blank">
								<ExternalLinkIcon />
								GuruShots profile
							</a>
						),
					},
					{
						key: "instagram",
						item: (
							<a rel="noreferrer" href="https://instagram.com" target="_blank">
								<ExternalLinkIcon />
								Instagram account
							</a>
						),
					},
					{
						key: "twitch",
						item: (
							<a rel="noreferrer" href="https://twitch.tv" target="_blank">
								<ExternalLinkIcon />
								Twitch profile
							</a>
						),
					},
				]}
			/>
		</div>
	);
});
