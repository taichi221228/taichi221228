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
					{(store, props) => (
						<>
							<label for={store.name}>_{store.name}:</label>
							<input id={store.name} {...props} />
						</>
					)}
				</Field>
			</div>
			<div class={styles.item}>
				<Field name="email">
					{(store, props) => (
						<>
							<label for={store.name}>_{store.name}:</label>
							<input id={store.name} type="email" {...props} />
						</>
					)}
				</Field>
			</div>
			<div class={styles.item}>
				<Field name="message">
					{(store, props) => (
						<>
							<label for={store.name}>_{store.name}:</label>
							<textarea id={store.name} rows={6} {...props} />
						</>
					)}
				</Field>
			</div>
		</Form>
	);
});
