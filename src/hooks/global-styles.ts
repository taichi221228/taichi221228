import { useStyles$ } from "@builder.io/qwik";

import font from "@fontsource/fira-code?inline";
import reset from "@unocss/reset/tailwind.css?inline";
import icon from "remixicon/fonts/remixicon.css?inline";

import "~/global.css";
import "~/styles/theme/gruvbox.css";
import "~/styles/token/border.css";
import "~/styles/token/border-radius.css";
import "~/styles/token/color.css";
import "~/styles/token/font.css";
import "~/styles/token/icon.css";
import "~/styles/token/size.css";
import "~/styles/token/spacing.css";

export const useGlobalStyles = () => {
	useStyles$(reset);
	useStyles$(font);
	useStyles$(icon);
};
