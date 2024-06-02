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
		<div class={styles.container}>
			<Form>
				<Field name="name">{(_, props) => <input {...props} />}</Field>
				<Field name="email">{(_, props) => <input type="email" {...props} />}</Field>
				<Field name="message">{(_, props) => <textarea {...props} />}</Field>
			</Form>
		</div>
	);
});
