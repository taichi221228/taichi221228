import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";

import { RouterHead } from "~/components/function/router-head";
import { useGlobalStyles } from "~/hooks/global-styles";
import { useSecretLog } from "~/hooks/secret-log";

import "./global.css";

/** @package */
export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */

	useGlobalStyles();
	useSecretLog();

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />
				<RouterHead />
				<ServiceWorkerRegister />
			</head>
			<body lang="en">
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
