import { $, component$ } from "@builder.io/qwik";

import { useForm } from "@modular-forms/qwik";

import { Button } from "~/components/interface/button";
import { EMAIL, NAME } from "~/constants/info";

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

	const handleSubmit$ = $(() => {
		console.log("submit");
	});

	return (
		<Form class={styles.form} onSubmit$={handleSubmit$}>
			<div class={styles.item}>
				<Field name="name">
					{(store, props) => (
						<>
							<label for={store.name}>_{store.name}:</label>
							<input id={store.name} placeholder={NAME} {...props} />
						</>
					)}
				</Field>
			</div>
			<div class={styles.item}>
				<Field name="email">
					{(store, props) => (
						<>
							<label for={store.name}>_{store.name}:</label>
							<input id={store.name} type="email" placeholder={EMAIL} {...props} />
						</>
					)}
				</Field>
			</div>
			<div class={styles.item}>
				<Field name="message">
					{(store, props) => (
						<>
							<label for={store.name}>_{store.name}:</label>
							<textarea
								id={store.name}
								rows={6}
								cols={10}
								maxLength={1000}
								placeholder={"Hey! I just checked your website and it looks awesome! Also, I read your articles and learned a few nice tips. Thanks!"}
								{...props}
							/>
						</>
					)}
				</Field>
			</div>
			<div class={styles.item}>
				<Button type="submit">submit-message</Button>
			</div>
		</Form>
	);
});
