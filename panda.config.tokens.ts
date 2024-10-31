import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

/** @package */
export const tokens = defineTokens({
	colors: {
		slate: {
			45: { value: "#586e75" },
			50: { value: "#657b83" },
			60: { value: "#839496" },
			65: { value: "#93a1a1" },
		},
		abyss: {
			12: { value: "#002530" },
			15: { value: "#002b36" },
			20: { value: "#073642" },
		},
		ivory: {
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
		blue: {
			51: { value: "#007ec4" },
			56: { value: "#268bd2" },
			61: { value: "#3c98e0" },
		},
		cyan: {
			55: { value: "#11948b" },
			60: { value: "#2aa198" },
			65: { value: "#3cafa5" },
		},
		green: {
			55: { value: "#778c00" },
			60: { value: "#859900" },
			65: { value: "#93a61a" },
		},
	},
	fonts: {
		firaCode: { value: ["Fira Code Retina", "Fira Code", "Fira Code Medium", "Fira Code Regular", "Fira Code Light"] },
	},
	borderWidths: {
		medium: { value: "1px" },
		thick: { value: "3px" },
	},
});

/** @package */
export const semanticTokens = defineSemanticTokens({
	colors: {
		background: {
			DEFAULT: { value: "{colors.ivory.97}" },
			primary: { value: "{colors.ivory.92}" },
			secondary: { value: "{colors.ivory.100}" },
		},
		foreground: {
			DEFAULT: { value: "{colors.slate.60}" },
			primary: { value: "{colors.slate.65}" },
		},
		status: {
			danger: { value: "{colors.red.49}" },
			warning: { value: "{colors.yellow.60}" },
			success: { value: "{colors.green.60}" },
		},
		accent: { value: "{colors.green.60}" },
	},
	fonts: {
		primary: { value: ["{fonts.firaCode}", "{fonts.fallback}"] },
		fallback: { value: ["monospace", "Helvetica Neue", "arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "meiryo", "sans-serif"] },
	},
	fontSizes: {
		annotation: { value: "12px" },
		code: { value: "14px" },
		label: { value: "16px" },
		body: { value: "18px" },
		subheadline: { value: "32px" },
		headline: { value: "62px" },
	},
	radii: {
		small: { value: "4px" },
		medium: { value: "8px" },
		full: { value: `${Number.MAX_SAFE_INTEGER}px` },
	},
	borders: {
		DEFAULT: {
			value: {
				width: "{borderWidths.medium}",
				color: "{colors.background.primary}",
				style: "solid",
			},
		},
		danger: {
			value: {
				width: "{borderWidths.medium}",
				color: "{colors.status.danger}",
				style: "solid",
			},
		},
		accent: {
			value: {
				width: "{borderWidths.thick}",
				color: "{colors.accent}",
				style: "solid",
			},
		},
	},
});
