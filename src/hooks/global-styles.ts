import { useStyles$ } from "@builder.io/qwik";

import font from "@fontsource/fira-code?inline";
import reset from "@unocss/reset/tailwind.css?inline";
import icon from "remixicon/fonts/remixicon.css?inline";

import "~/global.css";
import "~/styles/theme/gruvbox.css";

export const useGlobalStyles = () => {
	useStyles$(reset);
	useStyles$(font);
	useStyles$(icon);
};
