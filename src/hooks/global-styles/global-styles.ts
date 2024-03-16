import { useStyles$ } from "@builder.io/qwik";

import fontStyles from "@fontsource/fira-code?inline";
import resetStyles from "@unocss/reset/tailwind.css?inline";
import iconStyles from "remixicon/fonts/remixicon.css?inline";

export const useGlobalStyles = () => {
	useStyles$(resetStyles);
	useStyles$(fontStyles);
	useStyles$(iconStyles);
};
