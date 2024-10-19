/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ["plugin:import/recommended"],
	plugins: ["import", "import-access"],
	rules: {
		"import/order": [
			"error",
			{
				alphabetize: {
					order: "asc",
				},
				groups: ["builtin", "external", "internal", "parent", "sibling"],
				"newlines-between": "always",
				pathGroups: [
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
	settings: {
		"import/resolver": { typescript: true },
	},
};
