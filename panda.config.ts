import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	jsxFramework: "qwik",
	preflight: true,
	include: ["./src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: "src/styled-system",
});
