import { component$, Slot } from "@builder.io/qwik";

import { Footer } from "~/components/ui/footer/footer";
import { Header } from "~/components/ui/header/header";
import { useGlobalStyles } from "~/hooks/global-styles/global-styles";

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
