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
						<label>
							_name:
							<br />
							<input {...props} />
						</label>
					)}
				</Field>
			</div>
			<div class={styles.item}>
				<Field name="email">
					{(_, props) => (
						<label>
							_email:
							<br />
							<input type="email" {...props} />
						</label>
					)}
				</Field>
			</div>
			<div class={styles.item}>
				<Field name="message">
					{(_, props) => (
						<label>
							_message:
							<br />
							<textarea {...props} />
						</label>
					)}
				</Field>
			</div>
		</Form>
	);
});
