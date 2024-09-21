import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	jsxFramework: "qwik",
	preflight: true,
	include: ["./src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
	exclude: [],
	theme: {
		tokens: {
			colors: {
				base: {
					100: { value: "#fdf6e3" },
					90: { value: "#eee8d5" },
					70: { value: "#93a1a1" },
					60: { value: "#839496" },
					40: { value: "#657b83" },
					30: { value: "#586e75" },
					10: { value: "#073642" },
					0: { value: "#002b36" },
				},
			},
		},
		extend: {},
	},
	outdir: "src/styled-system",
});
