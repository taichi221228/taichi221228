import { component$, useContext } from "@builder.io/qwik";

import { Button } from "~/components/interface/button";
import { RefreshIcon } from "~/components/interface/icons";

import { STATUS } from "../form";

/** @package */
export const SubmitButton = component$(() => {
	const status = useContext(STATUS);

	return (
		<Button type="submit" disabled={status.value.name === "pending"}>
			{status.value.name === "pending" ? (
				<>
					<RefreshIcon isAnimating /> submitting...
				</>
			) : (
				"submit-message"
			)}
		</Button>
	);
});
