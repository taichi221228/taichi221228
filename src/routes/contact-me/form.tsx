import { component$ } from "@builder.io/qwik";

import { useForm } from "@modular-forms/qwik";

import styles from "./form.module.css";

type Scheme = {
	name: string;
	email: string;
	message: string;
};

/** @package */
export const Form = component$(() => {
	const [, { Form, Field }] = useForm<Scheme>({
		loader: {
			value: {
				name: "",
				email: "",
				message: "",
			},
		},
	});

	return (
		<Form class={styles.form}>
			<div class={styles.item}>
				<Field name="name">
					{(_, props) => (
						<>
							<label for="name">_name:</label>
							<input id="name" {...props} />
						</>
					)}
				</Field>
			</div>
			<div class={styles.item}>
				<Field name="email">
					{(_, props) => (
						<>
							<label for="email">_email:</label>
							<input id="email" type="email" {...props} />
						</>
					)}
				</Field>
			</div>
			<div class={styles.item}>
				<Field name="message">
					{(_, props) => (
						<>
							<label for="message">_message:</label>
							<textarea id="message" {...props} />
						</>
					)}
				</Field>
			</div>
		</Form>
	);
});
