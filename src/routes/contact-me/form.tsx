import { component$, createContextId, type Signal, useContextProvider, useSignal } from "@builder.io/qwik";

import { SITENAME } from "~/constants/info";

import { Body } from "./form/body";

/** @package */
export const STATUS = createContextId<Signal<"initial" | "pending" | "success" | "fail">>([SITENAME, "contact-me", "status"].join("."));

/** @package */
export const Form = component$(() => {
	const status = useSignal("initial");

	useContextProvider(STATUS, status);

	return status.value === "initial" && <Body />;
});
