import { component$, createContextId, type Signal, useContextProvider, useSignal, useStore } from "@builder.io/qwik";

import { SITENAME } from "~/constants/info";
import { Thanks } from "~/routes/contact-me/form/thanks";

import styles from "./form.module.css";
import { Body } from "./form/body";

type Status = { value: { name: "initial" | "pending" | "success"; message?: never } } | { value: { name: "fail"; message: string } };

/** @package */
export const STATUS = createContextId<Status>([SITENAME, "contact-me", "status"].join("."));

/** @package */
export const Form = component$(() => {
	const status = useStore<Status>({ value: { name: "initial" } });

	useContextProvider(STATUS, status);

	return <div class={styles.container}>{status.value.name === "success" ? <Thanks /> : <Body />}</div>;
});
