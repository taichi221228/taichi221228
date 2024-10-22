/**
 * @private
 * @type {import("stylelint").Config}
 */
// HACK: Suppress TypeScript errors due to incompatibility between `eslint-plugin-import-access` and `tsc` when using `checkJS`.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
export default {
	plugins: ["stylelint-order"],
	rules: {
		"order/properties-order": [
			{
				/**
				 * Compose rules from other selectors in CSS Modules.
				 * @see https://github.com/css-modules/css-modules#composition
				 */
				properties: ["composes"],
			},
			{
				// Must be first (unless using the above).
				properties: ["all"],
			},
			{
				// Container.
				properties: ["container-type", "container-name"],
			},
			{
				// Position.
				properties: ["position", "inset", "inset-block", "inset-inline", "top", "right", "bottom", "left", "z-index"],
			},
			{
				// Display mode.
				properties: ["box-sizing", "display"],
			},
			{
				// Flexible boxes.
				properties: ["flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap"],
			},
			{
				// Grid layout.
				properties: [
					"grid",
					"grid-area",
					"grid-template",
					"grid-template-areas",
					"grid-template-rows",
					"grid-template-columns",
					"grid-row",
					"grid-row-start",
					"grid-row-end",
					"grid-column",
					"grid-column-start",
					"grid-column-end",
					"grid-auto-rows",
					"grid-auto-columns",
					"grid-auto-flow",
					"grid-gap",
					"grid-row-gap",
					"grid-column-gap",
				],
			},
			{
				// Gap.
				properties: ["gap", "row-gap", "column-gap"],
			},
			{
				// Layout alignment.
				properties: [
					"place-content",
					"place-items",
					"place-self",
					"align-content",
					"align-items",
					"align-self",
					"justify-content",
					"justify-items",
					"justify-self",
				],
			},
			{
				// Order.
				properties: ["order"],
			},
			{
				// Box model.
				properties: [
					"float",
					"inline-size",
					"min-inline-size",
					"max-inline-size",
					"width",
					"min-width",
					"max-width",
					"block-size",
					"min-block-size",
					"max-block-size",
					"height",
					"min-height",
					"max-height",
					"aspect-ratio",
					"padding",
					"padding-block",
					"padding-block-start",
					"padding-block-end",
					"padding-inline",
					"padding-inline-start",
					"padding-inline-end",
					"padding-top",
					"padding-right",
					"padding-bottom",
					"padding-left",
					"margin",
					"margin-block",
					"margin-block-start",
					"margin-block-end",
					"margin-inline",
					"margin-inline-start",
					"margin-inline-end",
					"margin-top",
					"margin-right",
					"margin-bottom",
					"margin-left",
					"overflow",
					"overflow-x",
					"overflow-y",
					"-webkit-overflow-scrolling",
					"-ms-overflow-x",
					"-ms-overflow-y",
					"-ms-overflow-style",
					"overscroll-behavior",
					"overscroll-behavior-x",
					"overscroll-behavior-y",
					"overscroll-behavior-inline",
					"overscroll-behavior-block",
					"clip",
					"clip-path",
					"clear",
				],
			},
			{
				// Typography.
				properties: [
					"font",
					"font-family",
					"font-size",
					"font-variation-settings",
					"font-style",
					"font-weight",
					"font-feature-settings",
					"font-optical-sizing",
					"font-kerning",
					"font-variant",
					"font-variant-ligatures",
					"font-variant-caps",
					"font-variant-alternates",
					"font-variant-numeric",
					"font-variant-east-asian",
					"font-variant-position",
					"font-size-adjust",
					"font-stretch",
					"font-effect",
					"font-emphasize",
					"font-emphasize-position",
					"font-emphasize-style",
					"-webkit-font-smoothing",
					"-moz-osx-font-smoothing",
					"font-smooth",
					"hyphens",
					"line-height",
					"color",
					"text-align",
					"text-align-last",
					"text-emphasis",
					"text-emphasis-color",
					"text-emphasis-style",
					"text-emphasis-position",
					"text-decoration",
					"text-decoration-line",
					"text-decoration-thickness",
					"text-decoration-style",
					"text-decoration-color",
					"text-underline-position",
					"text-underline-offset",
					"text-indent",
					"text-justify",
					"text-outline",
					"-ms-text-overflow",
					"text-overflow",
					"text-overflow-ellipsis",
					"text-overflow-mode",
					"text-shadow",
					"text-transform",
					"text-wrap",
					"-webkit-text-size-adjust",
					"-ms-text-size-adjust",
					"letter-spacing",
					"word-break",
					"word-spacing",
					"word-wrap", // Legacy name for `overflow-wrap`
					"overflow-wrap",
					"tab-size",
					"white-space",
					"vertical-align",

					"list-style",
					"list-style-position",
					"list-style-type",
					"list-style-image",

					"src",
					"font-display",
					"unicode-range",
					"size-adjust",
					"ascent-override",
					"descent-override",
					"line-gap-override",
				],
			},
			{
				// Accessibility & Interactions.
				properties: [
					"pointer-events",
					"-ms-touch-action",
					"touch-action",
					"cursor",
					"visibility",
					"zoom",
					"table-layout",
					"empty-cells",
					"caption-side",
					"border-spacing",
					"border-collapse",
					"content",
					"quotes",
					"counter-reset",
					"counter-increment",
					"resize",
					"user-select",
					"nav-index",
					"nav-up",
					"nav-right",
					"nav-down",
					"nav-left",
				],
			},
			{
				// Background & Borders.
				properties: [
					"background",
					"background-color",
					"background-image",
					"-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
					"filter:progid:DXImageTransform.Microsoft.gradient",
					"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
					"filter",
					"background-repeat",
					"background-attachment",
					"background-position",
					"background-position-x",
					"background-position-y",
					"background-clip",
					"background-origin",
					"background-size",
					"background-blend-mode",
					"isolation",
					"border",
					"border-color",
					"border-style",
					"border-width",
					"border-block",
					"border-block-start",
					"border-block-start-color",
					"border-block-start-style",
					"border-block-start-width",
					"border-block-end",
					"border-block-end-color",
					"border-block-end-style",
					"border-block-end-width",
					"border-inline",
					"border-inline-start",
					"border-inline-start-color",
					"border-inline-start-style",
					"border-inline-start-width",
					"border-inline-end",
					"border-inline-end-color",
					"border-inline-end-style",
					"border-inline-end-width",
					"border-top",
					"border-top-color",
					"border-top-style",
					"border-top-width",
					"border-right",
					"border-right-color",
					"border-right-style",
					"border-right-width",
					"border-bottom",
					"border-bottom-color",
					"border-bottom-style",
					"border-bottom-width",
					"border-left",
					"border-left-color",
					"border-left-style",
					"border-left-width",
					"border-radius",
					"border-start-start-radius",
					"border-start-end-radius",
					"border-end-start-radius",
					"border-end-end-radius",
					"border-top-left-radius",
					"border-top-right-radius",
					"border-bottom-right-radius",
					"border-bottom-left-radius",
					"border-image",
					"border-image-source",
					"border-image-slice",
					"border-image-width",
					"border-image-outset",
					"border-image-repeat",
					"outline",
					"outline-width",
					"outline-style",
					"outline-color",
					"outline-offset",
					"box-shadow",
					"mix-blend-mode",
					"filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
					"-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
					"opacity",
					"-ms-interpolation-mode",
				],
			},
			{
				// SVG Presentation Attributes.
				properties: [
					"alignment-baseline",
					"baseline-shift",
					"dominant-baseline",
					"text-anchor",
					"word-spacing",
					"writing-mode",

					"fill",
					"fill-opacity",
					"fill-rule",
					"stroke",
					"stroke-dasharray",
					"stroke-dashoffset",
					"stroke-linecap",
					"stroke-linejoin",
					"stroke-miterlimit",
					"stroke-opacity",
					"stroke-width",

					"color-interpolation",
					"color-interpolation-filters",
					"color-profile",
					"color-rendering",
					"flood-color",
					"flood-opacity",
					"image-rendering",
					"lighting-color",
					"marker-start",
					"marker-mid",
					"marker-end",
					"mask",
					"shape-rendering",
					"stop-color",
					"stop-opacity",
				],
			},
			{
				// Transitions & Animation.
				properties: [
					"transition",
					"transition-delay",
					"transition-timing-function",
					"transition-duration",
					"transition-property",
					"transform",
					"transform-origin",
					"translate",
					"rotate",
					"scale",
					"animation",
					"animation-name",
					"animation-duration",
					"animation-play-state",
					"animation-timing-function",
					"animation-delay",
					"animation-iteration-count",
					"animation-direction",
				],
			},
		],
	},
};
