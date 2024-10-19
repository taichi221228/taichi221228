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
				groups: ["builtin", "external", "internal", "index", "parent", "sibling"],
				"newlines-between": "always",
				pathGroups: [
					{
						group: "builtin",
						pattern: "@builder.io/qwik?(-city){,/**}",
						position: "after",
					},
					{
						group: "builtin",
						pattern: "@qwik?(-city){,/**}",
						position: "after",
					},
					{
						group: "internal",
						pattern: "~/constants",
					},
					{
						group: "internal",
						pattern: "~/routes",
					},
					{
						group: "internal",
						pattern: "~/components",
					},
					{
						group: "internal",
						pattern: "~/hooks",
					},
					{
						group: "sibling",
						pattern: "./*.module.css",
						position: "before",
					},
					{
						group: "sibling",
						pattern: "./**",
					},
					{
						group: "parent",
						pattern: "../**",
					},
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
		"import/resolver": {
			typescript: true,
		},
	},
};
