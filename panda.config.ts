import { defineConfig } from "@pandacss/dev";

import { tokens } from "./panda.config.tokens";

export default defineConfig({
	jsxFramework: "qwik",
	preflight: true,
	include: ["./src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
	exclude: [],
	theme: { tokens },
	outdir: "src/styled-system",
});
