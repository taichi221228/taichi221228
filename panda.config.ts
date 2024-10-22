import { defineConfig } from "@pandacss/dev";

import { tokens, semanticTokens } from "./panda.config.tokens";

/** @private */
export default defineConfig({
	jsxFramework: "qwik",
	preflight: true,
	include: ["./src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
	exclude: [],
	theme: { tokens, semanticTokens },
	outdir: "src/styled-system",
});
