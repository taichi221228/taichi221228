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
					0: { value: "#fdf6e3" },
					10: { value: "#eee8d5" },
					30: { value: "#93a1a1" },
					40: { value: "#839496" },
					60: { value: "#657b83" },
					70: { value: "#586e75" },
					90: { value: "#073642" },
					100: { value: "#002b36" },
				},
				yellow: { value: "#b58900" },
				orange: { value: "#cb4b16" },
				red: { value: "#dc322f" },
				magenta: { value: "#d33682" },
				violet: { value: "#6c71c4" },
				blue: { value: "#268bd2" },
				cyan: { value: "#2aa198" },
				green: { value: "#859900" },
			},
		},
		extend: {},
	},
	outdir: "src/styled-system",
});
