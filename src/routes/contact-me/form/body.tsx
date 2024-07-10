import { component$, useContext } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

import { email, maxLength, minLength, required, useForm } from "@modular-forms/qwik";
import { Resend } from "resend";

import { EMAIL, NAME } from "~/constants/info";
import { STATUS } from "~/routes/contact-me/form";

import { SubmitButton } from "./submit-button";

import styles from "./body.module.css";

type Schema = {
	name: string;
	email: string;
	message: string;
};

const sendEmail$ = server$(async ({ name, email, message }: Schema) => {
	const resend = new Resend(process.env.RESEND_API_KEY);

	return await resend.emails.send({
		from: email,
		to: email,
		subject: `Hello, ${name}!`,
		text: message,
	});
});

/** @package */
export const Body = component$(() => {
	const [, { Form, Field }] = useForm<Schema>({
		loader: {
			value: {
				name: "",
				email: "",
				message: "",
			},
		},
	});

	const status = useContext(STATUS);

	return (
		<Form
			class={styles.form}
			onSubmit$={async (value) => {
				status.value.name = "pending";
				const response = await sendEmail$(value);

				if (response.error) status.value = { name: "fail", message: response.error.message };
				else status.value.name = "success";
			}}
		>
			<Field
				name="name"
				validate={[
					required<string>("Please enter you name."),
					minLength(2, "Your name must have 2 at least characters."),
					maxLength(50, "Your name must not exceed 50 characters."),
				]}
			>
				{(store, props) => (
					<div class={[styles.item, store.error && styles.error]}>
						<label for={store.name}>_{store.name}:</label>
						<input id={store.name} required disabled={status.value.name === "pending"} minLength={2} maxLength={50} placeholder={NAME} {...props} />
						<p>{store.error}</p>
					</div>
				)}
			</Field>
			<Field
				name="email"
				validate={[
					email("The email address is badly formatted."),
					required<string>("Please enter your email."),
					minLength(6, "Your name must have 6 at least characters."),
					maxLength(254, "Your name must not exceed 254 characters."),
				]}
			>
				{(store, props) => (
					<div class={[styles.item, store.error && styles.error]}>
						<label for={store.name}>_{store.name}:</label>
						<input id={store.name} type="email" required disabled={status.value.name === "pending"} min={6} maxLength={254} placeholder={EMAIL} {...props} />
						<p>{store.error}</p>
					</div>
				)}
			</Field>
			<Field
				name="message"
				validate={[
					required<string>("Please enter your message."),
					minLength(10, "Your message must have 10 at least characters."),
					maxLength(1000, "Your message must not exceed 1000 characters."),
				]}
			>
				{(store, props) => (
					<div class={[styles.item, store.error && styles.error]}>
						<label for={store.name}>_{store.name}:</label>
						<textarea
							id={store.name}
							required
							disabled={status.value.name === "pending"}
							rows={6}
							cols={9}
							maxLength={1000}
							placeholder={"Hey! I just checked your website and it looks awesome! Also, I read your articles and learned a few nice tips. Thanks!"}
							{...props}
						/>
						<p>{store.error}</p>
					</div>
				)}
			</Field>
			<div class={[styles.item, status.value.name === "fail" && styles.error]}>
				<SubmitButton />
				<p>{status.value.message}</p>
			</div>
		</Form>
	);
});
