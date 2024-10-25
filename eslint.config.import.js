// TODO: Type definition is not found
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
import importPlugin from "eslint-plugin-import";
import importAccessPlugin from "eslint-plugin-import-access/flat-config";

/**
 * @package
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export const importConfigs = [
	// XXX: This is not type-compatible with `FlatConfig`.
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	importPlugin.flatConfigs.recommended,
	// XXX: This is not type-compatible with `FlatConfig`.
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	importPlugin.flatConfigs.typescript,
	{
		settings: {
			"import/resolver": {
				node: { extensions: [".ts", ".tsx"] },
				typescript: { alwaysTryTypes: true },
			},
		},
		rules: {
			"import/order": [
				"error",
				{
					alphabetize: { order: "asc" },
					groups: ["builtin", "external", "internal", "parent", "sibling"],
					"newlines-between": "always",
					pathGroups: [
						{
							group: "builtin",
							pattern: "@builder.io/vite?(-*){,/**}",
							position: "after",
						},
						{
							group: "builtin",
							pattern: "vite?(-*){,/**}",
							position: "after",
						},
						{
							group: "builtin",
							pattern: "@builder.io/qwik?(-city){,/**}",
							position: "after",
						},
						{
							group: "builtin",
							pattern: "@qwik-*",
							position: "after",
						},
						{
							group: "external",
							pattern: "styled-system/**",
							position: "before",
						},
						{
							group: "internal",
							pattern: "~/constants/**",
							position: "before",
						},
						{
							group: "internal",
							pattern: "~/routes/**",
							position: "before",
						},
						{
							group: "internal",
							pattern: "~/components/**",
							position: "before",
						},
						{
							group: "internal",
							pattern: "~/hooks/**",
							position: "before",
						},
						{ group: "internal", pattern: "~/**" },
						{
							group: "sibling",
							pattern: "./*.module.css",
							position: "before",
						},
						{ group: "parent", pattern: "../**" },
						{ group: "sibling", pattern: "./**" },
					],
					distinctGroup: false,
					pathGroupsExcludedImportTypes: [],
				},
			],
		},
	},
	{
		plugins: { "import-access": importAccessPlugin },
		rules: {
			"import-access/jsdoc": [
				"error",
				{
					indexLoophole: true,
					filenameLoophole: true,
					defaultImportability: "public",
					treatSelfReferenceAs: "external",
				},
			],
		},
	},
];
