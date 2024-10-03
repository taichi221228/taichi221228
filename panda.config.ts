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
					12: { value: "#002530" },
					15: { value: "#002b36" },
					20: { value: "#073642" },
					45: { value: "#586e75" },
					50: { value: "#657b83" },
					60: { value: "#839496" },
					65: { value: "#93a1a1" },
					92: { value: "#eee8d5" },
					97: { value: "#fdf6e3" },
					100: { value: "#fffeec" },
				},
				yellow: {
					55: { value: "#a67c00" },
					60: { value: "#b58900" },
					65: { value: "#c49619" },
				},
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
