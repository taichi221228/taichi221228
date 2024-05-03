import { component$, Slot } from "@builder.io/qwik";

import { Footer } from "~/components/interface/footer";
import { Header } from "~/components/interface/header";
import { useGlobalStyles } from "~/hooks/global-styles";
import { useSecretLog } from "~/hooks/secret-log";

/** @private */
export default component$(() => {
	useGlobalStyles();
	useSecretLog();

	return (
		<>
			<Header />
			<main>
				<Slot />
			</main>
			<Footer />
		</>
	);
});
