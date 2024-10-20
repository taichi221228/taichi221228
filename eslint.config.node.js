import globals from "globals";

/**
 * @package
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export const nodeConfigs = [
	{
		files: [
			".scaffdog/config.js",
			"eslint.config.js",
			"eslint.config.*.js",
			"panda.config.ts",
			"panda.config.*.ts",
			"postcss.config.js",
			"prettier.config.js",
			"stylelint.config.js",
			"stylelint.config.*.js",
			"textlint.config.js",
			"vite.config.ts",
		],
		languageOptions: { globals: { ...globals.node } },
	},
];
