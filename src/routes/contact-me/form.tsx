import { component$, createContextId, type Signal, useContextProvider, useSignal } from "@builder.io/qwik";

import { SITENAME } from "~/constants/info";
import { Thanks } from "~/routes/contact-me/form/thanks";

import { Body } from "./form/body";

import styles from "./form.module.css";

type Status = "initial" | "pending" | "success" | "fail";

/** @package */
export const STATUS = createContextId<Signal<Status>>([SITENAME, "contact-me", "status"].join("."));

/** @package */
export const Form = component$(() => {
	const status = useSignal<Status>("initial");

	useContextProvider(STATUS, status);

	return <div class={styles.container}>{status.value === "success" ? <Thanks /> : <Body />}</div>;
});
