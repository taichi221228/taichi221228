import { component$, Slot } from "@builder.io/qwik";

import { Footer } from "~/components/interface/footer";
import { Header } from "~/components/interface/header";

/** @private */
export default component$(() => {
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
