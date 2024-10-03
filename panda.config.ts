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
				orange: {
					44: { value: "#bb3e06" },
					49: { value: "#cb4b16" },
					54: { value: "#db5823" },
				},
				red: {
					44: { value: "#cc1f24" },
					49: { value: "#dc322f" },
					54: { value: "#ec423a" },
				},
				magenta: {
					45: { value: "#c42475" },
					50: { value: "#d33682" },
					55: { value: "#e2468f" },
				},
				violet: {
					46: { value: "#5e65b6" },
					51: { value: "#6c71c4" },
					56: { value: "#7a7ed2" },
				},
				blue: { value: "#268bd2" },
				cyan: { value: "#2aa198" },
				green: { value: "#859900" },
			},
		},
		extend: {},
	},
	outdir: "src/styled-system",
});
