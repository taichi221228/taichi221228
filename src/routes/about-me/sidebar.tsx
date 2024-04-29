import { component$ } from "@builder.io/qwik";

import { Accordion } from "~/components/interface/accordion";
import { FolderIcon, MailIcon, MarkdownIcon, PhoneIcon } from "~/components/interface/icons";
import { EMAIL, PHONE, USERNAME } from "~/constants/info";

import { activities, type Current } from "./index";
import styles from "./sidebar.module.css";

type Props = {
	current: Current;
};

/** @package */
export const Sidebar = component$<Props>(({ current }) => {
	return (
		<div class={styles.sidebar}>
			<Accordion as="nav" shouldOpen={true}>
				<span q:slot="head">{current.activity}</span>
				<ul q:slot="body">
					{
						// biome-ignore lint/style/noNonNullAssertion: `current.activity` always takes the value of `activities[number].name`
						activities
							.find(({ name }) => name === current.activity)!
							.contents.map((content, i) => {
								return (
									<li key={content}>
										<button
											class={content === current.side && styles.activated}
											onClick$={() => {
												current.side = content;
											}}
											type="button"
											disabled={content === current.side}
										>
											<FolderIcon variant={i === 0 ? 1 : i % 2 === 0 ? 3 : i % 3 === 0 ? 1 : 2} />
											{content}
										</button>

										<ul>
											<li>
												<button
													class={content === current.side && styles.activated}
													onClick$={() => {
														current.side = content;
													}}
													type="button"
													disabled={content === current.side}
												>
													<MarkdownIcon />
													index.md
												</button>
											</li>
										</ul>
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
