import { component$, Slot } from "@builder.io/qwik";

import { Footer } from "~/components/interface/footer/footer";
import { Header } from "~/components/interface/header/header";
import { useGlobalStyles } from "~/hooks/global-styles/global-styles";

/** @private */
export default component$(() => {
	useGlobalStyles();

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
